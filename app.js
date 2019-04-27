const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

var jsondata ='{"AL": "Alabama","AK": "Alaska", "AS": "American Samoa","AZ": "Arizona","AR": "Arkansas","CA": "California","CO": "Colorado","CT": "Connecticut","DE": "Delaware","DC": "District Of Columbia","FM": "Federated States Of Micronesia","FL": "Florida","GA": "Georgia","GU": "Guam","HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa","KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MH": "Marshall Islands","MD": "Maryland","MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri","MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey","NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","MP": "Northern Mariana Islands","OH": "Ohio","OK": "Oklahoma","OR": "Oregon","PW": "Palau","PA": "Pennsylvania","PR": "Puerto Rico","RI": "Rhode Island","SC": "South Carolina","SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont","VI": "Virgin Islands","VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming"}';
var states_hash ='{"Alabama": "AL","Alaska": "AK","American Samoa": "AS","Arizona": "AZ","Arkansas": "AR","California": "CA","Colorado": "CO","Connecticut":"CT","Delaware": "DE","District Of Columbia": "DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia": "GA","Guam": "GU","Hawaii": "HI","Idaho": "ID","Illinois": "IL","Indiana": "IN","Iowa": "IA","Kansas": "KS","Kentucky": "KY","Louisiana": "LA","Maine": "ME","Marshall Islands": "MH","Maryland": "MD","Massachusetts": "MA", "Michigan": "MI","Minnesota": "MN","Mississippi": "MS","Missouri": "MO","Montana": "MT","Nebraska": "NE","Nevada":"NV","New Hampshire": "NH","New Jersey": "NJ","New Mexico": "NM", "New York": "NY", "North Carolina": "NC","North Dakota": "ND","Northern Mariana Islands": "MP","Ohio": "OH","Oklahoma": "OK","Oregon": "OR","Palau": "PW", "Pennsylvania": "PA","Puerto Rico": "PR","Rhode Island": "RI","South Carolina": "SC","South Dakota": "SD","Tennessee": "TN","Texas": "TX","Utah": "UT","Vermont": "VT","Virgin Islands": "VI","Virginia": "VA","Washington": "WA","West Virginia": "WV","Wisconsin": "WI","Wyoming": "WY"}';
var jsonParsed = JSON.parse(jsondata);
var jsonParsedStates = JSON.parse(states_hash);
var url = require('url');
//var jsonUrl = require('http://localhost/states_hash.json');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var queryObject = url.parse(req.url,true).query;
  res.setHeader('Content-Type', 'text/plain');
  var id = queryObject.code+'';
  //var state = queryObject.state+'';
  
  if(id!=NaN){
    res.end((jsonParsed[id]));
  }
 // res.end(state);
  
 /* if(state!=NaN){
    res.end((jsonParsedStates[state]));
  }*/

});


//var test = JSON.parse(jsonUrl.JSON);

server.listen(8080, "0.0.0.0", () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



