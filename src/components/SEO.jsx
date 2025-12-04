// import { useEffect } from 'react';

// export default function SEO({ title, description, ogImage = "/og-image.jpg" }) {
//   useEffect(() => {
//     document.title = title + " | The IT Talent";

//     let metaDesc = document.querySelector('meta[name="description"]');
//     if (metaDesc) {
//       metaDesc.setAttribute("content", description);
//     } else {
//       metaDesc = document.createElement('meta');
//       metaDesc.name = "description";
//       metaDesc.content = description;
//       document.head.appendChild(metaDesc);
//     }

//     const ogTags = [
//       { property: "og:title", content: title },
//       { property: "og:description", content: description },
//       { property: "og:image", content: ogImage },
//       { property: "og:type", content: "website" }
//     ];

//     ogTags.forEach(tag => {
//       let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
//       if (ogTag) {
//         ogTag.setAttribute("content", tag.content);
//       } else {
//         ogTag = document.createElement('meta');
//         ogTag.setAttribute("property", tag.property);
//         ogTag.setAttribute("content", tag.content);
//         document.head.appendChild(ogTag);
//       }
//     });
//   }, [title, description, ogImage]);

//   return null;
// }


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