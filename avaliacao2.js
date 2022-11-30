const botao = document.querySelector("#enviar");

botao.addEventListener("click", function(e){

    e.preventDefault();
    const nome = document.querySelector("#nome");
    const nomeValue  = nome.value;

    const sobrenome = document.querySelector("#sobrenome");
    const sobrenomeValue  = sobrenome.value;

    const email = document.querySelector("#email");
    const emailValue = email.value;

    const idade = document.querySelector("#idade");
    var idadeValue = idade.value;
    idadeValue = parseInt(idadeValue)

    const maiorIdade = document.querySelector("#maiorid:checked");
    var maiorIdadeValue = maiorIdade.value;
    if (maiorIdadeValue === "true"){
        maiorIdadeValue = true
    }else if(maiorIdadeValue === "false"){
        maiorIdadeValue = false
    }

    if(idadeValue < 18 && maiorIdadeValue === true){
        maiorIdadeValue = "ATENÇÃO! Marcação incorreta, usuário menor de idade"
    }
    if(idadeValue >= 18 && maiorIdadeValue === false){
        maiorIdadeValue = "ATENÇÃO! Marcação incorreta, usuário maior de idade"
    }

    const newsletter = document.querySelector("#newsletter");
    var newsletterValue;
    if (newsletter.checked){
        newsletterValue = true
    }else{
        newsletterValue =  false
    }

    const mensagem = document.querySelector("#mensagem")
    const mensagemValue = mensagem.value;

    var pessoaCadastrada ={
        nome: nomeValue,
        email: emailValue,
        idade: idadeValue,
        maiorIdade: maiorIdadeValue,
        newsletter: newsletterValue,
        mensagem: mensagemValue,
    }

    console.log("Nome: " + pessoaCadastrada.nome);
    console.log("E-mail: " + pessoaCadastrada.email);
    console.log("Idade: " + pessoaCadastrada.idade)
    console.log("Maior idade: " + pessoaCadastrada.maiorIdade)
    console.log("Deseja receber newsletter: " + pessoaCadastrada.newsletter)
    console.log("Mensagem ou sugestão: " + pessoaCadastrada.mensagem);
    console.log("")

})