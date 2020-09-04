import React from 'react';

import { Layout, SEO, Contact, Hero, Map, AboutInfo } from '../components';
import { useGraphQL } from '../hooks';

export default function IndexPage() {
  const { aboutHeroImage, aboutHeroTwoImage } = useGraphQL();
  console.log(aboutHeroImage);
  return (
    <Layout>
      <SEO title="About" />
      <Hero bgImage={aboutHeroImage.childImageSharp.fluid}>
        <h1 className="flex flex-col mb-4 font-serif text-6xl text-white">
          <span className="leading-none">YOUR EXPERIENCE</span>
          <span className="leading-none">IS OUR PRIORITY!</span>
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
                Master Electrician Member
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
                Port Macquarie Chamber of Commerce Member
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
                Registered With Cablers Australia B29203 NSW
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
                Essential Energy accredited AP93489
              </span>
            </div>
          </li>
        </ul>
      </Hero>
      <AboutInfo />
      <Hero bgImage={aboutHeroTwoImage.childImageSharp.fluid} />
      <Contact />
      <Map />
    </Layout>
  );
}

export default AboutPage;
