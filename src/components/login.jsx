import React from "react";
import $ from 'jquery';


class Login extends React.Component {
    
    render(){
    return(
    <div>   
        <div id="login_circle" className="login-circle invisible">
            <div id="loader" className="invisible" style={{position:"relative"}}>
                <div className="lds-hourglass"></div>
            </div>
            <div className="login-holder">
                <div id="recover_form" className="recover-pass invisible">
                    <input type="text" placeholder="Podaj e-mail"/>
                    <input type="submit" value="Odzyskaj hasło"/>
                    <input 
                    type="button"
                    onClick={() => back_to_login()}
                    value="Powrót"
                    />
                </div>
                <form id="loginform" method="post" action="index.php" name="loginform">
                    <div id="login_inputs" className="login-inputs">
                        <input id="login_input_username" name="user_name" placeholder="Login..." type="text" className="form-control"/>
                        <input id="login_input_password" name="user_password" placeholder="Hasło..." type="password" className="form-control"/>
                        <input name="login" id="login" type="submit" value="Zaloguj"/>
                        <input 
                        onClick={() => recover_pass()}
                        type="button"
                        value="Odzyskaj hasło"
                        />
                    </div>
                </form>

                <form method="post" action="index.php" name="registerform">
                    <div id="register_inputs" className="invisible register-inputs">
                        <input id="login_input_username" name="user_name" placeholder="Login..." type="text" className="form-control"/>
                        <input id="login_input_email" name="user_email" placeholder="E-mail..." type="text" className="form-control" required="required"/>
                        <input id="login_input_password_new" name="user_password_new" placeholder="Hasło..." type="password" className="form-control"/>
                        <input id="login_input_password_repeat" name="user_password_repeat" placeholder="Powtórz hasło..." type="password" className="form-control"/>
                        <input name="register" type="submit" value="Zarejestruj"/>
                        <input className="checkbox" required name="checkbox" id="checkbox_0" type="checkbox"/> 
                        <p className="checkbox-p"> Rejestrując się akceptuję <a href="regulamin.php">regulamin</a> serwisu.</p>
                    </div>
                </form>
            </div>
            <div className="choose">
                <div
                onClick={() => login_choose()}
                id="login-choose"
                className="button-login active">
                    <p>login</p>
                </div>
                <div 
                onClick={() => close()}
                className="button-close">
                    <p>zamknij</p>
                </div>
                    
                <div
                onClick={() => register_choose()}
                id="register-choose"
                className="button-register"
                
                >
                    <p>rejestracja</p>
                </div>
            </div>
        </div>
    </div>

);}}

    function login_choose(){
        $('#loader').addClass('visible');
        window.setTimeout(function(){
        $('#login-choose').addClass('active');
        $('#register-choose').removeClass('active');
        $('#register_inputs').removeClass('visible');
        $('#login_inputs').addClass('visible');
        $('#loader').removeClass('visible');
        $('#recover_form').addClass('invisible');
        $('#recover_form').removeClass('visible');
        }, 750);
    };
    function register_choose(){
        $('#loader').addClass('visible');
        window.setTimeout(function(){
        $('#register-choose').addClass('active');
        $('#login-choose').removeClass('active');
        $('#register_inputs').addClass('visible');
        $('#login_inputs').addClass('invisible');
        $('#login_inputs').removeClass('visible');
        $('#loader').removeClass('visible');
        $('#recover_form').addClass('invisible');
        $('#recover_form').removeClass('visible');
        }, 750);
    };
    function recover_pass(){
        $('#loader').addClass('visible');
        window.setTimeout(function(){
        $('#login_inputs').addClass('invisible');
        $('#login_inputs').removeClass('visible');
        $('#recover_form').addClass('visible');
        $('#loader').removeClass('visible');
        }, 750);
    };
    function back_to_login(){
        $('#loader').addClass('visible');
        window.setTimeout(function(){
        $('#login_inputs').addClass('visible');
        $('#recover_form').addClass('invisible');
        $('#recover_form').removeClass('visible');
        $('#loader').removeClass('visible');
        }, 750);
    };
   
    function close(){
        $('#login_circle').addClass('dissapear');
        $('#login_circle').removeClass('visible-flex');
        $('#login_circle').removeClass('appear');
    };

export default Login;
