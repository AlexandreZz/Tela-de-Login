let viewPassword = document.getElementsByClassName('view')[0],
    changeView   = document.getElementsByClassName('fa-eye')[0],
    changeValue  = document.getElementById('changeValue'),
    include_path = "https://alexandrezz.github.io/tela-de-login/";

jQuery('body').on('submit','form',function(){
    return false;
})


// Alterando o formato de visualização do elemento input password para text

viewPassword.addEventListener('click',function(){
    changeView.classList.toggle('fa-eye-slash');
    if(changeValue.getAttribute('type') == 'password')
        changeValue.setAttribute('type','text');
    else
        changeValue.setAttribute('type','password');
})


// validação do nossos elementos input

jQuery('input[name=username],input[name=passwd]').focus(function(){
    resetar(jQuery(this));
})

const resetar = (value)=>{
    value.css('color','black');
    value.css('border','1px solid black');
    value.val('');
}

const aplicar = (value)=>{
    value.css('color','red');
    value.css('border','1px solid red');
}

const validarUsername = (username)=>{
    if(username == "")
        return false;
    let amountSpace = username.split(' ').length,
        strSplit    = username.split(' ');
    if(amountSpace > 1 || strSplit[0] != 'alexandrelima'){
        return false;
    }else{
        let patters = /alexandrelima/;
        patters.test(strSplit[0]);
    }
}

const validarSenha = (senha)=>{
    if(senha == "")
        return false;
    let amountSpace = senha.split(' ').length,
        strSplit    = senha.split(' ');
    if(amountSpace > 1 || strSplit[0] != 'alexandrelima'){
        return false;
    }else{
        let patters = /alexandrelima/;
        patters.test(strSplit[0]);
    }
}


jQuery('body').on('submit','form',function(value){
    value.preventDefault;
    let username = jQuery('input[name=username]').val(),
        password = jQuery('input[name=passwd]').val(),
        form = jQuery(this);
    if(validarUsername(username) == false){
        aplicar(jQuery('input[name=username]'));
        jQuery('input[name=username]').val('Por favor insira um usuário valido');
    }else if(validarSenha(password) == false){
        aplicar(jQuery('input[name=passwd]'));
    }else{
        jQuery('.loading-ajax').fadeIn(2500);
        jQuery('.formulario-sucesso').fadeIn(2500);
        setTimeout(()=>{location.href = include_path;},4000);
    }
})
