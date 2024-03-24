'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';
import my_image from '@/public/my_image.jpg';
import Link from 'next/link';
import Products from '../services/prodocts.json';
import Experiences from '../services/experiences.json';
import Schools from '../services/school.json';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import exp from 'constants';
export default function Home() {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  console.log(theme === 'dark');

  return (
    <div className='section'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-4xl font-extrabold'>Welcome</h1>

        {/* Not working yet  */}
        <Switch
          defaultChecked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        />
      </div>

      <div className='pt-10'>
        <Image
          className='image'
          src={my_image}
          alt='my photo'
          width={96}
          height={96}
        />
        <h4 className='text-lg pt-5 font-medium'>Huot Monirith</h4>
        <p className='text-sm text-muted-foreground pt-5'>
          With a solid foundation in Software Engineering, I bring to the table
          three years of intensive experience, particularly in{' '}
          <span className='font-bold'>Frontend Development</span>,{' '}
          <span className='font-bold'>
            Mobile development (Cross platform){' '}
          </span>
          <span className='font-bold'>UX/UI</span>.{' '}
        </p>
      </div>

      <div className='pt-5 flex flex-row items-center'>
        <p className='pr-2'>Find me on : </p>

        <p>
          <Link
            target='_blank'
            href={'https://gitlab.com/hmonirith'}
            className='underline'>
            Gitlab
          </Link>
          {' · '}
          <Link
            className='underline'
            target='_blank'
            href={'https://gitlab.com/hmonirith'}>
            LinkedIn
          </Link>
          {' · '}
          <Link
            className='underline'
            target='_blank'
            href={'https://www.codewars.com/users/AppleD0G'}>
            Codewar
          </Link>{' '}
        </p>
      </div>

      <div className='pt-5'>
        <p>CV : </p>
      </div>

      <div className='pt-5'>
        <p>Work Gmail : </p>
      </div>

      <hr className='mt-10'></hr>

      <div className='pt-5'>
        <h2 className='text-lg font-semibold'>Products</h2>
        <p className='text-sm text-muted-foreground'>
          There are list of publicly available products that I have been
          contributing to.
        </p>

        {Products.map((product, index) => {
          return (
            <div key={index} className='pt-5 pb-5'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-md'>{product.title}</CardTitle>
                  <div className='flex flex-row py-2'>
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
                  <CardDescription className='text-xs'>
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='text-end'>
                    <Link
                      className='text-xs font-semibold hover:underline'
                      href={{
                        pathname: `/products/${product.id}`
                      }}>
                      Read More {`->`}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <hr className='mt-10'></hr>

      <div className='pt-5'>
        <h2 className='text-lg font-semibold'>Work Experiences</h2>
        <p className='text-sm text-muted-foreground'>
          There are list of available products that I have been contributing to.
        </p>

        {Experiences.map((experience, index) => {
          return (
            <div key={index} className='pt-3 pb-3'>
              <p className='text-xs'>{experience.workDate}</p>
              <div className='flex flex-row just items-center'>
                <p className='text-sm font-semibold'>
                  {experience.companyName}
                </p>
                <p className='pr-2 pl-2'>{' · '}</p>

                <p className='text-xs text-muted-foreground'>
                  {experience.position}
                </p>
              </div>
              <p className='text-xs text-muted-foreground pb-5'>
                {experience.type}
              </p>

              {experience.roles.map((role, index) => {
                return (
                  <div key={index} className='py-1'>
                    <li className='text-sm marker:text-muted-foreground'>
                      {role}
                    </li>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <hr className='mt-10'></hr>

      <div className='pt-5'>
        <h2 className='text-lg font-semibold'>Education</h2>

        {Schools.map((school, index) => {
          return (
            <div key={index} className='pt-3 pb-3'>
              <p className='text-xs'>{school.studyDate}</p>
              <div className='flex flex-row just items-center'>
                <p className='text-sm font-semibold'>{school.school}</p>
                <p className='pr-2 pl-2'>{' · '}</p>

                <p className='text-xs text-muted-foreground'>{school.degree}</p>
              </div>
              <p className='text-xs text-muted-foreground pb-5'>
                {school.degree}
              </p>
            </div>
          );
        })}
      </div>

      <p className='text-sm  text-muted-foreground'>2024 © Huot Monirith</p>
    </div>
  );
}
