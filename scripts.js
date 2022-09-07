const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9900d5605amsh9274b8a92d23cf4p14e159jsn52d1762d9be5',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

function fetchRawData(){
	fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

fetchRawData();


