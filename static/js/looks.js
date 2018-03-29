window.onload = deleteChild()


function deleteChild() {
    let k = document.querySelectorAll('table')
    k.forEach(child => {
        let th = child.querySelectorAll('i')
        console.log(child.th)
        th.forEach(ii => {
            if (window.getComputedStyle(ii, ':before'.content === null)) {

            }
        })
    })
}