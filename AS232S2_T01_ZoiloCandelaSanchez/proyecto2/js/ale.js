const MAIN_PATH = "http://localhost:3000/api/";

const date = new Date();
let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1)+ "-"+ date.getDate()
let currentDateFormatted = date.getDate()+ "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

let dates = fetch(
    MAIN_PATH + "dates/" + currentDate
).then(
    res => res.json()
).then(
    data => {
        console.log("Mostrar data: " +data)
        if (data != null) {
            document.getElementById("showData").innerHTML = `<p> Hoy es ${currentDateFormatted} - ${data.nombre}</p>`
        } else {
            document.getElementById("showData").innerHTML = `<p> Hoy es ${currentDateFormatted}</p>`
        }
    }
);