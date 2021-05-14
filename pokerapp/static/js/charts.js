function generateCharts() {

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Final Quiz'],
            datasets: [{
                label: 'Your % Correct ',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1

            }, {
                label: 'Site Average % Correct',
                data: [29, 39, 49, 58],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]


        },
        options: {
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                }
            }
        }
    });

    var atx = document.getElementById('barChart');
    var barChart = new Chart(atx, {
        type: 'bar',
        data: {
            labels: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Final Quiz'],
            datasets: [{
                label: 'Site Average Results',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'easeInOutQuint'
                }
            },
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                }
            }
        }
    })
};
generateCharts();