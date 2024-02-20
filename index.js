// function play(){
//     //step-1: hide the home screen, to hide the screen add the class hiddine to home section
//     const homeFirstPart = document.getElementById('1st-part')
//     homeFirstPart.classList.add ('hidden');

//     const homeSecondPart = document.getElementById ('footer')
//     homeSecondPart.classList.add ('hidden')

//     //show the Success page
//     const secondPart = document.getElementById ('2nd-part')
//     secondPart.classList.remove('hidden')
// }

function play(){
    hideElementById ('1st-part')
    hideElementById ('footer')
    showElementById ('2nd-part')
}