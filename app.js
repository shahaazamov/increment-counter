const counters = document.querySelectorAll('.counter')


counters.forEach((counter) =>{
    counter.textContent = '0'


    function  updateCounter(){
        const target = +counter.getAttribute('data-target')
        const num = +counter.textContent


        const increment = target / 200

        if(num  < target) {
            counter.textContent = `${Math.ceil(num + increment)}`
            setTimeout(updateCounter , 1)
        }else{
            counter.textContent = target
        }
    }


    updateCounter()
})
