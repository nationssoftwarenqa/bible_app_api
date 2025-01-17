import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const xpath = require('cypress-xpath');

Given("I visit bible app online", () => {
    let response
    cy.request(
        'GET', 
        'https://www.bible.com/_next/data/pHrtrS8FuIVdpzHVps2UJ///en/bible/111/MRK.14.NIV.json?versionId=111&usfm=MRK.14.NIV')
        .then((response) => {
            cy.log(JSON.stringify(response.body.pageProps))
          })
      })