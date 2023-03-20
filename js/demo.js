const buttons = document.getElementsByClassName('modal-button');
for(let button of buttons) {
    button.addEvenListener('click',openModal);
}

const modalContainer = document.getElementById ('modal-container');
modalContainer.addEvenListener('click', closeModal);


function openModal() {
   const element = document.getElementById ('modal-container');
   const classes = element.classList;
   element.classList = [...classes, 'active'];
}

function closeModal(event) {

if (event.target.id ='modal-container') {
    if (!modalContainer.classList.contains('active')) return;
    modalContainer.classList.remove('active');
}
}

