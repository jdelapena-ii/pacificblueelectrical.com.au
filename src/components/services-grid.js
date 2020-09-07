import React from 'react';
import { CommercialIcon, DomesticIcon, Level2Icon } from './vectors';
import { useGraphQL } from '../hooks';
import { ListItem } from './list-item';
import { BlueLink } from './blue-link';

const services = [
  {
    id: '34a72b7b-75e3-4844-9cd8-51e2ff4aadd1',
    label: 'Domestic Services',
    icon: DomesticIcon,
    skills: [
      'Highly Trained',
      'Quality Workmanship',
      'Clean & Tidy',
      'Great Communications',
    ],
  },
  {
    id: '29662d72-8531-4365-8794-ee3e90907069',
    label: 'Commercial Services',
    icon: CommercialIcon,
    skills: [
      'All Power & Lighting',
      'Fault Finding & Repairs',
      'Emergency Light Maintenance',
    ],
  },
  {
    id: '27920c4d-caf5-471b-a45e-9f7b43155413',
    label: 'Level 2 Services',
    icon: Level2Icon,
    skills: [
      'Cross Arm Replacements',
      'Overhead & Under Ground Services Mains',
      'Private Pole Installations & Replacement',
    ],
  },
];

function ServicesGrid() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <article className="w-full px-4 pb-24 mx-auto sm:px-8 lg:px-20 bg-brand-black">
      <div className="grid md:grid-cols-3 gap-x-6">
        {services.map((service) => (
          <div
            className="flex px-4 py-8 border-4 border-white rounded-lg md:flex-col"
            key={service.id}
          >
            <div className="h-52">
              <service.icon className="h-full mx-auto" />
            </div>
            <div className="flex-1 md:flex md:flex-col md:justify-between">
              <div className="px-4 py-4 md:px-6">
                <h2 className="mb-4 text-xl font-extrabold leading-none text-left text-white text-bold">
                  {service.label}:
                </h2>
                <ul className="space-y-2">
                  {service.skills.map((skill, i) => (
                    <ListItem key={i}>{skill}</ListItem>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-center">
                <BlueLink
                  to={`tel:${siteMetadata.phone.split(' ').join('')}`}
                  text="find out more here"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export { ServicesGrid };
