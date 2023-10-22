
const API_URL = "https://api.themoviedb.org/3"

function get(path) {
    return fetch(API_URL + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDY1N2VlOGI1ODQyOTY1OTRiMmVkNWM4NDFmOTkxOSIsInN1YiI6IjY1MTI4YjZiMzQ0YThlMDk3MDA1N2Y2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mj578sCeLb3Ux5MzKldwcmvA83nrQUY-E0yfZiqBf5Q",
            "Content-Type" : "application/json;charset=utf-8"
        }
    }).then(result => result.json())
}
export default get;
