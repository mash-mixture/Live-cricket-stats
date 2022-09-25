// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '08aa1922e1mshaf887f0a134e795p18ad77jsn561a06fbcb0f',
// 		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
// 	}
// };


// async function getData(){
//    await fetch('https://livescore6.p.rapidapi.com/matches/v2/detail?Category=cricket', options)
//    .then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }
// getData();

//todo 'https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState='+currentTab+'



const optionsTest = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08aa1922e1mshaf887f0a134e795p18ad77jsn561a06fbcb0f',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/overs', optionsTest)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08aa1922e1mshaf887f0a134e795p18ad77jsn561a06fbcb0f',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	}
};

const liveInnerTabs = document.querySelector('#live-inner');
const MatchesDiv = document.querySelector('.matches');

async function getData(){
await fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=live', options)
	.then(response => response.json())
	.then(response => {
		//serie name
		//console.log(response.typeMatches[0]['seriesAdWrapper'][0]['seriesMatches']['matches'][0]['matchInfo']['status']);
		console.log('MAIN OBJECT');
		console.log(response);
		document.querySelector('.loading').innerHTML='';
		//document.querySelector('#score_left').innerHTML=response.typeMatches[0]['seriesAdWrapper'][0]['seriesMatches']['matches'][0]['matchInfo']['status'];
		//document.querySelector('#series_name').innerHTML=response.typeMatches[0]['seriesAdWrapper'][0]['seriesMatches']['seriesName'];
		//console.log(response.typeMatches[0]['seriesAdWrapper'][0]['seriesMatches']['seriesName']);
		console.log(response.typeMatches);
		let matchTypes = response.typeMatches;
		//let matches = 

		matchTypes.forEach(element => {
			console.log(element);
			liveInnerTabs.innerHTML += `<button id="${element.matchType}" class="match-type">${element.matchType}</button>`;
			element.seriesAdWrapper.forEach(element => {
				console.log(element);
				let Property = element.seriesMatches.seriesName;
				if(Object.hasOwnProperty(`${Property}`)){
					console.log('Executed');
				}
				else{
					console.log('Not Propety');
				}
				MatchesDiv.innerHTML += `<div data-match="${element.matchType}" class="match-type">${element.seriesMatches}</div>`;
			});
			//liveInnerTabs.innerHTML += `<div data-match="${element.matchType}" class="match-type">${element.seriesAdWrapper}</div>`;
		});

		

		
	})
	.catch(err => console.error(err));
	 }
	 if(navigator.onLine) {
        getData();
		//console.log('Online');
    } else {
		document.querySelector('.loading').innerHTML="Oops! You're offline. Please check your network connection...";
    }
 
 

//Score card
//fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard', options)

//Commentry
//fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm', options)

//Live core api
//fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer', options)

//Live by date
//fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=cricket&Date=20201028', options)