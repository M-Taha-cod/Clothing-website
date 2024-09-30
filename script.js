ScrollReveal({
    reset: true,
    distance : "60px",
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.res-1', { delay: 300, origin: "left" });
ScrollReveal().reveal('.first-img, .res-2', { delay: 300, origin: "bottom" });
ScrollReveal().reveal('.res-4', { delay: 300, origin: "right" });
ScrollReveal().reveal('.res-3', { delay: 300, origin: "top", interval: 200 });

//login farm

var a;
function pass(){
    if(a==1){
        document.getElementById("password").type="password";
        document.getElementById("pass-icon").src="images/eye-slash-regular.svg";
        a=0;
    }
    else{
        document.getElementById("password").type="text";
        document.getElementById("pass-icon").src="images/eye-regular.svg";
        a=1;
    }
}

// frontpage 

// dropdown button

