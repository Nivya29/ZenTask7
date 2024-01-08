var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    var res = result.filter((ele)=>ele.region === 'Asia').map((ele)=>ele.name.common);
    console.log(res);
};


//output:
//['Jordan', 'Pakistan', 'North Korea', 'Macau', 'Armenia', 'Syria',
// 'Tajikistan', 'Saudi Arabia', 'South Korea', 'Nepal', 'Philippines', 'Iraq', 'Lebanon', 
// 'Mongolia', 'Palestine', 'Yemen', 'Japan', 'Kazakhstan', 'Sri Lanka', 'Myanmar', 'Kyrgyzstan', 'China',
// 'Afghanistan', 'Turkey', 'Oman', 'India', 'Laos', 'Uzbekistan', 'Maldives', 'Indonesia', 'Vietnam', 'Malaysia', 'Taiwan',
// 'Cambodia', 'United Arab Emirates', 'Hong Kong', 'Georgia', 'Bangladesh', 'Kuwait', 'Turkmenistan', 'Qatar', 'Bahrain', 'Brunei',
// 'Thailand', 'Bhutan', 'Singapore', 'Israel', 'Azerbaijan', 'Timor-Leste', 'Iran']