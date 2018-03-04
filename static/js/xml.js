function select(x) {
  document.getElementById('opt').addEventListener.value
  console.log(x.value)
}


document.getElementById('xml').addEventListener('click', () => {
    let xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {

        if (this.status === 200 && this.readyState === 4) {
            let coins = this.responseText
            document.getElementById('xml_test').innerHTML = this.responseText
            for (const name in coins) {
                console.log(name)
            }
        } else {
            const error = 'damn, error!'
            console.log(error,xml.statusText)
        }
    }
    xml.open('GET','/names',true)
    xml.send()
})





// document.getElementById('xml').addEventListener('click', () => {
//     xml = new XMLHttpRequest()
//     xml.open('GET', '/test/test' , true)

//     xml.onload = function () {
//         if (this.status == 200) {
//             console.log(this.responseText)
//         } else {
//             const error = 'Error'
//             console.log(error, this.status)
//         }
//     }
//     xml.send()
// })