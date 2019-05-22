'use strict'

let searchQuery = "song"
const setLyrics = data => {
    let html = data.contents
    let lyrics = $(html).find(".lyrics").html()
    $(".lyrics").html(lyrics)
    
}

const getHTML = url => {
    url = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?'
    $.getJSON(url,setLyrics)

}




const searchGenius = () => {
    let base_url = 'https://api.genius.com'
   
    let search_url = base_url + `/search?q=${searchQuery}&access_token=rf8Kw3nqCf5zuhRsiXMdyq1Kyx3x0xJvPL7rh96VACHXXZCQzwRYiLbghBsTYLT5`
    fetch(search_url)
    .then(response => response.json())
    .then(responseJson => parseSongUrl(responseJson))
    .catch(error => alert("There was an error")
    )
}

const parseSongUrl = response => {
    let firstSong = response.response.hits[0]
    console.log(firstSong)
    let lyricsUrl = firstSong.result.url
    console.log(lyricsUrl)

    getHTML(lyricsUrl)

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