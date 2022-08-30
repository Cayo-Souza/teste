function selecionarImgProduto(imgMiniaturaEscolhida){
    document.getElementById("imgPrincipal").src = imgMiniaturaEscolhida.src;
}

function mudarPreco(botaoEscolhido){
    if(botaoEscolhido.id == "botaoAmarela"){
        document.getElementById('precoProduto').innerHTML = "R$376,88";
        document.getElementById("imgPrincipal").src = "produto1.jpg";
        document.getElementById('quantProduto').innerHTML = "171 peças disponiveis";
    }
    else if(botaoEscolhido.id == "botaoAzul"){
        document.getElementById('precoProduto').innerHTML = "R$219,90";
        document.getElementById("imgPrincipal").src = "produto5.jpg"; 
        document.getElementById('quantProduto').innerHTML = "201 peças disponiveis"; 
    }
    else if(botaoEscolhido.id == "botaoNomeNumero"){
        document.getElementById('precoProduto').innerHTML = "R$499,99";
        document.getElementById("imgPrincipal").src = "produto4.jpg";
        document.getElementById('quantProduto').innerHTML = "329 peças disponiveis";
    }
}

function mudarTamanho(tamanhoEscolhido){
    if(tamanhoEscolhido.id == "botaoP"){
        document.getElementById('tamanhoProduto').innerHTML= "Tamanho Selecionado: P";
    }else if(tamanhoEscolhido.id == "botaoM"){
        document.getElementById('tamanhoProduto').innerHTML= "Tamanho Selecionado: M";
    }else if(tamanhoEscolhido.id == "botaoG"){
        document.getElementById('tamanhoProduto').innerHTML= "Tamanho Selecionado: G";
    }
}