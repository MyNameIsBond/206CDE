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
            document.getElementById('time_f').innerHTML = grph(this.responseText)
            } else {
            const error = 'time error'
            console.log(error, this.statusText)
        }
    }
    xml.open('GET', `/time/${time}`, true)
    xml.send()
}

function grph (text) {
  let date = new Array() 
  let price = new Array() 
  let whatever = JSON.parse(text)
  for (var i = 0; i < whatever.length; i++) {
    date.push(whatever[i].date)
    price.push(whatever[i].price)
  }
  let canv = document.getElementById('time_f').getContext('2d')
  const time = document.getElementById('test').elements.time.value
  const c_value = document.getElementById('c_value').value
  const cc_value = document.getElementById('cc_value').value

      let lchrt = new Chart({
        type: 'line',
        data: {
            labels: [c_value, cc_value, time],
            datasets: [{
                label: date,
                data: price
            }]
        },
        options: {}
    })


}

