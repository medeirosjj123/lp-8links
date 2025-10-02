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

        try {
            let checkoutUrl = '';
            const referralCode = getReferralCode();

            if (frequency === 'yearly') {
                // Planos anuais - Kiwify
                const kiwifyLinks = {
                    'starter': 'https://pay.kiwify.com.br/VhxPvCY',
                    'pro': 'https://pay.kiwify.com.br/8l9dl9p',
                    'club': 'https://pay.kiwify.com.br/YISbb4U'
                };
                
                checkoutUrl = kiwifyLinks[mappedPlan];
                if (checkoutUrl && referralCode) {
                    checkoutUrl = `${checkoutUrl}?ref=${referralCode}`;
                }
            } else {
                // Planos mensais - Stripe
                const stripeLinks = {
                    'starter': 'https://buy.stripe.com/aFaeVd2c89Mp5Wr2Z22Ji00',
                    'pro': 'https://buy.stripe.com/aFa6oH6so3o1esXfLO2Ji01',
                    'club': 'https://buy.stripe.com/7sYaEXcQM2jXfx1dDG2Ji02'
                };
                
                checkoutUrl = stripeLinks[mappedPlan];
                // Note: Stripe Payment Links handle referrals differently
                // You may need to configure referral tracking in Stripe dashboard
            }

            if (checkoutUrl) {
                console.log('🔗 Redirecionando para checkout:', { 
                    plan: mappedPlan, 
                    frequency, 
                    url: checkoutUrl 
                });
                window.location.href = checkoutUrl;
            } else {
                setError('Plano não encontrado. Tente novamente.');
            }

        } catch (err) {
            console.error('❌ Erro no checkout:', err);
            setError('Erro ao processar checkout. Tente novamente.');
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