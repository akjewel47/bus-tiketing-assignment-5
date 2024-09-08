document.getElementById('input-number').addEventListener('input', function () {
 const inputField = document.getElementById('input-number');
 const button = document.getElementById('login-confiremd');
 if (inputField.value.trim() !== '') {
  button.disabled = false;
 }
 else {
  button.disabled = true;
 }
})

const myInput = document.getElementById('apply-offer-new15')
const buttonField = document.getElementById('apply')

buttonField.addEventListener('click', function () {
 const newOffer = document.getElementById('new15')
 const inputText = myInput.value;
 inputText.innerText = newOffer;
})
// new-15
// apply    apply-offer-new15