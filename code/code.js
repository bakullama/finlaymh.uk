$("html").css({"font-size": (window.outerHeight/100)+"px"});
maintitle.classList.remove("fade");
quote.classList.remove("fade");
var array = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8"];

for (i in array) {
    document.getElementById(array[i]).classList.remove("fade")
};

void maintitle.offsetWidth;


maintitle.classList.add("fade");
quote.classList.add("fade");

setInterval(function() {
    if (pageYOffset >= Number(window.outerHeight/100)*60) {
        var counter = 0;
        var i = setInterval(function(){
            document.getElementById(array[counter]).classList.add("fade");
            document.getElementById(array[counter] + "m").classList.add("fade");
            counter++;
            if (counter == 8) {
                clearInterval(i);
            }
            },
        100);
     };
}, 200);

function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');

	var i = 0;
	timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}


var speed = 125;
typeEffect($('#type'), speed);
setInterval(function() {
    typeEffect($('#type'), speed);
}, 3000);