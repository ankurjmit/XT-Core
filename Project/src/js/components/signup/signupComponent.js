export default class SignupComponent {
    constructor(props) {
        this.parent = props.parent;
        this.render();
        this.inputFocus = this.inputFocus.bind(this);
    }
    inputFocus(event){
        $(event.target).parents('.signup__box').addClass('focused');
        $(event.target).removeClass('empty');
    }
    inputblur(event){
        var inputValue = $(event.target).val();
        if ( inputValue == "" ) {
          $(event.target).removeClass('filled');
          $(event.target).parents('.signup__box').removeClass('focused');  
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
        <div class="signupContainer">
            <div class="signupHeader">
                <h1>Signup</h1>
                <p>We do not share your personal details with anyone.</p>
            </div>
            <div class="signupForm">
                <form action="#" id="form">
                    <div class="signup__box">
                        <label for="firstName">First Name</label>
                        <input type="text" class="signup__box--input" id="firstName">
                    </div>
                    <div class="signup__box">
                        <label for="secondName">Last Name</label>
                        <input type="text" class="signup__box--input" id="lastName">
                    </div>
                    <div class="signup__box">
                        <label for="email">Email</label>
                        <input type="email" class="signup__box--input" id="email">
                    </div>
                    <div class="signup__box">
                        <label for="password">Password</label>
                        <input type="password" class="signup__box--input" id="password">
                    </div>
                    <div class="signup__box">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" class="signup__box--input" id="confirmPassword">
                    </div>
                    <div class="signup__box">
                        <button type="submit">Signup</button>
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