// const lamp = document.querySelector('.lampOff');

// let timesLampOn = 0;

// let isTurnOnOK = true;

// let timeout15;  
// let timeout5;

// document.addEventListener('mouseover', (e) => {
//     const el = e.target;

//     if(el.classList.contains('lampBroken')) return


//     if(!isTurnOnOK && el.classList.contains('lampOff')) {
//         clearTimeout(timeout15);
//         clearTimeout(timeout5);

//         lamp.classList.remove('lampOff');
//         lamp.classList.add('lampOn');
        
//         setTimeout(() => {
//             lamp.classList.remove('lampOn');
//             lamp.classList.add('lampBroken');    
//         }, 10000);

//        return
//     }
    
//     if(el.classList.contains('lampOff') && isTurnOnOK){

//         lamp.classList.remove('lampOff');
//         lamp.classList.add('lampOn');

//     }
    
// });

// document.addEventListener('mouseout', (e) => {
//     const el = e.target;

//     if(el.classList.contains('lampBroken')) return
    
        
//     if(el.classList.contains('lampOn') ) {
//         isTurnOnOK = false;

//         timeout5 = setTimeout(() => {
//             isTurnOnOK = true
//         }, 20000);

//         timeout15 = setTimeout(() => {
//             timesLampOn++;

//             if(timesLampOn === 5) return

//             lamp.classList.remove('lampOn');
//             lamp.classList.add('lampOff');
//         }, 15000);
//     }
// });

// setInterval(() => {
//     if(timesLampOn >= 5){
//         clearInterval();
//         lamp.classList.remove('lampOn');
//         lamp.classList.add('lampBroken'); 
//     }
// }, 1000);

