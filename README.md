[![Netlify Status](https://api.netlify.com/api/v1/badges/af10f273-37ff-4726-af94-cdc5e3f810b6/deploy-status)](https://app.netlify.com/sites/lucid-spence-d7329c/deploys)

# Description

Portfolio site using GatsbyJS and TypeScript.

# Installation

- Install [nodejs](https://nodejs.org/en/)
- `npm i`

# Run

## Dev

When developing, run `CONTENTFUL_SPACE_ID=<contenful_space_id> CONTENTFUL_ACCESS_TOKEN=<contentful_token> GITHUB_TOKEN=<github_token> npm run start`.

## Production

In production, you will just have to run `CONTENTFUL_SPACE_ID=<contenful_space_id> CONTENTFUL_ACCESS_TOKEN=<contentful_token> GITHUB_TOKEN=<github_token> npm run build` and then serve the static website through your server.
