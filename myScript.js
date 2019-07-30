//alert("Method #3 : Welcome from External FIle!");

/* console.log("This is log message");

console.error("This is an error");

console.info("This is adding an info");

console.warn("This is your first warning"); */

/* var myFirstVariable;

document.write(myFirstVariable);

var myName;

myName = "Anitson T T";

document.write(myName);

document.write("<br>");

var yourName = "Anitson T T";

document.write(yourName);

myCar = "Benz";

var a, b, c;

var a = 10, b = 20, c = 30; */

/* var x = 100, y = 20;

var a = x + y;

document.write("Addition: ");
document.write(a); */


//var studentAge = 16;

/* if (studentAge == 18)
{
	document.write("Student age value is equal to 18 <br>");
} */

/* if(studentAge === 18)
{
	document.write("value and type are same and is equal to 18 <br>");
} */

/* if (studentAge!= 18)
{
	document.write("not equal to 18 <br>");
}

if (studentAge !== 18)
{
	document.write("value or type not same <br>");
} */

/* if (studentAge > 18)
{
	document.write("value is greater than 18 <br>");
}

if (studentAge < 18)
{
	document.write("value is less than 18 <br>");
}
if (studentAge >= 18)
{
	document.write("value is greater than or equal to 18 <br>");
}

if (studentAge <= 18)
{
	document.write("value is less than or equal to  18 <br>");
} */

/* var studentAge = 18;
var studentGender = "M";

if ((studentAge >= 18 )&& (studentGender == "M"))
{
	document.write("age is greater than or equal to 18 and gender is male <br>");
}

if ((studentAge >= 18 )||(studentGender == "M"))
{
	document.write("age is greater than or equal to 18 or gender is male <br>");
}
if (!(studentAge >18))
{
	document.write("Student age is less than 18");
}  */

/* var x = 15,y = 7 ,z = 3;

if ((x >y) && (x > z))
   {
	document.write(" Largest number is " +x+ ");
	}else if ( (y > x) && (y > z) )
	{
		document.write(" Largest number is " +y+ ");
	}
	else
	{
		document.write(" Largest number is " +z+ ");
	}
	
var x = 15, y = 7, z  = 3;
    
    if ( (x > y) && (x > z) ) {
      
      document.write("The largest number is " + x + ");
      
    } else if ( (y > x) && (y > z) ) {
      
      document.write("The largest number is " + y + ");
      
    } else {
      
      document.write("The largest number is " + z + ");
      
    } */
  
/* var person = new Object();
person.firstName = "Anitson";
person.lastName = "T T";
person.age = 25;
person.height = 5.9;
person.fullName = function(){
	return (person.firstName + "" + person.lastName );
}
alert(person.firstName);
alert(person["age"]);
alert(person.fullName());
 */

/* function Person(fName, LName,age, hg){
	this.firstName = fName;
	this.lastName = LName;
	this.age = age;
	this.height = hg;
	this.fullName = function(){
		return (this.firstName + "  " + this.lastName);
	}
}

var myBrother = new Person("Atkinson", " T T ", 25, 5.9);

alert(myBrother.firstName);
alert(myBrother.fullName()); */


/* var person = {
	firstName : "Anitson",
	lastName : "T T",
	age : 25,
	height : 5.9,
	fullName: function(){
		return(this.firstName + "  " + this.lastName);
	}
};
/* alert(person.firstName);
alert(person["age"]);
alert(person.fullName()); */

/* var x = person;

x.firstName = "Appu";

alert(x.firstName);
alert(person.firstName);


delete person.age;
alert(person.age);


var myCar ={
	name: "Benz",
	year: 2018,
	color: "Red"
};

var v =" ";

for(var k in myCar ){
	v = v + myCar[k] + " ";
}

alert(v);

var user ={
	name: "Anitson T T",
	age: 25,
	size :{
		top: 90,
		middle: 60,
		bottom: 90
	}
};

alert(user.name);
alert(user.size.top); */

/* var currentTime = new Date(5456656546);
alert(currentTime); */

