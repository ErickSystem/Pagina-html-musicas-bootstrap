/* Feito em jquery;
*/

$(function(){

    $("#enviarMsg").click(function(){

        d = document.contato;
        
     
        if (d.emailMsg.value.indexOf("@") == -1 ||
                d.emailMsg.value.indexOf(".") == -1 || d.emailMsg.value == "" ||
                d.emailMsg.value == null)
        {
            alert('Por favor, informe-nos um e-mail válido');
            d.emailMsg.focus();
            return false;
        }

        if (d.nomeMsg.value == "" || d.nomeMsg.value == null ||
                d.nomeMsg.value.length < 3)
        {
            alert('Por favor, informe-nos um nome');
            d.nomeMsg.focus();
            return false;
        }


        if (d.menssagem.value == "" || d.menssagem.value == null ||
                d.menssagem.value.length < 3)
        {
            alert('Por favor, Escreva uma Menssagem');
            d.menssagem.focus();
            return false;
        }
        else{
            alert("Logim efetuado com sucesso!");
        }


    });


});




/* Feito em js puro

function validaMsg() {
    d = document.contato;
    
 
    if (d.emailMsg.value.indexOf("@") == -1 ||
            d.emailMsg.value.indexOf(".") == -1 || d.emailMsg.value == "" ||
            d.emailMsg.value == null)
    {
        alert('Por favor, informe-nos um e-mail válido');
        d.emailMsg.focus();
        return false;
    }

    if (d.nomeMsg.value == "" || d.nomeMsg.value == null ||
            d.nomeMsg.value.length < 3)
    {
        alert('Por favor, informe-nos um nome');
        d.nomeMsg.focus();
        return false;
    }


    if (d.menssagem.value == "" || d.menssagem.value == null ||
            d.menssagem.value.length < 3)
    {
        alert('Por favor, Escreva uma Menssagem');
        d.menssagem.focus();
        return false;
    }


 //   else{
   //        window.location.href ='footer/menssagem-enviada.html';
                    
        //  }
                   
}*/






