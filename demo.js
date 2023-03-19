const popup = document.getElementsByClassName("modal button");
for(let button of buttons){
    buttons.addEvenListener('click',openModal);
}

function openModal(){
    console.log('open modal');
}