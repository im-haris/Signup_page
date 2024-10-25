

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
