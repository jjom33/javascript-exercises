const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  celsius= Math.ceil(celsius * 10) / 10;

  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  fahrenheit = Math.ceil(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
