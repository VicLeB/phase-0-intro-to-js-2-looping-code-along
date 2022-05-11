/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(names, eventName) {
    const eventArr = []
    for (let i= 0; i < names.length; i++) {
        eventArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }  
    return eventArr;
}

writeCards(["Guadalupe", "Ollie", "Alki"], "surprise");

function countDown(count) {
    let x= 10;
    while (x <= 10) {
        if (x < 0){
            break;
        }
        console.log(x--);
    }   
}