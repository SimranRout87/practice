function generateQuote(){
    fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data=>{
        const quote = `${data.content}-${data.auhor}`;
        document.getElementById('quote').innerText=quote;
    })
    .catch(eroor=>{
        document.getElementById('quote').innerText='An error occured while fetching the quote.please try again later';
    })
}