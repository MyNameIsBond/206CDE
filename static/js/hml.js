function select(x) {
  document.getElementById('opt').addEventListener.value
  console.log(x.value)
}



function change_function() {
    let xml = new XMLHttpRequest()
    xml.onreadystatechange = function () {
        let output = new Object;
        if (this.status == 200) {
            let coins = JSON.parse(this.responseText)

            for (let coin in coins){
                output.name = coins[coin].Name
            }
            console.log(output);
            document.getElementById('hml_test').innerHTML = coins
        } else {
            const error = 'Something went wrong'
            console.log(error,xml.statusText)
        }
    }

    xml.open('GET','/graph', true)
    xml.send()
}


// document.getElementById('hml').addEventListener('click', () => {
//     let hml = new XMLHttpRequest()
//     hml.onreadystatechange = function() {
//         if (this.status == 200) {
//             let names = {
//                 name:,
//                 url:
//             }
//             let coins = JSON.parse(this.responseText)
//             for (var coin in coins) {
//                 names.name = coins[coin].name
//                 names.url = coins[coin].Url
//
//             }
//             document.getElementById('hml_test').innerHTML = names
//
//         } else {
//             console.log('Error', hml.statusText)
//         }
//     }
//     hml.open('GET', '/graph', true)
//     hml.send()
//
// })
