const Promise = require('bluebird'),
    puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

function screenshot(href, filepath) {
    let browser = null, page = null;
    puppeteer.launch({executablePath: '/usr/bin/google-chrome-stable'})
    .then((_browser) => {
        console.log('Got browser object ...');
        browser = _browser;
        return browser.newPage();
    })
    .then((_page) => {
        console.log('Got page object ...');
        page = _page;
        page.setViewport({width: 1855, height: 2056});
        return page.goto(href, {waitUntil: 'networkidle2'});
    })
    .then(() => {
        console.log('Loading page ...');
        return delay(5000);
    })
    .then(() => {
        return page.screenshot({path: filepath});
    })
    .then(() => {
        console.log('Done !');
        browser.close();
    })
    .catch((err) => {
        console.error(err);
        browser.close();
    });
}

screenshot('http://demo.xpeedstudio.com/html/fundpress/', '/home/muqsith/Pictures/fundpress.png');
screenshot('http://wptheme.co.in/restaurent_html/', '/home/muqsith/Pictures/food.png');
