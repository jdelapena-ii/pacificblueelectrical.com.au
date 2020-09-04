import React from 'react';

function AboutInfo() {
  return (
    <div>
      <div className="p-12 text-left">
        <div className="p-6 w-36 bg-brand-yellow">
          <h1 className="flex flex-col font-serif text-5xl text-white bg-left-top">
            <span className="leading-none">PORT MACQUARIE'S</span>
            <span className="leading-none">MOST VERSATILE</span>
            <span className="leading-none">ELECTRICIANS</span>
          </h1>
        </div>
      </div>
      <div className="grid gap-10 p-12 text-left sm:grid-cols-2">
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
        <div className="text-left text-white">
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
          <div className="mt-10 text-center">
            <button className="px-4 py-2 font-serif text-lg font-semibold rounded bg-brand-yellow text-uppercase">
              Call to get your free quote now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutInfo };
