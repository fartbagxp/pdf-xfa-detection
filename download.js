const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

async function downloadPDF(name, url) {
  const file = path.resolve(__dirname, 'data', 'pdf', name);
  const writer = fs.createWriteStream(`${file}.pdf`);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  }).catch((err) => {
    console.log(`Unable to fetch from ${url}, error was ${err}`);
    return;
  });

  if (response && response.data) {
    return response.data.pipe(writer);
  } else {
    console.error(`Unable to download form ${name} from URL: ${url}`);
    return;
  }
}

async function downloadSource() {
  const url = `${process.env.URL}/services/va_forms/v0/forms`;

  const config = {
    headers: {
      apikey: process.env.API_KEY,
    },
  };

  const sourceName = 'source-api';
  const res = await axios.get(url, config).catch((err) => {
    console.log(`Unable to fetch from ${url}, error was ${err}`);
    return;
  });

  const file = path.resolve(__dirname, 'data', sourceName);
  fs.writeFileSync(`${file}.json`, JSON.stringify(res.data.data, null, 2));

  return res.data.data;
}

/**
 * This was the previous method of download via a source file.
 * We now have access to an API to pull the form information.
 */
// const source = fs.readFileSync('data/source.json');
// const parsed = JSON.parse(source);

// for (const info of parsed) {
//   console.log(info.link);
//   downloadPDF(info.name, info.link);
// }

downloadSource().then((res) => {
  for (const info of res) {
    console.log(info.id, info.type);
    downloadPDF(info.id, info.attributes.url);
  }
});
