import React, { Component } from 'react';
import "./style.css";
// Import ảnh

class LoginRegister extends Component {
    // Hàm chuyển trạng thái đăng nhập
    actSignin = () => {
        var container = document.querySelector(".contain");
        container.classList.remove("sign-up-mode");
    }
    // Hàm chuyển trạng thái đăng ký
    actSignup = () => {
        var container = document.querySelector(".contain");
        container.classList.add("sign-up-mode");
    }
    render() {
        return (
            <div className="contain">
                <div className="forms-contain">
                    <div className="signin-signup">
                        {/* Form đăng nhập */}
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Đăng nhập</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Tài khoản" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Mật khẩu" />
                            </div>
                            <input type="submit" value="Đăng nhập" className="btn solid" />
                            <p className="social-text">Liên hệ với chúng tôi</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="#" className="social-icon">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </form>
                        {/* Form đăng ký */}
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Đăng ký</h2>
                            <div className="input-field">
                                <i className="fas fa-user" />
                                <input type="text" placeholder="Tài khoản" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Mật khẩu" />
                            </div>
                            <input type="submit" className="btn" value="Đăng ký" />
                            <p className="social-text">Liên hệ với chúng tôi</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="#" className="social-icon">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Thông tin thêm */}
                <div className="panels-contain">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Bạn chưa có tài khoản ?</h3>
                            <p>
                                Hãy đăng ký ngay để quản lý thông minh cho ngôi nhà bạn!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={this.actSignup}>
                                Đăng ký
                            </button>
                        </div>
                        <img src={require('./img/log.svg')} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Bạn đã có tài khoản ?</h3>
                            <p>
                                Hãy đăng nhập ngay để quản lý ngôi nhà của bạn!
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={this.actSignin}>
                                Đăng nhập
                            </button>
                        </div>
                        <img src={require('./img/register.svg')} className="image" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

LoginRegister.propTypes = {

};

export default LoginRegister;