let page2Window = null;  // Переменная для хранения окна второй страницы

document.getElementById("dataForm").addEventListener("submit", function (event) {
	event.preventDefault(); // Предотвращаем перезагрузку страницы

	// Получаем значения из полей формы
	const order = document.getElementById("order").value;
	const ware = document.getElementById("ware").value;
	// Получаем выбранный цвет
	const color = document.getElementById("color").value; // Это значение из <select>

	// Сохраняем данные в localStorage
	localStorage.setItem("order", order);
	localStorage.setItem("ware", ware);
	// Сохраняем выбранный цвет в localStorage
	localStorage.setItem("color", color);

	// Если окно второй страницы уже открыто, передаем в него данные
	if (page2Window && !page2Window.closed) {
		page2Window.postMessage({ order: order, ware: ware, color: color }, "*");
	} else {
		// Если окно не открыто, открываем страницу в новой вкладке и передаем данные
		page2Window = window.open("page2.html", "page2");
		page2Window.addEventListener("load", function () {
			page2Window.postMessage({ order: order, ware: ware, color: color }, "*");
		});
	}

	
});


