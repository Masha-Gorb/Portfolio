const player1 = {
    name: 'sonya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Gun', 'Axe', 'Words'],
    attack: function() {
        console.log(player1.name + 'Fight...')
    }
}

const player2 = {
    name: 'kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Sword', 'Mind', 'Fireball'],
    attack: function() {
        console.log(player2.name + 'Fight...')
    }
}


function createPlayer(playerNumber, objectName) {

    const $player = document.createElement('div');
    $player.classList.add(playerNumber);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $character.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = objectName.name;

    const $img = document.createElement('img');
    $img.src = objectName.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    // document.querySelector('.arenas').appendChild($player)
    arenas.appendChild($player)
}
// document.querySelector('.arenas').appendChild($player)
const arenas = document.querySelector('.arenas');

createPlayer('player1', player1);
createPlayer('player2', player2);
player1.attack();
player2.attack();
alert('hui');