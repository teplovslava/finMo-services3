document.addEventListener('DOMContentLoaded',function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,       
        speed:500,
        
        autoplay: {
          delay: 3000,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      const list = document.querySelectorAll('.questions-list li')
    
    
      list.forEach(item=>{
          item.classList.remove('active')
          item.addEventListener('click',function(){
                  list.forEach(li=>li.classList.remove('active'))
                  item.classList.add('active')
      })}
          
      )

      const menuItem = document.querySelectorAll('.menu li')

    
      menuItem.forEach(item=>{
          item.classList.remove('active')
          item.addEventListener('click',function(){
            menuItem.forEach(li=>li.classList.remove('active'))
                  item.classList.add('active')
      })}
          
      )
      
})