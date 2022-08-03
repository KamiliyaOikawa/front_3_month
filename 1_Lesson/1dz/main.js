// 1) Используя регулярные выражения необходимо сделать поле для ввода формата ИНН -
// ппервыми цифрами должны быть либо 1
// либо 0, а затем еще 13 цифр (в общем должно быть 14 цифр).

// 2) используя рекурсию необходимо заставить блок двигаться по странице.
// Создайте один большой блок и один маленький внутри него.
// Задайте большому блоку position: relative, а малому absolute.
// Используя addEventListener изменяйте параметр позиции малого блока
// (.style.left=`${переменная}px`).
const idInput = document.querySelector(".idInput");
const idCheck = document.getElementsByClassName("idCheck");
const idResult = document.querySelector(".idResult");

const idValidate = /^0\d{13}$|1\d{13}$/;

idCheck[0].addEventListener("click", () => {
	if (idValidate.test(idInput.value)) {
		idResult.innerText = "ok";
		idResult.style.color = 'green';
	} else {
		idResult.innerText = "not ok";
		idResult.style.color = 'red';
	}
});


const block = document.querySelector(".blockk")

let num = 0;
const plus = function (leftBlock) {
	num++;
	block.style.left = `${num}px`;
	if (num < 50) {
		return plus();
	} else if (num > 349) {
		num = 0;
	} else {
		num += 50;
	}
	leftBlock();

}
block.addEventListener("click", plus)





/*
const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
    if (position <= 440 && topPosition == 0) {
        position += 10;
        block.style.left = `${position}px`;
        setTimeout(move, 200);
    } else if (position >= 440 && topPosition <= 440) {
        topPosition += 10;
        block.style.top = `${topPosition}px`;
        setTimeout(move, 200);
    } else if (topPosition >= 400 && position != 0) {
        position -= 10;
        block.style.left = `${position}px`;
        setTimeout(move, 200);
    } else if (position == 0 && topPosition != 0) {
        topPosition -= 10;
        block.style.top = `${topPosition}px`;
        setTimeout(move, 200);
    }
};

move();*/

