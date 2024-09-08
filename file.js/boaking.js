
document.getElementById('section-button').addEventListener('click', function () {
 window.location.href = '#section2';
})

document.getElementById('login-confiremd').addEventListener('click', function () {
 window.location.href = '#login-success'
})

let count = 40;
const kbd = document.getElementsByClassName('kbd-btn');
for (const btn of kbd) {
 btn.addEventListener('click', kbdName);
}
function kbdName() {
 count = count - 1;
 document.getElementById('total-seat').innerText = count;
 seatCount++;
 document.getElementById('seat-count').innerText = seatCount;
 if (seatCount > 4) {
  alert('no more selection')
  return;
 }

}
let seatCount = 0;
const seatNumber = document.getElementsByClassName('kbd-btn');
for (const btn of kbd) {
 btn.addEventListener('click', kbdName);
}
const seatName = document.getElementsByClassName('kbd-btn');
for (const btn of seatName) {
 btn.addEventListener('click', function (e) {
  const btnName = e.target.innerText;
  const seatPrice = document.getElementById('seat-price').innerText;
  const selectedSeatName = document.getElementById('select-seat-name');
  const li = document.createElement('li');

  const p = document.createElement('p')
  p.innerText = btnName;
  selectedSeatName.appendChild(li)

  const p2 = document.createElement('p');
  p2.innerText = 'Economy'

  const p3 = document.createElement('p');
  p3.innerText = seatPrice;
  li.appendChild(p);
  li.appendChild(p2);
  li.appendChild(p3);
  li.style.display = 'flex'
  li.style.gap = '110px'

  selectedSeatName.appendChild(li)


  totalPrice('total-price', parseInt(seatPrice));
  totalPrice('grand-total', parseInt(seatPrice));

 })
}
const seatPrice = document.getElementById('seat-price').innerText;



function totalPrice(id, value) {
 const totalPrice = document.getElementById(id).innerText;
 const convertedPrice = parseInt(totalPrice);
 const sum = convertedPrice + parseInt(value);
 setInnertext(id, sum)
}
function setInnertext(id, value) {
 document.getElementById(id).innerText = value;
}
function setInnertext(id, value) {
 document.getElementById(id).innerText = value;
}

function setBackgroundColorById(elementId) {
 const element = document.getElementById(elementId);
 element.classList.add('bg-red-400');
}
function removeBackgroundColorById(elementId) {
 const element = document.getElementById(elementId);
 element.classList.remove('bg-orange-400');
}

