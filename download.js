const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function downloadPDF(name, url) {
  const file = path.resolve(__dirname, 'pdf', name);
  const writer = fs.createWriteStream(`${file}.pdf`);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  }).catch(() => {
    console.log(`Unable to fetch from ${url}`);
    return;
  });

  response.data.pipe(writer);
}

const source = fs.readFileSync('source.json');
const parsed = JSON.parse(source);

for (const info of parsed) {
  console.log(info.link);
  downloadPDF(info.name, info.link);
}
