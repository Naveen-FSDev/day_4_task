// 1.HOW TO COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER?


 let obj1={name:"Person 1", age:5};
  let obj2={age:5, name:"Person 2" };

         var flag=true;

 if(Object.keys(obj1).length==Object.keys(obj2).length){
     for(key in obj1) { 
         if(obj1[key] == obj2[key]) {
             continue;
         }
         else {
             flag=false;
             break;
         }
     }
 }
 else {
     flag=false;
 }
 console.log("is object equal"+flag);
 

// 2.USE THE REST COUNTRIES API URL AND DISPLAY ALL COUNTRY DETAILS IN CONSOLE

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
        var result=JSON.parse(request.response);
        console.log(result);
        }