// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.



// Write your Javascript code.

function loginopen() {
    document.getElementById('login').style.visibility = "visible";
    document.getElementById('blur').style.visibility = "visible";
    document.getElementById('closebtn').style.visibility = "visible";
}
function loginclose() {
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('blur').style.visibility = "hidden";
    document.getElementById('closebtn').style.visibility = "hidden";
}
function signupclc() {
    document.getElementById('login').style.display = "none";
    document.getElementById('signup-con').style.visibility = "visible ";
    document.getElementById('signup-con').style.display = "block ";
    document.getElementById('closebtn1').style.visibility = "visible";
    
}
function accdetclc() {
    document.getElementById('login').style.display = "none";
    document.getElementById('Accdetails').style.visibility = "visible ";
    document.getElementById('Accdetails').style.display = "block ";
    document.getElementById('closebtn2').style.visibility = "visible";
    
}

function addRclc() {
    document.getElementById('login').style.display = "none";
    document.getElementById('addReminder').style.visibility = "visible ";
    document.getElementById('addReminder').style.display = "block ";
    document.getElementById('closebtn2').style.visibility = "visible";
    
}

function reminderopen() {
    document.getElementById('timmerremindercon').style.display = "block";
    document.getElementById('timmerremindercon').style.right = "0";
    document.getElementById('fzy').style.visibility = "hidden";
    
}
function closeRemind() {
    document.getElementById('timmerremindercon').style.right = "-401px";
    document.getElementById('timmerremindercon').style.animationDuration = "2s";
    document.getElementById('fzy').style.visibility = "visible";
}
function closezybtn() {
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('signup-con').style.visibility = "hidden";
    
    document.getElementById('addReminder').style.visibility = "hidden";
    document.getElementById('blur').style.visibility = "hidden";
    document.getElementById('closebtn').style.visibility = "hidden";
    document.getElementById('closebtn1').style.visibility = "hidden";
    document.getElementById('closebtn2').style.visibility = "hidden";
    document.getElementById('SU-EMAILinpt').value = '';
    document.getElementById('SU-PASSinpt').value = '';
    document.getElementById('EMAILinpt').value = '';
    document.getElementById('PASSinpt').value = '';
}
function dropdowninfo() {
    document.getElementById('txtinfo').style.top = "430px";
    document.getElementById('about-button').style.visibility = "hidden";
    document.getElementById('fzyI').style.paddingTop = "10px";
}
function dropdowninfoclose() {
    document.getElementById('txtinfo').style.top = "100px";
    document.getElementById('about-button').style.visibility = "visible";
}
function dropFAQ() {
    document.getElementById('infoFAQ').style.top = "150px";
    document.getElementById('btn1').style.visibility = "hidden";
/*hidebtn2*/
    document.getElementById('btn2').style.top = "270px";
    document.getElementById('zyzy').style.top = "270px";
    document.getElementById('btn3').style.top = "315px";
    document.getElementById('sbtn3').style.top = "315px";
    document.getElementById('infoFAQ2').style.top = "-100px";
    document.getElementById('infoFAQ3').style.top = "-200px";
    document.getElementById('btn2').style.visibility = "visible";
    document.getElementById('btn3').style.visibility = "visible";
    document.getElementById('sbtn3').style.visibility = "hidden";
}
function closeFAQ() {
    document.getElementById('infoFAQ').style.top = "20px";
    document.getElementById('btn1').style.visibility = "visible";
    document.getElementById('btn2').style.top = "150px";
    document.getElementById('btn3').style.top = "190px";
    document.getElementById('sbtn3').style.top = "190px";
    document.getElementById('zyzy').style.top = "150px";
}
function dropFAQ2() {
    document.getElementById('infoFAQ2').style.top = "190px";
    document.getElementById('btn2').style.visibility = "hidden";
    document.getElementById('btn3').style.top = "440px";
    document.getElementById('sbtn3').style.top = "440px";
    /*hidebtn1*/
    document.getElementById('zyzy').style.top = "150px";
    document.getElementById('btn2').style.top = "150px";
    document.getElementById('infoFAQ').style.top = "20px";
    document.getElementById('infoFAQ3').style.top = "-200px";
    document.getElementById('btn1').style.visibility = "visible";
    document.getElementById('btn3').style.visibility = "visible";
    document.getElementById('sbtn3').style.visibility = "hidden";
}
function closeFAQ2() {
    document.getElementById('infoFAQ2').style.top = "-100px";
    document.getElementById('btn2').style.visibility = "visible";
    document.getElementById('btn3').style.top = "190px";
    document.getElementById('sbtn3').style.top = "190px";
}
function dropFAQ3() {
    document.getElementById('infoFAQ3').style.top = "255px";
    document.getElementById('infoFAQ2').style.top = "-100px";
    document.getElementById('infoFAQ').style.top = "20px";
    document.getElementById('btn3').style.visibility = "hidden";
    document.getElementById('btn3').style.top = "190px";
    document.getElementById('btn2').style.top = "150px";
    document.getElementById('zyzy').style.top = "150px";
    document.getElementById('sbtn3').style.top = "190px";
    document.getElementById('sbtn3').style.visibility = "visible";
    document.getElementById('sbtn3').style.borderBottomLeftRadius = "0px";

}
function closeFAQ3() {
    document.getElementById('infoFAQ3').style.top = "-300px";
    document.getElementById('btn3').style.visibility = "visible";
    document.getElementById('sbtn3').style.visibility = "hidden";

}
var input = "info here";

function getinfo1() {
    input = document.getElementById('inp1').value;
    document.getElementById('cng').innerHTML = input;
}

function SHWFAQ1() {
    document.getElementById('XFAQ').style.visibility = "visible";
    document.getElementById('XFAQ').style.right = "395px";
    document.getElementById('infoFAQ3').style.right = "0px";
    document.getElementById('infoFAQ2').style.right = "0px";
    document.getElementById('infoFAQ').style.right = "0px";
    document.getElementById('FAQ').style.right = "0px";
    document.getElementById('btn1').style.right = "0px";
    document.getElementById('sbtn1').style.right = "0px";
    document.getElementById('btn2').style.right = "0px";
    document.getElementById('zyzy').style.right = "0px";
    document.getElementById('btn3').style.right = "0px";
    document.getElementById('sbtn3').style.right = "0px"; 
    document.getElementById('hiderr').style.right = "0px"; 
}
function HDEFAQ1() {
    document.getElementById('XFAQ').style.right = "-420px";
    document.getElementById('infoFAQ').style.right = "-420px";
    document.getElementById('infoFAQ3').style.right = "-420px";
    document.getElementById('infoFAQ2').style.right = "-420px";
    document.getElementById('FAQ').style.right = "-420px";
    document.getElementById('btn1').style.right = "-420px";
    document.getElementById('sbtn1').style.right = "-420px";
    document.getElementById('btn2').style.right = "-420px";
    document.getElementById('zyzy').style.right = "-420px";
    document.getElementById('btn3').style.right = "-420px";
    document.getElementById('sbtn3').style.right = "-420px";
    document.getElementById('hiderr').style.right = "-420px"; 

}
function CNTCLS1() {
    document.getElementById('CLP').style.display = "none";

}

// auth 


