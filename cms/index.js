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
          return response;
      })
      .catch((error) => {
         return error
      })
}

module.exports = {
    getAllNpc
}
