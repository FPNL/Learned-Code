$(document).ready(function() {
	
// -------------------------方法1

	$('#div_1').on('mouseenter mouseout', function() {
		$('#p_1').slideToggle(400);
	});


	$('#div_2').on('mouseover', function() {
		$('#p_2').slideToggle(400);
	});


// ----------------------方法2.1
	$('#div_3').hover(function() {

		$('#p_3').slideDown(400);
	}, function() {
		$('#p_3').slideUp(400);
	});

// ---------------------方法2.2
		$('#div_4').hover(function() {

			$('#p_4').slideUp(400);
			}, function() {
			$('#p_4').slideDown(400);
			});

// -----------------------------文字放大縮小



$('#a1').click(function(event) {
	event.preventDefault();
	$('#font_p').css("font-size", "large");
});

$('#a2').click(function(event) {
	event.preventDefault();
	$('#font_p').css("font-size", "medium");
});

$('#a3').click(function(event) {
	event.preventDefault();
	$('#font_p').css("font-size", "small");
});





});