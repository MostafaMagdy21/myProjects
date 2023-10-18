import React, { useState } from "react";
import FooterForm from "../../component/footerForm/FooterForm";
import HeaderForm from "../../component/headerForm/HeaderForm";
import "./RegesterPage.scss";
import axios from "axios";

const RegesterPage = () => {
	const [fName, setFname] = useState("");
	const [lName, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");
	const [rePassord, setRepassowrd] = useState("");
	const [errors, setErrors] = useState({});
	const [isRegester, setIsRegester] = useState(false);

	let flag = false;
	const onSubmitHandler = (e) => {
		e.preventDefault();

		// validation errors
		let errors = {};
		if (!fName) {
			errors.fName = ["please enter your first name"];
			flag = true;
		}
		if (!lName) {
			errors.lName = ["please enter your last name"];
			flag = true;
		}
		if (!email) {
			errors.email = ["please enter your email"];
			flag = true;
		}
		if (!password) {
			errors.password = ["please enter your password"];
			flag = true;
		}
		if (!rePassord) {
			errors.rePassord = ["please enter repassword"];
			flag = true;
		}
		if (rePassord !== password) {
			errors.rePassord = ["password and repassword most be equal"];
			flag = true;
		}

		setErrors(errors);
		const data = {
			FNAME: fName,
			LNAME: lName,
			EMAIL: email,
			PASSORD: password,
			ISACTIVE: 1,
		};
		// request to api
		// const url = "https://localhost:7000/api/Registration/registration";
		// axios
		// 	.post(url, data)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		alert(err);
		// 	});

		if (isRegester) {
			window.location.href = "/login-page";
		}
	};
	const onClickBtn = () => {
		// fName && lName && email && password && rePassord === password
		// 	? setIsRegester(true)
		// 	: console.log(false);
		// const data = {
		// 	FNAME: fName,
		// 	LNAME: lName,
		// 	EMAIL: email,
		// 	PASSORD: password,
		// 	ISACTIVE: 1,
		// };
		// // request to api
		// const url = "https://localhost:44377/api/test/Registration";
		// axios
		// 	.post(url, data)
		// 	.then((res) => {
		// 		alert("data saved");
		// 		//window.location.href = "/login-page";
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		alert("not valid");
		// 	});
	};
	return (
		<div className="regester-form">
			<HeaderForm />
			<div className="container">
				<div className="row">
					<form action="" onSubmit={onSubmitHandler}>
						<div className="user-name d-flex">
							<div className="firt-name col-6">
								<h4 className="header-user-name-input">First Name: </h4>
								<input
									type="text"
									className={`form-control ${errors.fName && "error"}`}
									value={fName}
									onChange={(e) => setFname(e.target.value)}
								/>
								{errors.fName &&
									errors.fName.map((err) => (
										<h6 className="user-name-wornning error-color">{err}</h6>
									))}
							</div>
							<div className="last-name col-6">
								<h4 className="header-user-name-input">Last Name: </h4>
								<input
									type="text"
									className={`form-control ${errors.lName && "error"}`}
									value={lName}
									onChange={(e) => setLname(e.target.value)}
								/>
								{errors.lName &&
									errors.lName.map((err) => (
										<h6 className="user-name-wornning error-color">{err}</h6>
									))}
							</div>
						</div>
						<div className="password">
							<h4 className="header-password-input">Email </h4>
							<input
								type="email"
								className={`form-control ${errors.email && "error"}`}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email &&
								errors.email.map((err) => (
									<h6 className="user-name-wornning error-color">{err}</h6>
								))}
						</div>

						<div className="password">
							<h4 className="header-password-input">Password: </h4>
							<input
								type="password"
								className={`form-control ${errors.password && "error"}`}
								value={password}
								onChange={(e) => setPassowrd(e.target.value)}
							/>
							{errors.password &&
								errors.password.map((err) => (
									<h6 className="user-name-wornning error-color">{err}</h6>
								))}
						</div>
						<div className="password">
							<h4 className="header-password-input">Re-Password: </h4>
							<input
								type="password"
								className={`form-control ${errors.rePassord && "error"}`}
								value={rePassord}
								onChange={(e) => setRepassowrd(e.target.value)}
							/>
							{errors.rePassord &&
								errors.rePassord.map((err) => (
									<h6 className="user-name-wornning error-color">{err}</h6>
								))}
						</div>
						<button
							className="submit-btn btn btn-primary form-control"
							onClick={onClickBtn}
						>
							Regester
						</button>
						<FooterForm />
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegesterPage;
