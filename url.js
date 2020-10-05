const fs = require('fs');
const path = require('path');
const fastcsv = require('fast-csv');

const file = path.resolve(__dirname, 'data');

const result = fs.readFileSync(`${file}/source-api.json`);
const parsed = JSON.parse(result);

const output = [];
for (const form of parsed) {
  const temp = {
    form_name: form.attributes.form_name,
    url: form.attributes.url,
  };
  output.push(temp);
}

const ws = fs.createWriteStream('data/url.csv');
fastcsv.write(output, { headers: true }).pipe(ws);
