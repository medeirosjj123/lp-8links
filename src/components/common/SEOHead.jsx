// SEOHead.jsx
// -----------------------------------------------------------------------------
// Componente para SEO e meta tags dinâmicas
// -----------------------------------------------------------------------------

import { Helmet } from 'react-helmet-async';

const SEOHead = ({
    title = '8Links - Backlinks com Inteligência Artificial',
    description = 'Plataforma de SEO com IA que automatiza a criação de backlinks de qualidade. Aumente seu tráfego orgânico com nossa rede de mais de 1000 sites parceiros.',
    keywords = 'backlinks, SEO, inteligência artificial, tráfego orgânico, link building, marketing digital, posicionamento google',
    image = '/og-image.jpg',
    url = '',
    type = 'website',
    siteName = '8Links',
    locale = 'pt_BR'
}) => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'https://8links.com.br';
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
    const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="8Links" />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:creator" content="@8links" />

            {/* Additional SEO */}
            <meta name="theme-color" content="#FF5C35" />
            <meta name="msapplication-TileColor" content="#FF5C35" />
            <meta name="application-name" content="8Links" />
            
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "8Links",
                    "description": description,
                    "url": baseUrl,
                    "logo": `${baseUrl}/logo.png`,
                    "sameAs": [
                        "https://www.facebook.com/8links",
                        "https://www.linkedin.com/company/8links",
                        "https://twitter.com/8links"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+55-11-99999-9999",
                        "contactType": "customer service",
                        "availableLanguage": "Portuguese"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;