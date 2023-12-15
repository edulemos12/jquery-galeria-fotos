$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoNovaImagem = $('#inserir-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${endereçoNovaImagem}" />`).appendTo(novoItem);

        $(`
        
        <div class="overlay-imagem-link">
            <a href="${endereçoNovaImagem}" target="_blank" title="Ver Imagem em Tamanho Real">
                Ver imagem em Tamanho real
            </a>
        </div>
        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#inserir-imagem-nova').val('');

    })
})