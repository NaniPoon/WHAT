function celsiusToFahrenheit(temp){
    Fahrenheit = ((temp*9)/5)+32;
    console.log(`${temp}°C is ${Fahrenheit}°F`);
    
}

function fahrenheitToCelsius(temp){
    Celsius = ((temp-32)*5)/9 ;
    console.log(`${temp}°C is ${Celsius}°F`);
}

celsiusToFahrenheit(32);
fahrenheitToCelsius(32);