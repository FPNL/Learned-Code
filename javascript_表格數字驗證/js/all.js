var numIn = document.getElementById('numInput'), 
    intIn = document.getElementById('intInput'), 
    btn = document.getElementById('btn'), 
    span = document.querySelectorAll('span'), 
    field = document.querySelectorAll('.field');
var fieldLen = field.length;
var patt=new RegExp('[0-9]*');
function checkNum(e) {
  var numValue = numIn.value;
  if(numValue == "") {
    numIn.setAttribute('class','alert');
    span[0].classList.remove('hidden');
    span[0].textContent = '此欄位不可為空';
  } else if(isNaN(numValue)) {  // 判斷輸入是否為數字，isNaN 會有誤判，例如：' ', '0xff', ' 9 '
    numIn.setAttribute('class','alert');
    span[0].classList.remove('hidden');
    span[0].textContent = '此欄位只可為數字';
  }
  else if( numValue.match(patt) == false ) {  // 判斷輸入是否為數字，isNaN 會有誤判，例如：' ', '0xff', ' 9 '
  numIn.setAttribute('class','alert');
  span[0].classList.remove('hidden');
  span[0].textContent = '此欄位只可為數字0-9';
}
}


function checkInt(e) {
  var intValue = intIn.value;
  if(intValue == "") {
    intIn.classList.add('alert');
    span[1].classList.remove('hidden');
    span[1].textContent = '此欄位不可為空';
  } else if(!Number.isInteger(Number(intValue))) {   // 判斷輸入是否為整數
    intIn.classList.add('alert');
    span[1].classList.remove('hidden');
    span[1].textContent = '此欄位只可為整數';
  }
}



function userTextNum(e) {
  numIn.removeAttribute('class');
  span[0].classList.add('hidden');
}

function userTextInt(e) {
  intIn.removeAttribute('class');
  span[1].classList.add('hidden');
}

// function userText(e) {
//   field[i].classList.remove('alert');
// }



btn.addEventListener('click', checkNum, false);
btn.addEventListener('click', checkInt, false);


// for(var i = 0; i < fieldLen; i++) {
//   field[i].addEventListener('keydown', userText, false);
// }
numIn.addEventListener('keydown', userTextNum, false);
intIn.addEventListener('keydown', userTextInt, false);

// blur 監聽事件
// numInput.addEventListener('blur', checkContent, false);
