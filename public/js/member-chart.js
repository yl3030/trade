const memberRate = document.getElementById('member_rate_plot_convas');
const memberRateChart = new Chart(memberRate, {
    type: 'line',
    data: {
        labels: [
            '2020-10-30', 
            '2020-10-31', 
            '2020-11-01',
            '2020-11-02',
            '2020-11-03',
            '2020-11-04',
            '2020-11-05',
            '2020-11-06',
            '2020-11-07',
            '2020-11-08',
            '2020-11-09',
            '2020-11-10',
            '2020-11-11',
            '2020-11-12',
            '2020-11-13',
            '2020-11-14',
            '2020-11-15',
            '2020-11-16',
            '2020-11-17',
            '2020-11-18',
            '2020-11-19',
            '2020-11-20',
            '2020-11-21',
            '2020-11-22',
            '2020-11-23',
            '2020-11-24',
            '2020-11-25',
            '2020-11-26',
            '2020-11-27',
            '2020-11-28',
        ],
        datasets: [{
            data: [
                -200, 
                100, 
                200,
                300,
                200,
                900,
                  0,
                 50,
                400,
                200,
                 33,
                -10,
                400,
                700,
                200,
                400,
                300,
                900,
                100,
                 -4,
                 20,
                 50,
                300,
                500,
                800,
                200,
                  0,
                 80,
                500,
                1000
            ],
            backgroundColor: '#fff',
            borderColor: '#2C90F4',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#EAEAEA',
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            x: {
                grid: {
                    color: 'transparent',
                },
                ticks: {
                    callback: function(value) {
                        return '';
                    }
                }
            },
            grid: {
                display:false,
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    }
});

const memberAccu = document.getElementById('member_accumulate_plot_convas');
const memberAccuChart = new Chart(memberAccu, {
    type: 'line',
    data: {
        labels: [
            '2020-10-30', 
            '2020-10-31', 
            '2020-11-01',
            '2020-11-02',
            '2020-11-03',
            '2020-11-04',
            '2020-11-05',
            '2020-11-06',
            '2020-11-07',
            '2020-11-08',
            '2020-11-09',
            '2020-11-10',
            '2020-11-11',
            '2020-11-12',
            '2020-11-13',
            '2020-11-14',
            '2020-11-15',
            '2020-11-16',
            '2020-11-17',
            '2020-11-18',
            '2020-11-19',
            '2020-11-20',
            '2020-11-21',
            '2020-11-22',
            '2020-11-23',
            '2020-11-24',
            '2020-11-25',
            '2020-11-26',
            '2020-11-27',
            '2020-11-28',
        ],
        datasets: [{
            data: [
                -200, 
                100, 
                200,
                300,
                200,
                900,
                  0,
                 50,
                400,
                200,
                 33,
                -10,
                400,
                700,
                200,
                400,
                300,
                900,
                100,
                 -4,
                 20,
                 50,
                300,
                500,
                800,
                200,
                  0,
                 80,
                500,
                1000
            ],
            backgroundColor: '#fff',
            borderColor: '#2C90F4',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#EAEAEA',
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            x: {
                grid: {
                    color: 'transparent',
                },
                ticks: {
                    callback: function(value) {
                        return '';
                    }
                }
            },
            grid: {
                display:false,
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    }
});

const memberAcco = document.getElementById('member_account_plot_convas');
const memberAccoChart = new Chart(memberAcco, {
    type: 'line',
    data: {
        labels: [
            '2020-10-30', 
            '2020-10-31', 
            '2020-11-01',
            '2020-11-02',
            '2020-11-03',
            '2020-11-04',
            '2020-11-05',
            '2020-11-06',
            '2020-11-07',
            '2020-11-08',
            '2020-11-09',
            '2020-11-10',
            '2020-11-11',
            '2020-11-12',
            '2020-11-13',
            '2020-11-14',
            '2020-11-15',
            '2020-11-16',
            '2020-11-17',
            '2020-11-18',
            '2020-11-19',
            '2020-11-20',
            '2020-11-21',
            '2020-11-22',
            '2020-11-23',
            '2020-11-24',
            '2020-11-25',
            '2020-11-26',
            '2020-11-27',
            '2020-11-28',
        ],
        datasets: [{
            data: [
                -200, 
                100, 
                200,
                300,
                200,
                900,
                  0,
                 50,
                400,
                200,
                 33,
                -10,
                400,
                700,
                200,
                400,
                300,
                900,
                100,
                 -4,
                 20,
                 50,
                300,
                500,
                800,
                200,
                  0,
                 80,
                500,
                1000
            ],
            backgroundColor: '#fff',
            borderColor: '#2C90F4',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#EAEAEA',
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            x: {
                grid: {
                    color: 'transparent',
                },
                ticks: {
                    callback: function(value) {
                        return '';
                    }
                }
            },
            grid: {
                display:false,
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    }
});

const memberWeek = document.getElementById('member_week_plot_convas');
const memberWeekChart = new Chart(memberWeek, {
    type: 'bar',
    data: {
        labels: [
            '12-12', 
            '12-19', 
            '12-26',
            '01-02',
            '01-09',
        ],
        datasets: [{
            data: [
                6000, 
                3000, 
                -1500,
                9000,
                -3000,
            ],
            backgroundColor: [
                '#88CE77',
                '#88CE77',
                '#E07D7D',
                '#88CE77',
                '#E07D7D',
            ],
            borderColor: 'transparent',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#EAEAEA',
                },
                // ticks: {
                //     callback: function(value) {
                //         return value + '%';
                //     }
                // }
            },
            x: {
                grid: {
                    color: 'transparent',
                },
                // ticks: {
                //     callback: function(value) {
                //         return '';
                //     }
                // }
            },
            grid: {
                display:false,
            }
        },
        plugins: {
            legend: {
                display:false,
            }
        }
    }
});

// 比例圖
const memberPrefer = document.getElementById('member_prefer_plot_convas');
const memberPreferChart = new Chart(memberPrefer, {
    type: 'pie',
    data: {
        labels: ['BTC', 'ETH', 'DYDX', 'FTM', '其他'],
        datasets: [{
            data: [20, 40, 10, 5, 25],
            backgroundColor: [
                '#120B4C',
                '#2B53FD',
                '#FFC92A',
                '#25C587',
                '#8E2FFF',
            ],
            borderColor: [
                '#120B4C',
                '#2B53FD',
                '#FFC92A',
                '#25C587',
                '#8E2FFF',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display:false,
            }
        }
    }
});