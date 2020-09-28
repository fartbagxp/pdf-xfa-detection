const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/es5/build/pdf.js');

function collapse(info, metadata, filename) {
  const result = {
    Title: info.Title || filename,
    Author: info.Author,
    Subject: info.Subject || '',
    PDFFormatVersion: info.PDFFormatVersion,
    CreationDate: metadata._metadataMap.get('xmp:createdate'),
    ModifiedDate: metadata._metadataMap.get('xmp:modifydate'),
    Creator: info.Creator,
    IsAcroFormPresent: info.IsAcroFormPresent,
    IsXFAPresent: info.IsXFAPresent,
    Contact: metadata['desc:contact'] || '',
  };
  return result;
}

function isXfa(pdf, filename) {
  // Loading a document.
  var loadingTask = pdfjsLib.getDocument(pdf);
  loadingTask.promise
    .then(async function (pdfDocument) {
      const {
        info,
        metadata,
        contentDispositionFilename,
      } = await pdfDocument.getMetadata();

      console.log(info);
      console.log(metadata);
      // console.log(collapse(info, metadatam, filename));
    })
    .catch(function (reason) {
      console.error('Error: ' + reason);
    });
}

const stat = fs.readdirSync('pdf');

for (const file of stat) {
  const filepath = `pdf/${file}`;
  isXfa(filepath, file);
}
