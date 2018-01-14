module.exports = {
    'Amazon Test': function (client) {
        client
            .url('https://www.amazon.com/')
            .assert.urlEquals('https://www.amazon.com/')
            .waitForElementVisible('#twotabsearchtextbox', 2000)
            .click('#twotabsearchtextbox')
            .setValue('#twotabsearchtextbox', 'nike shoes')
            .click('.nav-search-submit > input.nav-input')
            .pause(1000)
            //.assert.url('https://www.amazon.com/')
            .pause(3000)
            .end();
    }
};