// src/Components/SEO.jsx
import React from 'react';

// This is a simplified SEO component. For more advanced use cases, consider React Helmet.
const SEO = ({ title, description }) => {
  document.title = title;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const newMeta = document.createElement('meta');
    newMeta.name = 'description';
    newMeta.content = description;
    document.head.appendChild(newMeta);
  }

  return null; // This component does not render anything
};

export default SEO;
