$(function() {
	// 1)
	$('.btn-1').on('click', () => {
		$('.par-1').show(400);
		$('.par-1, .btn-1').addClass('active');
		$('.par-1').siblings().css('display', 'none');
		$('.btn-1').siblings().removeClass('active');
	});
	$('.btn-2').on('click', () => {
		$('.par-2').show(600);
		$('.par-2, .btn-2').addClass('active');
		$('.par-2').siblings().css('display', 'none');
		$('.btn-2').siblings().removeClass('active');
	});
	$('.btn-3').on('click', () => {
		$('.par-3').show(800);
		$('.par-3, .btn-3').addClass('active');
		$('.par-3').siblings().css('display', 'none');
		$('.btn-3').siblings().removeClass('active');
	});
	$('.btn-4').on('click', () => {
		$('.par-4').show(1000);
		$('.par-4, .btn-4').addClass('active');
		$('.par-4').siblings().css('display', 'none');
		$('.btn-4').siblings().removeClass('active');
	});

	// 2)
	var baseURL = 'http://89.108.65.123/cities';
	$.getJSON(baseURL, function (data) {
		//alert("Прибыли данные: " + data);
		$.each(data, function (key, val) {
			$('.cities').append('<option value="' + val.name + '">' + val.name + '</option>');
		});
	});

	$.getJSON(baseURL, function (data) {
		//alert("Прибыли данные: " + data);
		$.each(data, function (key, val) {
			$('.cities-search').append('<option value="' + val.name + '">' + val.name + '</option>');
		});
	});

});