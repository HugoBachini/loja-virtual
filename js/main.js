function alterarQtd(produto, operacao){
    const valor = document.getElementById('valor-produto-' + produto);
    const quantidade = document.getElementById('quantidade-produto-' + produto);  
    const subtotal = document.getElementById('subtotal-produto-' + produto);

    if(operacao == '-' && quantidade.innerHTML == 0){
        return false;
    }else{
        operacao == '+' ? quantidade.innerHTML++ : quantidade.innerHTML--;
        const total = quantidade.innerHTML * somenteNumeros(valor.innerHTML);
        subtotal.innerHTML = formatarValor(total);
        soma();
    }
}

function soma(){
    let soma = 0;

    for(let i = 1; i < 4; i++){
        let numero = somenteNumeros(document.getElementById('subtotal-produto-' + i).innerHTML);
        soma += Number(numero);
    }

    document.getElementById('total').innerHTML = formatarValor(soma);
}

function somenteNumeros(n){
    return n.replace(/\D/g, '')
    // Substitui tudo que não for digito por vazio.
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-BR');
    // Formata para o padrão numérico do país
}