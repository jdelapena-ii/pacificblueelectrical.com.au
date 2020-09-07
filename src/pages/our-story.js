import React from 'react';

import {
  Layout,
  SEO,
  Contact,
  Hero,
  ListItem,
  Heading,
  YellowLink,
} from '../components';
import { useGraphQL } from '../hooks';

function OurStoryPage() {
  const { aboutHeroTwoImage } = useGraphQL();

  return (
    <Layout>
      <SEO title="Our Story" />
      <HeroSection />
      <AboutCopy />
      <Hero bgImage={aboutHeroTwoImage.childImageSharp.fluid} />
      <Contact subHeading="In need of an electrician?" />
    </Layout>
  );
}

function HeroSection() {
  const { aboutHeroImage } = useGraphQL();
  return (
    <Hero bgImage={aboutHeroImage.childImageSharp.fluid}>
      <h1 className="font-serif text-5xl leading-none text-white sm:text-6xl">
        <span className="leading-none">Your experience,</span>
        <br />
        <span className="leading-none">is our priority!</span>
      </h1>
      <ul className="mt-4 space-y-1">
        <ListItem>Master Electrician Member</ListItem>
        <ListItem>Port Macquarie Chamber of Commerce Member​</ListItem>
        <ListItem>Registered With Cablers Australia B29203 NSW</ListItem>
        <ListItem>Essential Energy accredited AP93489</ListItem>
      </ul>
    </Hero>
  );
}

function AboutCopy() {
  return (
    <article className="px-4 sm:px-8 lg:px-20">
      <Heading
        heading={['Port Macquarie’s', 'most versatile', 'electricians']}
        tag="h2"
      />
      <div className="grid gap-12 py-12 md:grid-cols-2">
        <AboutPacificBlue />
        <AboutTheOwner />
      </div>
    </article>
  );
}

function AboutPacificBlue() {
  return (
    <div>
      <div className="prose">
        <h3>About Pacific Blue Electrical</h3>
        <p>
          Pacific Blue Electrical is a small family business, we pride ourselves
          on our customer service and quality workmanship, cleanliness, honesty
          and commitment to all aspects of our business.
        </p>
        <p>
          The experience we have gained over the years allows us to take on a
          range of projects, from smaller domestic jobs to larger industrial
          projects.
        </p>
        <p>
          We listen to our customers' requests and provide all available options
          to get the job done, our customers choose what suits them best.
        </p>
        <p>
          We have a lot of repeat customer who trust us to 'Do It Once, Do It
          Right'. We are fully insured, qualified and highly trained. The safety
          of our customers and their families is our highest priority.
        </p>
      </div>
    </div>
  );
}

function AboutTheOwner() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <div className="flex flex-col">
      <div className="prose">
        <h3>About the Owner</h3>
        <p>
          I'm Shaun, owner of Pacific Blue Electrical, I have been working in
          the electrical industry for over 20 years. I started my apprentice in
          Glen Innes, a rural town in NSW. The company I worked for then had the
          motto 'Do It Once, Do It Right' and I've always stuck by that.
        </p>
        <p>
          In 2006 I relocated to the Mid North Coast where I started to upskill
          myself obtaining my Level 2 Accreditation and started working on
          larger and industrial Projects.
        </p>
        <p>
          Early 2017 I felt that it was the right time to start Pacific Blue
          Electrical, having my won business allowed me the flexibility to have
          quality time with my young family.
        </p>
      </div>
      <div className="pt-4 mt-auto">
        <YellowLink
          to={`tel:${siteMetadata.phone.split(' ').join('')}`}
          text="Call to get your free quote now"
        />
      </div>
    </div>
  );
}

export default OurStoryPage;
