import React from 'react';

import { Layout, SEO, Hero } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { homeHeroImage } = useGraphQL();
  console.log(homeHeroImage);
  return (
    <Layout>
      <SEO title="Home" />
      <Hero bgImage={homeHeroImage.childImageSharp.fluid}>
        <h1 className="flex flex-col mb-4 font-serif text-6xl text-white">
          <span className="leading-none">DO IT ONCE,</span>
          <span className="leading-none">DO IT RIGHT</span>
        </h1>

        <ul className="space-y-1 list-none">
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
                ​
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="w-6 h-6 text-brand-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block ml-3 font-bold text-white">
                All Types Of Electrical Work
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
                ​
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="w-6 h-6 text-brand-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block ml-3 font-bold text-white">
                Friendly Knowledgeable Electricians
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
                ​
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="w-6 h-6 text-brand-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block ml-3 font-bold text-white">
                Prompt And Professional
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
                ​
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="w-6 h-6 text-brand-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block ml-3 font-bold text-white">
                Trusted And Reliable
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
                ​
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="w-6 h-6 text-brand-yellow"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="inline-block ml-3 font-bold text-white">
                Free Quotes
              </span>
            </div>
          </li>
        </ul>
      </Hero>
    </Layout>
  );
}
