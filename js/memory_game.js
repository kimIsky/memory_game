let result_box = [];
let com_box = [];
let num = 0;
$(".card_box").on("click", function(e){
	$(e.target).attr("name") == 1 && $(e.target).attr("src", "../img/ball1.png");
	$(e.target).attr("name") == 2 && $(e.target).attr("src", "../img/ball2.png");
	$(e.target).attr("name") == 3 && $(e.target).attr("src", "../img/ball3.png");
	$(e.target).attr("name") == 4 && $(e.target).attr("src", "../img/ball4.png");
	$(e.target).attr("name") == 5 && $(e.target).attr("src", "../img/ball5.png");
	$(e.target).attr("name") == 6 && $(e.target).attr("src", "../img/ball6.png");
	$(e.target).attr("name") == 7 && $(e.target).attr("src", "../img/ball7.png");
	$(e.target).attr("name") == 8 && $(e.target).attr("src", "../img/ball8.png");
	result_box.push($(e.target).attr("name"));
	if( result_box.length > 1){	
		if(result_box[0] != result_box[1] ){
			setTimeout(() => {
				//$(e.target).attr("src", "../img/back.png");
				$("img[name=\""+com_box[com_box.length-2]+"\"]").attr("src", "../img/back.png");
				$("img[name=\""+com_box[com_box.length-1]+"\"]").attr("src", "../img/back.png");
			}, 500);
		} else {
			num++;
			console.log(num);
			if( num == 8 ){
				$(".last_box").fadeIn(300);
			}			
		}
		result_box = [];
	}
	com_box.push($(e.target).attr("name"));			
});

$('.start_bt').on("click", function(){
	$('.start_box').fadeOut(300);
});
$('.last_bt').on("click", function(){
	location.reload();
});