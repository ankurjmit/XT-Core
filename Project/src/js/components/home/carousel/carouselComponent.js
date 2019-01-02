export default class CarouselComponent {
    constructor(props) {
        this.props = props;
        this.element = props.element;
        this.data = props.data;
        this.render();
    }

    render() {
        let markup= `
        <div class="carouselContainer">`;
        this.data.forEach(slide=>{
            markup = `${markup}
                <div class="carouselContainer__slide carouselContainer__fade">
                    <img src=${slide.bannerImageUrl} alt=${slide.bannerImageAlt}>
                </div>`
        });

        markup = `${markup}
            <a class="btn prev" id="prev"><</a>
            <a class="btn next" id="next">></a>
            <div class="dotContainer">`;
        this.data.forEach((slide,index)=>{
                markup = `${markup}<span class="dot" id="dot${index}"></span>`
        });
        markup = `${markup}       
            </div>
        </div>`
        this.element.html(markup);
        this.props.carouselShowSlide(1);
        this.element.find('#prev').click(_ => this.props.carouselPlusSlides(-1));
        this.element.find('#next').click(_ => this.props.carouselPlusSlides(1));
        this.data.forEach((slide,index)=>{
            let id=index + 1;
            this.element.find('#dot'+index).click(_ => this.props.carouselCurrentSlide(id));
        });
    }
}