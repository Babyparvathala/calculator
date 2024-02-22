const themeToggle = document.getElementById('themeToggle');

const storedTheme = localStorage.getItem('theme')
if(storedTheme=='dark'){
    // light to dark
    document.documentElement.style.setProperty('--bg-color', '#040D12');
    document.documentElement.style.setProperty('--text-color', '#93B1A6');
    document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
    themeToggle.checked=true;
}
else{
    document.documentElement.style.setProperty('--bg-color', '#97a5d8');
    document.documentElement.style.setProperty('--text-color', '#0d0a1e');
    document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#535C91');

}
themeToggle.addEventListener('change',function(){
    if(this.checked){
        // light to dark
        document.documentElement.style.setProperty('--bg-color', '#040D12');
        document.documentElement.style.setProperty('--text-color', '#93B1A6');
        document.documentElement.style.setProperty('--keypad-bg-color', '#040D12');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#183D3D');
        localStorage.setItem('theme','dark')
    }
    else{
        document.documentElement.style.setProperty('--bg-color', '#97a5d8');
        document.documentElement.style.setProperty('--text-color', '#0d0a1e');
        document.documentElement.style.setProperty('--keypad-bg-color', '#F1EAFF');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#535C91');

        localStorage.setItem('theme','light')
    }
})





let result = document.getElementById('result');
function appendToResult(value){
    result.value+=value;
    playButtonSound();
}

function backspace(){
    if(result.value=='Error'){
        result.value = '';
    }
    result.value = result.value.slice(0,-1);

    playButtonSound();
}

function clearResult(){
    result.value = '';

    playButtonSound();
}


function calculate(){
    playButtonSound();
    try{
        if(result.value==''){
            result.value = '0';
        }
        result.value = eval(result.value)
    }
    catch(e){
        result.value = 'Error'
    }
}

function playButtonSound(){
    const buttonSound = document.getElementById('buttonSound');
    buttonSound.currentTime = 0;
    buttonSound.play();
}
