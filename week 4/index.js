let color1  =' #ffffff';
let color2 =' #ffffff'

const changeBackground = () => {
    const body = document.querySelector('body');
    const newGradient =`linear-gradient(to right, ${color1} , ${color2})`;
    body.style.background = newGradient;
}

$('#colorPicker1').on ('input', ()=> {
    color1 = $('#colorPicker1').val();
    changeBackground();
});
$('#colorPicker2').on('input',()=> {
    color2 = $('#colorPicker2').val(); 
    changeBackground();
}); 


