// UnifiedCheckout.jsx
// -----------------------------------------------------------------------------
// Componente para checkout unificado via Stripe
// Substitui links da Kiwify e WooCommerce
// -----------------------------------------------------------------------------

import { useState } from 'react';
import { trackCheckoutStarted, trackButtonClick } from '../common/GoogleAnalytics';
import { trackFBInitiateCheckout } from '../common/FacebookPixel';

const UnifiedCheckout = ({ plan, frequency = 'monthly', className = '', children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Mapear nomes em português para chaves do backend
    const planMapping = {
        'Empreendedor': 'starter',
        'Profissional': 'pro', 
        'Agência': 'club'
    };

    // Pegar referral code da URL ou localStorage
    const getReferralCode = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const refCode = urlParams.get('ref') || urlParams.get('referral');
        
        if (refCode) {
            // Salvar no localStorage para uso posterior
            localStorage.setItem('refgrow_referral', refCode);
            return refCode;
        }
        
        // Verificar localStorage
        return localStorage.getItem('refgrow_referral');
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Valores dos planos para tracking
        const planValues = {
            'starter': frequency === 'yearly' ? 997 : 97,
            'pro': frequency === 'yearly' ? 1997 : 197,
            'club': frequency === 'yearly' ? 3997 : 397
        };
        
        const mappedPlan = planMapping[plan] || plan.toLowerCase();
        const planValue = planValues[mappedPlan] || 0;

        // Tracking de início do checkout
        trackCheckoutStarted(mappedPlan, planValue);
        trackFBInitiateCheckout(planValue);
        trackButtonClick('checkout_button', `plan_${mappedPlan}_${frequency}`);

        // Se for plano anual, redirecionar direto para Kiwify
        if (frequency === 'yearly') {
            const kiwifyLinks = {
                'starter': 'https://pay.kiwify.com.br/VhxPvCY',
                'pro': 'https://pay.kiwify.com.br/8l9dl9p',
                'club': 'https://pay.kiwify.com.br/YISbb4U'
            };
            
            const kiwifyUrl = kiwifyLinks[mappedPlan];
            if (kiwifyUrl) {
                // Adicionar referral code na URL do Kiwify se existir
                const referralCode = getReferralCode();
                const finalUrl = referralCode ? `${kiwifyUrl}?ref=${referralCode}` : kiwifyUrl;
                window.location.href = finalUrl;
                return;
            }
        }

        try {
            // URL do backend baseada no ambiente (apenas para planos mensais)
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 
                (import.meta.env.VITE_ENVIRONMENT === 'production' 
                    ? 'https://app.8links.com.br' 
                    : 'http://127.0.0.1:5001');
            const mappedPlan = planMapping[plan] || plan.toLowerCase();
            const fullUrl = `${backendUrl}/api/checkout/create-session`;
            
            console.log('🔍 Debug checkout:', { 
                backendUrl, 
                fullUrl,
                originalPlan: plan, 
                mappedPlan, 
                frequency,
                env: import.meta.env.VITE_BACKEND_URL
            });
            
            console.log('🌐 Fazendo fetch para:', fullUrl);
            
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plan: mappedPlan,
                    frequency: frequency,
                    successUrl: `${import.meta.env.VITE_SITE_URL || window.location.origin}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
                    cancelUrl: `${import.meta.env.VITE_SITE_URL || window.location.origin}/pricing`,
                    referralCode: getReferralCode()
                })
            });

            console.log('📡 Response status:', response.status, response.statusText);
            const data = await response.json();

            if (data.success) {
                // Redirecionar para o checkout do Stripe
                window.location.href = data.checkoutUrl;
            } else {
                setError(data.error || 'Erro ao processar checkout');
            }

        } catch (err) {
            console.error('❌ Erro detalhado no checkout:', {
                error: err,
                message: err.message,
                name: err.name,
                stack: err.stack,
                cause: err.cause
            });
            
            if (err.name === 'TypeError' && err.message.includes('Failed to fetch')) {
                setError('Erro de conexão com o servidor. Tente novamente em alguns instantes.');
            } else {
                setError('Erro de conexão. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`unified-checkout ${className}`}>
            {error && (
                <div className="alert alert-danger mb-3">
                    {error}
                </div>
            )}
            
            <button
                onClick={handleCheckout}
                disabled={loading}
                className="cta-button"
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
                {loading ? 'Processando...' : (children || 'Quero Mais Tráfego')}
            </button>
        </div>
    );
};

export default UnifiedCheckout;