let btn_modal_open_cd = document.querySelector('.rg_button_cd');
let btn_modal_open_msg = document.querySelector('.rg_button_men');
let btn_modal_open_email = document.querySelector('.rg_button');
let btn_content = document.getElementById('form_content');
let modal_title = document.getElementById('modal_title');
let btn_modal_save = document.querySelector('.save_modal');
let btn_modal_close = document.querySelector('.close_modal');
let btn_modal_cancel = document.querySelector('.cancel_modal');

//Função para abrir o modal com conteúdo dinâmico
let open_modal = (type) => {
    const form = document.querySelector('.form_register');
    if (form) {
        form.style.display = 'block';
    }

    //Verifica o tipo do formulario
    if (type === 'cliente') {
        modal_title.innerText = 'Cadastro de Cliente';
        btn_content.innerHTML = `
            <input type="text" name="name" placeholder="Nome">
            <input type="text" name="cnpj" placeholder="CNPJ"><br>
            <input type="text" name="state" placeholder="Estado">
            <input type="text" name="email" placeholder="E-mail">
        `;
    } else if (type === 'mensagem') {
        modal_title.innerText = 'Cadastrar Mensagem';
        btn_content.innerHTML = `
            <input type="text" name="titulo" placeholder="Codigo da mensagem">
            <input type="text" name="titulo" placeholder="Mensagem">
        `;
    } else if (type === 'email'){
        modal_title.innerText = 'Enviar E-mail';
        btn_modal_save.innerText = 'Enviar'
        btn_content.innerHTML = `
            <input type="text" name="name" placeholder="Nome da empresa">
            <input type="text" name="email" placeholder="Email da empresa">
            <input type="text" name="My_email" placeholder="Digite seu e-mail">
            <textarea name="mensagem" rows="4" cols="50" placeholder="Digite sua mensagem"></textarea>
        `;
    }
};

//Função para fechar o modal
let close_modal = () => {
    const form = document.querySelector('.form_register');
    if (form) {
        form.style.display = 'none';
    }
};

open_list = () => {
    
}


//Adicionando eventos de clique para abrir o modal com o formulário correspondente
btn_modal_open_cd.addEventListener('click', () => open_modal('cliente'));
btn_modal_open_msg.addEventListener('click', () => open_modal('mensagem'));
btn_modal_open_email.addEventListener('click', () => open_modal('email'));
btn_modal_cancel.addEventListener('click', close_modal);
btn_modal_close.addEventListener('click', close_modal);
