//mapeamento de botões para que seja possivel aplicar as animações
//quando quero pegar algo do html é digitado o  "document", e para pegar pelo ID, adiciono o  "getElementById".
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

//mapeamento de items pela classe (buscou >todos<(querySelector>ALL<) que tem a classe item)
const items = document.querySelectorAll('.item')

//mapeamento dos dots (botões de baixo)
const dots = document.querySelectorAll('.dot')

//trocar os numeros de baixo (não é ALL pq só tem um)
const numberIndicator = document.querySelector('.number')

//mapeamento de lista (uma só)
const list = document.querySelector('.list')


//criação de variavel para mapear quem estará ativo ou não / a variavel let foi usada pq o valor poderá ser mudado, ao contrario do const
let active = 0;
//.length se trata de, nesse caso, guardar os items numa caixa [item1, item2..] e o length conta quandos items tem na caixa. Nesse caso há tres, mas caso aumente, o valor será atualizado.
const total = items.length

let timer;


//funcionamento:

//o objetivo é que quando eu clicar nos botões, mude a classe active. Se esta no primeiro item, precisa ir para o segundo item. O mesmo com dots. E isso acontecerá quando o botão ser clicado.
//a função update irá atualizar.
//É necessario saber qual a direção do botão clicado (prev ou next).


function update(direction) {

//dependendo do botão que for clicado, o js deve retirar a classe active do item/dot e passar para o proximo (independente da direção do botão)
//é procurado alguem com classe item E active ('.item.active) e quando ele encontrar, vai remover a classe active -> .classList.remove('active'). o mesmo para o dot.
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


//para aparecer, preciso verificar a direção do item. Tem um porém: do tres, ele precisa voltar ou para a posição dois, ou para a posição um. Não há uma posição 4.
//Para que mude de posição ao clicar, no código, é adicionado active >+ 1<. Se o active passa por todos os items, ele precisa voltar para a posição 0. Com isso,  if (active === total) {active = 0 }.
    if (direction > 0) {
        active = active + 1

        if(active === total){
            active = 0
        }

    } // com apenas esse, não há botão de prev, apenas next que volta para o estado inicial.
    
    else if(direction < 0){
        active = active -1

        if(active < 0){
            active = total -1
        }// agora o botão prev funciona e é possivel passar da posição 0 para a posição final. Para chegar no ultimo item, foi utilizado >total -1<.

    }

//adicionando o active ao item/dot do if/else if
//agora adicionando classe active e não removendo

    items[active].classList.add('active')
    dots[active].classList.add('active')

    //Serviu apenas para mudar a numeração de acordo com o item presente na tela e adicionar o 0 na frente do numero (padStart).
    numberIndicator.textContent = String(active + 1).padStart(2,'0')

}


// sera utilizado o setInterval para que os items passem automaticamente pela tela. (5000 = 5 segundos). A cada 5 segundos ele vai chamar a função update. Assim que passar os 5 segundos, o timer é zerado por conta do clearInterval(timer).

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000);





//adicionei um evento de click aos botões direito e esquerdo onde, quando houver o clique do mouse, algo irá acontecer.
//a função update está sendo adicionada nos dois botões, o prev com -1 e o next 1. Next vai para frente e prev para tras.

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})
