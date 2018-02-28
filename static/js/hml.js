function select(x) {
  document.getElementById('opt').addEventListener.value
  console.log(x.value)
}



document.getElementById('opt').addEventListener('change', (x) => {
    console.log(x.value);
})



function change_function() {
    let xml = new XMLHttpRequest()
    xml.onreadystatechange = function () {
        let output = []
        if (this.status == 200) {
            let coins = JSON.parse(this.responseText)

            for (let coin in coins){
                output.push({'name':coin[i].Name,'url':coin[i].ImageUrl})
            }
            document.getElementById('hml_test').innerHTML = output
        } else {
            const error = 'Something went wrong'
            console.log(error,xml.statusText)
        }
    }

    xml.open('GET','/graph', true)
    xml.send()
}

document.getElementById('hml2').addEventListener('click', () => {
    let hml = new XMLHttpRequest()
    hml.onreadystatechange = function() {
        if (this.status == 200) {
            let coin = JSON.parse(this.responseText)
            document.getElementById('hml_test').innerHTML = coin
            console.log(coin)

        } else {
            console.log('Error', hml.statusText)
        }
    }
    hml.open('GET', '/graph', true)
    hml.send()

})
