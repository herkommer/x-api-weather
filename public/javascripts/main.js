document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let inputCityValue = document.getElementById("txtCity").value;
  console.log('You selected: ' + inputCityValue);

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=0ebe027a1c5f50d51704718857a7c51c&units=metric")
   .then(response => response.json())
   .then(data => {
      const { main, name, sys, weather } = data;
      console.log("temperature returned: " + main.temp)

      console.log("---Main---");
      console.log(main);
      console.log("---name---");
      console.log(name);
      console.log("---sys---");
      console.log(sys);
      console.log("---weather---");
      console.log(weather);
      console.log("===data - full object===");
      console.log(data);

      const li = document.createElement("li");
      li.classList.add("city");

      const markup = `
        <div>
            <h2>
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div>${main.temp}<sup>°C</sup></div>
        </div>
      `;

      li.innerHTML = markup;
      document.getElementById("cities").appendChild(li);
    })
   .catch(() => {
    console.log("something went wrong, sorry");
  });

});