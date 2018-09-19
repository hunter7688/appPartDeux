import 'whatwg-fetch'
import md5 from 'md5'
const PUBLIC_KEY =  // {YOUR PUBLIC KEY HERE}
const PRIVATE_KEY = // {YOUR PRIVATE KEY HERE}

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
