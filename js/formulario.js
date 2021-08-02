const tel = document.getElementById('tel') // Seletor do campo de telefone

        tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
        tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

        const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
        tel.value = valor // Insere o(s) valor(es) no campo
    }

function validar(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    // var data = document.getElementById("data");   

    if(nome.value == ""){
        alert("Nome não informado");
        nome.focus();
    }else if(email.value == ""){
        alert("E-mail não informado");
        nome.focus();
    }else if(tel.value == ""){
        alert("Celular não informado");
        nome.focus();
    }else{
        alert("Obrigado pela sua inscriçao. Em breve entraremos em contato! :) ")          
    }
}