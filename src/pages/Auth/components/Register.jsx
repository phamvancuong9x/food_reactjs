function Register({ setCheckAuth }) {
  return (
    <div id="Register">
      <form action="" method="POST" className="form" id="form-1">
        <h3 className="heading">Đăng ký tài khoản</h3>
        <p className="desc">Vui lòng đăng ký vào form bên dưới ❤️</p>

        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="fullname" className="form-label">
            Tên đầy đủ
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="VD:cuong123"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation" className="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Nhập lại mật khẩu"
            type="password"
            className="form-control"
          />
          <span className="form-message"></span>
        </div>

        <button className="form-submit">Đăng ký</button>
        <span
          className="form-transfer"
          onClick={() => setCheckAuth("Đăng Nhập")}
        >
          Đăng nhập
        </span>
      </form>
    </div>
  );
}

export default Register;
