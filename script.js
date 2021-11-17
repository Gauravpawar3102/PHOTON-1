// *Quote section element selection and apiKey
const quote = document.querySelector('.quote');
const twitter = document.querySelector('.twitter-btn');
const bulb = document.querySelector('.fa-lightbulb');

const apiKey = `75bc0c04d9mshad42a5402de3ceap123ca2jsn0eba70fbcded`;
// *Quotes Api
const quoteUrl = `https://quotes15.p.rapidapi.com/quotes/random/`;
const quoteHost = `quotes15.p.rapidapi.com`;

const getData = async (url, host) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': host,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status:${response.status}`);
  }
  return await response.json();
};
//* runApi =>Running the api accordingly
const runApi = async () => {
  //  Get Quotes data by using the getData Function
  const quoteData = await getData(quoteUrl, quoteHost);
  // console.log(quoteData);
  loadQuote(quoteData);
};

runApi();

//*Quote Integration

function loadQuote(quoteData) {
  if (quoteData.content.length >= 300 || quoteData.content == null) {
    quote.textContent = `"Happiness is a perfume which you cannot pour on someone without getting some on yourself."`;
  } else {
    quote.textContent = `"${quoteData.content}"`;
  }
}

//* Twitter Integration
function tweet() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}`;
  window.open(twitterUrl, '_blank');
}

//* event listeners

twitter.addEventListener('click', tweet);
bulb.addEventListener('click', () => {
  document.body.classList.toggle('mode');
  if (document.body.classList.contains('mode')) {
    bulb.style.color = 'yellow';
  } else {
    bulb.style.color = 'grey';
  }
});

// * Dark/Light Mode

// !Reference section for My self & old way of getting data
// calling function
// console.log('Data:', data);
// console.log('Quote:', data.content);
// console.log('Writer:', data.originator.name);
// Fetching the data from api
// if (data.content.length >= 100 || data.content == null) {
//   quote.textContent = `"Happiness is a perfume which you cannot pour on someone without getting some on yourself."`;
// } else {
//   quote.textContent = `"${data.content}"`;
// }

// function onload() {
//   fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host': 'quotes15.p.rapidapi.com',
//       'x-rapidapi-key': '75bc0c04d9mshad42a5402de3ceap123ca2jsn0eba70fbcded',
//     },
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       loadQuote(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
// getData-->function for all api integration

// onload();
