import React from 'react';

import { useInstagram } from '../hooks';
import { socialLinks } from '../data/site-navigation';

function Footer() {
  const instagramFeed = useInstagram();
  return (
    <footer className="bg-brand-black">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="grid grid-cols-4 gap-4 px-20">
          <div className="space-y-6">
            <p className="space-y-6 font-serif text-6xl leading-none text-white">
              <span className="block tracking-wider">Keep</span>
              <span className="block tracking-wider">Social</span>
              <span className="block tracking-wider">With us</span>
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-xl font-bold text-white">Follow us</p>
              <div className="flex justify-center space-x-2">
                {socialLinks.map((node) => (
                  <a
                    key={node.id}
                    href={node.url}
                    className="text-white transition duration-150 ease-in-out hover:text-brand-blue"
                  >
                    <span className="sr-only">{node.label}</span>
                    <node.icon className="w-10 h-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {instagramFeed.map((feed, index) => (
            <div key={index} className="flex items-center">
              <a
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full overflow-hidden aspect-ratio-square"
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
