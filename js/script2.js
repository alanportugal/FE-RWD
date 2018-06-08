//script.js file
//This file will contain the code that creates the Google Charts of a given data set.

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawREPchart2);
google.charts.setOnLoadCallback(drawATECchart);


function drawREPchart2(){
	// Create a new request object
	let request = new XMLHttpRequest()
	// TODO: URL to contact goes here
	//let requestUrl = "https://api.eia.gov/series/?api_key=aae210b5281c190a4a8d6907bf90b673&series_id=SEDS.REPRB.FL.A"
	let requestUrl = "https://api.eia.gov/series/?api_key=aae210b5281c190a4a8d6907bf90b673&series_id=SEDS.TETCB.FL.A"

	// Open a connection
	request.open('GET', requestUrl, true)
	// Callback for when the request completes
	request.onload = function(){
	  let theActualData = JSON.parse(request.response).series[0].data

	  drawBasic(theActualData)
	}
	// Callback for when there's an error
	request.error = function(err){
	  console.log("error is: ", err)
	}
	// Send the request to the specified URL
	request.send()
}

function drawBasic(freshData) {
	console.log("freshData", freshData)
	freshData.unshift(["Year", "Billion BTUs"])

	var data = google.visualization.arrayToDataTable(freshData);

	var options = {
		chart: {
			title: 'Renewable Energy Production in Florida',
			subtitle: 'Billions of BTUs per Year'
		},
		legend: { position: 'none' },
		width: 600,
		height: 400
    };

    var chart = new google.charts.Bar(document.getElementById('chart_REP'));

    chart.draw(data, options);

}



function drawATECchart(){
	var data = google.visualization.arrayToDataTable([
		['Year', 'Billion BTUs'],
		['1960', 35680],
		['1961', 34417],
		['1962', 35826],
		['1963', 38613],
		['1964', 39016],
		['1965', 39916],
		['1966', 42760],
		['1967', 44550],
		['1968', 49556],
		['1969', 51489],
		['1970', 51035],
		['1971', 49968],
		['1972', 54389],
		['1973', 56250],
		['1974', 52429],
		['1975', 50007],
		['1976', 56507],
		['1977', 59953],
		['1978', 65357],
		['1979', 69419],
		['1980', 90049],
		['1981', 83117],
		['1982', 104674],
		['1983', 91705],
		['1984', 108740],
		['1985', 110698],
		['1986', 116356],
		['1987', 107606],
		['1988', 113802],
		['1989', 232261],
		['1990', 198986],
		['1991', 212955],
		['1992', 230779],
		['1993', 217028],
		['1994', 215563],
		['1995', 220211],
		['1996', 240343],
		['1997', 231308],
		['1998', 205485],
		['1999', 204114],
		['2000', 194952],
		['2001', 158038],
		['2002', 174327],
		['2003', 188473],
		['2004', 179462],
		['2005', 183175],
		['2006', 185564],
		['2007', 190489],
		['2008', 195232],
		['2009', 213642],
		['2010', 223518],
		['2011', 222956],
		['2012', 220020],
		['2013', 229666],
		['2014', 226863],
		['2015', 234192]
    ]);

    var options = {
		chart: {
			title: 'Annual Total Electricty Consumption in Florida',
			subtitle: 'Billions of BTUs per Year'
		},
		legend: { position: 'none' },
		width: 600,
		height: 400,
    };

    var chart = new google.charts.Bar(document.getElementById('chart_ATEC'));

    chart.draw(data, options);
}