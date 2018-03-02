const fs = require('fs')
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  const page = await browser.newPage()
  await page.goto('https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number')
  await page.waitForSelector('tbody')
  let pokes = await page.evaluate(getPokes => {
    return new Promise((resolve, reject) => {
      let pokes = []
      let nGen = 7
      let newPokes = []
      while (nGen--) {
        newPokes = Array.from(document.querySelectorAll('tbody')[nGen + 1].querySelectorAll('tr')).map((v, i) => {
          if (i !== 0) {
            return {
              id: v.querySelectorAll('td')[1].innerHTML.substr(2, 3),
              name: v.querySelectorAll('td')[3].outerText
            }
          }
          return {
            id: '',
            name: ''
          }
        })

        pokes = [...pokes, ...newPokes]
      }
      resolve(pokes)
    })
  })

  pokes.forEach(v => {
    fs.rename(`./${v.id}.png`, `./${v.name}.png`, (err) => (
      err ? console.log('Erro : ' + err) : null
    ))
  })

  await browser.close()
})()
