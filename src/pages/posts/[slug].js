/* eslint-disable sort-keys */
import { PortableText } from '@portabletext/react';
import groq from 'groq';

import { Breadcrums } from '@/components/Breadcrums/Breadcrums';
import { Card } from '@/components/Card/Card';
import { Headline } from '@/components/Headline/Headline';
import { ImgNotice } from '@/components/ImgNotice/ImgNotice';
import { NewsContent } from '@/components/NewsContent/NewsContent';
import { ShareMedia } from '@/components/ShareMedia/ShareMedia';
import { urlFor } from '@/lib/sanity';
import { getClient } from '@/lib/sanity.server';

const PostComponents = {
  types: {
    image: ({ value }) => {
      // eslint-disable-next-line @next/next/no-img-element
      return <img alt={value.alt || ''} src={urlFor(value)} />;
    },
  },
};
const Post = ({ post, posts }) => {
  let title;
  let categories;
  let body;
  let author;
  let mainImage;
  let subtitle;
  let publishedAt;
  try {
    title = post.title;
    categories = post.categories;
    body = post.body;
    author = post.author;
    mainImage = post.mainImage;
    subtitle = post.subtitle;
    publishedAt = post.publishedAt;
  } catch (e) {
    // console.log('ACA SE ROMPE', post, posts, e);
  }

  const relatedArticle = post.categories;

  var articles = posts
    .filter(function (e, i) {
      return e.categories == relatedArticle;
    })
    .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
    .reverse()
    .slice(0, 2);

  return (
    <div>
      <section className="bodyContainer wrapContainer columnCenter">
        {post && (
          <div
            className="containerNotice2"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <Breadcrums name={categories} />
            <Headline
              author={author}
              publishedAt={publishedAt}
              title={title}
              subtitle={subtitle}
            />
            <ImgNotice src={urlFor(mainImage)} />
            <PortableText
              className="noticeBody"
              value={body}
              components={PostComponents}
            />
          </div>
        )}
        <ShareMedia />
        <CategorySeparator category="ARTICULOS RELACIONADOS" />
        {articles?.map((post) => (
          <Card post={post} />
        ))}
      </section>
    </div>
  );
};

const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    _id,
    title,
    'author': author->name,
    'categories': categories->title,
    body, 
    mainImage,
    slug,
    subtitle,
    publishedAt,
}`;

export async function getStaticPaths() {
  const paths = await getClient()
    .fetch(groq`*[_type == 'post' && defined(slug.current)][].slug.current`)
    .then((r) => {
      // console.log('PATH response jsoneada', r);
      return r;
    })
    .catch((e) => {
      //  console.log(' ', e);
    });
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking', //era true //Funciono con false
  };
}

export async function getStaticProps({ params }) {
  const post = await getClient().fetch(query, { slug: params.slug });

  const posts = await getClient()
    .fetch(
      groq`*[_type == 'post'] {
    _id,
    title,
    'categories': categories->title,
    mainImage,
    slug,
    subtitle,
    featured,
    publishedAt,
  }`
    )
    .then((r) => {
      // console.log('response ', r);
      return r;
    })
    .catch((e) => {
      //  console.log('SE ROMPE EL FECH', params.slug, e);
    });
  return {
    props: {
      post,
      posts,
    },
    revalidate: 3,
  };
}

export default Post;
