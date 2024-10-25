const DATA_COUNT = 7;
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Female',
            data: [10, 30, 39, 20, 25, 34,],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgb(155, 126, 189)',
        },
        {
            label: 'Male',
            data: [18, 33, 22, 19, 11, 39, 30],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: '#3B1E54',
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Birthday Line Chart'
            }
        },
        scales: {
            y: {
                suggestedMin: 30,
                suggestedMax: 50,
            }
        }
    },
};

const myChart = new Chart( document.getElementById('myChart'), config
);