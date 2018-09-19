import 'whatwg-fetch'
import md5 from 'md5'
const PUBLIC_KEY =  '3cd0ee2ce55240c071fc0467bf9a5834'
const PRIVATE_KEY =  'e490487de9960dd54b46dad59c2b350abbf89d8c'

/**
 * Retrieve characters from Marvel API
 *
 * @param category
 * @returns Promise
 */

export function getMarvelCharacters(){
  const ts = new Date().getTime()
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  return fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};
