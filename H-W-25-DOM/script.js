let texts = document.querySelectorAll('.text')
let swaps = document.querySelectorAll('.swap_box')
let getlocal = localStorage.getItem('index')

texts.forEach(item => {
    item.classList.remove('active')
    texts[getlocal].classList.add('active')
    swaps[getlocal].style.right = '32px'

    item.onclick = () => {
        let index = item.getAttribute('data-index')
        localStorage.setItem('index', index)
        texts.forEach(rem => {
            rem.classList.remove('active')
        })
        swaps.forEach(box => {
            box.style.right = '-100%'
        })
        setTimeout(() => {
            swaps[index].style.right = '32px'
        }, 300)
        item.classList.add('active')
    }
})

