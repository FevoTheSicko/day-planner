const timeNow = new Date().getHours()


function currentime() {
    for (let i = 0; i < 9; i++) {
        const timei = i + 9
        if (timei < timeNow) {
            //turn grey
            console.log('if')
            let stringtimei = String(timei)
            let stringnum = 'text-' + stringtimei
            let time = document.getElementById(stringnum)
            time.style.backgroundColor = 'grey'
        } else if (timei === timeNow) {
            console.log('if else')
            //turn red
            let stringtimei = String(timei)
            let stringnum = 'text-' + stringtimei
            let time = document.getElementById(stringnum)
            time.style.backgroundColor = 'red'
        } else {
            //turn green
            console.log('else')
            let stringtimei = String(timei)
            let stringnum = 'text-' + stringtimei
            let time = document.getElementById(stringnum)
            time.style.backgroundColor = 'green'
        }
    }
}
const storeItem = function (stringnum) {

    const textarea = document.getElementById('text-' + stringnum)
    console.log(textarea.value)
    localStorage.setItem('save-' + stringnum, textarea.value)


    return
}
const getItem = function (stringnum) {
    const saved = localStorage.getItem('save-' + stringnum)
    console.log(saved)
    const textarea = document.getElementById('text-' + stringnum)
    textarea.value = saved
}
const button9 = document.getElementById('save-9').addEventListener('click', function () { storeItem('9') })
const button10 = document.getElementById('save-10').addEventListener('click', function () { storeItem('10') })
const button11 = document.getElementById('save-11').addEventListener('click', function () { storeItem('11') })
const button12 = document.getElementById('save-12').addEventListener('click', function () { storeItem('12') })
const button13 = document.getElementById('save-13').addEventListener('click', function () { storeItem('13') })
const button14 = document.getElementById('save-14').addEventListener('click', function () { storeItem('14') })
const button15 = document.getElementById('save-15').addEventListener('click', function () { storeItem('15') })
const button16 = document.getElementById('save-16').addEventListener('click', function () { storeItem('16') })
const button17 = document.getElementById('save-17').addEventListener('click', function () { storeItem('17') })

window.addEventListener('load', function () { getItem('9') })
window.addEventListener('load', function () { getItem('10') })
window.addEventListener('load', function () { getItem('11') })
window.addEventListener('load', function () { getItem('12') })
window.addEventListener('load', function () { getItem('13') })
window.addEventListener('load', function () { getItem('14') })
window.addEventListener('load', function () { getItem('15') })
window.addEventListener('load', function () { getItem('16') })
window.addEventListener('load', function () { getItem('17') })

currentime()