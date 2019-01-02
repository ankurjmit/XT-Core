export default class SigninComponent {
    constructor(props) {
        this.parent = props.parent;
        this.render();
        this.inputFocus = this.inputFocus.bind(this);
        this.cansubmit = true;
    }
    inputFocus(event){
        $(event.target).parents('.signin__form--box').addClass('focused');
        $(event.target).removeClass('empty');
    }
    inputblur(event){
        var inputValue = $(event.target).val();
        if ( inputValue == "" ) {
          $(event.target).removeClass('filled');
          $(event.target).parents('.signin__form--box').removeClass('focused');  
          $(event.target).addClass('empty');
          $(this.parent).find('#submit').addClass('disabled');
        } else {
          $(event.target).addClass('filled');
          $(this.parent).find('#submit').removeClass('disabled');
          $(this.parent).find('#submit').prop('disabled', false);
        }
    }
    inputEmail(event){
        if(!event.target.value || event.target.value.indexOf('@') == -1){
            $(event.target).addClass('empty');
            $(this.parent).find('#submit').addClass('disabled');
        }
    }
    render(){
        const markup = `
        <div class="signin">
            <div class="signin__header">
                <h1>Login</h1>
                <p>Get access to your Orders,Wishlist and Recommendations</p>
            </div>
            <div class="signin__form">
                <form action="/" id="form">
                    <div class="signin__form--box">
                        <label for="email">Email</label>
                        <input type="email" class="signin__box--input" id="email">
                    </div>
                    <div class="signin__form--box">
                        <label for="password">Password</label>
                        <input type="password" class="signin__box--input" id="password">
                    </div>
                    <div class="signin__form--box">
                        <button id="submit" class="disabled" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        `;
        $(this.parent).html(markup);
        $(this.parent).find('input').focus(_ => this.inputFocus(_));
        $(this.parent).find('input').blur(_ => this.inputblur(_));
        $(this.parent).find('#email').blur(_ => this.inputEmail(_));
        $(this.parent).find('#submit').prop('disabled', true);

    }

}