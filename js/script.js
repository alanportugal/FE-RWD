//script.js file
//This file will contain the code that creates the Google Charts of a given data set.

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawREPchart);

function drawREPchart(){
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Billion BTUs'],
      ['Mushrooms', 1],
      ['Ham', 1],
      ['Pineapple', 1],
      ['Sausage', 2],
      ['Pepperoni', 3]
    ]);

    var options = {
      chart: {
        title: 'What kind of Pizza I Ate Last Night',
      },
    };

    var chart = new google.charts.Bar(document.getElementById('chart_REP'));

    chart.draw(data, options);
}