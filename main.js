let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.sales-navigation')
let main = document.querySelector('.main-content')


toggle.onclick = function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}