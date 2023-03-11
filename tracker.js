// grabing elements

const secretApi = "at_lwlL8xAPxaPb42jc8LaiIhkSpWOzh";

const apiUri = "https://geo.ipify.org/api/v2/country";





const formEl = document.querySelector("#form");
const inputIp = document.querySelector("#input-ip");
const ipEl = document.querySelector("#ip-el");
const locationEl = document.querySelector("#location-el");
const timeZoneEl = document.querySelector("#timezone-el");
const ispEl = document.querySelector("#isp-el");
let errM = document.querySelector(".errM");

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

// function that get device ip on load
function defaultIp() {

    let $url = `${apiUri}?apiKey=${secretApi}`;
    fetchApi($url);

}

// get device ip address on load
window.addEventListener("load", defaultIp)


// function that get Ip detail and send it to the API for response

function getIpDetails(defult_ip) {


    let $url = `${apiUri}?apiKey=${secretApi}&ipAddress=${defult_ip}`;
    fetchApi($url);
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
        })
        .catch(err => {

            errM.innerHTML = "Server error or kindly follow the ip format "

        })

}



// When the form is submitted get the input value and validate it before send it
formEl.addEventListener("submit", (e) => {

    e.preventDefault();

    if (inputIp.value !== "") {

        const toS = inputIp.value.toString()

        if (Number.isInteger(inputIp.value)) {

            return
        }

        else if (toS.includes(".")) {

            getIpDetails(inputIp.value);

        }

        else {
            errM.innerHTML = "Ip must be a number and include a dot(.)"
        }




    }




    else {

        inputIp.classList.add("err-indicator");

        errM.textContent = "Input Ip address"

    }


})



