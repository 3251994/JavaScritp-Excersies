var eBooks = [
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
}