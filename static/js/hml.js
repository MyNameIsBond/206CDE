
document.getElementById('test').addEventListener('click',() => {
    console.log('test')
})




document.getElementById('opt').addEventListener('onchange', () => {
    console.log(value);
})



function change_function() {
    let hml = new XMLHttpRequest()
    hml.onreadystatechange = function () {
        if (this.status == 200) {
            document.getElementById('hml_test').innerHTML =
            this.responseText
            console.log(this.responseText);
        }
    }

    hml.open('GET','/graph', true)
    hml.send()
}
