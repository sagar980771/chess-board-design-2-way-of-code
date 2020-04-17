let x = document.getElementById('chessboard');
for(j=0; j<8; j++){
let y = document.createElement("ul");
y.setAttribute('class' , 'even');
if(j % 2 == 0){
   y.setAttribute('class' , 'odd');
  }
x.appendChild(y);
for(i=0; i<8; i++){
let z=document.createElement("li");
y.appendChild(z);
if(i % 2 == 0){
z.style.backgroundColor = '#e2c074';
}
else{
    z.style.backgroundColor = '#000';

}
}
}