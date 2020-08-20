window.addEventListener("DOMContentLoaded", function () {
	const itemForm = document.forms["item-form"];
	const temp = document.querySelector("#Temp");
	const data = JSON.parse(localStorage.getItem("records")) || [];
	const recordsPanel = document.getElementById("records-panel");
	const searchForm = document.forms["search-form"];

	searchForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const search = {
			category: searchForm["category"].value,
			month: searchForm["month"].value,
		};
	});

	itemForm.addEventListener("submit", function (e) {
		e.preventDefault();
		let item = {
			uuid: `${generateUUID()}`,
			category: itemForm["category"].value,
			date: itemForm["date"].value,
			amount: itemForm["amount"].value,
			description: itemForm["description"].value,
		};
		itemForm.reset();
		data.push(item);
		localStorage.setItem(`records`, JSON.stringify(data));
		renderRecords();
	});
	recordsPanel.addEventListener("click", function (e) {
		if (e.target.classList.contains("remove")) {
			let idx = data.findIndex((v) => v.uuid === e.target.dataset.id);
			data.splice(idx, 1);
			// const getData = JSON.parse(localStorage.getItem("records")) || [];
			// const filterData = getData.filter(
			// 	(val) => val.uuid !== e.target.dataset.id
			// );
			// localStorage.setItem("records", JSON.stringify(filterData));
			localStorage.setItem("records", JSON.stringify(data));
			e.target.parentNode.parentNode.remove();
		}
	});
	renderRecords();

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
	function generateTable({ uuid, date, category, amount, description }) {
		let th = temp.content.querySelector("th");
		let td = temp.content.querySelectorAll("td");
		let closeBtn = temp.content.querySelector(".remove");
		th.textContent = date;
		td[0].textContent = category;
		td[1].textContent = description;
		td[2].textContent = amount;
		closeBtn.setAttribute("data-id", uuid);
		return document.importNode(temp.content, true);
	}
	function renderRecords() {
		recordsPanel.innerHTML = "";
		children = data.reverse().map((val) => generateTable(val));

		children.forEach(function (child) {
			recordsPanel.appendChild(child);
		});
	}
});
