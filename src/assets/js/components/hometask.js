
var money = +prompt('Ваш бюджет на месяц');
var time = prompt ('Введите дату в формате YYYY-MM-DD');
var a1;
var a2; 
 

appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income: [],
    savings : false,
    erraseExpenses : function(){
        a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
        a2 = +prompt('Во сколько обойдется?', '');
    appData.monthExpenses = appData.budget - a2;
    },
    chooseExpenses : function() {
        for (var i = 0; i < 2; i++) {
            if ( (typeof(a1))=== 'string' && (typeof(a1)) != null && (typeof(a2)) != null
            && a1 != '' && a2 != '' && a1.length < 50) {
            console.log("done");
            appData.expenses[a1] = a2;
        } else {
            alert("Произошла ошибка. Введите Ваши данные еще раз.");
            money = +prompt('Ваш бюджет на месяц');
            time = prompt ('Введите дату в формате YYYY-MM-DD');
            a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
            a2 = +prompt('Во сколько обойдется?', '');
            }
        }
    },
    detectDayBudget : function () {
        appData.budgetPerDay = (appData.budget - appData.monthExpenses) / 30;
        alert("Ваш бюджет на день составляет : " + appData.budgetPerDay);
    },
    detectLevel : function() { 
        if (appData.budgetPerDay < 100) {
            alert("Ваш уровень достатка - минимальный");
         } else if(appData.budgetPerDay > 100 && appData.budgetPerDay <2000) {
             alert("Ваш уровень достатка - средний");
          } else if (appData.budgetPerDay > 2000) {
              alert("Ваш уровень достатка - высокий")
          } else {
              alert("Произошла ошибка");
          }
    },
    chooseOptExpenses : function () {
        for (var i= 1; i< 4; i++) {
            var a3 = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = a3;
            console.log( i + a3);
        }
    },
    chooseIncome : function () {
        //for (var i = 0; i < 2; i++) {
        var a4 = prompt("Что принесет Вам дополнительный доход? (Введите ваши данные через запятую)", '');
        if ((typeof(a4))=== 'string' && (typeof(a4)) != null && a4 != '') {
            alert("Спасибо за ответы!");
            appData.income.push(prompt("Может быть что-то еще?"));
            appData.income = a4.split(', ');
            appData.income.sort();
            appData.income.unshift('');
            appData.income.forEach(function(value, index, array){
                if (index > 0) {
                    alert('Способы дополнительного заработка ' + ': ' + index + "." + value);
                }
                
        });
        }
        else {
            alert("Произошла ошибка. Ответьте пожалуйста на данный вопрос еще раз", '');
            this.chooseIncome();
            //i = i - 1;
            }
        //}
    }
};

console.log(appData);

