const API_KEY = "fb0f24207fc74c02a2b84801b481c744"

const blogContainer = document.querySelector("#blog-container")
const input = document.querySelector("#searchinput")

const searchBtn = document.querySelector("#search-button")



let fetchRandom = async() =>{
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${API_KEY}`

        const response = await fetch(apiUrl);
        let data = await response.json();
        return data.articles;

    }catch(err){
        console.error("Error Fetching Data....",err)
        return []
    }
}



searchBtn.addEventListener("click",async()=>{
        let query = input.value.trim()
        if(query!==""){
            try{
                let data = await newsquery(query)
                displayBlocks(data)

            }catch(err){
                console.error("Fetching news failed....",err)
            }
        }

})

let newsquery =async(query) =>{
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&from=2024-01-27&sortBy=publishedAt&apiKey=${API_KEY}`
        const response = await fetch(apiUrl);
        let data = await response.json();
        return data.articles;

    }catch(err){
        console.error("Error Fetching Data....",err)
        return []
    }

}

let displayBlocks = (articles) =>{
    blogContainer.innerHTML = ""
    articles.forEach((article)=>{

        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card")
        let shortTitle = article.title.length > 25 ? article.title.slice(0,25)+"..." : article.title;
        let shortDes = article.description.length > 120 ? article.description.slice(0,120)+"..." : article.description


        blogCard.innerHTML =
         `<img src="${article.urlToImage}" alt="">
        <h2>${shortTitle}</h2>
        <p>${shortDes}</p>`

        blogCard.addEventListener('click',() =>{
            window.open(article.url,"_blank")
        })

        blogContainer.appendChild(blogCard)
    })
}




(async()=>{
    try{
        let articles = await fetchRandom()
        console.log(articles)
        displayBlocks(articles)
    }catch(err){
        console.error("error fetching data...",err)
    }
}
)();




