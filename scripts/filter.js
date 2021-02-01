(function(){
    const control = document.querySelectorAll('.filter__item')
    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
    // options
    itemSelector: '.products__item',
    filter:'.new'
    }); 

    let selectedTd;
    const controlls = document.querySelector('.filter');
    const activeClass = 'filter__link--active'
    controlls.onclick = function(event){
        event.preventDefault()
        let target = event.target
        if(target.tagName!='A'){
            return
        }
        const filterName = target.getAttribute('data-filter')
            console.log(filterName);
            iso.arrange({
                filter:`.${filterName}`
        })
   classAdd(target);
        
    }

    const classAdd = (li) => {
        if(selectedTd){
            selectedTd.classList.remove(activeClass);
        }
        selectedTd=li
        selectedTd.classList.add(activeClass)
    }
}())