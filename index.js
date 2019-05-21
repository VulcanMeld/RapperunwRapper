'use strict'

const geniusToken = `Bearer bhKRd8FS9mr2uQMM76SO_qXBVRvYBLKNoy47fS226YMH3YwcTjEBYC8nwde54bHO`



const searchGenius = () => {
    let geniusSearchUrl = `https://api.genius.com/search?q=`
    fetch(geniusSearchUrl)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
}




const watchForm = () => $("form").on("submit", function(event) {
    event.preventDefault()
    let searchQuery = $(".js-search-query").val()
    //console.log(searchQuery)
    searchGenius()

})





const runApp = () => {

    watchForm()
    

}

$(runApp())