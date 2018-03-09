$(() => {
	$(".dropdown>.label").click(function () {
		$(this.parentElement).toggleClass("show");
	});

	$(".btn.togglable").click(function () {
		$(this).toggleClass("toggled");
	});

	$(document.body).on("input", "input[data-catalyst]", function(e) {
		modifyValue($(this).data("catalyst"), $(this).val());
	});

	$(document.body).on("keypress", "input[data-catalyst]", function(e) {
		if (e.which == 13) {
			submitValue($(this).data("catalyst"), $(this).val());
		}
	});

	$(document.body).on("change", ".input-group>input[type='file']", function(e) {
		if (e.target.files != undefined) {
			if (e.target.files.length > 1) {
				$(this.parentElement).find("label").text(e.target.files[0].name + " + " + (e.target.files.length - 1) + " more file(s)");
			} else {
				$(this.parentElement).find("label").text(e.target.files[0].name);
			}
		}
	});

	$(".video-player").append($("<div></div>"));

	$(".icon").each(e => {
		var e = $($(".icon")[e]);
		e.addClass(e.text());
		e.text("");
	});

	$(".video-player").hover(function () {
		
	});

	$(".video-player").mouseleave(function () {

	});
});