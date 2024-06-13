// Khai bao bien
var demSale = 1
var demEvent = 1
var demTrend = 1
    // Danh mục
const btnDanhMucPrev = document.querySelector('.danh-muc .danh-muc__btn--prev')
const btnDanhMucNext = document.querySelector('.danh-muc .danh-muc__btn--next')
const navMenu = document.querySelector('.nav-menu')
    // Flash-sale
const btnSalePrev = document.querySelector('.flash-sale .danh-muc__btn--prev')
const btnSaleNext = document.querySelector('.flash-sale .danh-muc__btn--next')
const flashSale = document.querySelector('.flash-sale__card')
    //Event
const btnEventPrev = document.querySelector('.event .danh-muc__btn--prev')
const btnEventNext = document.querySelector('.event .danh-muc__btn--next')
const eventCard = document.querySelector('.event__card')
    //Xu Huong
const btnTrendPrev = document.querySelector('.xu-huong .danh-muc__btn--prev')
const btnTrendNext = document.querySelector('.xu-huong .danh-muc__btn--next')
const trendCard = document.querySelector('.xu-huong__card')

//Toggle Function
function toggleDanhMucPrev() {
    navMenu.style.transform = 'translateX(0)'
    setTimeout(function() {
        btnDanhMucPrev.classList.toggle('js-btn-active')
        btnDanhMucNext.classList.toggle('js-btn-active')
    }, 600)
}

function toggleDanhMucNext() {
    navMenu.style.transform = 'translateX(-360px)'
    setTimeout(function() {
        btnDanhMucPrev.classList.toggle('js-btn-active')
        btnDanhMucNext.classList.toggle('js-btn-active')
    }, 600)
}

function toggleSalePrev() {
    demSale--;
    if (demSale == 1) {
        flashSale.style.transform = 'translateX(0)'
        setTimeout(function() {
            btnSalePrev.classList.toggle('js-btn-active')
        }, 600)
    } else {
        flashSale.style.transform = 'translateX(-1000px)'
        setTimeout(function() {
            btnSaleNext.classList.toggle('js-btn-active')
        }, 600)
    }
}

function toggleSaleNext() {
    demSale++;
    if (demSale == 3) {
        flashSale.style.transform = 'translateX(-2000px)'
        setTimeout(function() {
            btnSaleNext.classList.toggle('js-btn-active')
        }, 600)
    } else {
        flashSale.style.transform = 'translateX(-1000px)'
        setTimeout(function() {
            btnSalePrev.classList.toggle('js-btn-active')
        }, 600)
    }
}

function toggleEventPrev() {
    demEvent--;
    if (demEvent == 1) {
        eventCard.style.transform = 'translateX(0)'
        setTimeout(function() {
            btnEventPrev.classList.toggle('js-btn-active')
        }, 600)
    } else {
        eventCard.style.transform = 'translateX(-800px)'
        setTimeout(function() {
            btnEventNext.classList.toggle('js-btn-active')
        }, 600)
    }
}

function toggleEventNext() {
    demEvent++;
    if (demEvent == 3) {
        eventCard.style.transform = 'translateX(-1600px)'
        setTimeout(function() {
            btnEventNext.classList.toggle('js-btn-active')
        }, 600)
    } else {
        eventCard.style.transform = 'translateX(-800px)'
        setTimeout(function() {
            btnEventPrev.classList.toggle('js-btn-active')
        }, 600)
    }
}

function toggleTrendPrev() {
    demTrend--;
    if (demTrend == 1) {
        trendCard.style.transform = 'translateX(0)'
        setTimeout(function() {
            btnTrendPrev.classList.toggle('js-btn-active')
        }, 600)
    } else if (demTrend == 2) {
        trendCard.style.transform = 'translateX(-1200px)'
    } else {
        trendCard.style.transform = 'translateX(-2400px)'
        setTimeout(function() {
            btnTrendNext.classList.toggle('js-btn-active')
        }, 600)
    }
}

function toggleTrendNext() {
    demTrend++;
    if (demTrend == 4) {
        trendCard.style.transform = 'translateX(-3600px)'
        setTimeout(function() {
            btnTrendNext.classList.toggle('js-btn-active')
        }, 600)
    } else if (demTrend == 3) {
        trendCard.style.transform = 'translateX(-2400px)'
    } else {
        trendCard.style.transform = 'translateX(-1200px)'
        setTimeout(function() {
            btnTrendPrev.classList.toggle('js-btn-active')
        }, 600)
    }
}


//Kich hoat toggle fucntion
btnDanhMucPrev.addEventListener('click', toggleDanhMucPrev)
btnDanhMucNext.addEventListener('click', toggleDanhMucNext)
btnSalePrev.addEventListener('click', toggleSalePrev)
btnSaleNext.addEventListener('click', toggleSaleNext)
btnEventPrev.addEventListener('click', toggleEventPrev)
btnEventNext.addEventListener('click', toggleEventNext)
btnTrendPrev.addEventListener('click', toggleTrendPrev)
btnTrendNext.addEventListener('click', toggleTrendNext)

//Process-bar trong Flash Sale

$(".flash-sale__card__item .price .process span").each(function() {
    $(this).animate({
        width: $(this).attr("data-progress") + "%",
    }, 1000);
});