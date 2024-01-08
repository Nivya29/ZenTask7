var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    var res = result.reduce((acc,ele)=>acc+ele.population,0);
    console.log("Total Population of Countries:",res);
};









//output
//Total Population of Countries: 7777721563