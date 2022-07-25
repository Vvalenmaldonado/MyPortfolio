import Link from 'next/link';
import React, { forwardRef } from 'react';

import { urlFor } from '@/lib/sanity';

import styles from './Card.module.css';

export const Card = ({ post }) => {
  const { title, mainImage, subtitle } = post;

  return (
    <Link
      key={post._id}
      href="/posts/[slug]"
      as={`/posts/${post.slug.current}`}
      passHref
    >
      <div className={styles.containerCard}>
        <a className={` ${styles.colXs6}`} id={`zoomIn`}>
          <figure className={styles.figure}>
            <img src={urlFor(mainImage)} alt={title} />
          </figure>
        </a>

        <div className={`${styles.containerTextCard} `}>
          <h3 className={styles.hoverUnderlineAnimation}>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

Card.defaultProps = {
  description: 'Sin description',
  image:
    'https://www.lavoz.com.ar/resizer/_rMzy1SdssIcAUZd_TS5Xf2JIlk=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/M3I4E5SDFJFC5PVDIKP2YBXBPE.jpg',
  title: 'Titulo sin definir',
};
