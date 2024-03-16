function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add ('hidden');
}

function showElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove ('hidden')
}

// function myFunction() {
//     const arr = ['A1','A2', 'A3', 'A4']
//     document.getElementById("seat-arr").innerHTML = arr;
// }

function myFunction() {

    const arr = ['A1']
    document.getElementById("seat-arr").innerHTML = arr;

    const seatClass = 'Economoy'      
    document.getElementById("Economoy").innerHTML = seatClass;

    const seatPrice = 550
    document.getElementById("Price").innerHTML = seatPrice;
    document.getElementById("seat-sum").innerHTML =  seatPrice;
    document.getElementById("Grand").innerHTML =  seatPrice;
}

function myfunction(){
    const arr = ['A2']
    document.getElementById("seat-arr").innerHTML = arr;

    const seatClass = 'Economoy'      
    document.getElementById("Economoy").innerHTML = seatClass;

    const seatPrice = 550
    document.getElementById("Price").innerHTML = seatPrice;
    document.getElementById("seat-sum").innerHTML = seatPrice;
    document.getElementById("Grand").innerHTML = seatPrice;
}
