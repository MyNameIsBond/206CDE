// recieves the Currencies from back end.
function send_data(){
    const cc_value = document.getElementById('cc_value').value
    const c_value = document.getElementById('c_value').value

    const xml = new XMLHttpRequest()

    xml.onload = function() {
        if (this.status === 200 && this.readyState === 4){
            document.getElementById('c_response').innerHTML = this.responseText
        } else {
            const error = 'price error'
            console.log(error,this.statusText)
        }
    }
    xml.open('GET',`/graph/${cc_value}/${c_value}`,true)
    xml.send()
}



function time_f() {
  const time = document.getElementById('test').elements.time.value
  const xml = new XMLHttpRequest()

  xml.onload = function () {
      if (this.status === 200 && this.readyState === 4){
          document.getElementById('time_f').innerHTML = this.responseText

      } else {
          const error = 'time error'
          console.log(error,this.statusText)
      }
  }
  xml.open('GET', `/time/${time}`,true)
  xml.send()
}





function date_test(){

    // let today           = new Date('2018-03-09')
    // let yesterday       = new Date('2018-03-0')
    // const randomdate    = new Date(1394104654000)
    // let oneday          = 86400000
    // const week          = oneday *  7 //86.400.000
    // const mounth        = oneday *  30
    // const year          = oneday *  364
    // const last_year     = new Date(today.valueOf() - year )
    const time = document.getElementById('test').elements.time.value


}

