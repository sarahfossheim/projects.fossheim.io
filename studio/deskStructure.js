import S from '@sanity/desk-tool/structure-builder';
import { IoFileTrayStackedSharp, IoBusiness, IoHome, IoMagnetSharp, IoPlanet } from 'react-icons/io5';

const hiddenDocTypes = listItem => !['project', 'employer', 'other', 'tutorial', 'general'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('General')
        .icon(IoHome)
        .child(
          S.editor()
            .id('general')
            .schemaType('general')
            .documentId('general')
            .title('General')
        ),
      S.divider(),
      S.listItem()
        .title('Projects')
        .icon(IoFileTrayStackedSharp)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Tutorials')
        .icon(IoMagnetSharp)
        .schemaType('tutorial')
        .child(S.documentTypeList('tutorial').title('Tutorials')),
      S.listItem()
        .title('Other')
        .icon(IoPlanet)
        .schemaType('other')
        .child(S.documentTypeList('other').title('Other')),
      S.divider(),
      S.listItem()
        .title('Employers')
        .icon(IoBusiness)
        .schemaType('employer')
        .child(S.documentTypeList('employer').title('Employers')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);