let inputDirection = { x: 0, y:0 }
let lastInputDirection = { x: 0, y:0 }
window.addEventListener('keydown', e =>{
    switch(e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1};
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0};
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0};
            break;
    }
})
document.getElementById('bup').addEventListener('click',e=>{ 
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x: 0, y: -1};
    return;
})
document.getElementById('bdown').addEventListener('click',e=>{ 
    if(lastInputDirection.y !== 0) return;
    inputDirection = {x: 0, y: 1};
    return;
})
document.getElementById('bleft').addEventListener('click',e=>{ 
    if(lastInputDirection.x !== 0) return;
    inputDirection = {x: -1, y: 0};
    return;
})
document.getElementById('bright').addEventListener('click',e=>{ 
    if(lastInputDirection.x !== 0) return;
    inputDirection = {x: 1, y: 0};
    return;
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}