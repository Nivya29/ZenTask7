var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    var res = result.filter((ele)=>ele.population < 200000).map((ele)=>ele.name.common);
    console.log(res);
};









//output
//['Christmas Island', 'Samoa', 'American Samoa', 'Turks and Caicos Islands', 'Seychelles', 'Curaçao', 'British Indian Ocean Territory',
// 'United States Minor Outlying Islands', 'Åland Islands', 'United States Virgin Islands', 'San Marino', 'Saint Pierre and Miquelon', 
// 'Faroe Islands', 'Svalbard and Jan Mayen', 'Tokelau', 'Guernsey', 'Caribbean Netherlands', 'Greenland', 'Sint Maarten', 'Palau', 
// 'South Georgia','Kiribati', 'Jersey', 'Aruba', 'Antigua and Barbuda', 'Gibraltar', 'Pitcairn Islands', 'Cook Islands', 'Antarctica', 'Bouvet Island',
// 'French Southern and Antarctic Lands', 'Saint Helena, Ascension and Tristan da Cunha', 'Bermuda', 'Monaco',
// 'Northern Mariana Islands', 'Grenada', 'Niue', 'Saint Lucia', 'Tuvalu', 'Norfolk Island', 'Saint Kitts and Nevis', 'Tonga', 
// 'Saint Vincent and the Grenadines', 'Isle of Man', 'Saint Martin', 'Saint Barthélemy', 'Micronesia', 'Anguilla', 'Vatican City', 
// 'Montserrat', 'British Virgin Islands', 'Liechtenstein', 'Nauru', 'Cayman Islands', 'Wallis and Futuna', 'Andorra',
// 'Heard Island and McDonald Islands', 'Guam', 'Marshall Islands', 'Falkland Islands', 'Cocos (Keeling) Islands', 'Dominica']