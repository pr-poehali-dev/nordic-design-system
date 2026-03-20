import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const BASE_URL = 'https://dizymusic.ru';
const DEFAULT_IMAGE = 'https://cdn.poehali.dev/projects/66629166-5fbb-46c8-a38a-99027997e13f/bucket/7a2cfea9-96c5-4d98-b0b7-e0b9fedba051.jpg';

const SEO = ({ title, description, canonical, image = DEFAULT_IMAGE }: SEOProps) => {
  const fullTitle = `${title} | DIZY MUSIC`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
