'use strict'
document.addEventListener("DOMContentLoaded", function(){
    var flagDone = false;
    // Вытащить список "ul"
    var Sum =document.querySelector('#Sum');
    var Sort =document.querySelector('#Sort');
    var Rand =document.querySelector('#Rand');
    var ul = document.querySelector('ul');
    var steck= true;
    
    Sum.addEventListener ('click', function(){
        if (flagDone ==false)
            {
                var prises = CreateMass();
                var sum=0;
                prises.forEach(function (el){
                    sum += el.price; 
                } );
                 var  li = document.createElement ('li');
                li.innerHTML = 'Cумма: ' + sum ; 
                ul.appendChild(li);
                flagDone = true;
            }
    });
    
   Sort.addEventListener ('click', function(){
       var prices = CreateMass ();
       if (steck==true)
           {
            prices.sort(function (a,b)
                    {
                        return  b.price-a.price;
                    });
                steck =false;         
           }
       else 
           {
            prices.sort(function (a,b)
                    {
                        return  a.price-b.price;
                    });
               steck =true;
           }
       createList(prices);
    });
    
    Rand.addEventListener ('click', function(){
        var prices = CreateMass ();
        prices.sort(function (){
            return Math.random() - 0.5 ;
        });
        createList(prices);
    });
    
    function CreateMass()
    {
        var i = 0;
        let  prices = [];
        let elementPlusPlus;
        let element = document.querySelectorAll('li');
        let innerHTML;
        let returnNum;
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
                //Берем елемент, вызываем родителя и уаляем именно этот елемент       
            }
        return prices;
    }
    function createList (prices)
    {
        let element = document.querySelectorAll('li');
        //var prices = CreateMass ();
        var i = 0;
        var ul = document.querySelector('ul'); 
        var li;
        while ( i < prices.length)
            {
                var old = element[i];
                li = document.createElement('li');
                li.innerHTML = prices[i++].text;
               old.parentNode.replaceChild(li ,old);
            }
    }
});
