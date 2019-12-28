/******************************************
  A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

const quotes = [
    {quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', source: 'Nelson Mandela'}, 
    {quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."', source: 'Steve Jobs'}, 
    {quote: '"If life were predictable it would cease to be life, and be without flavor"', source: 'Eleanor Roosevelt'}, 
    {quote: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."', source: 'Oprah Winfrey'}, 
    {quote: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."', source: 'James Cameron'}
];

/***
 * `getRandomQuote` function
***/

const getRandomQuote = () => {

  // generate a random quote from array
  let random = Math.floor(Math.random() * quotes.length);

  // return the random quote
  return quotes[random];
}

/***
 * `printQuote` function
***/

const printQuote = () => {

  // variable that calls getRandomQuote function
  let currentQuote = getRandomQuote();

  // variable that initiates HTML string
  let htmlString = `<p class="quote"> ${currentQuote.quote} </p>
                    <p class="source"> ${currentQuote.source} </p>`;

  // change html of quote section
  document.getElementById('quote-box').innerHTML = htmlString;
}
 
/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);