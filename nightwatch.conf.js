var SELENIUM_CONFIGURATION = {
    start_process: false,
    server_path: 'bin/selenium-server-standalone-3.8.1.jar',
    host: '127.0.0.1',
    port: 4444
};

//var FIREFOX_CONFIGURATION = {
//    browserName: 'firefox',
//    javascriptEnabled: true,
//    acceptSslCerts: true
//};

var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    javascriptEnabled: true,
    acceptSslCerts: true,
    //chromeOptions: {
    //    args: ["no-sandbox"]
    //}
};

var DEFAULT_CONFIGURATION = {
    launch_url: 'http://localhost',
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION
};

module.exports = {
    src_folders: ['nightwatch-tests'],
    page_objects_parth: 'nightwatch-tests/amazon-test.page',
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS
};