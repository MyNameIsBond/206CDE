window.onload = deleteParent()


function deleteChild() {
    let k = document.querySelectorAll('table')
    k.forEach(child => {
        let th = child.querySelectorAll('i')
        console.log(child.th)
        th.forEach(ii => {
            if (window.getComputedStyle(ii, ':before'.content === null)) {
                ii.parentNode.removeChild(ii.parentNode)
            }
        })
    })
}


function deleteChild2() {
    let all = document.querySelectorAll('tbody')
    let alli = document.querySelectorAll('i')
    console.log(alli)
    console.log(all)
    all.forEach(element => {
        console.log(element)
        element.forEach(i => {
            console.log(i)

        })
    })
}

function deleteParent() {
    let all = document.querySelectorAll('tbody')
    for (const i in all) {
        let icon = all[i].querySelector('i').contains(':before')

        if (icon) {
            console.log(icon)
        }
    }
}