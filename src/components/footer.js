import React from 'react';
import { nanoid } from 'nanoid';

import { useInstagram } from '../hooks';
import { socialLinks } from '../data/site-navigation';

function Footer() {
  const instagramFeed = useInstagram();
  return (
    <footer className="bg-brand-black">
      <div className="mx-auto overflow-hidden max-w-7xl">
        <div className="grid-cols-4 gap-4 px-4 py-8 lg:grid sm:px-8 lg:px-20">
          <div className="flex flex-col justify-around col-span-1 py-8 space-y-6 lg:py-0">
            <p className="font-serif text-5xl leading-10 text-center text-white lg:text-6xl lg:text-left">
              <span>Keep </span>
              <br className="hidden lg:inline" />
              <span>Social </span>
              <br className="hidden lg:inline" />
              <span>With&nbsp;us</span>
            </p>
            <div className="flex items-center justify-center space-x-4 lg:justify-start">
              <p className="text-lg font-bold text-white lg:text-xl">
                Follow us
              </p>
              <div className="flex justify-center space-x-2">
                {socialLinks.map((node) => (
                  <a
                    key={nanoid()}
                    href={node.url}
                    className="text-white transition duration-150 ease-in-out hover:text-brand-blue"
                  >
                    <span className="sr-only">{node.label}</span>
                    <node.icon className="w-8 h-8 lg:w-9 lg:h-9" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-3 gap-4 sm:grid-cols-3">
            {instagramFeed.map((feed, index) => (
              <div key={index} className={index === 3 && 'sm:hidden'}>
                <a
                  href={feed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden aspect-ratio-square"
                >
                  <img
                    key={index}
                    src={feed.src}
                    alt={feed.caption}
                    srcSet={feed.srcSet.join(', ')}
                    className="absolute inset-0 object-contain w-full h-full"
                  />

                  <div
                    aria-hidden
                    className="absolute inset-0 p-4 overflow-y-auto text-white break-words transition duration-300 ease-in-out bg-black bg-opacity-75 opacity-0 overscroll-y-auto hover:opacity-100"
                  >
                    {feed.caption || 'View on Instagram'}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 text-center border-t border-white border-solid">
          <a
            href="https://www.phirannodesigns.com.au/"
            target="_blank"
            rel="noreferrer"
            className="text-sm leading-6 text-white"
          >
            Website by Phiranno Designs
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
