export function getSeoMetadata({ title, description, image, url }) {
  const baseTitle = 'My Premium Blog';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const fullDescription = description || 'Read the latest insights and updates from our blog.';
  const fullUrl = `https://yourdomain.com${url || ''}`;

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: fullUrl,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description: fullDescription,
      site_name: baseTitle,
      images: [
        {
          url: image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      handle: '@yourtwitter',
      site: '@yourtwitter',
      cardType: 'summary_large_image',
    },
  };
}
