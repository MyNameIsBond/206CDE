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
    let canv = document.getElementById('canvs').getContext('2d')

    let lchrt = new Chart(canv, {
        type: 'line',
        datasets: {
            labels: ['22-2', '23-2', '24-2', '25-2', '26-2', '27-2'],
            data: [1, 2, 34, 4, 5, 6, 7, 8]

        },
        options: {}


    })
}