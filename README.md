# personal-website

## About

* This project displays my personal projects and other portfolio items.
* Project status: working

## Table of contents

Use for instance <https://github.com/jpkanderton/personal-website>:

> * [Title](#personal-website)
>   * [About](#about)
>   * [Table of contents](#table-of-contents)
>   * [Requirements](#requirements)
>   * [Installation](#installation)
>   * [Build](#build)
>   * [Deploy (how to install build product)](#deploy-how-to-install-build-product)
>   * [Run Locally](#run-locally)
>   * [Deploy (how to install build product)](#deploy-(how-to-install-build-product))
>   * [Resources (Documentation and other links)](#resources-documentation-and-other-links)

## Requirements
  ...in progress...

## Installation
  To install dependencies:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;npm install

  If using the contact page email feature:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;* create an SendGrid account and generate an API key<br />
    &nbsp;&nbsp;&nbsp;&nbsp;* create a file in the root of your repository (ex: "sendGridpi.js") to store your API key, email sender, and email recipient; and add file to your .gitignore.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;* if you don't use "sendGridApi.js" to store your API key, email sender, and email recipient then update the ./server/app.js file's line 14 (const sendGridApiHidden), line 16 (const sendGridApi, line 17 (const sender), and line 18 (const recipient) to the appropriately named file. <br />
    &nbsp;&nbsp;&nbsp;&nbsp;* when deploying with heroku make use of heroku config (see deploy section) <br />

## Build
  For production:<br />
    &nbsp;&nbsp;&nbsp;&nbsp; npm run build<br />
  For development:<br />
    &nbsp;&nbsp;&nbsp;&nbsp; npm run build-dev<br />

## Start Server
  For production:<br />
    &nbsp;&nbsp;&nbsp;&nbsp; npm run start<br />
  For development:<br />
    &nbsp;&nbsp;&nbsp;&nbsp; npm run start-dev<br />

## Run Locally
  Open localhost:8099 in browser

## Deploy (how to install build product)

 Easiest option is to deploy with Heroku <br />
 Create Heroku account if not done already <br />
 Go to root directory of project and input: <br />
   &nbsp;&nbsp;&nbsp;&nbsp; heroku login <br />
   &nbsp;&nbsp;&nbsp;&nbsp;heroku create <br />
   &nbsp;&nbsp;&nbsp;&nbsp;git push heroku main <br />
 Add SendGrid API key to config <br />
   &nbsp;&nbsp;&nbsp;&nbsp;heroku config:set sendGridApi=<YOUR_SENDGRID_API_KEY> <br />
   &nbsp;&nbsp;&nbsp;&nbsp;heroku config:set sender=<YOUR_SENDGRID_EMAIL_SENDER> <br />
   &nbsp;&nbsp;&nbsp;&nbsp;heroku config:set sender=<YOUR_SENDGRID_EMAIL_RECIPIENT> <br />
 Open your heroku app <br />
   &nbsp;&nbsp;&nbsp;&nbsp;heroku open <br />

## Resources Documentation And Other Links
  > https://sendgrid.com/ <br />
  > https://www.npmjs.com/package/@sendgrid/mail <br />
  > https://devcenter.heroku.com/articles/ getting-started-with-nodejs
