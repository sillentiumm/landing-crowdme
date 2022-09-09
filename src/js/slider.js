let number =0

document.querySelector('.arrow-left').addEventListener('click', () => {
    number--
    if (number<0) {
        number=2
    }
    if (number==0) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg.png)';
    }
    else if (number==1) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg_2.jpg)';
    }
    else if (number==2) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg_3.jpg)';
    }

    });
document.querySelector('.arrow-right').addEventListener('click', () => {
    number++    
    if (number>2) {
        number=0
    }
    if (number==0) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg.png)';
    }
    else if (number==1) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg_2.jpg)';
    }
    else if (number==2) {
        document.getElementById('main').style.backgroundImage = 'url(img/main-bg_3.jpg)';
    }
    });