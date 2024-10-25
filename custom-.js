// ..................................................     PI CHART     ......................................................................


new Chart(document.getElementById('pi-chart'), {
    type: "pie",
    data: {
        labels:['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],  // Corrected 'lables' to 'labels'
        datasets: [{
            backgroundColor: [ "#e63946", "#2548DD",  // Corrected 'backgroundsColor' to 'backgroundColor'
                "#ffbe0b", "#1d3557", "#326998"],
            data: [418, 263, 434, 586, 332]
        }]
    },

    options: {
        title: {
            display: true,
            text: "Pie Chart for Admin Panel",
        },
        responsive: true,
    }
});


var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bar-chart/js/jsonData.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        date = data.date_population.map(function(elem){
            return elem.date;
        })
        population = data.date_population.map(function(elem){
            return elem.population;
        })
        //console.log(population)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Population',
                    data: population,
                    backgroundColor: "#ff335e"
                    
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}



// ..........................................................................................................................................



var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bar-chart/js/jsonData.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data)
        date = data.date_population.map(function(elem){
            return elem.date;
        })
        population = data.date_population.map(function(elem){
            return elem.population;
        })
        //console.log(population)

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: date,
                datasets: [{
                    label: 'Population',
                    data: population,
                    backgroundColor: "#ff335e"
                    
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}




console.log('Custom.js is running');
const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels, // Fix: Corrected 'label' to 'labels'
    datasets: [{
        label: 'My first dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(201, 203, 207, 1)',
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar', // Fix: Changed semicolon to comma
    data: data, // Fix: Removed quotes around 'data'
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const myChart = new Chart(ctx, config);



function setPoll(day) {
    console.log(day.value);
    localStorage.setItem("selectedDay", day.value);
    updatePoll();
}

function updatePoll() {
    console.log(localStorage.getItem("selectedDay"));
}

