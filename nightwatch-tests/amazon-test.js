'use strict';

module.exports = { //currently working
    'Amazon Test' : function (browser) {
        var price = '';
        browser
            .url('https://www.amazon.com/' )
            .assert.urlEquals( 'https://www.amazon.com/' )
            .waitForElementVisible( '#twotabsearchtextbox' , 2000 )
            .click( '#twotabsearchtextbox' )
            .setValue( '#twotabsearchtextbox', 'nike shoes' )
            .click('.nav-search-submit > input.nav-input' )
            .pause(1000)
            .click('#sort')
            .click('option[value=price-asc-rank]')
            .pause(2000)
            .click('#result_0')
            .pause(2000)
            .getText('#priceblock_ourprice', function(result) {
                price = result.value.substring(1 ,6);
                console.log('price is ', price);
                browser.assert.deepEqual(price < 100, true, "Asserting the value is less than 100")
                browser.end() ;
            })
    }
};




