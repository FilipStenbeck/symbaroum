const SPACE_ID = process.env.SPACE_ID || 'FOO';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'BAR';
const API = process.env.API || '/api/';

console.log('API:', API, 'ACCESS_TOKEN:', ACCESS_TOKEN, 'SPACE_ID:', SPACE_ID);

module.exports = {
    SPACE_ID,
    ACCESS_TOKEN,
    API
};
