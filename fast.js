var str = `“A sua mente subconsciente é um jardim. E você precisa entender o quê está plantando nesse jardim, pois o que plantar é o quê vai crescer. O Poder do Subconsciente é um best seller que foi escrito há várias décadas e serviu como base para inspirar diversos outros trabalhos e teorias sobre a mente humana.”É considerado um dos melhores e mais populares livros de autoajuda já  escritos.  Ajudou  milhões  de  pessoas  a  alcançarem  grandes  objetivos mudando apenas a maneira de pensar. As técnicas revolucionárias escritas pelo  Dr.  Murphy  baseiam-se  em  princípios  simples  e  práticos.  Se  vocêa credita em algo sem restrições e faz o retrato disso em sua mente, remove os  obstáculos  subconscientes  para  que  seu  desejo  se  concretize.  Assim,qualquer um pode transformar em realidade aquilo em que acredita. Com a descrição de histórias verídicas de sucesso, O Poder do Subconsciente é um guia para libertar o poder da mente que revela os segredos para melhorar um  casamento,  vencer  medos,  eliminar  hábitos  nocivos,  curar  pequenos problemas  de  saúde  e  obter  promoções,  prestígio,  dinheiro  e  felicidade pessoal.As principais ideias desse livro e que podem ajudar você a se tornar uma pessoa de sucesso são:·Seu cérebro aceita sugestões cegamente·Seu  subconsciente  é  burro!  Aprenda  a  alimentá-lo  com  hábitos saudáveis·Conecte seus 3 mundos: espiritual, mental e físico·Não fique dependente de nada que está fora de você·Reprograme suas crenças e mude seu futuro`;

var strrep = str.replace(/[&\/\\#|.,·;!+()“”$~%.'":*?<>{}]/g, ' ');

var filterStr = strrep.split(' ')

var arrayStr = filterStr.filter(function (el) {
    if(el.length >= 1 && el != null && el != false){
        return el;
    }
});

console.log(arrayStr)

var index = 0;

var seconds = 400

var velocidade = function(){
    
    var milisegundos = 60 * 1000
    
    return milisegundos / 400;
};


var play = $("#play")
var mais = $("#mais")
var menos = $("#menos")


play.on('click',function(){
    
    index = 0;

})

mais.on('click',function(){
    
    seconds += 100;

})

menos.on('click',function(){
    
    seconds -= 100;

})


setInterval(function(){
    
    if(arrayStr.length > index){
        
        var string = arrayStr[index];
        index++;

        $('#word').text(string)
        $('#velocidade').text(velocidade)

    }else{

        $('#velocidade').text(velocidade)
        $('#word').text('...')

    }


}, seconds)