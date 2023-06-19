function loadData(){
	const city = document.getElementById('city_input').value;
	
	// fetch(`http://api.openweathermap.org/data/2.5/weather?q=Madaripur&APPID=6640fe31d75d8622eeaf76221d0bfa3e`)
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6640fe31d75d8622eeaf76221d0bfa3e`)
      .then(res => res.json())
      .then( data => displayData(data))
}


function displayData(data){
	console.log(data);
	//console.log(data.sys.country);
	//console.log(data.weather[0].main); //weather
	//console.log(data.weather[0].description);

	const weatherContainer = document.getElementById('weatherContainer');

	const postDiv = document.createElement('div');
	postDiv.innerHTML = `
		<h2>Weather Information </h2>
		<h4>Weather OF ${data.name}</h4>
		<h4>Weather Conditions is  ${data.weather[0].main}</h4>
		<h4>Country ${data.sys.country}</h4>
		<h4>Timezone ${data.timezone}</h4>
		<p>Description ${data.weather[0].description}</p>

		

	`;

	weatherContainer.appendChild(postDiv);
}