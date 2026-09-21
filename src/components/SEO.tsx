import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../lib/constants';

export const SEO: React.FC = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WC GUINCHO",
    "url": SITE_URL,
    "telephone": "+5522999577373",
    "areaServed": [
      "Rio das Ostras",
      "Macaé",
      "Cabo Frio",
      "Unamar",
      "Casimiro de Abreu",
      "Barra de São João"
    ]
  };

  return (
    <Helmet>
      <title>WC GUINCHO | Reboque em Rio das Ostras, Macaé, Cabo Frio e Região</title>
      <meta name="description" content="Precisa de reboque em Rio das Ostras, Macaé, Cabo Frio, Unamar ou Casimiro de Abreu? Fale com a WC GUINCHO pelo WhatsApp e consulte atendimento para sua localização." />
      
      <link rel="canonical" href={`${SITE_URL}/`} />

      <meta property="og:title" content="WC GUINCHO | Reboque em Rio das Ostras e Região" />
      <meta property="og:description" content="Precisa de reboque? Entre em contato com a WC GUINCHO e consulte atendimento em Rio das Ostras, Macaé, Cabo Frio e região." />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} /> */}

      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};
