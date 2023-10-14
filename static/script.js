$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
 $("#display_date").html(display_date);



    // Escreva um evento, quando o botão Enviar for clicado
    $('').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            type : '',

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                // extraia previsão e a URL do emoticon do resultado
                predict_emotion = result.data.predict_emotion;
                emo_result -= result.data.predict_emotion_img_url
                //  atualize os elementos DOM
                

                //  exiba-os
                $("prediction").html(predict_emotion)
                $("prediction").css("display","block")

                $("emo_img_url").attr("src",emo_url)
                $("emo_img_url").css("display", "block")
            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})