/*
var dt = new Date("March 25, 2020");
alert(dt);

var dtm = new Date();

document.write("Date: " + dtm.getDate() + dtm.getDay() + dtm.getMonth() + dtm.getFullYear() + dtm.getHours() + dtm.getMinutes() + dtm.getSeconds());
 */
 
 /* var sqr = Math.sqrt(20);
 
 document.write("Square root :" + sqr);
 
 var min = Math.min(10,20,3,15,7);
 
 document.write("min" + min);
  */
  
/*  var myColors = new Array("Red", "Green", "Blue");
 
 document.write(myColors[2]);
 
 var myColors = ["red","green","blue"];
 
 document.write(myColors[0]);
 
 myColors[1]="Yellow";
 document.write(myColors);
 
 document.write(myColors.length);
 
 document.write(myColors.sort());
 
 document.write(myColors.reverse());
  myColors.push("pink");
  document.write(myColors);
  
  myColors.pop("pink");
  document.write(myColors);
  
  var listOne = [1,2,3];
  var listTwo = [4,5,6];
  
  var fullList = listOne.concat(listTwo);
  
  document.write(fullList); */
  
  /* var myCars = ["Benz","Toyota","Audi"];
  
  for ( var i = 0; i < myCars.length; i++){
	  document.write(myCars[i]);
  } */
 
 /* var myCars = [
		{model:" Benz", year:2018 },
	    {model:"Audi", year:2019}
 ];
 
 for(var k=0; k < myCars.lenght; k++){
	 var myCar= "";
	 for(var cp in myCars[k]){
		 myCar = myCar + myCars[k][cp];
	 }
	 document.write(myCar);
 } */
 
/*  var eBooks = [
	{title:"book1",author:"author1",readingStatus:true},
	{title:"book2",author:"author2",readingStatus:false},
	{title:"book3",author:"author3",readingStatus:true}
];

for (var x =0; x < eBooks.lenght; x++){
	var book = "'" + eBooks[i].title + "'" + 'by' + eBooks[i].author + ".";
	 if(eBooks[i].readingStatus){
		 document.wirte("Already read" + book + "<br>);
	 }else{
		 document.write("Still need to read" +book);
	 }
} */

/* var regExp1 = new RegExp("anitson");

var regExp2 = /anitson/;

var strToSerach = "Am anitson TT";

var matchFound = regExp2.test(strToSerach);
alert(matchFound);


var functionAsObject = new Function("a", "b","return a + b");

var x = functionAsObject(10, 25);

alert(x);

var y = function(a,b){return (a + b) };

alert(y(20,50)); */

/* var ss = new String("Indian");

document.write(ss + "<br>");

var st = "i am an indian";

document.write("lenght" + st.charAt(2) + "<br>" );
 */

/*  var n = new Number(15);
 
 document.write(n);
 
 document.write("Primitive value" + n.valueOf());
 
 var numCheck = 20 +"t";
 document.write(numCheck+ "is" +isNaN(numCheck));
 
 var myNum = 123;
 document.write(myNum.toString());
  */
 
/* var x= 15;
alert(window.x);


function y (){
	document.write("golbal function");
}
 window.y();
 
 alert("alert without window obj");
 
 window.alert("alert using window obj");
 
 window.confirm("confirm invoked using window obj");
 
 window.prompt("prompt invoked using window obj");
 
 document.write(window.innerWidth + "<br>");
 
 document.write(window.innerHeight + "<br>");
 
 document.write(window.outerWidth + "<br>");
 
 document.write(window.outerHeight + "<br>");
 
 document.write(window.innerWidth + "<br>");
 
 window.name = "Anitson Window";
 
 document.write(window.name);
 
 var win = window.open("http://www.udemy.com","Udemy", "width=150,height=150");
 
 win.resizeTo(250,250);
 
 win.moveTo(350,200); */
 
 
 /* 
 function sayHello(){
	 alert("Hello");
 }
 
 /*window.setTimeout(sayHello,2000);*/
 /* var st=setTimeout(sayHello,2000);
 
 clearTimeout(st); */
 
 /* var st=window.setInterval(sayHello,2000);
 
 clearInterval(st); */
 

