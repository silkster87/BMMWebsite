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

//This part is important because without it the menu doesn't collapse when a menu item is clicked on
//Also when creating bsCollapse we want the menu initially collapsed rather than expanded so toggle is false
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navcol-1')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

