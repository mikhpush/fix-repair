const slider = {
    slides: [
        {
            url: `img/slides/eco.jpg`,
            note: `Эко-стиль, каким видит его гугл-поисковик`
        },
        {
            url: `img/slides/img.png`,
            note: `Кафельная плтика в ванной комнате в скандинавском стиле`
        },
        {
            url: `img/slides/classic.jpg`,
            note: `Не модерн и не классика, а эдакая эклектика`
        }
    ],
    frame: 1,
    set: function(images) {

        const sliderLeftEl = document.querySelector(`.slider__left`);
        let leftSlideIndex = (this.frame - 1) < 0 ? images.length - 1 : (this.frame - 1);
        sliderLeftEl.style.background = `url(${images[leftSlideIndex].url})`;
        sliderLeftEl.style.backgroundSize = `cover`;

        const sliderCenterEl = document.querySelector(`.slider__center`);
        sliderCenterEl.style.background = `url(${images[this.frame].url})`;
        sliderCenterEl.style.backgroundSize = `cover`;
        document.querySelector(`.slider__comments`).innerHTML = images[this.frame].note;

        const sliderRightEl = document.querySelector(`.slider__right`);
        let rightSlideIndex = (this.frame + 1) > images.length - 1 ? 0 : (this.frame + 1);
        sliderRightEl.style.background = `url(${images[rightSlideIndex].url})`;
        sliderRightEl.style.backgroundSize = `cover`;

    },

    init: function() {
        this.set(this.slides);
    },
    left: function() {
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides);
    },
    right: function() {

        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides);
    }
};

const rightBtn = document.querySelector(`.slider__right-btn`);
rightBtn.addEventListener(`click`, () => {
    clearInterval(autoSlide);
    slider.right()
});

const leftBtn = document.querySelector(`.slider__left-btn`);
leftBtn.addEventListener(`click`, () => {
    clearInterval(autoSlide);
    slider.left()
});


slider.init();

const autoSlide = setInterval(() => {
        slider.right();
    }, 4000);
