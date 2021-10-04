$(document).ready(function () {
	$(function () {
		// countdownStart
		var storageCountdownReset = "countdownResetPoplavok",
			storageCountdownTime = "countdownTimePoplavok",
			countdownResetTimeVal = 41,
			nowDateTime = new Date().getTime(),
			countdownReset = localStorage.getItem(storageCountdownReset);
		if (countdownReset == null) {
			localStorage.setItem(storageCountdownReset, nowDateTime);
		} else {
			if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
				var countdownTime = new Date().getTime() + 24e5;
				localStorage.setItem(storageCountdownTime, countdownTime);
				localStorage.setItem(storageCountdownReset, nowDateTime);
			}
		}

		if (localStorage.getItem(storageCountdownTime)) {
			var countdownTime = localStorage.getItem(storageCountdownTime);
		} else {
			countdownTime = new Date().getTime() + 24e5;
		}

		$(".countdown")
			.countdown(countdownTime, function (s) {
				$(this).html(
					s.strftime(
						"" +
							'<div class="countdown__item hour">%H</div>' +
							'<div class="countdown__item minute">%M</div>' +
							'<div class="countdown__item second">%S</div>'
					)
				);
			})
			.on("update.countdown", function (e) {
				countdownTime = e.finalDate.getTime();
				localStorage.setItem(storageCountdownTime, countdownTime);
			})
			.on("finish.countdown", function (e) {
				$(".countdown").countdown("stop");
			});
		// countdownEnd
	});
});

$(".rev-btn").magnificPopup({
	items: {
		src: ".reviews__popup",
		type: "inline",
	},
});

const form_reviews = document.querySelector(".form_reviews");

form_reviews.addEventListener("submit", function (e) {
	e.preventDefault();
	$.magnificPopup.instance.close();
});

$(".popup").magnificPopup({
	items: {
		src: ".form__popup",
		type: "inline",
	},
});

$(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
});

$(".owl-prev").empty();
$(".owl-next").empty();

(function setDate() {
	let d = new Date();
	let p = new Date(d.getTime() - 5 * 86400000);
	let monthA = [
		"Января",
		"Февраля",
		"Марта",
		"Апреля",
		"Мая",
		"Июня",
		"Июля",
		"Августа",
		"Сентября",
		"Октября",
		"Ноября",
		"Декабря",
	];
	if (d.getMonth() !== p.getMonth()) {
		$(".by").html(p.getDate() + " " + monthA[p.getMonth()]);
	} else {
		$(".by").html(p.getDate() + " ");
	}

	p = new Date(d.getTime());
	$(".to").html(p.getDate() + " " + monthA[p.getMonth()] + " ");
})();
