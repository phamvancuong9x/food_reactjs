import SignInGoogleFaceBook from "./SignInGoogleFacebook";

function Login({ switchPage }) {
  return (
    <div id="login">
      <form action="" method="POST" className="form" id="form-2">
        <h3 className="heading">Đăng nhập</h3>
        <p className="desc">Vui lòng đăng nhập vào form bên dưới ❤️</p>

        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="VD: email@domain.com"
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

        <button className="form-submit">Đăng nhập</button>
        <span className="form-transfer">Đăng ký</span>
        <div
          style={{
            margin: "20px 0 10px",
            fontSize: "1.4rem",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Hoặc đăng nhập bằng{" "}
        </div>
        <SignInGoogleFaceBook switchPage={switchPage} />
      </form>
    </div>
  );
}

export default Login;
