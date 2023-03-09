// grabing elements
// let apiUrl = "https://geo.ipify.org/service/account-balance?apiKey=at_lwlL8xAPxaPb42jc8LaiIhkSpWOzh";

// const byPassCorsUrl = "https://cors.anywhere.herokuapp.com/"

// changes
// API key
const secretApi = "at_lwlL8xAPxaPb42jc8LaiIhkSpWOzh";

const byPassCorsUri = "https://cors.anywhere.herokuapp.com/";
const apiUri = "https://geo.ipify.org/service/account-balance"
let currentVersion = "v1";

const headersOption = {
    headers : {
        "Access-Control-Allow-Origin" : "*"
    } 
}
// changes made


const headerOption = {
    header: { "Access-control=Allow-origin": "*" }
}

const formEl = document.querySelector("#form");
const inputIp = document.querySelector("#input-ip");
const ipEl = document.querySelector("#ip-el");
const locationEl = document.querySelector("#location-el");
const timeZoneEl = document.querySelector("#timezone-el");
const ispEl = document.querySelector("#isp-el");

// testing grapped elements
console.log(formEl)
console.log(inputIp)
console.log(ipEl)
console.log(locationEl)
console.log(timeZoneEl)
console.log(ispEl)




let map = L.map("map", {
    "center": [0, 0],
    "zoom": 0,

    "layers": [
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            // maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })
    ]
})

// function that upadate map
// e represent an array containing two values which are lat and long
function upDateMap(e) {
    e = [42, 42]
    map.SetView(e, 13);
    L.marker(e).addTo(map)

}

// function that get Ip detail and validate the input fill
function getIpDetails(defult_ip) {

    if (defult_ip !== Number || defult_ip == null) {
        let Url = `${byPassCorsUrl} ${apiUrl}`;
        // change the link combination
    } else {
        // change link combination
        let Url = `${byPassCorsUrl}${apiUrl}${defult_ip}`
    }

    fetch(apiUrl,headerOption)
        .then(result => result.json)
        .then(data => console.log(data))

}

getIpDetails()

// update function it will take in the map object and a parameter to be able to pass in the lat and log gotten from the Api to the map object when called
// it must have defult value that will update the map on load

// 2 function
// A function that get 



// .addTo(map);


// first method of view map
// let map = L.map("map").setView([51.505, -0.09], 13);
// function thta
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// var marker = L.marker([51.5, -0.09]).addTo(map);



// var marker = L.marker([51.5, -0.09]).addTo(map);



// get the ip input
// search when the side arrow button is licked
// inpute
// get device ip if the input is not filled
// rendering data of the ip address details