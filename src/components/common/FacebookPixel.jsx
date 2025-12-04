// FacebookPixel.jsx
// -----------------------------------------------------------------------------
// Componente para Facebook Pixel e tracking de conversões
// -----------------------------------------------------------------------------

import { useEffect } from 'react';

const FacebookPixel = () => {
    const PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

    useEffect(() => {
        // Só carrega em produção ou se PIXEL_ID estiver definido
        if (!PIXEL_ID || import.meta.env.VITE_ENVIRONMENT === 'development') {
            console.log('🔍 Facebook Pixel desabilitado em desenvolvimento');
            return;
        }

        // Inicializa o Facebook Pixel
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        window.fbq('set', 'autoConfig', false, PIXEL_ID);
        window.fbq('init', PIXEL_ID);
        window.fbq('track', 'PageView');

        console.log('✅ Facebook Pixel carregado:', PIXEL_ID);
    }, [PIXEL_ID]);

    return (
        <noscript>
            <img 
                height="1" 
                width="1" 
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>
    );
};

// Funções utilitárias para tracking do Facebook
export const trackFBEvent = (eventName, eventParams = {}) => {
    if (window.fbq && import.meta.env.VITE_FACEBOOK_PIXEL_ID) {
        window.fbq('track', eventName, eventParams);
        console.log('📘 Facebook evento rastreado:', eventName, eventParams);
    }
};

export const trackFBPurchase = (value, currency = 'BRL') => {
    trackFBEvent('Purchase', {
        value: value,
        currency: currency
    });
};

export const trackFBLead = () => {
    trackFBEvent('Lead');
};

export const trackFBInitiateCheckout = (value, currency = 'BRL') => {
    trackFBEvent('InitiateCheckout', {
        value: value,
        currency: currency
    });
};

export default FacebookPixel;