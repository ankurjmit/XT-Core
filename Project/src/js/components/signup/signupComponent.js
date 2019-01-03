export default class SignupComponent {
    constructor(props) {
        this.parent = props.parent;
        this.render();
        this.inputFocus = this.inputFocus.bind(this);
    }
    inputFocus(event){
        $(event.target).parents('.signup__form--box').addClass('focused');
        $(event.target).removeClass('empty');
    }
    inputblur(event){
        var inputValue = $(event.target).val();
        if ( inputValue == "" ) {
          $(event.target).removeClass('filled');
          $(event.target).parents('.signup__form--box').removeClass('focused');  
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
    inputPasswordValidation(event){
        var patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        var res = patt.test(event.target.value);
        if(!res){
            $(event.target).addClass('empty');
            $(this.parent).find('#submit').addClass('disabled');
        }
    }
    confirmPasswordValidation(event){
        var patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        let password = $("#password").val();
        if(password !== event.target.value || !patt.test(event.target.value)){
            $(event.target).addClass('empty');
            $(this.parent).find('#submit').addClass('disabled');
        }
    }
    render(){
        const markup = `
        <div class="signup">
            <div class="signup__header">
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div class="signup__form">
                <form action="/" id="form">
                    <div class="signup__form--box">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName">
                    </div>
                    <div class="signup__form--box">
                        <label for="secondName">Last Name</label>
                        <input type="text" id="lastName">
                    </div>
                    <div class="signup__form--box">
                        <label for="email">Email</label>
                        <input type="email" id="email">
                    </div>
                    <div class="signup__form--box">
                        <label for="password">Password</label>
                        <input type="password" id="password">
                    </div>
                    <div class="signup__form--box">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword">
                    </div>
                    <div class="signup__form--box">
                        <button id="submit" type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </div>
        `;
        $(this.parent).html(markup);
        $(this.parent).find('input').focus(_ => this.inputFocus(_));
        $(this.parent).find('input').blur(_ => this.inputblur(_));
        $(this.parent).find('#email').blur(_ => this.inputEmail(_));
        $(this.parent).find('#password').blur(_ => this.inputPasswordValidation(_));
        $(this.parent).find('#confirmPassword').blur(_ => this.confirmPasswordValidation(_));
        $(this.parent).find('#submit').prop('disabled', true);
    }

}