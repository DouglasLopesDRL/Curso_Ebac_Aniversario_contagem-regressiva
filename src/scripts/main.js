AOS.init();

const dateToEvent = new Date("Dec 25, 2026 20:00:00");
const timeStampToEvent = dateToEvent.getTime();

const countTime = setInterval(function(){
    const now = new Date();
    const timeStampNow = now.getTime();

    const distanceDaysToEvent = timeStampToEvent - timeStampNow;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daystoEvent = Math.floor(distanceDaysToEvent / daysInMs);
    const hourstoEvent = Math.floor((distanceDaysToEvent % daysInMs) / hoursInMs);
    const minutesToEvent = Math.floor((distanceDaysToEvent % hoursInMs) / minutesInMs);
    const secondsToEvent = Math.floor((distanceDaysToEvent % minutesInMs) / 1000);

    document.getElementById("countdown").innerHTML = `${daystoEvent}d ${hourstoEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if(distanceDaysToEvent < 0){
        clearInterval(countTime);
        document.getElementById("countdown").innerHTML = "O melhor dia já passou!";
    }
    
}, 1000);