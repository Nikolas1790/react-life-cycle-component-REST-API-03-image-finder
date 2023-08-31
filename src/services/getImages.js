const BASE_URL = 'https://pixabay.com/api/';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12'
const KEY ='38315175-abb8429954921ba34a6a526ed'

export const getImages = (query, page) => {

    return fetch(`${BASE_URL}?q=${query}&page=${page}&key=${KEY}&${OPTIONS}`)
          .then(resp => resp.json());
          
}

