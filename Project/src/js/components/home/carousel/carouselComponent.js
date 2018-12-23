export default class CarouselComponent {
    constructor(props) {
        this.props = props;
        this.element = props.element;
        this.data = props.data;
        this.render();
    }

    render() {
        const markup= `
        <div class="container">
            <div class="slide fade">
                <img src=${this.data[0].bannerImageUrl} alt=${this.data[0].bannerImageAlt}>
            </div>
            <div class="slide fade">
                <img src=${this.data[1].bannerImageUrl} alt=${this.data[1].bannerImageAlt}>
            </div>
            <div class="slide fade">
                <img src=${this.data[2].bannerImageUrl} alt=${this.data[2].bannerImageAlt}>
            </div>
            <div class="slide fade">
                <img src=${this.data[3].bannerImageUrl} alt=${this.data[3].bannerImageAlt}>
            </div>
            <div class="slide fade">
                <img src=${this.data[4].bannerImageUrl} alt=${this.data[4].bannerImageAlt}>
            </div>
            <a class="prev" id="prev">PREV</a>
            <a class="next" id="next">NEXT</a>
            <div class="dot-container">
                <span class="dot" id="dot1"></span>
                <span class="dot" id="dot2"></span>
                <span class="dot" id="dot3"></span>
                <span class="dot" id="dot4"></span>
                <span class="dot" id="dot5"></span>
            </div>
        </div>`

        this.element.html(markup);
        this.props.carouselShowSlide(1);
        
        this.element.find('#prev').click(_ => this.props.carouselPlusSlides(-1));
        this.element.find('#next').click(_ => this.props.carouselPlusSlides(1));
        this.element.find('#dot1').click(_ => this.props.carouselCurrentSlide(1));
        this.element.find('#dot2').click(_ => this.props.carouselCurrentSlide(2));
        this.element.find('#dot3').click(_ => this.props.carouselCurrentSlide(3));
        this.element.find('#dot4').click(_ => this.props.carouselCurrentSlide(4));
        this.element.find('#dot5').click(_ => this.props.carouselCurrentSlide(5));
    }
}