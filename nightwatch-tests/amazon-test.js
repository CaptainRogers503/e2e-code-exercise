//var amazonTestPage = require('./amazon-test.page.js');
//var driver = new webdriver.Builder().build();
const {Builder, By, Key, until} = require('selenium-webdriver');  //added for bottom test trying to add driver variable

module.exports = {  //currently working
    'Amazon Test': function (client) {

        client
            .url('https://www.amazon.com/')
            .assert.urlEquals('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox', 2000)
            .click('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', 'nike shoes')
            .click('.nav-search-submit > input.nav-input')
            .pause(3000)
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

//module.exports = {
//    'Amazon Test': function (client) {
//       // let driver =  new Builder().forBrowser('chrome').build();  //the chromedriver could not be foundon the current PATH
//
//        client
//            .url('https://www.amazon.com/')
//            .assert.urlEquals('https://www.amazon.com/')
//            .waitForElementVisible('#twotabsearchtextbox', 2000)
//            .click('#twotabsearchtextbox')
//            .setValue('#twotabsearchtextbox', 'nike shoes')
//            .click('.nav-search-submit > input.nav-input')
//            .pause(1000)
//           // .this.driver.findElements(By.cssSelector('.sx-price-large'))
//            //.browser.elements(By.cssSelector('.sx-price-large'))
//            .pause(3000)
//            .end();
//    }
//};

module.exports = {  //currently working
    'Amazon Test': function (client) {

        client
            .url('https://www.amazon.com/')
            .assert.urlEquals('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox', 2000)
            .click('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', 'nike shoes')
            .click('.nav-search-submit > input.nav-input')
            .pause(3000)                                //request path contains unescaped characters
            //.getCssProperty('.a-color-base > span > .sx-price-large', 'span > .sx-price-whole', function(result) {
            //    console.log(result.getText());
            //})
            //.getText(' span > .sx-price-whole', function(result) {  //gets first value - need to get all values
            //    console.log(result);
            //})
            .elements('class name', '.sx-price-whole', function(result) {  //returns empty array
                console.log(result);
            })
            .end();
    }
};