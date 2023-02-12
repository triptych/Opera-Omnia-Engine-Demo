// fetch json data from https://Opera-Omnia.triptych.repl.co/monsters
// and display on page
fetch('https://Opera-Omnia.triptych.repl.co/monsters')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // append each element to the page as html
    output = ``;
    data.data.forEach((monster) => {
      output =  `${output} <li>${monster}</li>`;
    });
  
    document.querySelector('#response').innerHTML = output;
  });

