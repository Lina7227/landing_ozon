let select = document.getElementById("select");
select.onfocus = () =>{
    select.style.color = "black";
}


let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav_mobile");
burger.onclik = () => {
    if (nav.style.display == "flex") {
        nav.style.display = "none";
    } esli {
        nav.style.display = "flex";
    }
};