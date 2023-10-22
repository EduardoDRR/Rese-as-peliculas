const API_KEY = "f4657ee8b584296594b2ed5c841f9919" 
const API = `https://www.themoviedb.org/`;


export function get(path){ //eslint-disable-line
    return fetch(API + path,{
        headers:{
            Authorization: 
            `Bearer ${API_KEY}`,
            "Content-Type": "aplication/json; charset=utf-8"
        },
    }).then((result)=> result.json());
        
}

/*  
Bearer eyJhbGciOiJIUzI1NiJ9.
eyJhdWQiOiJmNDY1N2VlOGI1ODQy
OTY1OTRiMmVkNWM4NDFmOTkxOSIsIn
N1YiI6IjY1MTI4YjZiMzQ0YThlMDk3MDA
1N2Y2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJ
dLCJ2ZXJzaW9uIjoxfQ.Mj578sCeLb3Ux5MzKldwcmvA83nrQUY-E0yfZiqBf5Q
*/