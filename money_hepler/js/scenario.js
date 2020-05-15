// elemetns
var start_btn = document.getElementById("start"),

    // Labels
    rgth_label1 = document.getElementsByClassName("budget-value")[0],
    rgth_label2 = document.getElementsByClassName("daybudget-value")[0],
    rgth_label3 = document.getElementsByClassName("level-value")[0],
    rgth_label4 = document.getElementsByClassName("expenses-value")[0],
    rgth_label5 = document.getElementsByClassName("optionalexpenses-value")[0],
    rgth_label6 = document.getElementsByClassName("income-value")[0],
    rgth_label7 = document.getElementsByClassName("monthsavings-value")[0],
    rgth_label8 = document.getElementsByClassName("yearsavings-value")[0],
    // ZZZ Labels

    inp_expenses = document.getElementsByClassName("expenses-item"),
    btn1 = document.getElementsByTagName("button")[0],
    btn2 = document.getElementsByTagName("button")[1],
    btn3 = document.getElementsByTagName("button")[2],
    optional_inp = document.querySelectorAll(".optionalexpenses-item"),
    additional_income = document.querySelector(".choose-income"),
    check = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    procent = document.querySelector("#percent"),
    yer_mnth_day = document.querySelectorAll(".time-data input");
//ZZZ elemetns


var money, time;

var appData = {
    expenses: {

    },
    optionalExpenses: [],
    income: [],
    savings: false,
    start: function() {
        money = +prompt("Ваш бюджет на месяц?", "1000");

        while (money == "" || money == null || money == 0 || isNaN(money)) {
            money = +prompt("Ваш бюджет на месяц?", "1000");
        }
        var now = new Date();
        yer_mnth_day[0].value = now.getFullYear();
        yer_mnth_day[1].value = now.getMonth() + 1;
        yer_mnth_day[2].value = now.getDate();

        appData.budjet = money.toFixed(2);
        rgth_label1.textContent = appData.budjet;


    },
    addExp: function() {
        var sum = 0;
        for (let i = 0; i < inp_expenses.length; i++) {
            var a = inp_expenses[i].value;
            var b = +inp_expenses[++i].value;
            appData.expenses[a] = b;
            sum += b;
        }
        rgth_label4.textContent = sum.toFixed(2);
    },
    detectDayBudjet: function() {
        if (appData.budjet) {
            appData.money_per_day = Math.floor((appData.budjet / 30) * 100) / 100;
            rgth_label2.textContent = appData.money_per_day;
            appData.detectLevel();
        } else {
            rgth_label2.textContent = "Что-то пошло не так. Возможно Вы забыли ввести свой доход";
        }

    },
    detectLevel: function() {
        if (appData.money_per_day < 200) {
            rgth_label3.textContent = "У Вас низкий уровень достатка";
        } else if (appData.money_per_day >= 200 &&
            appData.money_per_day < 1000) {
            rgth_label3.textContent = "У Вас средний уровень достатка";
        } else if (appData.money_per_day >= 1000) {
            rgth_label3.textContent = "У Вас высокий уровень достатка";
        } else {
            rgth_label3.textContent = "Произошла ошибка";
        }
    },
    chooseOptExpenses: function() {
        appData.optionalExpenses = [];
        optional_inp.forEach(function(e) {
            appData.optionalExpenses.push(e.value);
        });
        var str = appData.optionalExpenses.join(", ");
        rgth_label5.textContent = str;

    },
    deposit: function() {
        if (appData.savings == true) {
            if (sum.value != "" && sum.value != null &&
                sum.value != 0 && !isNaN(sum.value) &&
                procent.value != "" && procent.value != null &&
                procent.value != 0 && !isNaN(procent.value)) {
                let money = +sum.value;
                let proc = +procent.value;
                let for_day = money / 100 / 12 * proc;
                appData.depositForDay = Math.floor(for_day * 100) / 100;
                rgth_label7.textContent = appData.depositForDay;
                rgth_label8.textContent = (money / 100 * proc).toFixed(2);
            }
        }
    },
    chooseIncome: function() {
        if (typeof(additional_income.value) === "string" && additional_income.value != "" && additional_income.value != null) {
            let str = additional_income.value;
            appData.income = str.split(", ");
            rgth_label6.textContent = additional_income.value;
        }
    },
    finish: function() {
        console.log("Моя программа включает в себя данные:");
        for (let key in appData) {
            console.log(key);
            console.log(appData[key]);
            console.log("-----------");
        }
    }

};

start_btn.addEventListener("click", appData.start);
btn1.addEventListener("click", appData.addExp);
btn2.addEventListener("click", appData.chooseOptExpenses);
btn3.addEventListener("click", appData.detectDayBudjet);
additional_income.addEventListener("input", appData.chooseIncome);
check.addEventListener("click", function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});
sum.addEventListener("input", appData.deposit);
procent.addEventListener("input", appData.deposit);