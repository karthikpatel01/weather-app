function getWeather() {
    //getting data from the input
    let city = document.getElementById("city")
    showWeather(city.value)


}

//using async and await fetching the data city wise
async function showWeather(city) {
   const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '113563c4afmsha27d60b44378d40p13d956jsn21eddc8b9184',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};



  try {
    const response = await fetch(url, options);
    if (!response) {
      throw new Error("Weather not supported");
    }
    const result = await response.json();
    getdata(result);
  } catch (error) {
    console.log(error);
    document.getElementById("main").innerHTML = `<p style="color:red;">❌ City not found </p>`;
  }
}


function getdata(result) {
    //accessing the element for append the data to the body
    let item = document.getElementById("main")
    item.innerHTML =
        `<p>city: ${result.name}</p>
    <p>temparature: ${result.main.temp}</p>
    `
    
}
