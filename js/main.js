window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';

    // Tabs 

    let tabContainer = document.querySelector('.info-header'),
        tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent fade');

    function hideTabContent(a) {
        for (let i = a; i < tab.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }

    tabContainer.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    // Timer

    let deadline = '2018-10-21';

    function getTimeRemaining(endtime) {
        
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/1000/60/60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (hours < 10) {
            hours = `0${hours}`;
        }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(id, endtime) {
        
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        
        
        function updateClock() {
            
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }

    }


    setClock('timer', deadline);
 
    // Scroll

    let infoBtn = document.querySelectorAll('ul>li>a'),
        aboutScreen = document.querySelector('.info'),
        photoScreen = document.querySelector('#photo'),
        priceScreen = document.querySelector('#price'),
        contactsScreen = document.querySelector('#contacts');


    infoBtn[0].addEventListener('click', () => {
        
        let coordY = aboutScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
              if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
              } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
              }
            }, 17);
    });

    infoBtn[1].addEventListener('click', () => {
        
        let coordY = photoScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
              if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
              } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
              }
            }, 17);
    });
        
        
        
    infoBtn[2].addEventListener('click', () => {
        
        let coordY = priceScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
              if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
              } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
              }
            }, 17);
    });

    infoBtn[3].addEventListener('click', () => {
        
        let coordY = contactsScreen.offsetTop - 80;
                        
        let scroller = setInterval( () => {
            let scrollBy = coordY / 60;
            
              if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                
                window.scrollBy(0, scrollBy);
              } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
              }
            }, 17);
    });


    // Modal

    let btnMore = document.querySelector('.more'),
        btnClose = document.querySelector('.popup-close'),
        overlayWindow = document.querySelector('.overlay');


    function showMore(){
        overlayWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        btnMore.classList.add('more-splash');
    }

    btnMore.addEventListener('click', () => {
        showMore();
    });
   
    btnClose.addEventListener('click', () => {
        overlayWindow.style.display = 'none';
        btnMore.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    aboutScreen.addEventListener('click', (event) => {
        if(event.target.classList.contains('description-btn')){
            showMore();
        }
    })

});

