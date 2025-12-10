import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  keywords = "the it talent, react, seo, web development",
  canonicalUrl,
  ogImage = "/default-og-image.jpg"
}) {

  const fullTitle = title ? `${title} | The IT Talent` : 'The IT Talent - Home';

  const defaultDescription = "Staffing and ";


  return (
    <Helmet>
      {/*  Core SEO */}

      {/* 1. Title tag */}
      <title>{fullTitle}</title>

      {/* 2. Description tag */}
      <meta name="description" content={description || defaultDescription} />

      {/* 3. Keywords tag */}
      <meta name="keywords" content={keywords} />

      {/* 4. Canonical URL  */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* 5. Viewport tag (Responsive Design) */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* 🔵 Open Graph  */}

      <meta property="og:type" content="website" />
      {/* URL  (e.g., https://example.com/page-slug) */}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* OG Title and Description */}
      <meta property="og:title" content={title || 'The IT Talent'} />
      <meta property="og:description" content={description || defaultDescription} />

      {/* OG Image */}
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card    */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'The IT Talent'} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

    </Helmet>
  );
}