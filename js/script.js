window.onload = function setDate() { //Функция для заполнения селекторов месяца и года
	var years = new Date().getFullYear();//Получение значения текущего года
	for (var i = 1; i <= 50; i++){//Цикл для заполнения селектора года
		var year = document.getElementById('year');
		var option = document.createElement('option');
		option.value = years;
		option.innerHTML = years;
		year.appendChild(option);
		years++;
	}
	for (var i = 1; i <= 12; i++){//Цикл для заполнения селектора месяца
		var month = document.getElementById('month');
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = i;
		month.appendChild(option);
	}
};
document.getElementById('sendButton').onclick = function validateForm() { //Функция для валидации формы
	var errorCount = 0;// счетчик ошибок
	var cardNumber = document.getElementById('nomer1').value + document.getElementById('nomer2').value + document.getElementById('nomer3').value + document.getElementById('nomer4').value; //Получение значения номера карты
	var cardExample = /^[0-9]{16}$/;//Маска проверки номера счета
	if (!cardExample.test(cardNumber)){//Цикл проверки введенных данных
		document.getElementById('nomer1').classList.add('error');//ошибка!
		document.getElementById('nomer2').classList.add('error');
		document.getElementById('nomer3').classList.add('error');
		document.getElementById('nomer4').classList.add('error');
		errorCount++;//увеличение счетчика
	}else{
		document.getElementById('nomer1').classList.remove('error');//все правильно
		document.getElementById('nomer2').classList.remove('error');
		document.getElementById('nomer3').classList.remove('error');
		document.getElementById('nomer4').classList.remove('error');
	};
	var selectedYear = document.getElementById('year').value;//Получение выбранного года
	var currentYear = new Date().getFullYear();//Получение текущего года
	if (selectedYear == currentYear){ //Сравнение значений текущего года и выбранного
		var selectedMonth = document.getElementById('month').value;					//Если значение текущего года и выбранного равны
		var currentMonth = new Date().getMonth() + 1;												//то сравниваются месяцы выбранный и текущий  
		if (selectedMonth < currentMonth){																	//если текущий больше выбранного то ошибка!!!!!!!
			document.getElementById('month').classList.add('error');					//Если выбраный год больше текущего то сравнения меяцев не будет
			errorCount++;
		}else {
		document.getElementById('month').classList.remove('error');
	}};	 
	var userName = document.getElementById('name').value;//Проверяется имя если не подходит под маску то ошибка!!!!!
	var nameExample = /^[A-Za-z' ']{4,}$/;// маска имени
	if (!nameExample.test(userName)){//сравнение
		document.getElementById('name').classList.add('error');//ошибка!
		errorCount++;
	}else{
		document.getElementById('name').classList.remove('error');//все правильно
	};
	var cardCvv = document.getElementById('cvv').value;// проверка СVV
	var cvvExample = /^[0-9]{3}$/;//Маска СVV
	if (!cvvExample.test(cardCvv)){// сравнение
		document.getElementById('cvv').classList.add('error');//ошибка!
		errorCount++;
	}else{
		document.getElementById('cvv').classList.remove('error');//все правильно
	};
	if (errorCount != 0) {//Если значение счетчика увеличится хоть на единицу
		return false;//форма не отправится т.к. есть ошибки
	} else {//иначе
		return true;//ошибок нет форма отправляется
	};
};