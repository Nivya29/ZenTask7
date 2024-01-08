var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    var res = result.filter((ele)=>ele.currencies && ele.currencies.USD).map((ele)=>ele.name.common);
    console.log(res);
};

//output
//['American Samoa', 'Turks and Caicos Islands', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 
//'United States Virgin Islands', 'Caribbean Netherlands', 'Panama', 'Palau', 'Cambodia', 'Northern Mariana Islands', 'Bahamas', 
//'El Salvador', 'Micronesia', 'British Virgin Islands', 'Ecuador', 'Guam', 'Marshall Islands', 'United States', 'Puerto Rico', 'Timor-Leste']

