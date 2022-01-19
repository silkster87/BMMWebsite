var myButton = document.getElementById("topButton");

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navcol-1')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

