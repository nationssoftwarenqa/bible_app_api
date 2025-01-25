import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const xpath = require('cypress-xpath');

Given("I visit bible app online", () => {
    let response
    let data
    cy.request(
        'GET', 
        '/_next/data/pHrtrS8FuIVdpzHVps2UJ///en/bible/111/MRK.14.NIV.json?versionId=111&usfm=MRK.14.NIV')
        .then((response) => {
            data = response.body
            cy.log(JSON.stringify(data.audioVersionInfo))
          })
      })

Given("response should have mark", () => {
    
})
 