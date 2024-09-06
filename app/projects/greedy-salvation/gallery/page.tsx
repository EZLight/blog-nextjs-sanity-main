'use client'

import { groq } from "next-sanity"
import { client } from '../../../../lib/sanity.client'
import Image from "next/image"
import urlFor from "../../../../lib/urlFor"
import GreedySalvationMenu from "../../../../components/GreedySalvationMenu"
import { HeaderTitleBar } from "../../../../styles/styles"
import { useState } from 'react'

const query = groq`*[_type == "gallery" && title == "Greedy Salvation"]{
    title,
    "images": images[]{
      "url": image.asset->url,
      alt
    },
    description
  }`

interface GalleryItem {
  _id: string;
  title: string;
  images: {
    url: string;
    alt: string;
  }[];
  description: string;
}

interface GalleryProps {
  galleryData: GalleryItem[];
}

function Gallery({ galleryData }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {galleryData.map((item) => (
        <div key={item._id}>
          <div>
            {item.images.map((imageItem, index) => (
              <Image 
                key={index}
                src={urlFor(imageItem.url).url()}
                alt={imageItem.alt}
                width={300}
                height={200}
                onClick={() => openModal(urlFor(imageItem.url).url())}
                className="w3-opacity-min w3-card-4 w3-hover-opacity-off w3-border w3-border-black"
                style={{ cursor: 'pointer' }}
              ></Image>
            ))}
          </div>
          <p>{item.description}</p>
        </div>
      ))}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={closeModal}
        >
          <Image
            src={selectedImage}
            alt="Full size image"
            width={1000}
            height={1000}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  )
}

export default async function Page() {
  const galleryData: GalleryItem[] = await client.fetch(query);

  return (
    <article className="w3-hide-small w3-center">
      <h4 className={HeaderTitleBar}>Greedy Salvation - Gallery</h4>
      <GreedySalvationMenu />
      <Gallery galleryData={galleryData} />
    </article>
  );
}