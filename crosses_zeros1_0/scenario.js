/*main function*/
function main_func(){
/*greeting*/

var frst_name = prompt("Hello, my young friends-pirates! What is your name?");
var scnd_name = prompt("And what is his name(your friends name)?");
var choose = 0;
while (choose != 0 && choose != 1){
	choose = prompt("Well, " + frst_name + " if you want to play with skulls choose '0' but if you want to play with cross-swords choose '1'");
	choose = +choose;
}

var counter = 0;
var finish_cntr = 0;
var drawn_caunter = 0;
var new_finish_cntr = 0;
var agayn = false;
var field = document.getElementsByClassName("wrapper")[0];
var revisor = "";
var anti_choose = anti(choose);



/*zzz greeting*/

/*functions*/
/*function for create new player*/
function Player(name, choose){
	if(choose == 1){
		this.figure = "skull";
	}else{
		this.figure = "bones";
	}
	this.name = name;
	this.wins = 0;
}
/*zzz function for create new player*/

/*antichoose*/
function anti(choose){
	if(choose == 0){
		var anti_choose = 1;
	}else{
		var anti_choose = 0;
	}
	return(anti_choose);

}
/*zzz antichoose*/

/*function for show players who will start first*/
function who_first(){
	if(frst_player.figure == "bones"){
		alert("Be careful! " + frst_player.name + " start our game!");
	}else{
		alert("Be careful! " + scnd_player.name + " start our game!");
	}
}
/*zzz function for show players who will start first*/

/*function for create array with 9 boxes*/
function create_arr(arr){
	for(var i = 0; i < 9; ++i){
		arr[i] = document.getElementById("box_" + (i+1));
		arr[i].addEventListener("click", marker, false);
	}
	return(arr);
}
/*zzz function for create array with 9 boxes*/

/*function for paint ckull or cross-swords*/

	/*functions for function marker*/
	function test_for_empty(bx, finish_cntr, counter){
		if(bx.style.backgroundImage != ""){
			alert("This box is allready choosed, you mast choose another!");
			return(finish_cntr);
		}else{
			if(counter == 0){
				bx.style.backgroundImage = "url(images/cross.png)";
			}else{
				bx.style.backgroundImage = "url(images/zero.png)";
			}
			++finish_cntr;
			return(finish_cntr);
		}
	}

	function less_win_code(name, url_for_win_field){
		field.style.backgroundImage = url_for_win_field;
		//===============================================
		setTimeout(what_do_u_want, 1000, name);
		finish_cntr = 0;
	}

	function what_do_u_want(name){
		agayn = confirm("Well done!" + name + " Do you want to play agayn?");
		if(agayn == true){
			for(var i = 0; i < 9; ++i){
			clicker_arr[i].style.backgroundImage = "";
			}	
		field.style.backgroundImage = "url(images/field.png)";
		if(counter == 0){
			alert("Be careful!" + frst_player.name + " start new game first!");
		}else{
			alert("Be careful!" + scnd_player.name + " start new game first!");
		}
		return(true);					
		}else{
			window.close();
		}
	}
	/*zzz functions for function marker*/

	/*test for top-horisontal win*/
	function top_hrz_test(){
			if(clicker_arr[0].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[1].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[2].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[0].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[1].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[2].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[0].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/top_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/top_horizontally.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/top_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/top_horizontally.png)");
					}
				}
		}
	}
	/*zzz test for top-horisontal win*/

	/*test for middle-horisontal win*/
	function middle_hrz_test(){
			if(clicker_arr[3].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[4].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[5].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[3].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[4].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[5].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[3].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/middle_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/middle_horizontally.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/middle_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/middle_horizontally.png)");
					}
				}
		}
	}
	/*zzz test for middle-horisontal win*/

	/*test for bottom-horisontal win*/
	function bottom_hrz_test(){
			if(clicker_arr[6].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[7].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[8].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[6].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[7].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[8].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[6].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/bottom_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/bottom_horizontally.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/bottom_horizontally.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/bottom_horizontally.png)");
					}
				}
		}
	}
	/*zzz test for bottom-horisontal win*/

	/*test for left-vertical win*/
	function left_vrtcl_test(){
			if(clicker_arr[0].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[3].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[6].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[0].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[3].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[6].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[0].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/left_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/left_vertical.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/left_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/left_vertical.png)");
					}
				}
		}
	}
	/*zzz test for left-vertical win*/

	/*test for middle-vertical win*/
	function middle_vrtcl_test(){
			if(clicker_arr[1].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[4].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[7].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[1].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[4].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[7].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[1].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/middle_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/middle_vertical.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/middle_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/middle_vertical.png)");
					}
				}
		}
	}
	/*zzz test for middle-vertical win*/

	/*test for right-vertical win*/
	function right_vrtcl_test(){
			if(clicker_arr[2].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[5].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[8].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[2].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[5].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[8].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[2].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/right_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/right_vertical.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/right_vertical.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/right_vertical.png)");
					}
				}
		}
	}
	/*zzz test for right-vertical win*/

	/*test for left-diagonal win*/
	function left_dgnl_test(){
			if(clicker_arr[0].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[4].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[8].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[0].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[4].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[8].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[0].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/left_diagonal.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/left_diagonal.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/left_diagonal.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/left_diagonal.png)");
					}
				}
		}
	}
	/*zzz test for left-diagonal win*/

	/*test for right-diagonal win*/
	function right_dgnl_test(){
			if(clicker_arr[2].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[4].style.backgroundImage == 'url("images/cross.png")' && clicker_arr[6].style.backgroundImage == 'url("images/cross.png")' || clicker_arr[2].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[4].style.backgroundImage == 'url("images/zero.png")' && clicker_arr[6].style.backgroundImage == 'url("images/zero.png")'){
				if(clicker_arr[2].style.backgroundImage == 'url("images/zero.png")'){
					revisor = "skull";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/right_diagonal.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/right_diagonal.png)");
					}
				}
				else{
					revisor = "bones";
					if(frst_player.figure == revisor){
						frst_player.wins++;
						less_win_code(frst_player.name, "url(images/win/right_diagonal.png)");
					}else{
						scnd_player.wins++;
						less_win_code(scnd_player.name, "url(images/win/right_diagonal.png)");
					}
				}
		}
	}
	/*zzz test for right-diagonal win*/

	/*test for drawn game*/
	function test_for_drawn_game(){
		if(finish_cntr > 8){
			drawn_caunter++;
			alert("Oh my God!It was a drawn game");
			setTimeout(what_do_u_want, 1000, frst_player.name + " and " + scnd_player.name);
			finish_cntr = 0;
			return(true);
		}
	}
	/*zzz test for drawn game*/

	/*return true if we have true in variable 'agayn'*/
	function check_ag_true(){
		if(agayn == true){
			return(true);
		}	
	}
	/*return true if we have true in variable 'agayn'*/
	
	/*code for mark*/
