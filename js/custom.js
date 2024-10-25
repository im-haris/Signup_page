// ..................................................     PI CHART     ......................................................................


// new Chart(document.getElementById('pi-chart'), {
//     type: "pie",
//     data: {
//         labels: ['HTML', 'CSS', 'JS', 'PHP', 'MYSQL'],  // Corrected 'lables' to 'labels'
//         datasets: [{
//             backgroundColor: [ "#e63946", "#2548DD",  // Corrected 'backgroundsColor' to 'backgroundColor'
//                 "#ffbe0b", "#1d3557", "#326998"],
//             data: [418, 263, 434, 586, 332]
//         }]
//     },

//     options: {
//         title: {
//             display: true,
//             text: "Pie Chart for Admin Panel",
//         },
//         responsive: true,
//     }
// });


// var xmlhttp = new XMLHttpRequest();
// var url = "http://localhost/bar-chart/js/jsonData.json";
// xmlhttp.open("GET",url,true);
// xmlhttp.send();
// xmlhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         var data = JSON.parse(this.responseText);
//         //console.log(data)
//         date = data.date_population.map(function(elem){
//             return elem.date;
//         })
//         population = data.date_population.map(function(elem){
//             return elem.population;
//         })
//         //console.log(population)

//         const ctx = document.getElementById('canvas').getContext('2d');
//         const myChart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: date,
//                 datasets: [{
//                     label: 'Population',
//                     data: population,
//                     backgroundColor: "#ff335e"
                    
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//     }

// }



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

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday' ,'Friday', 'Saturday', 'Sunday'];


const daysPoll = [65, 59, 80, 81, 56, 55, 40];
const data = {
    labels: labels, // Fix: Corrected 'label' to 'labels'
    datasets: [{
        label: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'], 
        data: daysPoll,
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

const myChart = new Chart(
    document.getElementById("myChart"),
    config
);


function setPoll(day) {
    console.log(day.value);
    localStorage.setItem("selectedDay", day.value);
    updatePoll();
}

function updatePoll() {
    const item = localStorage.getItem("selectedDay");
    const index = data.labels.indexOf(item);

    myChart.config.data.datasets[0].data[index] = myChart.config.data.datasets[0].data[index] + 1;
    myChart.update();
}

// ........................................................................................................................


// Retrieve users from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Extract user names to use as labels for the pie chart
let userLabels = users.map(user => user.name);

// Optional: You could also count the number of sign-ins or just use 1 for each user
let signInCounts = users.map(user => 1);

// Creating the pie chart
new Chart(document.getElementById('pi-chart'), {
    type: "pie",
    data: {
        labels: userLabels.length > 0 ? userLabels : ['No Users Found'], // Use user names or a placeholder if no users
        datasets: [{
            backgroundColor: [
                "#e63946", "#2548DD", "#ffbe0b", "#1d3557", "#326998",
                "#2a9d8f", "#f4a261", "#e9c46a", "#264653", "#e76f51"
            ],
            data: signInCounts.length > 0 ? signInCounts : [1], // Use sign-in counts or a placeholder
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

// Example JSON data for the bar chart
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/bar-chart/js/jsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        // Extract date and population data
        let dates = data.date_population.map(elem => elem.date);
        let populations = data.date_population.map(elem => elem.population);

        const ctx = document.getElementById('canvas').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Population',
                    data: populations,
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
};

