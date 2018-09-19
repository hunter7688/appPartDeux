export const SET_TEAM_NAME = 'SET_TEAM_NAME';

export const SELECT = 'SELECT';

export const SKIP = 'SKIP';

export const GET_CHARACTERS_REQUESTED = 'GET_CHARACTERS_REQUESTED';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';


/**
 * TODO Step 4:
 *
 * 1. Create select method
 * 2. Dispatch our getCharactersRequested and getCharactersSuccess
 */

/**
* Set Team Name
*/

export function setTeamName(teamName) {
 return{
   type: SET_TEAM_NAME,
   payload: { teamName }
 }
}


/**
* Select a character
*
* @param character
*/
 // 1.

/**
* Skip Character
*
* @param character
*/
export function skip(character) {
  return{
    type: SKIP,
    payload: { character }
  }
};

/**
 * Get Characters from Marvel
 *
 */
 export function getCharacters() {
   return (dispatch) => {

     let marvelResponse = {
         data: {
           results: [
             {
               id: 1,
               name: 'Hulk',
               thumbnail: { path: 'https://media.giphy.com/media/XSc4Kkc5u2WZy/giphy.gif?response_id=5924e51c9c00278bccae6381' }
             },
             {
               id: 2,
               name: 'Spiderman',
               thumbnail: { path: 'https://media.giphy.com/media/wxM2SPuC0xONy/giphy.gif?response_id=5924e4fbdce001eee5377580' }
             },
             {
               id: 3,
               name: 'Wolverine',
               thumbnail: { path: 'https://media.giphy.com/media/12m3hgKuSuhClW/giphy.gif?response_id=5924e4caa6a5ded54cf455f4' }
             }
           ]
         }
     };

    /* 2. Dispatch getCharactersRequested and getCharactersSuccess here

    */

   };
 };

 export function getCharactersRequested() {
   return {
     type: GET_CHARACTERS_REQUESTED
   };
 };

 export function getCharactersSuccess(characters) {
   return {
     type: GET_CHARACTERS_SUCCESS,
     payload: { characters }
   };
 };

 export function getCharactersFailure(error) {
   return{
     type: GET_CHARACTERS_FAILURE,
     payload: { error }
   }
 }
