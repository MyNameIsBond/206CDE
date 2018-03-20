// recieves the Currencies from back end.
window.onload = time_f()

function send_data() {
    const cc_value = document.getElementById('cc_value').value
    const c_value = document.getElementById('c_value').value

    const xml = new XMLHttpRequest()

    xml.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('c_response').innerHTML = this.responseText
        } else {
            const error = 'price error'
            console.log(error, this.statusText)
        }
    }
    xml.open('GET', `/graph/${cc_value}/${c_value}`, true)
    xml.send()
}



function time_f() {
    const time = document.getElementById('test').elements.time.value
    const cc_value = document.getElementById('cc_value').value
    const c_value = document.getElementById('c_value').value
    const xml = new XMLHttpRequest()

    xml.onload = function () {

        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('myChart').innerHTML = grph(this.responseText)
        } else {
            const error = 'time error'
            console.log(error, this.statusText)
        }
    }
    xml.open('GET', `/${time}/${cc_value}/${c_value}`, true)
    xml.send()
}

// the Graph!

function grph(text) {
    let date = new Array()
    let price = new Array()
    let data = JSON.parse(text)
    for (var i = 0; i < data.length; i++) {
        date.push(data[i].date)
        price.push(data[i].price)
    }
    let myChart = document.getElementById('myChart').getContext('2d')
    const time = document.getElementById('test').elements.time.value
    const c_value = document.getElementById('c_value').value
    const cc_value = document.getElementById('cc_value').value

    let lchrt = new Chart(myChart, {
        type: 'line',
        data: {
            labels: [21, 22, 23, 24, 25, 26, 27, 28, 29],
            datasets: [{
                label: [c_value, cc_value],
                data: [7409.44,
                    6739.05,
                    6203.27,
                    6742.8,
                    6632.47,
                    7402.44,
                    6404.29,
                    6604.29,
                    6904.29
                ],
                borderColor: ['rgba(105,105,105,1)'],
                backgroundColor: ['rgba(255,99,132,1)']
            }],

        },
        options: {}
    })

    return lchrt
}