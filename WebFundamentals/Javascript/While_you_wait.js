var daysUntilMyBirthday = 60;

function birthday (daysUntilMyBirthday) {
	while (daysUntilMyBirthday > 30) {
		console.log(daysUntilMyBirthday + " days until my birthday. Such a long time...");
		daysUntilMyBirthday -= 1;
	}
	while (daysUntilMyBirthday > 5) {
		console.log(daysUntilMyBirthday + " days...almost!");
		daysUntilMyBirthday -= 1;
	}
	while (daysUntilMyBirthday >= 1) {
		console.log(daysUntilMyBirthday + " DAYS UNTIL MY BDAY!!!");
		daysUntilMyBirthday -= 1;
	}
		console.log("HAPPY BIRTHDAY!!");
}