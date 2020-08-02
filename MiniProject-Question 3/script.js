/*document.getElementById('button').addEventListener('click',newQuote);*/
function newQuote(){
  fetch('https://type.fit/api/quotes')
    .then(response=>response.json())
	.then(data=>{
	   var randomNumber=Math.floor(Math.random()*(data.length));
       let quote=data[randomNumber];
	   document.getElementById('text').innerHTML='"'+quote.text+'"';
	   document.getElementById('author').innerHTML="-" +quote.author;
      })
}