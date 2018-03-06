// recieves the Currencies from back end. 
function send_data(){
    const cc_value = document.getElementById('cc_value').value
    const c_value = document.getElementById('c_value').value

    const xml = new XMLHttpRequest()

    xml.onload = function() {
        if (this.status === 200 && this.readyState === 4){
            document.getElementById('c_response').innerHTML = this.responseText
        } else {
            const error = 'something went wrong'
            console.log(error,this.statusText)
        }
    }
    xml.open('GET','/graph/'+cc_value+'/'+c_value,true)
    xml.send()
}


document.getElementById('test').addEventListener('change',()=>{
    console.log(this)
})