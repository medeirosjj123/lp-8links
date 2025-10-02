// GoogleAnalytics.jsx
// -----------------------------------------------------------------------------
// Componente para Google Analytics 4 e tracking de eventos
// -----------------------------------------------------------------------------

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
    const location = useLocation();
    const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

    useEffect(() => {
        // Só carrega se GA_TRACKING_ID estiver definido
        if (!GA_TRACKING_ID) {
            console.log('🔍 Google Analytics não configurado - adicione VITE_GA_TRACKING_ID');
            return;
        }
        
        // Log para debug
        console.log('🔍 Carregando Google Analytics com ID:', GA_TRACKING_ID);

        // Carrega o script do Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);

        // Inicializa o Google Analytics
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            
            gtag('js', new Date());
            gtag('config', GA_TRACKING_ID, {
                page_title: document.title,
                page_location: window.location.href,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
            });

            // Torna gtag disponível globalmente
            window.gtag = gtag;
            
            console.log('✅ Google Analytics carregado:', GA_TRACKING_ID);
        };

        return () => {
            // Cleanup ao desmontar
            document.head.removeChild(script);
        };
    }, [GA_TRACKING_ID]);

    // Tracking de mudanças de página
    useEffect(() => {
        if (window.gtag && GA_TRACKING_ID) {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: location.pathname + location.search,
                page_title: document.title
            });
            
            console.log('📊 Página visualizada:', location.pathname);
        }
    }, [location, GA_TRACKING_ID]);

    return null;
};

// Funções utilitárias para tracking de eventos
export const trackEvent = (eventName, eventParams = {}) => {
    if (window.gtag && import.meta.env.VITE_GA_TRACKING_ID) {
        window.gtag('event', eventName, {
            ...eventParams,
            timestamp: new Date().toISOString()
        });
        
        console.log('📈 Evento rastreado:', eventName, eventParams);
    }
};

// Eventos específicos para conversão
export const trackCheckoutStarted = (planName, planValue) => {
    trackEvent('begin_checkout', {
        currency: 'BRL',
        value: planValue,
        items: [{
            item_id: planName,
            item_name: `Plano ${planName}`,
            category: 'subscription',
            quantity: 1,
            price: planValue
        }]
    });
};

export const trackPurchase = (sessionId, planName, planValue, customerEmail) => {
    trackEvent('purchase', {
        transaction_id: sessionId,
        currency: 'BRL',
        value: planValue,
        customer_email: customerEmail,
        items: [{
            item_id: planName,
            item_name: `Plano ${planName}`,
            category: 'subscription',
            quantity: 1,
            price: planValue
        }]
    });
};

export const trackLeadGeneration = (source = 'landing_page') => {
    trackEvent('generate_lead', {
        source: source,
        event_category: 'engagement',
        event_label: 'lead_form_submission'
    });
};

export const trackButtonClick = (buttonName, section = '') => {
    trackEvent('click', {
        event_category: 'button',
        event_label: buttonName,
        section: section
    });
};

export default GoogleAnalytics;