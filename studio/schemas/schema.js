// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import accessibleImage from './objects/accessibleImage';
import blockContent from './objects/blockContent';
import blockContentSimple from './objects/blockContentSimple';
import codeBlock from './objects/codeBlock';
import info from './objects/info';

import project from './project';
import employers from './employers';
import other from './other';
import general from './general';
import tutorial from './tutorial';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    employers,
    general,
    other,
    project,
    tutorial,
    
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    accessibleImage,
    blockContent,
    blockContentSimple,
    codeBlock,
    info,
  ]),
});