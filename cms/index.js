const contentful = require('contentful')
const { SPACE_ID, ACCESS_TOKEN } = require('../config');
const { CONTENT_TYPES } = require('./constants');

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

const getAllNpc = () => {
    return client.getEntries({'content_type': CONTENT_TYPES.NPC})
      .then((response) => {
          const items = response.items || [];
          return items.map((item) => item.fields);
      })
      .catch((error) => {
          console.log('getAllNpc', error);
         return error
      })
}

const getAllChronicles = () => {
    return client.getEntries({'content_type': CONTENT_TYPES.CHRONICLE})
      .then((response) => {
          const items = response.items || [];
          return items.map((item) => item.fields);
      })
      .catch((error) => {
          console.log('getAllChronicles', error);
         return error
      })
}

module.exports = {
    getAllNpc,
    getAllChronicles
}
