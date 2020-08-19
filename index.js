window.addEventListener("DOMContentLoaded", function () {
	const form = document.forms["item-form"];
	const data = JSON.parse(localStorage.getItem("records")) || [];
	// console.log(data);

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		let item = {
			uuid: `${generateUUID()}`,
			category: form["category"].value,
			date: form["date"].value,
			amount: form["amount"].value,
			description: form["description"].value,
		};
		form.reset();
		data.push(item);
		localStorage.setItem(`records`, JSON.stringify(data));
		console.log(data);
	});
	function generateUUID() {
		var d = new Date().getTime();
		var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
			}
		);
		return uuid;
	}
});
