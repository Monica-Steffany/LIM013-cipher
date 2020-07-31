import cipher from './cipher.js';

// Pantalla de Inicio de Sesión
const logInScreen = document.getElementById("logIn")
const buttonLogIn= document.getElementById("btnLogIn");
const optionsScreen= document.getElementById("options")
buttonLogIn.onclick=getName;

function getName(){
    let name = document.getElementById("username").value;
    document.getElementById("user").innerHTML = 'Welcome, ' + name + "!";
    optionsScreen.classList.remove("hide")
    logInScreen.classList.add("hide")
}

//Pantalla de opciones
const buttonCipher= document.getElementById("btnCipher")
const screenCipher= document.getElementById("cipher")
const buttonDecipher= document.getElementById("btnDecipher")
const screenDecipher= document.getElementById("decipher")

buttonCipher.addEventListener("click",optionCipher)
buttonDecipher.addEventListener("click",optionDecipher)

//Cipher
const buttonEncode= document.getElementById("encode")

buttonEncode.addEventListener("click",showEncodeMsg)

function showEncodeMsg() {
    let userMessage=document.getElementById("userMessage").value;
    let key=document.getElementById("offset").value;
    let finalResult= cipher.encode(key,userMessage);
    document.getElementById("messageEncode").innerHTML=finalResult;
}

function optionCipher() {
    optionsScreen.classList.add("hide")
    screenCipher.classList.remove("hide")
}

//Regresar a las opciones
const backMenu=document.getElementById("backOne")

backMenu.addEventListener("click",showOptions)

function showOptions() {
    optionsScreen.classList.remove("hide")
    screenCipher.classList.add("hide")
}

//Decipher
const buttonDecode= document.getElementById("decode")

buttonDecode.addEventListener("click",showDecodeMsg)

function showDecodeMsg() {
    let userMessage=document.getElementById("userMessageTwo").value;
    let key=document.getElementById("offsetTwo").value;
    let finalResult= cipher.decode(key,userMessage);
    document.getElementById("messageDecode").innerHTML=finalResult;
}

function optionDecipher() {
    optionsScreen.classList.add("hide")
    screenDecipher.classList.remove("hide")
}

//Regresar a las opciones
const backMenuD=document.getElementById("backTwo")

backMenuD.addEventListener("click",showOptionsD)

function showOptionsD() {
    optionsScreen.classList.remove("hide")
    screenDecipher.classList.add("hide")
}

console.log(cipher);
