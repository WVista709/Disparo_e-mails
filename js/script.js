//Function for open and close of button register client
let form_register_client = () => {
    const form = document.querySelector('.formRegister');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'; 
    }
}

//Adding the click event to the button
let bnt_register_client = document.querySelector('.rg_button_cd');
bnt_register_client.addEventListener('click', form_register_client);
