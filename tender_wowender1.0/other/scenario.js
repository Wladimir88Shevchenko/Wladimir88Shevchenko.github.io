var proc = 1;
var old_price = 99999999;


function caunt_all(){
    /* var first_price = document.querySelector("#our_first_price").value;
    first_price = +first_price.replace(/\s/g, ''); */
    var money = document.querySelector("#money").value;
    money = +money.replace(/\s/g, '');
    var step = document.querySelector("#step").value;
    step = +step.replace(/\s/g, '');
    var how_meny_complects = document.querySelector("#how_meny").value;
    how_meny_complects = +how_meny_complects.replace(/\s/g, '');
    var price = document.querySelector("#price").value;
    price = +price.replace(/\s/g, '');
    var complects_tetle = document.querySelector("#complects");
    var final_value_title = document.querySelector("#final_value");

    step = step/how_meny_complects;
    step = Math.ceil(step);

    if(old_price<money){
        proc = 1;
    }

    var proc_money = (price/100)*proc;

    while(proc_money<step){
        ++proc;
        proc_money = (price/100)*proc;
    }

    var final_sum = (price - proc_money)*how_meny_complects;

    while(final_sum>money){
        ++proc;
        proc_money = (price/100)*proc;
        final_sum = (price - proc_money)*how_meny_complects;
    }


    
    
    complects_tetle.textContent = proc + " % знижки";
    if(proc>35){
        complects_tetle.style.color = "red";
    }else{
        complects_tetle.style.color = "white";
    }

    final_sum = Math.floor(final_sum);
    final_sum.toString();
    final_sum = (final_sum+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    final_value_title.textContent = final_sum + " грн";

    old_price = money;
}

var btn = document.querySelector("button");

btn.addEventListener("click", caunt_all);