/* 

document.write(window.screen.width + "<br>");

document.write(window.screen.height + "<br>");

document.write(screen.availWidth + "<br>");

document.write(screen.availHeight + "<br>");

document.write(screen.colorDepth + "<br>");

document.write(screen.pixelDepth + "<br>"); */

/* document.write("history" + window.history.lenght + "<br>");

history.back(); */

/* history.forward();

history.go(1);
history.go(-2); */
/* 
document.write(window.navigator.cookieEnabled);

document.write(navigator.appName);
document.write(navigator.appVersion);
document.write(navigator.appCodeName);
document.write(navigator.platform);
document.write(navigator.language);
document.write(navigator.javaEnabled);
 */
 
 // window.location = "http://udemy.com";
 
 //document.write(location.href);
 
 // document.write(location.hostname);
 
 /* document.write(location.pathname);
 
 document.write(location.protocol); */
 
 /* location.assign("https://www.google.com");
 */
 /* location.reload(); */
 
 /* location.replace("https://www.google.com");
 */
 
 /* document.cookie = "userFN=anitson;expires = thu,22 jan 2020 12:00:00 UTC";
 
 alert(document.cookie); */
 
/*  var hElement = document.getElementById("heading");
  alert(hElement);
  
  alert(hElement.innerHTML);
  
  alert(hElement.getAttribute("id"));
  
  alert(hElement.tagName);
  
  var pElements = document.getElementsByClassName("paragraph");
 /*  alert(pElements); */
/*  alert(pElements[0]);
 
 alert(pElements[0].innerHTML); */
 
 /* for(var i=0; i < pElements.lenght; i++){
	 //alert(pElements[i].innerHTML);
	 
 } */
 
 /* var ulElements = document.getElementsByTagName("ul");
 
 alert(ulElements);
 alert(ulElements[1].innerHTML);
 var liElments = ulElements[1].getElementsByTagName("li");
 alert(liElments[0].innerHTML);
 
 var nameElements = document.getElementsByName("user-name");
 alert(nameElements[0].tagName); */
 
 //var paElement = document.querySelector("P");
 //alert( paElement.innerHTML );
 
 /* var headElement = document.querySelector("#heading");
 
 alert( headElement.innerHTML ); */
 
 /* var pElements = document.querySelectorAll("p");
 alert(pElements[1].innerHTML); */
 
 /* var pElements = document.querySelectorAll(" div p");
 alert(pElements[1].innerHTML); */
 // get element by id
/* var hElement = document.getElementById("my-h");

// get text using innerHTML 
alert(hElement.innerHTML); */

/* var ulElements = document.getElementsByTagName("ul")[0];
/* alert("Node name:" + ulElements.nodeName);
alert("Node type:" + ulElements.nodeType);

alert("Node parent :" + ulElements.parentNode.nodeName);

alert("Node child nodes:" + ulElements.childNodes);

alert("child nodes lenght:" + ulElements.childNodes.lenght); */

/* var ulChildNodes = ulElements.childNodes;

for( var i = 0; i < ulElements.lenght; i ++; ){
	if( ulChildNodes[i].nodeType == 1 ){
		//alert(ulChildNodes[i].innerHTML);
	}
}

var liFirstChild = ulElements.firstChild.firstChild.nodeValue;
alert(liFirstChild);

var liLastChild = ulElements.lastChild.firstChild.nodeValue;
alert(liLastChild);
 */


 //var ulElements = document.getElementById("list");
 
 //var newListElement = document.createElement("li");
 
 //var newLiText = document.createTextNode("this in new list item");
 
 //newListElement.appendChild(newLiText);
 
 //ulElements.appendChild(newListElement); */
 
