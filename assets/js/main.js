const lamp = document.querySelector('.lampOff');

let timesLampOn = 0;

let isTurnOnOK = true;
let isLampOn = false;

let timeout15;
let timeout5;

document.addEventListener('mouseover', (e) => {
    const el = e.target;

    if (el.classList.contains('lampBroken')) return

    if (isLampOn) {
        clearTimeout(timeout15);
        clearTimeout(timeout5);

        timeout5 = setTimeout(() => {
            isTurnOnOK = true
        }, 20000);

        timeout15 = setTimeout(() => {
            isTurnOnOK = false;

            if (timesLampOn === 5) return

            lamp.classList.remove('lampOn');
            lamp.classList.add('lampOff');
            isLampOn = false;
        }, 15000);

        return
    }

    if (!isTurnOnOK && el.classList.contains('lampOff')) {
        clearTimeout(timeout15);
        clearTimeout(timeout5);

        lamp.classList.remove('lampOff');
        lamp.classList.add('lampOn');
        timesLampOn++;

        setTimeout(() => {
            lamp.classList.remove('lampOn');
            lamp.classList.add('lampBroken');
        }, 10000);

        return
    }

    if (el.classList.contains('lampOff') && isTurnOnOK) {

        lamp.classList.remove('lampOff');
        lamp.classList.add('lampOn');
        timesLampOn++;

        isLampOn = true;
    }

});

setInterval(() => {
    if (timesLampOn >= 5) {
        clearInterval();
        setTimeout(() => {
            lamp.classList.remove('lampOn');
            lamp.classList.add('lampBroken');

        }, 10000);
    }
}, 1000);

setInterval(() => {

    if (lamp.classList.contains('lampBroken')) {
        clearTimeout(timeout15);
        clearTimeout(timeout5);
    }

}, 1000);