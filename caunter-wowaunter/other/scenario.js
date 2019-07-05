
function caunt_all(){
    var money = document.querySelector("#money").value;
    money = +money.replace(/\s/g, '');
    var step = document.querySelector("#step").value;
    step = +step.replace(/\s/g, '');
    var price = document.querySelector("#price").value;
    price = +price.replace(/\s/g, '');
    var complects_tetle = document.querySelector("#complects");
    var final_value_title = document.querySelector("#final_value");

    var complects = (money-step)/price;
    complects = Math.floor(complects);
    complects_tetle.textContent = complects + " комплектів";
    var final_value = complects*price;
    final_value.toString();
    final_value = (final_value+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    final_value_title.textContent = final_value + " грн";

}

var btn = document.querySelector("button");

btn.addEventListener("click", caunt_all);