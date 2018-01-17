'use strict';

//module.exports = { //currently working
//    'Amazon Test' : function (browser) {
//        var price = '';
//        browser
//            .url('https://www.amazon.com/' )
//            .assert.urlEquals( 'https://www.amazon.com/' )
//            .waitForElementVisible( '#twotabsearchtextbox' , 2000 )
//            .click( '#twotabsearchtextbox' )
//            .setValue( '#twotabsearchtextbox', 'nike shoes' )
//            .click('.nav-search-submit > input.nav-input' )
//            .pause(1000)
//            .click('#sort')
//            .click('option[value=price-asc-rank]')
//            .pause(2000)
//            .click('#result_0')
//            .pause(2000)
//            .getText('#priceblock_ourprice', function(result) {
//                price = result.value.substring(1 ,6);
//                console.log('price is ', price);
//                browser.assert.deepEqual(price < 100, true, "Asserting the value is less than 100")
//                browser.end() ;
//            })
//    }
//};


 module.exports = {
     'Amazon Test': function (browser) {

         browser
             .url('https://www.amazon.com/')
             .assert.urlEquals('https://www.amazon.com/')
             .waitForElementVisible('#twotabsearchtextbox', 2000)
             .click('#twotabsearchtextbox')
             .setValue('#twotabsearchtextbox', 'nike shoes')
             .click('.nav-search-submit > input.nav-input')
             .pause(3000)
             .elements('class name', 'sx-price-large', function(response) {  //WebElement JSON Object - return type of elements() nightwatchJS
                 //console.log(response.value);  //returns array of objects --> [ { ELEMENT: '0.040560422323335565-1' },...]  --> this is where I was stuck on Sunday
                 response.value.forEach(function(element) {
                     browser.elementIdText(element.ELEMENT, function(text) {
                         //console.log('text value ', element.ELEMENT, text.value);  //full text object = {sessionId: string, status: 0, value: string/price}
                         var priceList =  [element.ELEMENT, text.value.substring(text.value.indexOf('$') + 2, text.value.length)];
                         //console.log(priceList[1]);  //logs a list of all the prices on the page
                         priceList.sort(function(a, b) {
                             return a[1] - b[1];
                         });
                         console.log(priceList);  //not sorting
                     })
                 });
             })
             .end();
     }
 };




