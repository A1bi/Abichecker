// allow about box to be closed
$(function () {
	$("#about .close").click(function () {
		$(this).hide().parent().slideUp();
	});
});