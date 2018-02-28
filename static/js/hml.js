function select(x) {
  document.getElementById('opt').addEventListener.value
  console.log(x.value)
}





function change_function() {
    let xml = new XMLHttpRequest()
    xml.onreadystatechange = () => {
        let output = new Array();
        if (this.status == 200) {
            let coins = JSON.parse(this.responseText)

            for (let coin in coins){
                output.push({name:coins[coin].Name})
            }
            console.log(output);
            document.getElementById('hml_test').innerHTML = output
        } else {
            const error = 'Something went wrong'
            console.log(error,xml.statusText)
        }
    }

    xml.open('GET','/graph', true)
    xml.send()
}
