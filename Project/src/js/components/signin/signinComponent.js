export default class SigninComponent {
    constructor(props) {
        this.parent = props.parent;
        this.render();
        this.inputFocus = this.inputFocus.bind(this);
    }
    inputFocus(event){
        $(event.target).parents('.signin__box').addClass('focused');
        $(event.target).removeClass('empty');
    }
    inputblur(event){
        var inputValue = $(event.target).val();
        if ( inputValue == "" ) {
          $(event.target).removeClass('filled');
          $(event.target).parents('.signin__box').removeClass('focused');  
          $(event.target).addClass('empty');
        } else {
          $(event.target).addClass('filled');
        }
    }
    inputEmail(event){
        if(!event.target.value || event.target.value.indexOf('@') == -1){
            $(event.target).addClass('empty');
        }
    }
    render(){
        const markup = `
        <div class="signinContainer">
            <div class="signinHeader">
                <h1>Signin</h1>
                <p>Get access to your Orders,Wishlist and Recommendations</p>
            </div>
            <div class="signinForm">
                <form action="#" id="form">
                    <div class="signin__box">
                        <label for="email">Email</label>
                        <input type="email" class="signin__box--input" id="email">
                    </div>
                    <div class="signin__box">
                        <label for="password">Password</label>
                        <input type="password" class="signin__box--input" id="password">
                    </div>
                    <div class="signin__box">
                        <button type="submit">signin</button>
                    </div>
                </form>
            </div>
        </div>
        `;
        $(this.parent).html(markup);
        $(this.parent).find('input').focus(_ => this.inputFocus(_));
        $(this.parent).find('input').blur(_ => this.inputblur(_));
        $(this.parent).find('#email').blur(_ => this.inputEmail(_));

    }

}