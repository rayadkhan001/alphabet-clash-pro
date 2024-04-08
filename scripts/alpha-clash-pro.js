// function play(){
//     /*Step-1: Hide the home screen, To hide the screen, add the class "hidden",
//     to the home section, show the playground.
//     */
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);

// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}