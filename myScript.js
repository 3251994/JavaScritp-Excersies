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

/* */
	
/* document.write("while loop");
var x =	1;
while (x<=5)
{
	document.write(x + "<br>"); 
	x++;

}


document.write("do while loop");

var y = 6;
do{
	document.write(y + "<br.");
	y++;
}while(y <= 5);

document.write("for loop");

for(z = 1; z <= 5; z++)
{
	document.write(z + "<br>");
} */
/* var z;
document.write("break ");
for(z = 1; z <= 10; z++)
{
	document.write(z + "<br>");
	if(z == 7){
	break;
	}
	document.write(z + "<br/>");
} 

var z;
document.write("continue");
for(z = 1; z <= 10; z++)
{
	document.write(z + "<br>");
	if( z == 7 ){
	continue;
	}
	//document.write(z + "<br/>");
} 
 */
 
 /* function fun(){
	 document.write("inside fun");
 }	 
 fun();
 
 function funpara( a1,a2){
	 var res = a1 * a2;
	 document.write("a1 * a2 =" + res + "<br>");
	 
 }
 funpara(100, 200); */
 
/* function paraAsfun( func){
	func();
}
paraAsfun(otherfun);

function otherfun(){
	alert("alert msg! fun passed as an argument");
}

function retunSum(a ,b){
	var sum = a + b;
	return sum;
}

/* var result = retunSum(100, 200);
document.write("Returned Value = " +result); */

/* document.write("Returned Value = " +retunSum(100, 200)); */
 
 /* function sum(a,b){
	 return (a + b);
 }
 
 var s = sum;
 var r = s(10,20);
 document.write(r+"<br>"); */

 /* var isAdult = function(age){
	 if( age >= 18){
		 return "Yes";
	 }else{
		 return "No";
	 }
 };
 var x = isAdult(25);
 document.write("Adult status: " +x); */
 
 /* (function(){
	 alert("Auto show up msg");
 })();

 (function(){
	 alert("Auto show up msg2");
 })();

 (function(a, b){
	 alert("Sum of a & b: " +(a+b));
 })(10,20);
 
 var sum =(function(a,b){
	 return (a+b);
	 
 })(10,30);
 
 alert("returned Sum : " +sum); */
 
/*  var x = 122;
 
 function myfunc(){
	 alert("inside function" + x);
 }
myfunc();
alert("outside function" + x);

function myfunc1(){
	
	var y =23;
	 document.write("inside function" + y);
 }
myfunc1();
//document.write("outside function" + y);
 
function myfunc2(){
	c = 200;
	document.write("inside function" + c);
 }
myfunc2();
document.write("outside function" + c); */


 /* function outerFunctoin(){
	 
	 function innerFunction(){
		 
		 document.write("Execution inside function");
	 }
	 //innerFunction();
 }
 //outerFunction();
 */
 
 /* alert("Welcome to this website");
 
 var c = confirm("Do you want us to send to the updates?");
 
 if (c){
	 document.write("ok, we will send you the updates");
 }else{
	 document.write("ok, we will not send you the updates");
 }
  */
 var visitorAge = prompt("enter your age");
 if(visitorAge >= 18){
	 document.write("U r good to go!");
 } else{
	 document.write("u r not good to go!");
	 document.write(visitorAge);
 }
 