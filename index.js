'use strict'




const searchGenius = () => {
    let base_url = 'https://api.genius.com'
   
    let search_url = base_url + '/search?q=Paranoid&access_token=rf8Kw3nqCf5zuhRsiXMdyq1Kyx3x0xJvPL7rh96VACHXXZCQzwRYiLbghBsTYLT5'
    fetch(search_url)
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