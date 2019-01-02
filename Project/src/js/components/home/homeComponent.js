import FetchDataService from './../../services/fetchDataService';
import CarouselComponent from './carousel/carouselComponent';
import CategoryItemComponent from './categoty/categoryItemComponent';

export default class HomeComponent {
    constructor(props) {
        this.slideIndex = 1;
        this.parent = props.parent;
        this.fetchDataService = new FetchDataService();
        this.fetchDataService.getCarouselData()
            .then((resCarouselData) => {
                this.carouselData = resCarouselData;
                return this.fetchDataService.getCategoriesData();
            })
            .then((resCategoriesData) => {
                this.categoriesData = resCategoriesData.filter(category => { return category.enabled })
                this.render();
            })
            .catch((err) => {
                console.log(err);
            })
        this.carouselCurrentSlide = this.carouselCurrentSlide.bind(this);
        this.carouselPlusSlides = this.carouselPlusSlides.bind(this);
        this.carouselShowSlide = this.carouselShowSlide.bind(this);
    }
    carouselCurrentSlide(n) {
        this.slideIndex = n;
        this.carouselShowSlide(this.slideIndex);
    }

    carouselPlusSlides(n) {
        this.carouselShowSlide(this.slideIndex += n)
    }

    carouselShowSlide(slideNo) {
        var slides = $('.carouselContainer__slide');
        var dots = $('.dot');
        if (slideNo > slides.length) { this.slideIndex = 1 }
        if (slideNo < 1) { this.slideIndex = slides.length }

        for (var i = 0; i < slides.length; i++) {
            if (i + 1 == this.slideIndex) {
                slides[i].style.display = 'block';
                dots[i].classList.add('active');
            }
            else {
                slides[i].style.display = 'none';
                dots[i].className = dots[i].className.replace('active', "");
            }
        }
    }
    render() {
        const markup = `
        <div class="home">
            <section class="carousel">
            </section>
            <section class="categories">
            </section>
        </div>
        `
        $(this.parent).html(markup);
        this.carouselElement = $('.carousel');
        this.categoriesElement = $('.categories');
        new CarouselComponent({ element: this.carouselElement, data: this.carouselData, carouselShowSlide: this.carouselShowSlide, carouselPlusSlides: this.carouselPlusSlides, carouselCurrentSlide: this.carouselCurrentSlide });
        this.categoriesData.forEach((category,index) => {
            new CategoryItemComponent({ element: this.categoriesElement, data: category,position:index%2==0 });
        })

    }
}