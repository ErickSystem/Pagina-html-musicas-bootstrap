$(function(){
    var d = document.login;

    $("#entrarLogin").click(function(){
       
         if (d.login.value == "" || d.login.value == null ||
            d.login.value.length < 3){
            alert('Por favor, Informe um usuário válido');
            d.login.focus();
            return false;
         }
        if (d.senha.value == ""){
                alert('Por favor, Informe uma senha');
                d.senha.focus();
                return false;
            }
       else{
          alert('Login efetuado com Sucesso!');
        }

   });
});









