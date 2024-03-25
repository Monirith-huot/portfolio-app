'use client';

import React from 'react';
import Products from '../../../services/prodocts.json';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function Product() {
  const params = useParams();
  const product = Products.find((product) => product.id === params.id);

  return (
    <>
      {product !== undefined ? (
        <div className='section'>
          <h2 className='text-lg font-semibold mb-5'>{product.title}</h2>
          <Zoom>
            <img
              src={product.images![0]}
              alt='Landing page'
              width={500}
              height={250}
            />
          </Zoom>

          <h2 className='text-md pt-5 pb-5 font-semibold'>Description</h2>
          <p className='text-sm text-muted-foreground  pb-5'>
            {product.longDescription}
          </p>

          <p className='text-sm font-semibold mr-3 pb-5'>
            Technologies used :{' '}
          </p>

          <div className='flex flex-row pb-5'>
            {product.technology.map((technology, index) => {
              return (
                <div key={index} className='mr-2'>
                  <Card className='px-2 py-1 rounded-md'>
                    <p className='text-xs'>{technology}</p>
                  </Card>
                </div>
              );
            })}
          </div>

          <h2 className='text-md pt-5font-semibold'>Project Screenshot</h2>
          <p className='text-muted-foreground pb-5 text-xs '>
            (Click to view bigger image)
          </p>
          {product.images!.map((image, index) => {
            return (
              <div key={index} className='pb-5'>
                <Zoom>
                  <img
                    src={image}
                    alt='Landing page'
                    width={500}
                    height={500}
                  />
                </Zoom>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='section'>
          <h2 className='text-center text-sm'>
            Sorry I do not have project name like you search ....
          </h2>
        </div>
      )}
    </>
  );
}
