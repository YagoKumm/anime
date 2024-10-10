export interface Ianime {
    id: number;
    name: string;
    sinopse: string;
    img: string;
}

export const animes: Ianime[] = [
    {id:1 , name: 'Naruto Shippuden' , sinopse: 'A continuação de Naruto, segue a jornada de Naruto Uzumaki, um jovem ninja que busca se tornar Hokage enquanto enfrenta ameaças crescentes, incluindo a organização criminosa Akatsuki e seu amigo Sasuke, que busca vingança.', img:'/assets/Naruto-Shippuden.avif' },
    {id:2 , name: 'Dragon Ball Z', sinopse: ' Goku, um guerreiro de origem Saiyajin, protege a Terra contra inimigos poderosos como Freeza, Cell e Majin Boo, enquanto treina e se fortalece ao lado de seus amigos para enfrentar batalhas épicas e salvar o universo.' , img: '/assets/Dragon-Ball-Z.jpg'},
    {id:3 , name: 'One Piece', sinopse: 'Luffy e sua tripulação de piratas partem em uma jornada pelo Grand Line em busca do lendário tesouro "One Piece" para que Luffy se torne o Rei dos Piratas. Eles enfrentam inimigos poderosos e formam laços profundos ao longo do caminho.', img: '/assets/one-piece.avif'},
    {id:4 , name: 'Pokemón', sinopse: 'Ash Ketchum e seu fiel parceiro Pikachu viajam pelo mundo Pokémon, enfrentando desafios e batalhando em ginásios para se tornar um Mestre Pokémon, enquanto descobrem novas criaturas e fazem amigos ao longo da jornada.', img: '/assets/Pokemon.jpg'},
    {id:5 , name: 'FullMetal Alchemist', sinopse: 'Os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para restaurar seus corpos após um experimento de alquimia fracassado, envolvendo-se em uma conspiração maior sobre o poder e os segredos da alquimia.', img: '/assets/fullmetal-alchemist-brotherhood.jpg'},
    {id:6 , name: 'My Hero Academia', sinopse: ' Em um mundo onde a maioria das pessoas tem superpoderes, ou "quirks", Izuku Midoriya sonha em se tornar o maior herói, apesar de nascer sem poderes. Com a ajuda de seu ídolo All Might, ele ingressa na U.A. Academy para treinar como herói.', img: '/assets/My-Hero-Academia.avif'},
    {id:7 , name: 'Demon Slayer', sinopse: 'Tanjiro Kamado busca vingança e cura para sua irmã Nezuko, que foi transformada em demônio, após sua família ser brutalmente assassinada por demônios. Ele se junta aos Caçadores de Demônios para erradicar essas criaturas.', img: '/assets/Demon-Slayer.jpg'},
    {id:8 , name: 'Death Note', sinopse: 'Light Yagami, um estudante brilhante, encontra um caderno misterioso que permite matar qualquer pessoa cujo nome seja escrito nele. Ele começa a eliminar criminosos, mas é perseguido pelo detetive genial L, criando um jogo mortal de gato e rato.', img: '/assets/death-note.jpg'},
    {id:9 , name: 'Attack on Titan', sinopse: 'A humanidade vive cercada por muros gigantes para se proteger de titãs devoradores de humanos. Eren Yeager, junto com seus amigos Mikasa e Armin, se junta à batalha para descobrir a verdade por trás dos titãs e salvar o que resta da humanidade.', img: '/assets/Attack-on-Titan.jpg'},
]