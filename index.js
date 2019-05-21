'use strict'

let searchQuery = "song"


const searchGenius = () => {
    let base_url = 'https://api.genius.com'
   
    let search_url = base_url + `/search?q=${searchQuery}&access_token=rf8Kw3nqCf5zuhRsiXMdyq1Kyx3x0xJvPL7rh96VACHXXZCQzwRYiLbghBsTYLT5`
    fetch(search_url)
    .then(response => response.json())
    .then(responseJson => parseSongUrl(responseJson))
}

const parseSongUrl = response => {
    let firstSong = response.response.hits[0]
    console.log(firstSong)
    let lyricsUrl = firstSong.result.url
    console.log(lyricsUrl)

}




const watchForm = () => $("form").on("submit", function(event) {
    event.preventDefault()
    searchQuery = $(".js-search-query").val()
    console.log(searchQuery)
    searchGenius()

})





const runApp = () => {

    watchForm()
    

}

$(runApp())