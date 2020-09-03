import React from 'react';

import { useInstagram } from '../hooks';
import { socialLinks } from '../data/site-navigation';

function Footer() {
  const instagramFeed = useInstagram();
  return (
    <footer className="pt-12 bg-brand-black">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="grid-cols-4 gap-4 px-4 lg:grid sm:px-8 lg:px-20">
          <div className="flex flex-col items-center col-span-1 mb-8 space-y-6 lg:block lg:mb-0">
            <p className="space-y-2 font-serif text-5xl leading-none text-center text-white lg:flex lg:flex-col lg:text-6xl lg:text-left">
              <span className="tracking-wider">Keep </span>
              <span className="tracking-wider">Social </span>
              <span className="tracking-wider">With us</span>
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-lg font-bold text-white lg:text-xl">
                Follow us
              </p>
              <div className="flex justify-center space-x-2">
                {socialLinks.map((node) => (
                  <a
                    key={node.id}
                    href={node.url}
                    className="text-white transition duration-150 ease-in-out hover:text-brand-blue"
                  >
                    <span className="sr-only">{node.label}</span>
                    <node.icon className="w-8 h-8 lg:w-10 lg:h-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-3 gap-4 sm:grid-cols-3">
            {instagramFeed.map((feed, index) => (
              <div key={index}>
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
                  {feed.caption && (
                    <div
                      aria-hidden
                      className="absolute inset-0 p-4 overflow-y-auto text-white break-words transition duration-300 ease-in-out bg-black bg-opacity-75 opacity-0 overscroll-y-auto hover:opacity-100"
                    >
                      {feed.caption}
                    </div>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2 mt-8 border-t border-white border-solid">
          <a
            href="https://www.phirannodesigns.com.au/"
            target="_blank"
            rel="noreferrer"
            className="block text-sm leading-6 text-center text-white"
          >
            Website by Phiranno Designs
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
