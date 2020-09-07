import S from '@sanity/desk-tool/structure-builder';
import {
  IoIosBasket,
  IoIosList,
  IoIosMegaphone,
  IoIosNavigate,
  IoIosPaper,
  IoIosPersonAdd,
  IoIosRestaurant,
  IoIosSettings,
  IoIosConstruct,
} from 'react-icons/io';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Service Pages')
        .icon(IoIosPaper)
        .schemaType('service')
        // When you open this list item, list out the documents
        // of the type “project"
        .child(S.documentTypeList('service')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'metaData',
            'post',
            'category',
            'author',
            'navigation',
            'page',
            'job',
            'mealServiceLocation',
            'menu',
            'serviceLocation',
            'service',
          ].includes(listItem.getId())
      ),
    ]);
