const fs = require('fs')
const request = require('request')
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

  getImages(pokes)

  await browser.close()
})()

const download = (uri, filename) => {
  return new Promise((resolve, reject) => {
    request.head(uri, (err, res, body) => {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', () => {
        resolve(true)
      })
    })
  })
}

async function getImages (pokes) {
  let nPokes = 806
  let pokeName = ''
  while (nPokes--) {
    pokeName = getPokemonName(nPokes, pokes).name.toLowerCase()
    await download(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${leftPad(nPokes)}.png`, `${pokeName}.png`)
    console.log(`download da imagem : ${pokeName}.png`)
  }
}

const leftPad = (number) => (`000${number}`).substr(-3, 3)
const getPokemonName = (n, arr) => arr.find(i => i.id == n)
