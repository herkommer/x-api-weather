document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let inputCityValue = document.getElementById("txtCity").value;
  console.log('You selected: ' + inputCityValue);

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=0ebe027a1c5f50d51704718857a7c51c&units=metric")
   .then(response => response.json())
   .then(data => {
      const { main, name, sys, weather } = data;
      console.log("temperature returned: " + main.temp)
    })
   .catch(() => {
    console.log("something went wrong, sorry");
  });

});