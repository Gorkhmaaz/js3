////Task 1
let num1 = parseInt(prompt('Введите первое число'));
let operator = prompt('Введите арифмитически оператор (+, -, /, *)');
let num2 = parseInt(prompt('Введите второе число'));
let result = num1 + num2;
if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    alert('Вы ввели неверный арифметический оператор!')
} else {
    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    }
    alert(result)
}



//////Task 2
const fruit = prompt("Введите название фрукта:");
switch (fruit) {
    case 'ананас':
        alert('Мы имеем в наличии этот фрукт')
        break;
    case 'orange':
        alert('Мы имеем в наличии этот фрукт')
        break;
    case 'apple':
        alert('Мы имеем в наличии этот фрукт ')
        break;
        case 'banana':
            alert('Мы имеем в наличии этот фрукт')
            break;
        case 'mango':
            alert('Мы имеем в наличии этот фрукт')
            break;
        default:
            alert('Нет данного фрукта')

}




//////Task 3
let now = new Date();
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let dayOfWeek = now.getDay();
let currentDay = days[dayOfWeek];
alert('Сегодня ' + currentDay);







