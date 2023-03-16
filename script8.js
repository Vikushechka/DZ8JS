// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", 
// когда все теги будут созданы браузером.


// document.addEventListener('DOMContentLoaded', () => console.log('все теги прогрузились'));

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", 
// когда все ресурсы страницы будут загружены.

// window.addEventListener('load', function (e) {
//     console.log('страница прогрузились');
// })

// 3. При клике на какой-либо тег на странице в консоль 
// должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

// const text0 = document.addEventListener('click', event => {
//     const text1 = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
//     console.log(`
//     Класс "super_element" ${text1} в элементе 
//     "${event.target.tagName.toLowerCase()}".`);
// });

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось 
// сообщение: "Вы навели на textarea."

// const textarea = document.querySelector('textarea');
// textarea.addEventListener('mouseover', function () {
//     console.log('Вы навели на textarea.');
// })

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в 
// консоль необходимо выводить текст, который записан внутри элемента кнопки, 
// по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
//  Необходимо использовать делегирование.

// const ul = document.querySelector('ul').addEventListener('click', event => {
//     if (event.target.tagName !== "BUTTON") {
//         return;
//     }
//     console.log(event.target.textContent);
// });

// // 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только 
// // потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? 
// // Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// // По важности  querySelector('ul'), выполняется раньше, 
// // addEventListener срабатывает когда совершится какое-либо действие.

// // 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// const color1 = document.querySelectorAll('li:nth-child(2n)').forEach(el =>
//     el.style.backgroundColor = '#b4b4d9');