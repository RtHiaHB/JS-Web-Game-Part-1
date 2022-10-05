//get how many times we need to iterate the sky and grass

const blocksWide = window.innerWidth / 100;
const blocksHigh = window.innerHeight / 100;


//The height of the sky is 1/3 the height, with the ground taking up the other 1/3.

const skyHeight = blocksHigh / 3;
const groundHeight = blocksHigh - skyHeight;

function addBackground(asset, startingY, endingY) {
    for(let x = 0; x < blocksWide; x++) {
        for(let y = startingY; y < endingY; y++){
            insertSprite(asset, x * 100, y * 100);
        }
    }
}

addBackground('assets/grass.png', 0, groundHeight - 1);
addBackground('assets/sky.png', groundHeight - 1, blocksHigh)

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img');
// pineTree.src = 'assets/pine-tree.png';
// pineTree.style.position = 'fixed';
// pineTree.style.left = '450px';
// pineTree.style.bottom = '200px';
// document.body.append(pineTree);

function insertSprite(asset, l, b) {
    let sprite = document.createElement('img');
    sprite.src = asset;
    sprite.style.position = 'fixed';
    sprite.style.left = String(l) + 'px';
    sprite.style.bottom = String(b) + 'px';
    document.body.append(sprite);
    return sprite;
}
function newItem(asset, posLeft, posBottom) {
    let item = insertSprite(asset, posLeft, posBottom);

    item.addEventListener('dblclick', function() {
        item.remove();
    })
    return item;
}

const character = insertSprite('assets/green-character.gif', 100, 100);
const pineTree = insertSprite('assets/pine-tree.png', 450, 200);
const Tree = insertSprite('assets/tree.png', 200, 300);
const pillar = insertSprite('assets/pillar.png', 350, 100);
const crate = insertSprite('assets/crate.png', 150, 200);
const well = insertSprite('assets/well.png', 500, 425);
const sword = newItem('assets/sword.png', 500, 405);
const shield = newItem('assets/shield.png', 165, 185);
const staff = newItem('assets/staff.png', 600, 100);

