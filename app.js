const toglebtn =document.querySelector('.togle-btn')
const toglebtnbtn =document.querySelector('.togle-btn i')
const dropdownmenu =document.querySelector('.dropdown-menu')
toglebtnbtn.onclick=function(){
    dropdownmenu.classList.toggle('open')
    const isOpen=dropdownmenu.classList.contains('open')

    toglebtnbtn.classList=isOpen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Agriculture and mordern tools";
            }, 0);
            setTimeout(() => {
                text.textContent = "Free course";
            }, 4000);
            setTimeout(() => {
                text.textContent = "job portals";
            }, 8000); //1s = 1000 milliseconds
            setTimeout(()=>{
                text.textContent="Rural enterprenarship"
            },12000);
        }
        textLoad();
        setInterval(textLoad, 12000);