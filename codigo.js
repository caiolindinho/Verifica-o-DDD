function regiao() {
    var dddf = $("#ddd").val();
    if (dddf == 61) {
        $('#mensagem').html('<h1>Esse DDD é de Brasilia!</h1>');
    } else if (dddf == 71) {
        $('#mensagem').html('<h1>Esse DDD é de Salvador!</h1>');
    } else if (dddf == 11) {
        $('#mensagem').html('<h1>Esse DDD é de São Paulo!</h1>');
    } else if (dddf == 21) {
        $('#mensagem').html('<h1>Esse DDD é do Rio de Janeiro!</h1>');
    } else if (dddf == 32) {
        $('#mensagem').html('<h1>Esse DDD é de Juiz de Fora!</h1>');
    } else if (dddf == 19) {
        $('#mensagem').html('<h1>Esse DDD é de Campinas!</h1>');
    } else if (dddf == 27) {
        $('#mensagem').html('<h1>Esse DDD é de Vitória!</h1>');
    } else if (dddf == 32) {
        $('#mensagem').html('<h1>Esse DDD é de Belo Horizonte!');
    } else $('#mensagem').html('<h1>Não registrado</h1>');
}