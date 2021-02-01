(function (){
    const slides= document.querySelectorAll('.fade-slider__item')
    const activeClass = 'fade-slider__item--style-visible'
    let index = 0;
    const sliderMove =()=>{

        slides[index].classList.remove(activeClass);
        index+=1;
        if(index>=slides.length){
            index=0;
        }
        slides[index].classList.add(activeClass);
    }
    setInterval(sliderMove,5000)
}())