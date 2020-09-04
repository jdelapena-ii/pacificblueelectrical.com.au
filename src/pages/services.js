import React from 'react';

import { Layout, SEO, Hero, SectionWithYellowBox } from '../components';
import { useGraphQL } from '../hooks';

function ServicePage() {
  const { servicesHeroImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Services" />
      <Hero bgImage={servicesHeroImage.childImageSharp.fluid}>
        <h1 className="flex flex-col max-w-xl mb-4 font-serif text-5xl leading-none text-white sm:text-6xl">
          Your local electrician on the Mid North Coast
        </h1>

        <ul className="space-y-1 list-none">
          <li>
            <div className="flex items-start">
              <span className="inline-flex items-center">
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
      <SectionWithYellowBox
        heading={
          <>
            <h2 className="relative flex flex-col pl-4 font-serif text-5xl leading-none text-white md:pl-12 md:pr-10 md:max-w-md">
              <span className="leading-none">Our </span>
              <span className="leading-none">services</span>
            </h2>
          </>
        }
      >
        <div className="pt-4 md:pt-8 md:pb-16 md:px-8">
          <p className="mb-4 text-white">
            Wether your project involves level 2, general electrical or phone
            &amp; data, you can be assured Pacific Blue Electrical can safely
            and professionally comlete your project without outsourcing to other
            contractors to save your time and money.
          </p>
          <p className="text-white">
            We listen to what you want, discuss available options and suggest
            the best solutions for your needs.
          </p>
        </div>
      </SectionWithYellowBox>
    </Layout>
  );
}

export default ServicePage;
