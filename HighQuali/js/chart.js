google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Date (2022 JUL)', 'Times'],
    ['01', 200],
    ['02', 150],
    ['03', 50],
    ['04', 300],
    ['05', 500],
    ['06', 2000],
    ['07', 1000],
    ['08', 1500]
  ]);

  var options = {
    title: 'Click-throughs',
    curveType: 'function',
    legend: { position: 'bottom' },
    backgroundColor: 'transparent',
    titleTextStyle: { color: '#fff' },
    width: '1200',
    height: '500',
    hAxis: {
      textStyle: {
        color: '#fff'
      },
      titleTextStyle: {
        color: '#fff'
      }
    },
    vAxis: {
      textStyle: {
        color: '#fff'
      },
      titleTextStyle: {
        color: '#fff'
      }
    },
    legend: {
      textStyle: {
        color: '#fff'
      }
    },
    series: {0: {color: '#fff'}}
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}