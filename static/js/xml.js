
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



// XML call to take data for the graph
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

    xml.open('GET', ` /${time}/${cc_value}/${c_value}`, true)
    xml.send()
}

// the Graph!
function grph(text) {
    const date = new Array()
    const price = new Array()
    const data = JSON.parse(text)
    const c_value = document.getElementById('c_value').value
    for (const i in data) {
        price.push(data[i].price)
        date.push(data[i].date)
    }


    const myChart = document.getElementById('myChart').getContext('2d')
    const time = document.getElementById('test').elements.time.value
    const cc_value = document.getElementById('cc_value').value
    const typ = document.getElementById('gtype_value').value
    const clr = document.getElementById('clr_value').value
    const lchrt = new Chart(myChart, {
        type: typ,
        data: {
            labels: date,
            datasets: [{
                label: [c_value, cc_value],
                data: price,
                borderColor: clr,
                backgroundColor: clr
            }],
        },
        options: {}
    })
    return lchrt

}