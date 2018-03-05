function c_value(x) {
  document.getElementById('c_value').addEventListener.value
  console.log(x.value)
  return x.value  
}

function cc_value(x) {
    document.getElementById('cc_value').addEventListener.value
    console.log(x.value)
    return (x.value,(x) => {
        document.getElementById('c_value').addEventListener.value
        console.log(x.value)
        return value.x
    })
  }
document.getElementById('xml').addEventListener('click', () => {
    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {

        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('xml_test').innerHTML = this.responseText
            console.log(this.responseText)

        } else {
            const error = 'damn, error.'
            console.log(error,xml.statusText)
        }
    }
    xml.open('GET','/names',true)
    xml.send()
})


