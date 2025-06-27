document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('radarChart').getContext('2d');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'Besoin de Léane',
                'Capacité d’écoute',
                'Capacité réelle à aider',
                'Tendance à inventer des diagnostics',
                'Besoin de dormir',
                'Capacité à se remettre en question',
                'Croyance dès la première blague',
                'Capacité à faire des blagues',
                'Capacités'
            ],
            datasets: [{
                label: 'Profil de Bastien M.',
                data: [10, 3, 2, 10, 0, 5, 10, 7.5, 3],
                fill: true,
                backgroundColor: 'rgba(45, 55, 72, 0.2)',
                borderColor: '#2d3748',
                pointBackgroundColor: '#2d3748'
            },
            {
                label: 'Moyenne humaine stable',
                data: [3, 4.5, 6.5, 2, 8.5, 4.2, 3.256, 7.684, 2],
                fill: false,
                borderColor: 'red',
                borderWidth: 2,
                pointBackgroundColor: 'red',
                borderDash: [5, 5]
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
