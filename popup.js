function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function timer() {
    var time = 100

    while (time > -1) {
        document.getElementById('timer').innerHTML = time;
        time = time-1
        await delay(1000);
    }
}  

timer();