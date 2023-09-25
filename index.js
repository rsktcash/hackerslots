require('dotenv').config();
const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

async function robo() 
{
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    const login = 'rodrigosantanamendanha@gmail.com';
    const senha = '123456789';
     
    await page.goto('https://hackerdoslot2.com/login');

    // - Preencher login e senha

    await page.type('[name="mail"]', login);

    await page.type('[name="password"]', senha);

    await page.click('[class="btn btn-danger w-100"]');

}

robo();