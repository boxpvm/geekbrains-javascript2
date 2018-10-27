var text, pattern, result;

//ЗАДАНИЕ 1
text = "Этот 'текст необходимо' замени'ть с помощью 'регулярных' выражен'ий"; 
result = text.replace(/[']/g, '"');
console.log(result);

//ЗАДАНИЕ 2
pattern = /([а-яё])"([а-яё])/g;
result = result.replace(pattern, "$1'$2");
console.log(result);

//ЗАДАНИЕ 3
function validateForm() {
  var validateBlock = document.getElementById('validationName');
  validName(validateBlock, setClass);
  validateBlock = document.getElementById('validationPhone');
  validPhone(validateBlock, setClass);
  validateBlock = document.getElementById('validationEmail');
  validEmail(validateBlock, setClass);
}

function setClass(block, res) {
  if (res) {
    block.setAttribute('class', 'form-control is-valid');
  } else {
    block.setAttribute('class', 'form-control is-invalid');
  }
}

function validName(name, callback) {
  regextp = /^[A-Za-zА-Яа-я]+$/;
  callback(name, regextp.test(name.value));
}

function validPhone(phone, callback) {
  regextp = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
  callback(phone, regextp.test(phone.value));
}

function validEmail(email, callback) {
  regextp = /^\w+[\.-]?\w*@\w+\.[A-Za-zА-Яа-я]+$/;
  callback(email, regextp.test(email.value));
}