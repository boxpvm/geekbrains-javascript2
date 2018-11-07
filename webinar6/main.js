/*
1) На сайте в форме обратной связи добавьте следующие поля:
a) поле даты рождения;
b) ошибочные поля подсветить с помощью какого-нибудь эффекта, например, Bounce.
2) Все возвращаемые ошибки выводить с помощью виджета Dialog.
3) Создать карусель популярных товаров в шапке.
4) * C помощью jQuery UI добавить возможность перемещать товар прямо в корзину мышью.
 */

// 1) и 2) используем материал урока 3
let form = document.forms.form;
const regName = /^[a-zA-Z-]+$/gm;
const regTel = /^\+\d\(\d{3}\)\d{3}-\d{4}$/gm;
const regEmail = /^\w+[.-]?\w+@\w+\.\w+$/gmi;
let send = form.elements.btnSend;

$("#inputDate").datepicker({  //  дата рождения выбираем из календаря 1)-a)
	changeMonth:true,
	changeYear:true,
	showButtonPanel:true,
	showWeek:true,
	firstDay:1
});

send.addEventListener('click', (e) => {
	e.preventDefault();
	let name = form.elements.nameField.value;
	let tel = form.elements.telField.value;
	let email = form.elements.emailField.value;
	let countError = 0;

	let testName = regName.test(name);
	if (!testName) {
		$('#errName').dialog({   // 2)
			modal:true,
			buttons:{
				Ok: function(){
					$(this).dialog( "close" );
				}
			}
		});

		countError++;

		let effErr = $('#inputName');  // 1)-b)
		effErr.addClass('red');
		effErr.effect('bounce', 'slow');
	}

	let testTel = regTel.test(tel);
	if (!testTel) {
		$('#errTel').dialog({   // 2)
			modal:true,
			buttons:{
				Ok: function(){
					$(this).dialog( "close" );
				}
			}
		});

		let effErr = $('#inputPhone');  // 1)-b)
		effErr.addClass('red');
		effErr.effect('bounce', 'slow');
		countError++;
	}

	let testEmail = regEmail.test(email);
	if (!testEmail) {
		$('#errEmail').dialog({   // 2)
			modal:true,
			buttons:{
				Ok: function(){
					$(this).dialog( "close" );
				}
			}
		});

		let effErr = $('#inputEmail');   // 1)-b)
		effErr.addClass('red');
		effErr.effect('bounce', 'slow');
		countError++;
	}

	if (countError === 0) {
		alert('Валидация всех полей прошла успешно!')
	}
});

$(".slider").slider({   //  3)
	value:0,
	min: 0,
	max: 2,
	step: 1,
	change: function( event, ui ) {
		$('#img1').css('display', 'none');
		$('#img2').css('display', 'none');
		$('#img3').css('display', 'none');
		let val = $('.slider').slider('value');
		if (val === 0){
			$('#img1').css('display', 'inline');
		}
		if (val === 1){
			$('#img2').css('display', 'inline');
		}
		if (val === 2){
			$('#img3').css('display', 'inline');
		}
		console.log(val);
	}
});