import {encoded, translations} from './data.js'

  function decode() {
    const translationsCodes = Object.keys(translations)
    let decodedData = encoded.map((elem) => {
      let obj = {}
      for (let prop in elem){
        if (prop.endsWith('Id') && elem[prop] !== null && translationsCodes.includes(elem[prop])) {
          obj[prop] = translations[elem[prop]]
        } else if (['groupId', 'service', 'formatSize', 'ca'].includes(prop)) {
          obj[prop] = elem[prop]
        }
      }
      return obj
    })
    return decodedData
  }
const decoded = decode()

console.log("Let's rock")
console.log(`encoded, translations:`)
console.log(encoded, translations)

console.log(`decoded:`)
console.log(decoded)
