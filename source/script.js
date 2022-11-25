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
      

      
      const menuburger = document.querySelector('.burger')
      const burgerBtn = document.querySelector('.open-right__menu')

      burgerBtn.addEventListener('click',()=>{
        burgerBtn.classList.toggle('openedBurger')
        menuburger.classList.toggle('active-burger')
      })

      const burgerMain = document.querySelector('.burger-box')
      const MainBurgerBtnOpen = document.querySelector('.mobile-menu')
      const MainBurgerCloseBtn = document.querySelector('.burger-header button')

      MainBurgerBtnOpen.addEventListener('click',()=>{
        burgerMain.classList.add('activeMainBurger')
      })


      const burgerMainMenu = document.querySelectorAll('.burgerMenu li')

    
      burgerMainMenu.forEach(item=>{
          item.classList.remove('active1')
          item.addEventListener('click',function(){
            burgerMainMenu.forEach(li=>li.classList.remove('active1'))
                  item.classList.add('active1')
      })}
          
      )
      

      MainBurgerCloseBtn.addEventListener('click',()=>{
        burgerMain.classList.remove('activeMainBurger')
        burgerMainMenu.forEach(item=>{
          item.classList.remove('active1')
          item.addEventListener('click',function(){
            burgerMainMenu.forEach(li=>li.classList.remove('active1'))
                  item.classList.add('active1')
      })}
          
      )
      })
})