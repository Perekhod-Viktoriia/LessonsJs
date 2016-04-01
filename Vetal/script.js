'use strict';
//Пометка о том, что скрипт запущен.
var flagDone = false;
// оброботчик сообытия нажатия кнопки
window.addEventListener('keydown', function (e)
    {
    // проверка на нажатие кнопки "Enter"
        if (e.keyCode == 13 && flagDone === false )
        {
            // Вытащить все елементы списка
            var element = document.querySelectorAll('li');
            var i=0;
            var innerHTML;
            var returnNum; 
            var  prices = [];
            var counterPrice=0;
            var elementPlusPlus;
            var li;
            // Вытащить список "ul"
            var ul = document.querySelector('ul');
            
            while (i < element.length )
            {
                elementPlusPlus = element[i++];
                // Вытаскиваем текстовое значение
                innerHTML = elementPlusPlus.innerHTML;
                //Регулярка на выбарку чисел
                returnNum = innerHTML.match('[\\w.]+');
                // Проверка является ли переменная массивом
                returnNum = returnNum instanceof Array  ?  +returnNum[0] : 0 ; 
                //Записываем массив с ключами и их значениями 
                prices.push({price:returnNum, text:innerHTML});
                counterPrice +=returnNum;   
                //Берем елемент, вызываем родителя и уаляем именно этот елемент
                elementPlusPlus.parentNode.removeChild(elementPlusPlus);        
            }
            prices.sort(function (a,b)
                {
                    return  b.price-a.price;
                });
            i=0;
            //Создаем новый список елементов
            while ( i < prices.length)
                {
                    li = document.createElement('li');
                    li.innerHTML = prices[i++].text;
                    ul.appendChild(li);   
                }
            // Добовляем сумму товаров
            li = document.createElement ('li');
            li.innerHTML = 'Cумма: ' + counterPrice ; 
            ul.appendChild(li);
            //конец работы
            flagDone = true;
        }
    });
