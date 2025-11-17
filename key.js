 let keyCount = {};
            document.addEventListener('keydown',function(event){
    console.log(`You pressed ${event.key}`);
    const button = document.querySelector(`[data-keys="${event.key}"]`);
    if (button === null){
        console.log('we dont have that');
    }
else{
    if(keyCount[event.key] === undefined){
        keyCount[event.key] = 0;
    }
    
    keyCount[event.key] += 1;
    
    let count =keyCount[event.key];
    if(count<10){
        button.style.backgroundColor = 'white';
    }else {
    let hue = 60 - ((count - 10) * (2/3));
    button.style.backgroundColor = `hsl(${hue},100%,50%)`;    
    }

     
}})
function resetHeatmap() {
keyCount = {};

let buttons = document.querySelectorAll('.keys')
for (let i = 0; i < document.querySelectorAll('.keys').length; i++) {
    buttons[i].style.backgroundColor = 'white';
}}




            
