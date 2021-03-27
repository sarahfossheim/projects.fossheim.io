import S from '@sanity/desk-tool/structure-builder';
import { IoFileTrayStackedSharp, IoBusiness, IoLink } from 'react-icons/io5';

const hiddenDocTypes = listItem => !['project', 'employer', 'link'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Projects')
        .icon(IoFileTrayStackedSharp)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.divider(),
      S.listItem()
        .title('Employers')
        .icon(IoBusiness)
        .schemaType('employer')
        .child(S.documentTypeList('employer').title('Employers')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);