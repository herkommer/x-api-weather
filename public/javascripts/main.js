document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let inputCityValue = document.getElementById("txtCity").value;
  console.log('You selected: ' + inputCityValue);
});