function marker(){
		new_finish_cntr = test_for_empty(this, finish_cntr, counter);
		if(new_finish_cntr > finish_cntr){
			++finish_cntr;
		}
		counter = anti(counter);
		agayn = test_for_drawn_game();
		check_ag_true();
		agayn = top_hrz_test();
		check_ag_true();
		agayn = middle_hrz_test();
		check_ag_true();
		agayn = bottom_hrz_test();
		check_ag_true();
		agayn = left_vrtcl_test();
		check_ag_true();
		agayn = middle_vrtcl_test();
		check_ag_true();
		agayn = right_vrtcl_test();
		check_ag_true();
		agayn = left_dgnl_test();
		check_ag_true();
		agayn = right_dgnl_test();
		check_ag_true();
	/*zzz code for mark*/
}

/*zzz function for paint ckull or cross-swords*/

/*zzz functions*/

/*code for results watching*/


//var trch = document.getElementById("torch");

function result_function(){
	var result_arr = {};
	result_arr.first_player = frst_player.name;
	result_arr.second_player = scnd_player.name;
	result_arr.drawns = drawn_caunter;
	result_arr.first_player_wins = frst_player.wins;
	result_arr.second_player_wins = scnd_player.wins;
	if(!window.localStorage.number){
		window.localStorage.number = 0;
	}else{
		window.localStorage.number++;
	}
	if(!window.localStorage.arr_availability){
		window.localStorage.arr_availability = true;
		var arr_with_obj = new Array;
		window.localStorage.arr_res = arr_with_obj;
	}
	var nmb = window.localStorage.number;
	nmb = +nmb;
	result_arr = JSON.stringify(result_arr);
	window.localStorage.arr_res[nmb] = result_arr;
}

//trch.addEventListener("click", result_function, false);
/*zzz code for results watching*/

var frst_player = new Player(frst_name, choose);
var scnd_player = new Player(scnd_name, anti_choose);
who_first();
var clicker_arr = new Array();
clicker_arr = create_arr(clicker_arr);
return(agayn);
}
/*zzz main function*/

var ag = main_func();

if(ag == true){
	main_func();
}
