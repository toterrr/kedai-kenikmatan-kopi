// Toggle class active untuk pizza menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika pizza menu di klik
document.querySelector('#pizza-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingcart.classList.toggle('active');
    shoppingcart.focus();
    e.preventDefault();
};

// klik di luar elemen
const pz = document.querySelector('#pizza-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button')

document.addEventListener('click', function(e) {
    if (!pz.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
     
    if (!sb.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove('active');
    }

    if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
        shoppingcart.classList.remove('active');
    }
});

// Modal Box
const itemdetailmodal = document.querySelector('#item-detail-modal');
const itemdetailbuttons = document.querySelectorAll('.item-detail-button');

itemdetailbuttons.forEach((btn) => {
    btn.onclick = (e) => {
        itemdetailmodal.style.display = 'flex';
        e.preventDefault();
    }
})


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemdetailmodal.style.display = 'none';
    e.preventDefault();
}

// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemdetailmodal) {
        itemdetailmodal.style.display = 'none';
    }
}