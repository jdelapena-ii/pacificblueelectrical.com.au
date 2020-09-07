import React, { useEffect, useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import PropTypes from 'prop-types';
import 'keen-slider/keen-slider.min.css';

import { usePrefersReducedMotion } from '../hooks';
import { QuoteIcon } from './vectors';

const testimonials = [
  {
    quote:
      '<p><span class="uppercase">Excellent</span> job. Very happy with his work. we would absolutely recommend him to all our friends.... thanks again Sue and Bob</p>',
    author: 'Sue Dawson',
  },
  {
    quote:
      '<p>Great service, installed all our bedroom fans and lighting for our new kitchen. Highly recommended!!</p>',
    author: 'Janine Hudson',
  },
  {
    quote:
      '<p>So happy have used a number of times always been thrilled with service and just had all lights changed over to down lights and they are brilliant wish we had done it sooner</p>',
    author: 'Karen Lamb',
  },
  {
    quote:
      '<p>A couple of weeks ago I asked the Facebook grapevine to help me find an electrician for a small one day job after being frustrated by the lack of response to my normal attempts to get a quote locally. I had a few recommendations. Thank you to those who want to work, and mate the effort. <span class="uppercase">one was the standout</span>. Not the cheapest, but immediately the one my gut feeling accepted. Professional, knowledgeable, approachable, well presented, efficient, job clean and more than welcome when we need an electrician again. <span class="uppercase">His name is Shaun. He is Pacific Blue Electrical</span>. Keep up the great work mate. Your little business is going to go places.</p>',
    author: 'David Bignell',
  },
];

function TestimonialSlider({ duration = 2000, interval = 3000 }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [pause, setPause] = useState(false);

  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: prefersReducedMotion ? 0 : duration,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      timer.current = setInterval(() => {
        if (!pause && slider) {
          slider.next();
        }
      }, interval);
      return () => {
        clearInterval(timer.current);
      };
    }
  }, [pause, slider, prefersReducedMotion, interval]);

  function handleKeyDown(e) {
    if (e.key === 'ArrowLeft') slider.prev();
    if (e.key === 'ArrowRight') slider.next();
  }

  return (
    <div
      role="region"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
      className="relative overflow-hidden focus:outline-none focus:shadow-outline bg-brand-blue"
    >
      <ul
        ref={sliderRef}
        aria-label="Customer testimonial"
        className="flex items-center keen-slider"
      >
        {testimonials.map((testimonial) => (
          <li className="py-24 keen-slider__slide">
            <div className="relative items-center justify-center max-w-2xl px-8 mx-auto">
              <QuoteIcon className="absolute w-20 h-20 text-white transform -translate-x-6 -translate-y-10 opacity-25" />

              <div
                className="relative z-10 font-light prose text-white"
                dangerouslySetInnerHTML={{ __html: testimonial.quote }}
              />

              <h2 className="relative mt-4 text-lg font-bold leading-none text-white uppercase">
                {testimonial.author}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

TestimonialSlider.propTypes = {
  duration: PropTypes.number,
  interval: PropTypes.number,
};

export { TestimonialSlider };