//var liElments = document.getElementById("list-item");
 //liElments.parentNode.appendChild(newListElement);
 
 //liElments.parentNode.insertBefore(newListElement,liElments);
 
 //liElments.parentNode.replaceChild(newListElement, liElments);
 
 var hElement = document.getElementById("heading");
 
 //alert(hElement.nodeValue);
 
 
 //alert(hElement.childNodes[0].nodeValue);
 
 //alert(hElement.firstChild.nodeValue);
 
 //hElement.firstChild.nodeValue = "Changed";

 //hElement.textContent = " changed using Text Content";
 
 //hElement.innerHTML = "<em>Changed using innerHTML</em>";
 
 //hElement.outerHTML = "<h2><marquee> Changed </marquee></h2>";
 
 //var imageElement = document.getElementsByTagName("img")[0];
 
 //imageElement.setAttribute("src", "image.png");
 
 //imageElement.src="image.png";
 
 //var aElement = document.getElementsByName("a")[0];
 
 //aElement.href="https://www.google.com";
 
 //var hElement = document.getElementById("heading");
 
 //hElement.style.color="white";
 
 //hElement.style.border="1px solid red";
 
 //hElement.style.backgroundColor="blue";
 
 //hElement.style.padding="10px";
 
// hElement.className="heading-css heading1-css";
 // hElement.setAttribute("class","heading-css heading1-css");
 
// var pElement = document.getElementById("my-p");
 
 /* pElement.style.color="yellow";
 
 pElement.style.fontSize="10px";
 
 pElement.style.border="2px double black";
 
 pElement.style.padding="20px"; */
 
 //pElement.className="my-p";
/*  
 
 
 (function(){
	 
	 var imgElement = document.getElementById("img");
	 
	  var imgTopPosition = 0;
	  
	  var imgLeftPosition = 450;
	  
	  setInterval(moveImage, 10);
	  
	  function moveImage(){
		  
		  if(imgTopPosition < 270 && imgLeftPosition == 450 ){
			  imgTopPosition++;
			  imgElement.style.top =imgTopPosition + "px";
			  
	  }else if(imgLeftPosition <720 && imgTopPosition == 270 ){
			  imgLeftPosition++;
			  imgElement.style.left = imgLeftPosition + "px";
		  }else if (imgTopPosition > 0){
			  imgTopPosition--;
			  imgElement.style.top = imgTopPosition + "px";
			  
		  }else if (imgLeftPosition > 450 ){
			  imgLeftPosition--;
			  imgElement.style.left = imgLeftPosition + "px";
		  }
	  }
	  
	 
 })();
  */
  
/* function doSomething(){
	alert("just cliked");
} */  
 
 var btnElement = document.getElementById("btn");
 
 btnElement.onclick = function(){
	 alert("just cliked");
 }
 
 /* window.onload = function(){
	 alert("this page just finished loading");
 } */
/*  
 var hElement = document.getElementById("heading");
 
 /* hElement.onmouseover = function(){
	 if(this.className == "h-normal"){
		 this.className = "h-changed";
	 }else{
		 this.className = "h-normal";
	 }
 }
 
 hElement.onmouseover = function(){alert("it just overwrite the previous event handler");}
  */
  
  /* var btn2Element = document.getElementById("btn1");
  
  function changeBtnFontSize(){
	  this.style.fontSize = "45px";
  }
  
  btn2Element.addEventListener("click", changeBtnFontSize);
 
 btn2Element.addEventListener("click", function(){alert("will not be overwitre")} );
 
 btn2Element.removeEventListener("click", changeBtnFontSize);
  */
 /* var btn2Element = document.getElementById("btn1");
 
 function changeBtnFontSize(event){
	 //this.style.fontsize = "40px";
	 
	 alert(event.target.fontSize = "40px";
	 
	 
	 
	 alert(event.type);
	 
	 alert(event.target);
 }
 
 btn2Element.addEventListener("click", changeBtnFontSize);
 
 var aElemnet = document.getElementById("click-me");
 
 function clickMe(event){
	 alert("you just clicked me");
	 
	 event.preventDefault();
 }
 
 aElement.addEventListener("click",clickMe);
 
   */
   
   var x ="test";
   try{
	   if(isNaN(x)){
		   throw("not a number");
	   }
   }
   catch(e){
	   alert("error" + e);
   }
   finally{
	   document.write("<h1> hai");
   }