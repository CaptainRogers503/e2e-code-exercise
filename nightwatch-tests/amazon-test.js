'use strict';

//var amazonTestPage = require('./amazon-test.page.js');
//var driver = new webdriver.Builder().build();
const {Builder, By, Key, until} = require('selenium-webdriver');  //added for bottom test trying to add driver variable

 module.exports = {  //currently working
     'Amazon Test': function (browser) {

         browser
             .url('https://www.amazon.com/')
             .assert.urlEquals('https://www.amazon.com/')
             .waitForElementVisible('#twotabsearchtextbox', 2000)
             .click('#twotabsearchtextbox')
             .setValue('#twotabsearchtextbox', 'nike shoes')
             .click('.nav-search-submit > input.nav-input')
             .pause(1000)
             //.getText(' span > .sx-price-large', function(result) {  //gets first value - need to get all values
             //    console.log(result);
             //})
             .click('#sort')
             .click('option[value=price-asc-rank]')
             .pause(2000)

             .end();
     }
 };

//module.exports = {
//    'Amazon Test': (client) => {
//        const page = client.page.amazon-test.page();
//
//
//
//        client
//            .url('https://www.amazon.com/')
//            .assert.urlEquals('https://www.amazon.com/')
//            .waitForElementVisible('#twotabsearchtextbox', 2000)
//            .click('#twotabsearchtextbox')
//            .setValue('#twotabsearchtextbox', 'nike shoes')
//            .click('.nav-search-submit > input.nav-input')
//            .pause(1000)
//            //.assert.url('https://www.amazon.com/')
//            .pause(3000)
//            .end();
//    }
//};

// module.exports = {
//    'Amazon Test': function (client) {
//        // var driver =  new Builder().forBrowser('chrome').build();  //the chromedriver could not be foundon the current PATH
//
//        var something = client
//            .url('https://www.amazon.com/')
//            .assert.urlEquals('https://www.amazon.com/')
//            .waitForElementVisible('#twotabsearchtextbox', 2000)
//            .click('#twotabsearchtextbox')
//            .setValue('#twotabsearchtextbox', 'nike shoes')
//            .click('.nav-search-submit > input.nav-input')
//            .pause(1000)
//            .elements(By.css('.sx-price-large'));
//            //.browser.elements(By.cssSelector('.sx-price-large'))
//            .pause(3000)
//            .end();
//    }
// };
//
// module.exports = {  //currently working
//     'Amazon Test': function (browser) {
//
//         browser
//             .url('https://www.amazon.com/')
//             .assert.urlEquals('https://www.amazon.com/')
//             .waitForElementVisible('#twotabsearchtextbox', 2000)
//             .click('#twotabsearchtextbox')
//             .setValue('#twotabsearchtextbox', 'nike shoes')
//             .click('.nav-search-submit > input.nav-input')
//             .pause(3000)                              //request path contains unescaped characters
//             .elements('class name', 'sx-price-large', function(response) {
//                 response.value.forEach(function(element) {
//                     browser.elementIdText(element.ELEMENT, function(text) {
//                         console.log(text.value);
//                     });
//                 });
//             })
//             .end();
//     }
// };

//module.exports = {  //currently working
//    'Amazon Test': function (browser) {
//
//        var shoePrices = [[]];
//        browser
//            .url(' https://www.amazon.com/')
//            .waitForElementVisible('#twotabsearchtextbox', 1000)
//            .click('#twotabsearchtextbox')
//            .setValue('#twotabsearchtextbox', 'nike shoes')
//            .click('.nav-search-submit > input.nav-input')
//            .pause(1000)
//            .elements('class name', 'sx-price-large', function (response) {
//                response.value.forEach(function (element) {
//                    browser.elementIdText(element.ELEMENT, function (text) {
//                        var price = [element.ELEMENT, text.value.substring(text.value.indexOf("$") + 2, text.value.length).replace(' ', '.')];
//                        shoePrices.push(price);
//                        if (element === response.value[response.value.length - 1]) {
//                            shoePrices.sort(function sortNumber(a, b) {
//                                return a[1] - b[1];
//                            });
//                            console.log(shoePrices)
//                        }
//                    });
//                });
//            })
//            .end();
//    }
//};


