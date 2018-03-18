// recieves the Currencies from back end.

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
    const xml = new XMLHttpRequest()

    xml.onload = function () {

        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('time_f').innerHTML = this.responseText

        } else {
            const error = 'time error'
            console.log(error, this.statusText)
        }
    }
    xml.open('GET', `/time/${time}`, true)
    xml.send()
}


function vis() {
    let canv = document.getElementById('myChart').getContext('2d')
    let time = document.getElementById('test').elements.time.value
    let lchrt = new Chart(canv, {
        type: 'line',
        data: {
            labels: ['One', 'two', 'three'],
            datasets: [{
                label: time,
                data: [
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ]
            }]

        },
        options: {}


    })
}