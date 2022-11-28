import NextHead from 'next/head';

const image = '/images/ogImage/image.jpg';
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
  description: 'Portfolio digital',
  keywords: 'Portfolio, frontend developer, valentina maldonado',
  ogDescription: '',
  ogImage: '/images/ogImage/image.jpg',
  ogTitle: 'Valentina Maldonado',
  ogUrl: 'https://vvalenmaldonado.com',
  title: 'Valentina Maldonado | Front-end developer',
};
