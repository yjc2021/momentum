const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "All dreams are within reach. All you have to do is keep moving towards them.",
        author: "Viola Davis"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt",
    },
    {
        quote: "Limit your \"always\" and your \"nevers.\"",
        author: "Amy Poehler​",
    },
    {
        quote: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
        author: "Joseph Campbell",
    },
    {
        quote: "If I cannot do great things, I can do small things in a great way.",
        author: "Martin Luther King Jr.",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;

