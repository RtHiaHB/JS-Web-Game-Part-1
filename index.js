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

let character = insertSprite('assets/green-character.gif', 100, 100);
let pineTree = insertSprite('assets/pine-tree.png', 450, 200);
let Tree = insertSprite('assets/tree.png', 200, 300);
let pillar = insertSprite('assets/pillar.png', 350, 100);
let crate = insertSprite('assets/crate.png', 150, 200);
let well = insertSprite('assets/well.png', 500, 425);
let sword = newItem('assets/sword.png', 500, 405);
let shield = newItem('assets/shield.png', 165, 185);
let staff = newItem('assets/staff.png', 600, 100);

