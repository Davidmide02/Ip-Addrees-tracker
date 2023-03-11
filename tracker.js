// grabing elements

const secretApi = "at_lwlL8xAPxaPb42jc8LaiIhkSpWOzh";

const apiUri = "https://geo.ipify.org/api/v2/country";





const formEl = document.querySelector("#form");
const inputIp = document.querySelector("#input-ip");
const ipEl = document.querySelector("#ip-el");
const locationEl = document.querySelector("#location-el");
const timeZoneEl = document.querySelector("#timezone-el");
const ispEl = document.querySelector("#isp-el");

// intializing Map with the Leafletjs library

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
    map.setView(e, 13);
    L.marker(e).addTo(map)

}


// function that get Ip detail and send it to the API for response

function getIpDetails(defult_ip) {

    if (defult_ip == undefined) {

        // this return the ip address of the device the site is open with
        let $url = `${apiUri}?apiKey=${secretApi}`;
        fetchApi($url);

    }

    else {
        // get the input value and send to the API for response using the agument for the fechAPi function
        let $url = `${apiUri}?apiKey=${secretApi}&ipAddress=${defult_ip}`;
        fetchApi($url);
    }
}





const fetchApi = (url) => {
    fetch(url)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            ipEl.innerHTML = `${data.ip}`
            locationEl.innerHTML = `${data.location.region}, ${data.location.country}`
            timeZoneEl.innerHTML = `${data.location.timezone}`
            ispEl.innerHTML = `${data.isp}`
            // upDateMap(${data})
        })
        .catch(err => alert("Oop! an error occurred"))

}

// window.addEventListener("load", upDateMap);
getIpDetails();

// When the form is submitted get the input value and validate it before send it
formEl.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log(inputIp.value)



    if (inputIp.value !== "" || inputIp.value === Number) {
        console.log(inputIp.value);
        getIpDetails(inputIp.value);

    }

    else {

        inputIp.classList.add("err-indicator");
        // alert("TYou didn't put in an ip or the one you put in is wrong ")


    }


})


// function getIpDetails(defult_ip) {

//     if (defult_ip !== Number || defult_ip == null) {
//         let Url = `${byPassCorsUrl} ${apiUrl}`;
//         // change the link combination
//     } else {
//         // change link combination
//         let Url = `${byPassCorsUrl}${apiUrl}${defult_ip}`
//     }

//     fetch(apiUrl,headerOption)
//         .then(result => result.json)
//         .then(data => console.log(data))

// }


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