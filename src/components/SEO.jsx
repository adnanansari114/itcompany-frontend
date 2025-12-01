import { useEffect } from 'react';

export default function SEO({ title, description, ogImage = "/og-image.jpg" }) {
  useEffect(() => {
    document.title = title + " | The IT Talent";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", tag.content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute("property", tag.property);
        ogTag.setAttribute("content", tag.content);
        document.head.appendChild(ogTag);
      }
    });
  }, [title, description, ogImage]);

  return null;
}