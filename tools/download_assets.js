const fs = require('fs')
const request = require('request')

const download = (uri, filename) => {
  return new Promise((resolve, reject) => {
    request.head(uri, (err, res, body) => {
      console.log('content-type:', res.headers['content-type'])
      console.log('content-length:', res.headers['content-length'])

      request(uri).pipe(fs.createWriteStream(filename)).on('close', () => {
        resolve(true)
      })
    })
  })
}

async function getImages () {
  let nPokes = 100
  while (nPokes--) {
    await download(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${leftPad(nPokes)}.png`, `${leftPad(nPokes)}.png`)
    console.log(`download da imagem : ${leftPad(nPokes)}.png`)
  }
}

const leftPad = (number) => (`000${number}`).substr(-3, 3)
getImages()
