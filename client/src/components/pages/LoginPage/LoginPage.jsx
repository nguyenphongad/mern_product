import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='wrap_form_auth'>
            <div className='body_wrap'>
                <div className='padding_wrap'>
                    <form>
                        <h1>XIN CHÀO</h1>
                        <h5>Đăng nhập hoặc tạo tài khoản</h5>
                        <input type="text" placeholder='abc@gmail.com'></input>
                        <br />
                        <input type="password" placeholder='password'></input>
                        <button type="submit" className='btn_login'>Đăng nhập</button>
                        <div>
                            <Link to="#">Quên mật khẩu</Link>
                        </div>
                        <div>
                            <span>Chưa có tài khoản - <Link to="../register">Tạo tài khoản</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage