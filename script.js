'use strict';

/* ===== プルダウンメニュー ===== */
const lang = document.querySelector('html').lang;

if(lang === 'ja') {
    document.querySelector('option[value="menu1.html"]').selected = true;
} else if(lang === 'en') {
    document.querySelector('option[value="menu2.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}

/* ===== スライドショー ===== */
/* ========= Ⅰ お好み焼き ========= */
const okonomiyaki = [
    { img: 'img/S.jpg',   name: 'シングル',         price: '￥800' },
    { img: 'img/TY.jpg',  name: 'チーズ焼き',       price: '￥950' },
    { img: 'img/NITY.jpg',name: 'ねぎイカ天焼き',   price: '￥1,050' },
    { img: 'img/Sp.jpg',  name: 'スペシャル',       price: '￥1,100' },
    { img: 'img/KS.jpg',  name: '辛麺スペシャル',   price: '￥1,150' },
    { img: 'img/Dx.jpg',  name: 'デラックス',       price: '￥1,350' }
];

let current1 = 0;

/* ========= Ⅱ その他 ========= */
const others = [
    { img: 'img/FYS.jpg', name: '府中焼きそば', price: '￥800' },
    { img: 'img/GH.jpg',  name: '牛ホルモン',   price: '￥600' },
    { img: 'img/SZ.jpg',  name: '砂ズリ',       price: '￥450' },
    { img: 'img/PP.jpg',  name: 'ピンピン',     price: '￥600' },
    { img: 'img/JT.jpg',  name: 'じゃがとんチーズ', price: '￥550' },
    { img: 'img/BK.jpg',  name: '豚キムチ',     price: '￥400' }
];

let current2 = 0;

/* ========= 共通表示処理 ========= */
function showItem(list, index, imgId, nameId, priceId, pageId) {
    document.getElementById(imgId).src = list[index].img;
    document.getElementById(nameId).textContent = list[index].name;
    document.getElementById(priceId).textContent = list[index].price;
    document.getElementById(pageId).textContent =
        `${index + 1} / ${list.length}`;
}

/* 初期表示 */
showItem(okonomiyaki, current1, 'image1', 'name1', 'price1', 'page1');
showItem(others, current2, 'image2', 'name2', 'price2', 'page2');

/* Ⅰ 操作 */
document.getElementById('prev1').onclick = () => {
    if (current1 > 0) {
        current1--;
        showItem(okonomiyaki, current1, 'image1', 'name1', 'price1', 'page1');
    }
};
document.getElementById('next1').onclick = () => {
    if (current1 < okonomiyaki.length - 1) {
        current1++;
        showItem(okonomiyaki, current1, 'image1', 'name1', 'price1', 'page1');
    }
};

/* Ⅱ 操作 */
document.getElementById('prev2').onclick = () => {
    if (current2 > 0) {
        current2--;
        showItem(others, current2, 'image2', 'name2', 'price2', 'page2');
    }
};
document.getElementById('next2').onclick = () => {
    if (current2 < others.length - 1) {
        current2++;
        showItem(others, current2, 'image2', 'name2', 'price2', 'page2');
    }
};
