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
 

 

