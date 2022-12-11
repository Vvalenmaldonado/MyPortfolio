import NextHead from 'next/head';

const image = 'public/images/aboutme/OGValen.png';
export const Head = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogUrl,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={image} />
    <meta name="robots" content="follow, index" />
  </NextHead>
);

Head.defaultProps = {
  author: 'Valentina Maldonado',
  description: '',
  keywords: 'Portfolio, frontend developer, valentina maldonado',
  ogDescription: 'Valentina Maldonado | Front-end developer',
  ogImage: 'public/images/aboutme/OGValen.png',
  ogTitle: 'Valentina Maldonado | Front-end developer',
  ogUrl: 'https://vvalenmaldonado.com',
  title: 'Valentina Maldonado | Front-end developer',
};
