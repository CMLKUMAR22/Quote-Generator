var quotes=['Your\'e braver than you believe, and stronger than you seem, and smarter than you think.']
const url = "https://api.quotable.io/random";
var data=""
let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
        console.log(item);
      })
      
  };