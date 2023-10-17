import { useState } from "react";
import "./LoginPage.scss";
// import logo from "../../imgs/stationary-bike.png";
import { GiBiceps } from "react-icons/gi";

const LoginPage = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [errors, setErrors] = useState({});

	// console.log(errors);
	const onSubminClicked = (e) => {
		e.preventDefault();
		let errors = {},
			flag = false;

		if (!userName) {
			errors.userName = ["user name is required"];
			flag = true;
		}
		if (!userPassword) {
			errors.userPassword = ["password is required"];
			flag = true;
		}
		if (flag) {
			setErrors(errors);
		}

		if (isLogin) {
			window.location.href = "/";
		}
	};

	const loginBTN = () => {
		userName && userPassword ? setIsLogin(true) : setIsLogin(false);
	};

	return (
		<div className="login-form">
			<div className="container">
				<div className="row login-row">
					<div className="img">
						<span>Power-Gym</span>
						<GiBiceps />
					</div>
					<form action="" onSubmit={onSubminClicked}>
						<div className="user-name">
							<h4 className="header-user-name-input">User Name: </h4>
							<input
								type="text"
								className={`form-control ${errors.userName && "error"}`}
								onChange={(e) => setUserName(e.target.value)}
								id="userName"
								value={userName}
							/>
							{errors.userName &&
								errors.userName.map((err) => (
									<h6 className="user-name-wornning error-color">{err}</h6>
								))}
						</div>

						<div className="password">
							<h4 className="header-password-input">Password:</h4>
							<input
								type="password"
								className={`form-control ${errors.userPassword && "error"}`}
								onChange={(e) => setUserPassword(e.target.value)}
								id="password"
								value={userPassword}
							/>
							{errors.userPassword &&
								errors.userPassword.map((err) => (
									<h6 className="password-wornning error-color">{err}</h6>
								))}
						</div>
						<button
							className="submit-btn btn btn-primary form-control"
							onClick={loginBTN}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
