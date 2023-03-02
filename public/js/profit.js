const profitDayRecent7 = document.getElementById('profit_chart_day-7days');
const profitDayRecent7Chart = new Chart(profitDayRecent7, {
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

const profitAccumulateRecent7 = document.getElementById('profit_chart_accumulate-7days');
const profitAccumulateRecent7Chart = new Chart(profitAccumulateRecent7, {
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

const profitRateRecent7 = document.getElementById('profit_chart_rate-7days');
const profitRateRecent7Chart = new Chart(profitRateRecent7, {
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

const profitDayRecent30 = document.getElementById('profit_chart_day-30days');
const profitDayRecent30Chart = new Chart(profitDayRecent30, {
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

const profitAccumulateRecent30 = document.getElementById('profit_chart_accumulate-30days');
const profitAccumulateRecent30Chart = new Chart(profitAccumulateRecent30, {
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

const profitRateRecent30 = document.getElementById('profit_chart_rate-30days');
const profitRateRecent30Chart = new Chart(profitRateRecent30, {
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

const profitDayDefine = document.getElementById('profit_chart_day-define');
const profitDayDefineChart = new Chart(profitDayDefine, {
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

const profitAccumulateDefine = document.getElementById('profit_chart_accumulate-define');
const profitAccumulateDefineChart = new Chart(profitAccumulateDefine, {
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

const profitRateDefine = document.getElementById('profit_chart_rate-define');
const profitRateDefineChart = new Chart(profitRateDefine, {
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