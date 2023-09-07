import React from 'react';
import './index.less';

function LoginForm() {
  return (
    <div className="formContent">
      <input id="login-btn" type="radio" name="auth" checked hidden />
      <input id="logon-btn" type="radio" name="auth" hidden />
      <div className="auth-title">
        <label htmlFor="login-btn">登录</label>
        <label htmlFor="logon-btn">注册</label>
        <em></em>
      </div>
      <div className="auth-form">
        <form>登录</form>
        <form>注册</form>
      </div>
    </div>
  );
}

export default LoginForm;
