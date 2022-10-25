const HEURES = document.getElementById("heures");
const MINUTES = document.getElementById("minutes");
const SECONDS = document.getElementById("secondes");
const AMPM = document.getElementById("ampm");

function updateHorloge() {

    let heures = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secondes = new Date().getSeconds();
    let ampm= "AM";
    if(heures > 12){
        heures = heures -12;
        ampm = "PM";
    }
    heures = heures< 10? "0"+heures:heures;
    minutes = minutes<10? "0"+minutes:minutes;
    secondes = secondes< 10? "0"+secondes:secondes;
    HEURES.innerText= heures;
    MINUTES.innerText= minutes;
    SECONDS.innerText= secondes;
    AMPM, (innerText= ampm);
    setTimeout(() => {
        updateHorloge();
    }, 1000);
}

updateHorloge();


