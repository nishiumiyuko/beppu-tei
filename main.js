const slide = document.getElementById('wrapper')
const slideItems = document.getElementsByClassName('slide-item')

let activeNum = 0
const MaxSlideNum = slideItems.length - 1
const IntervalTime = 5000
const FadeOutTime = 1000

slideItems[0].classList.add('active', 'zoom')

setInterval(function () {
    const currentNum = activeNum
    slideItems[activeNum].classList.remove('active')
    setTimeout(function () {
        slideItems[currentNum].classList.remove('zoom')
    }, FadeOutTime)
    activeNum = activeNum === MaxSlideNum ? 0 : activeNum + 1
    slideItems[activeNum].classList.add('active', 'zoom')
}, IntervalTime)

// activeNum++;
// activeNum %= MaxSlideNum;