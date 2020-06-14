const puppeteer = require('puppeteer')

async function robo() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    const UrlGoogle = `https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome..69i57j0l7.2760j0j7&sourceid=chrome&ie=UTF-8`

    await page.goto(UrlGoogle)

    const valorDoDolar = await page.evaluate(() => {
        let resposta = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value

        if (resposta) resposta = Number(resposta)

        return resposta
    })

    console.log(`O valor do dolar é de: ${valorDoDolar}`)

    await browser.close()
}

robo()