const quotes = [
	{quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    	author : "Nelson Mandela"},
        {quote : "The way to get started is to quit talking and begin doing.",
    	author : "Eleanor Roosevelt"},
        {quote : "If life were predictable it would cease to be life, and be without flavor.",
    	author : "Oprah Winfrey3"},
        {quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    	author : "Oprah Winfrey"},
	]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length) ];

quote.innerText = todaysQuote.quote ;
author.innerText = todaysQuote.author ;