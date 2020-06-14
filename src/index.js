const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync')

async function robo() {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    const moedaBase = readlineSync.question('Informe uma moeda base (dolar, euro...): ') || 'dolar'
    const moedaFinal = readlineSync.question('Informe uma moeda desejada (real): ') || 'real'

    const UrlGoogle = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0l7.2760j0j7&sourceid=chrome&ie=UTF-8`

    await page.goto(UrlGoogle)

    const valorDoDolar = await page.evaluate(() => {
        let resposta = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc')

        if (resposta) resposta = Number(resposta.value)

        return resposta
    })

    console.log(`O valor do dolar é de: ${valorDoDolar}`)

    await browser.close()
}

robo()