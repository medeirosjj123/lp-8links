// UnifiedCheckout.jsx
// -----------------------------------------------------------------------------
// Componente para checkout unificado via Stripe com rastreamento Cross-Domain do FB
// -----------------------------------------------------------------------------

import { useState } from 'react';

const UnifiedCheckout = ({ plan, className = '', children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Mapear nomes em português para chaves do backend
    const planMapping = {
        'Empreendedor': 'starter',
        'Profissional': 'pro',
        'Agência': 'agency'
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const mappedPlan = planMapping[plan] || plan.toLowerCase();
        let destinationUrl = '';

        try {
            const checkoutFunctionUrl = 'https://uorwocetqyjkpioimrjk.supabase.co/functions/v1/create-checkout-session';
            const checkoutAppUrl = 'https://app.8links.com.br/checkout';

            const response = await fetch(checkoutFunctionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                    planId: mappedPlan,
                    isTest: false,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao criar a sessão de checkout.');
            }

            const { clientSecret } = await response.json();
            if (!clientSecret) {
                throw new Error('Client secret não recebido.');
            }

            destinationUrl = `${checkoutAppUrl}?client_secret=${clientSecret}`;
            
            // ** LÓGICA DE REDIRECIONAMENTO DEFINITIVA **
            // Verifica se o FB Pixel e seu módulo 'linker' estão prontos
            if (typeof window.fbq === 'function' && window.fbq.linker) {
              // O linker do FB apenas decora a URL, nós controlamos a navegação.
              const decoratedUrl = window.fbq.linker(destinationUrl);
              window.location.href = decoratedUrl;
            } else {
              // Se não estiver pronto, nós navegamos diretamente. O redirecionamento é garantido.
              window.location.href = destinationUrl;
            }

        } catch (err) {
            console.error('Erro no processo de checkout:', err);
            setError(`Ocorreu um erro: ${err.message}`);
            setLoading(false);

            // Se a falha ocorreu depois de obter a URL de destino, ainda tenta redirecionar
            if (destinationUrl) {
                window.location.href = destinationUrl;
            }
        }
    };

    return (
        <div className={`unified-checkout ${className}`}>
            {error && (
                <div 
                    className="alert alert-danger mb-3" 
                    style={{ fontSize: '14px', color: 'red', marginTop: '10px', textAlign: 'center' }}
                >
                    {error}
                </div>
            )}
            
            <button
                onClick={handleCheckout}
                disabled={loading}
                className={`cta-button buy-button ${className}`}
                data-plan-id={planMapping[plan] || plan.toLowerCase()}
                style={{
                    background: loading ? '#ccc' : '#FF5C35',
                    color: 'white',
                    borderRadius: '12px',
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    border: 'none',
                    padding: '24px 48px',
                    fontSize: '18px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    width: 'auto',
                    textTransform: 'uppercase',
                    opacity: loading ? 0.7 : 1
                }}
            >
                {loading ? 'Aguarde...' : (children || 'Quero Mais Tráfego')}
            </button>
        </div>
    );
};

export default UnifiedCheckout;