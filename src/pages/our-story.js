import React from 'react';
import GatsbyImage from 'gatsby-image';

import {
  Layout,
  SEO,
  Contact,
  Hero,
  SectionWithYellowBox,
} from '../components';
import { useGraphQL } from '../hooks';

function OurStoryPage() {
  const { aboutHeroImage, aboutHeroTwoImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Our Story" />
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
      <SectionWithYellowBox
        heading={
          <>
            <h2 className="relative pl-4 font-serif text-5xl leading-none text-white md:pl-12 md:pr-10 md:max-w-md">
              Port Macquire's most versatile electricians
            </h2>
          </>
        }
      />
      <article className="grid px-4 mb-12 gap-x-14 gap-y-10 md:grid-cols-2 sm:px-8 lg:px-20">
        <div className="text-white">
          <h1 className="mb-2 text-lg font-bold">
            About Pacific Blue Electrical
          </h1>
          <p className="tracking-normal">
            Pacific Blue Electrical is a small family business, we pride
            ourselves on our customer servce and quality
            workmanship,cleanlines,honesty and commitment to all aspects of our
            business.
          </p>
          <p className="mt-2">
            The experience we have gained over the years allows us to take on a
            range of projects, from smaller domestic jobs to larger industrial
            projects.
          </p>
          <p className="mt-2">
            We listen to our customers requests and provide all available
            options to get the job done, our customers choose what suits them
            best.
          </p>
          <p className="mt-2">
            We have a lot of repeat customer who trust us to 'Do It Once, Do It
            Right'.We are fully insured, qualified and highly trained.The safety
            of our customers and their families are our highest priority.
          </p>
        </div>
        <div className="text-white">
          <h1 className="mb-2 text-lg font-bold">About the Owner</h1>
          <p className="mt-2">
            I'm Shaun, owner of Pacific Blue Electrical, I have been working in
            the electrical industry for over 20 years.I started my apprentice in
            Glen Innes, a rural town in NSW. The company I worked for then had
            the motto 'Do It Once, Do It Right' and I've always stuck by that.
          </p>
          <p className="mt-2">
            In 2006 I relocated to the Mid North coast where I started to
            upskill myself obtaining my Level 2 Accreditation and started
            working on larger and industrial Projects.
          </p>
          <p className="mt-2">
            Early 2017 I felt that it was the right time to start Pacific Blue
            Electrical, having my won business allowed me the flexibility to
            have quality time with my young family.
          </p>
        </div>
        <div className="hidden md:block" />
        <div>
          <a
            href="tel:404040404"
            className="inline-block px-6 font-serif text-lg tracking-normal text-white transition duration-300 ease-in-out rounded bg-brand-yellow"
          >
            Call to get your free quote now
          </a>
        </div>
      </article>

      <article
        className="relative overflow-hidden"
        style={{ minHeight: '20rem' }}
      >
        <div className="absolute inset-0 sm:relative sm:h-0 sm:aspect-ratio-16/9">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              fluid={aboutHeroTwoImage.childImageSharp.fluid}
              className="flex-1"
            />
          </div>
        </div>
      </article>

      <Contact subHeading="In need of an electrician?" />
    </Layout>
  );
}

export default OurStoryPage;
