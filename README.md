# Overview

This is a research repository on the direction of PDF documents and extracting various PDF metadata for information.

The research can be found [here](https://fartbagxp.github.io/pdf-xfa-detection).

## Source of Information

[VA Lighthouse API](https://developer.va.gov/explore/vaForms/docs/vaForms)

## Running locally

- Install [NodeJS 12+](https://nodejs.org/en/).
- Install all the 3rd party libraries `npm install`.
- Write out the environment variables in a `.env` file (follow `.sample.env`).
- Run `npm run download` to download all the PDF files locally.
- Run `npm run parse` to parse the metadata and output the summary locally.

## Helpful Links

- [Dynamic XFA Detection](https://stackoverflow.com/a/28375976/6037063)
