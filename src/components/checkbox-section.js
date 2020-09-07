import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import { ListItem } from './list-item';

function CheckboxSection({ sanityService }) {
  return (
    <article className="max-w-3xl mx-4 mt-12 mb-12 border-2 border-white md:mx-auto">
      <div className="px-12 py-6">
        <h2 className="text-3xl font-bold text-white">
          {sanityService.listSectionHeading}
        </h2>
        <ul className="grid grid-cols-2 mt-8 list-none gap-y-1">
          {sanityService.listSectionListItems.map((item, i) => (
            <ListItem key={i} bold={false}>
              {item}
            </ListItem>
          ))}
        </ul>
        <div className="mt-6 leading-7 text-white">
          <BlockContent blocks={sanityService._rawListSectionDescription} />
        </div>
      </div>
    </article>
  );
}

CheckboxSection.propTypes = {
  sanityService: PropTypes.object,
};

export { CheckboxSection };
