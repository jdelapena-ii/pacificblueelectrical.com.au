import React from 'react';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  Hero,
  SectionWithYellowBox,
  Contact,
} from '../components';
import { useGraphQL } from '../hooks';

function IndexPage() {
  const { homeHeroImage, homeHeroTwoImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Home" />
      <Hero bgImage={homeHeroImage.childImageSharp.fluid}>
        <h1 className="flex flex-col mb-4 font-serif text-5xl text-white sm:text-6xl">
          <span className="leading-none">DO IT ONCE,</span>
          <span className="leading-none">DO IT RIGHT</span>
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
            <h2 className="relative pl-4 font-serif text-5xl leading-none text-white md:pl-12 md:pr-10 md:max-w-md">
              Port Macquire's most versatile electricians
            </h2>
          </>
        }
        image={homeHeroTwoImage.childImageSharp.fluid}
      >
        <div className="pt-8 pb-10 md:pb-16 md:px-8 md:max-w-md">
          <p className="mb-4 text-white">
            Wether your project involves level 2, general electrical or phone
            &amp; data, you can be assured Pacific Blue Electrical can safely
            and professionally comlete your project without outsourcing to other
            contractors to save your time and money.
          </p>
          <p className="mb-8 text-white">
            We listen to what you want, discuss available options and suggest
            the best solutions for your needs.
          </p>
          <Link
            to="/services/level-2"
            className="inline-block px-6 font-serif text-lg tracking-normal text-white transition duration-300 ease-in-out rounded bg-brand-blue"
          >
            Find out more here
          </Link>
        </div>
      </SectionWithYellowBox>

      <Contact
        bgColorClass="bg-brand-yellow"
        textColorClass="text-black"
        subHeading="In need of an electrician?"
      />
    </Layout>
  );
}

export default IndexPage;
