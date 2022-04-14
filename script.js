const smallCups=document.querySelectorAll('.cup-small')
const liters=document.querySelectorAll('.liters')
const percentage=document.querySelectorAll('.percentage')
const remained=document.querySelectorAll('.remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click',() => highlightCups(idx))
});

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        }
        else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups=document.querySelectorAll('.cup-small.full').length
    const totalCups=smallCups.length

    if(fullCups === 0) {
        document.getElementById('percentage').style.visibility='hidden'
        document.getElementById('percentage').style.height=0
    }
    else {
        document.getElementById('percentage').style.visibility='visible'
        document.getElementById('percentage').style.height=`${fullCups / totalCups * 330}px`
        document.getElementById('percentage').innerText=`${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        document.getElementById('remained').style.visibility='hidden'
        document.getElementById('remained').style.height=0
    }
    else {
        document.getElementById('remained').style.visibility='visible'
        document.getElementById('liters').innerText=`${2 - (250 * fullCups /1000)}L`
    }
}