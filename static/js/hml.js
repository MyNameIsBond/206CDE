
document.getElementById('test').addEventListener('click',() => {
    console.log('test')
})

function select(x) {

  document.getElementById('opt').addEventListener.value
  console.log(x.value)

}



document.getElementById('opt').addEventListener('onchange', () => {
    console.log(value);
})



function change_function() {
    let hml = new XMLHttpRequest()
    hml.onreadystatechange = function () {
        let output = []
        if (this.status == 200) {
            let coin = JSON.parse(this.responseText)

            for (let i in coin){
                console.log(coin[i].Name);
                console.log(coin[i].ImageUrl);
            }
        } else {
            console.log('Error',hml.statusText)
        }
        document.getElementById('hml_test').innerHTML = coin
    }

    hml.open('GET','/graph', true)
    hml.send()
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
