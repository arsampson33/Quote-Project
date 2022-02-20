/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



//Array of quotes
let quotes = [
  {
    quote: 'Never, ever be afraid to get make some noise and get in good trouble, necessary trouble.',
    source: 'John Lewis',
    year: '2020'
  },
  {
    quote: 'Love is a combination of care, commitment, knowledge, responsibility, respect and trust.',
    source: 'Bell Hooks',
    citation: 'Communion: The Female Search for Love',
    year: '2002'
  },
  {
    quote: 'We gon\' be alright.',
    source: 'Kendrick Lamar',
    citation: 'Alright',
    year:'2015'
  },
  {
    quote: 'The seed must grow regardless of the fact that it\’s planted in stone.',
    source: 'Tupac',
    citation: 'Can U C the Pride in the Panther',
    year: '1999'
  },
  {
    quote: 'Hold fast to dreams, for if dreams die life is a broken-winged bird that cannot fly.',
    source: 'Langston Hughes',
    citation: 'Dreams'
  },
  {
    quote: 'The soul that is within me no man can degrade.',
    source: 'Frederick Douglass',
  },
  {
    quote: 'Have a vision of excellence, a dream of success, and work like hell.',
    source: 'Samuel DuBois Cook, Ph.D'
  },
  {
    quote: 'If you have no confidence in self, you are twice defeated in the race of life.',
    source: 'Marcus Garvey',
  }
]
 



//Generates a random number using the length of the quote array and then returns subsequent random quote
function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length );
  return quotes[randomNum]
}

//console.log(getRandomQuote())





//Strings together a random quotes properties (checks for citation and year props)
function printQuote() {
  let randomQuote = getRandomQuote();
  let quoteString =  `
    <p class = "quotes"> <h2>${randomQuote.quote}</h2></p>
    <p class = "source"> ${randomQuote.source}` ;
  if ('citation' in randomQuote) {
   quoteString += `<span class = "citation">${randomQuote.citation} </span>`;
}
  if ('year' in randomQuote) {
  quoteString += `<span class = "year">${randomQuote.year}</span>`
}
  quoteString += `</p>`;

  
document.getElementById('quote-box').innerHTML = quoteString;
 
}
//Changes quote every five seconds
setInterval(printQuote, 5000)


//Click event listener provided by Treehouse

document.getElementById('load-quote').addEventListener("click", printQuote, false);