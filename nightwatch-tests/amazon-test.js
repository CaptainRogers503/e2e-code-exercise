module.exports = {
    'Login test': function (client) {
        client
            .url('https://www.amazon.com/')
            .assert.urlEquals('https://www.amazon.com/')
            .end();
    }
};