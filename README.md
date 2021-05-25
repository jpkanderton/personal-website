# personal-website

## About

* This is a project that will display my personal projects and other portfolio items.
* Project status: working

## Table of contents

Use for instance <https://github.com/jpkanderton/personal-website>:

> * [Title / Repository Name](#title--repository-name)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Requirements](#requirements)
>   * [Limitations](#limitations)
>   * [Build](#build)
>   * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Run Locally](#run-locally)
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)

## Installation
  To install dependencies:
    npm install

  If using the contact page email feature:
    * create an SendGrid account and generate an API key
    * create a file in the root of your repository (ex: "sendGridpi.js") to store your API key, email sender, and email recipient; and add file to your .gitignore.
    * if you don't use "sendGridApi.js" to store your API key, email sender, and email recipient then update the ./server/app.js file's line 14 (const sendGridApiHidden), line 16 (const sendGridApi, line 17 (const sender), and line 18 (const recipient) to the appropriately named file
    * when deploying with heroku make use of heroku config (see deploy section)

### Build
  For production:
    npm run build
  For development:
    npm run build-dev

## Start Server
  For production:
    npm run start
  For development:
    npm run start-dev

## Run Locally
  Open localhost:8099 in browser

## Resources Documentation And Other Links
  > https://sendgrid.com/
  > https://www.npmjs.com/package/@sendgrid/mail
  > https://devcenter.heroku.com/articles/getting-started-with-nodejs

### Deploy (how to install build product)

 > Easiest option is to deploy with Heroku
 > Create Heroku account if not done already
 > Go to root directory of project and input:
   > heroku login
   > heroku create
   > git push heroku main
 > Add SendGrid API key to config
   > heroku config:set sendGridApi=<YOUR_SENDGRID_API_KEY>
   > heroku config:set sender=<YOUR_SENDGRID_EMAIL_SENDER>
   > heroku config:set sender=<YOUR_SENDGRID_EMAIL_RECIPIENT>
 > Open your heroku app
   > heroku open

## License

