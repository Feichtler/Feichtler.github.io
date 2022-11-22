var x = document.images.length;

document.getElementById('previous').addEventListener('click', reverseimgSwap);

document.getElementById('next').addEventListener('click', imgSwap);

function imgSwap(){
    let temp 
    let temp1
    temp = document.images[4].src;
    document.images[4].src = document.images[0].src;
    temp1 = document.images[3].src;
    document.images[3].src = temp;
    temp = document.images[2].src;
    document.images[2].src = temp1;
    temp1 = document.images[1].src;
    document.images[1].src = temp;
    document.images[0].src = temp1;
}


function reverseimgSwap(){
    let temp
    let temp1
    temp = document.images[0].src;
    document.images[0].src = document.images[4].src;
    temp1 = document.images[1].src;
    document.images[1].src = temp;
    temp = document.images[2].src;
    document.images[2].src = temp1;
    temp1 = document.images[3].src;
    document.images[3].src = temp;
    document.images[4].src = temp1;

}