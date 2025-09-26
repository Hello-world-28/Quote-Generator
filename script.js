const api_url = "https://quotes-api-self.vercel.app/quote";
const quoteBox = document.getElementById("quote");
const authorBox = document.getElementById("author");
const quoteBtn = document.getElementById("generate-quote");
const tweetBtn = document.getElementById("X-share-button");

async function getQuote(url){
    const response = await fetch(api_url);
    var data = await response.json();
    var quote = data.quote;
    var author = data.author;
    quoteBox.innerHTML = quote;
    authorBox.innerHTML = author;

}

quoteBtn.addEventListener("click", ()=>{
    getQuote(api_url);
});

tweetBtn.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text=" +  quoteBox.innerHTML + "\n--by" + authorBox.innerHTML, "X-Window", "width = 600, height = 300");
});
getQuote(api_url);
