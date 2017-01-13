	var $time = 0;
	var $head = $(".people").find(".head");
	var $hand = $(".people").find(".hand");
	var $body = $(".people").find(".body");
	var $name = $(".result_c").find(".name");
	var indexs = window.location.search.split("=")[1];
game(indexs);
	var $num = 0;
	var $deg = 5;
	function game (index) {
			var $bol = true;
			// $head.attr({src:"img/peo"+indexs+"_head.png"});
			// $body.attr({src:"img/peo"+indexs+"_body.png"});
			$head.tap(function  () {
			$num++;
			$deg *=-1;
			$hand.css("display","none");
			$head.css("transform","rotate("+$deg+"deg)");
			// alert($deg)
			setTimeout(function  () {
				$head.css("transform","rotate(0deg)");
			},50);
			if ($bol) {
				$(".product img").attr({src:"img/product.gif"});
				$bol = false;
				timeFn();
			};
			
			
		})
		$hand.tap(function  () {
			$num++;
			$deg *=-1;
			$hand.css("display","none");
			$head.css("transform","rotate("+$deg+"deg)");
			// alert($deg)
			setTimeout(function  () {
				$head.css("transform","rotate(0deg)");
			},50);
			if ($bol) {
				$(".product img").attr({src:"img/product.gif"});
				$bol = false;
				timeFn();
			};
		})
	}
	
	function timeFn () {
		var $times = 20;
		var $nums = $times.toFixed(2);
		var $timeshow = $("#timeshow");
		var $secondshow = $("#secondshow");
		// alert($span1)
		var $timer = setInterval(function  () {
			$nums-=0.02;
			var $thetime = $nums.toFixed(2);
			var $timearr = $thetime.toString().split(".");
			if ($nums<10) {
				if ($nums.toFixed(2)==0.00) {
					$timeshow.text(0);
					$secondshow.text("00");

					clearInterval($timer);
					$(".game").css("display","none");
					$(".result").css("display","block");
					getresult ($num)
				}
				if ($nums.toFixed(2)==5.00) {
					$img5 = $('<img src="img/biao151.png" alt="" class="img5">');
					$img6 = $('<img src="img/biao152.png" alt="" class="img6">');
					$chat_3 = $('<img src="img/chat3.png" alt="" class="chat_3">')
					// $(".chat").find(".chat_1").css("display","block");
					$("#img").append($img5);
					$("#img").append($img6);
					$(".chat").append($chat_3);
					$img3.hide();
					$img4.hide();
					$chat_2.hide();					
				};
				$timeshow.text("0"+$timearr[0]);
				$secondshow.text($timearr[1]);
			}else if ($nums<20) {
				if ($nums.toFixed(2)== 10.00) {
					$img3 = $('<img src="img/biao101.png" alt="" class="img3">');
					$img4 = $('<img src="img/biao102.png" alt="" class="img4">');
					$chat_2 = $('<img src="img/chat2.png" alt="" class="chat_2">');
					$("#img").append($img3);
					$("#img").append($img4);
					$(".chat").append($chat_2);
					$img1.hide();
					$img2.hide();
					$chat_1.hide();
				};
				if ($nums.toFixed(2)== 15.00) {
					$img1 = $('<img src="img/biao51.png" alt="" class="img1">');
					$img2 = $('<img src="img/biao52.png" alt="" class="img2">');
					$chat_1 = $('<img src="img/chat1.png" alt="" class="chat_1">');
					$("#img").append($img1);
					$("#img").append($img2);
					$(".chat").append($chat_1);
					$(".biao01").css("display","none");
					$(".biao02").css("display","none");
				};
				$timeshow.text($timearr[0]);
				$secondshow.text($timearr[1]);
			};
		},30)
	}
	function getresult (num) {
		var names = ["吕绍聪","佟梦实","邵明明","袁雨萱","宋妍霏","邢菲","左溢","赵顺然","史文祥","葛洧吟","程星源","高旻睿","万国鹏","张予曦"];
		$name.text(names[indexs]);
		var nums = num;
		var $score = $(".score");
		var $con = $(".result_p").find(".con");
		var $img = $(".result_b img");
		if (nums<100) {
			$con.eq(0).show();
			$img.eq(0).show();	
		}else if (nums<110) {
			$con.eq(1).show();
			$img.eq(1).show();
		}else{
			$con.eq(2).show();
			$img.eq(2).show();
		
		}
		function resultFn (nums) {
			var arr = nums.toString().split("");
			$score.css({width: arr.length * 22+"%"});
			for (var i = 0; i < arr.length; i++) {
				$score.append("<img src='img/" + arr[i] + ".png'/>");
			};
			$score.find("img").css({width: 100 / arr.length + "%"});
		}
		resultFn(nums);
	}
	$(".result_b img").on("touchstart", function (ev){
		ev.preventDefault();
	});
	$(".button").on("touchstart",function  () {
		$(".result").css({display:"none"});
		$(".choujiang").css({display:"block"});
	})
	function checkphone (tel) {
		if (/^13\d{9}$/g.test(tel)||/^15\d{9}$/g.test(tel)||/^18\d{9}$/g.test(tel)) {
			return true;
		}else{
			return false;
		}
	}
	$(".submit").tap(function  () {
		var tel = $(".txt").val();
		if ( checkphone (tel)) {
			$(".choujiang").css({display:"none"});
			$(".share").css({display:"block"});
		}else{
			alert("请输入正确的手机号码")
		}
	})
	$(".fajiang").tap(function  () {
		$(".choujiang").css({display:"none"});
		$(".rules").css("display","block");
	})
	$(".back").tap(function  () {
		$(".choujiang").css({display:"block"});
		$(".rules").css("display","none");
	})