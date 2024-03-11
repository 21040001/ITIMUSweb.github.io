		function change_backgroud() {
			if (document.body.style.backgroundColor == "white") {
				document.body.style.backgroundColor ="black";
				document.getElementsByClassName("oxirgi_div")[0].style.backgroundColor = "#7F00FF";
				for (var i = 0; i < document.getElementsByClassName("orta_div").length; i++) {
					document.getElementsByClassName("orta_div")[i].style.backgroundColor ="white";
					document.getElementsByClassName("orta_div")[i].style.color = "black"
				}
			}else{
				document.body.style.backgroundColor ="white";
				document.getElementsByClassName("oxirgi_div")[0].style.backgroundColor = "black";
				for (var i = 0; i < document.getElementsByClassName("orta_div").length; i++) {
					document.getElementsByClassName("orta_div")[i].style.backgroundColor ="black";
					document.getElementsByClassName("orta_div")[i].style.color = "white"
				}
			}

		}

		function mesaj_div_open() {
			document.getElementById("chat_area_div").style.width = "300px";
			document.getElementById("chat_area_div").style.height = "450px";
		}

		function yoq_qil_message_area() {
			document.getElementById("chat_area_div").style.width = "0px";
			document.getElementById("chat_area_div").style.height = "0px";
		}


		//About Us img Sliders funktions
		var index = 0;
		let myVar = setInterval(imgSlider, 1800);
		function imgSlider() {
			var imgList = ["images/1.jpg","images/2.jpg","images/3.jpg"];
		
			switch(index){
				case 0 :
					document.getElementById("imgAboutUs").src = imgList[1];
					document.getElementById("imgAboutUs2").src = imgList[2];
					document.getElementById("imgAboutUs3").src = imgList[2];
					index = 1;
					break;

				case 1:
					document.getElementById("imgAboutUs").src = imgList[2];
					document.getElementById("imgAboutUs2").src = imgList[1];
					document.getElementById("imgAboutUs3").src = imgList[0];
					index = 2;
					break;
				case 2:
					document.getElementById("imgAboutUs").src = imgList[0];
					document.getElementById("imgAboutUs2").src = imgList[0];
					document.getElementById("imgAboutUs3").src = imgList[1];
					index = 0;
					break;
			}

		}

		// Bosh header bolimlar Rang almashtirish ishlami
		function rangAlmashtirFonk1(x) {
			x.classList.add("yazi-color");

		}
		function rangAlmashtirFonk0(x) {
			x.classList.remove("yazi-color");
		}

		// so'ng header bolimlar Rang almashtirish ishlami
		function rangAlmashtirFonk2(x) {
			x.classList.add("yazi-color-black");

		}
		function rangAlmashtirFonk3(x) {
			x.classList.remove("yazi-color-black");
		}


let Gadget = setInterval(gadget, 100);
	function gadget(){
		var userAgent = window.navigator.userAgent;
		if (/Mobi|Android/i.test(userAgent)) {
			document.getElementById("oxirgiDiv").classList.add("oxirgi_div2");
		    
		} else {
			document.getElementById("oxirgiDiv").classList.remove("oxirgi_div2");
			
		}
	}