import React, { useState } from "react";
import "./HomePage.scss";
import card1 from "../imgs/card1.jpg";
import card2 from "../imgs/card2.jpg";
import card3 from "../imgs/card3.jpg";
import img3 from "../imgs/img3.png";
// -----------------------
import img5 from "../imgs/img5.jpg";
import img6 from "../imgs/img6.jpg";
import img7 from "../imgs/img7.jpg";
import img8 from "../imgs/img8.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
	const [activity, setActivity] = useState([
		{ title: "مساج", price: "100.00 ج. م" },
		{ title: "سونا", price: "50.00 ج. م	" },
		{ title: "جاكوزى", price: "50.00 ج. م" },
		{ title: "تمرينه", price: "50.00 ج. م" },
		{ title: "مساج نص جلسه", price: "50.00 ج. م" },
		{ title: "بخار", price: "50.00 ج. م" },
		{ title: "جاكوزي", price: "50.00 ج. م" },
		{ title: "ساونا 21", price: "100.00 ج. م" },
		{ title: "برايفت", price: "500.00 ج. م" },
	]);
	const [membership, setMembership] = useState([
		{
			title: "عضويه عاديه نصف سنوى",
			salary: "1750.00 ج. م",
			ndays: "180 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "6 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه ثلاث اشهر",
			salary: "1000.00 ج. م",
			ndays: "90 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه شهر",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضوية السيستم القديم",
			salary: "0.00 ج. م",
			ndays: "0 ايام",
			traning: "0 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه توقيف اكثر من مره",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "20000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "10 عدد أيام التجميد",
		},
		{
			title: "عضويه قديمه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه مجانيه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه سنوى",
			salary: "3300.00 ج. م",
			ndays: "365 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "12 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه نصف سنوى",
			salary: "1750.00 ج. م",
			ndays: "180 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "6 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه ثلاث اشهر",
			salary: "1000.00 ج. م",
			ndays: "90 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه شهر",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضوية السيستم القديم",
			salary: "0.00 ج. م",
			ndays: "0 ايام",
			traning: "0 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه توقيف اكثر من مره",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "20000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "10 عدد أيام التجميد",
		},
		{
			title: "عضويه قديمه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه مجانيه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه سنوى",
			salary: "3300.00 ج. م",
			ndays: "365 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "12 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه نصف سنوى",
			salary: "1750.00 ج. م",
			ndays: "180 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "6 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه ثلاث اشهر",
			salary: "1000.00 ج. م",
			ndays: "90 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه شهر",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضوية السيستم القديم",
			salary: "0.00 ج. م",
			ndays: "0 ايام",
			traning: "0 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه توقيف اكثر من مره",
			salary: "400.00 ج. م",
			ndays: "30 يوم",
			traning: "20000 عدد التدريبات",
			holdingnum: "3 عدد مرات التجميد",
			holdingdays: "10 عدد أيام التجميد",
		},
		{
			title: "عضويه قديمه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه مجانيه",
			salary: "0.00 ج. م",
			ndays: "30 يوم",
			traning: "3000 عدد التدريبات",
			holdingnum: "0 عدد مرات التجميد",
			holdingdays: "0 عدد أيام التجميد",
		},
		{
			title: "عضويه عاديه سنوى",
			salary: "3300.00 ج. م",
			ndays: "365 يوم",
			traning: "30000 عدد التدريبات",
			holdingnum: "12 عدد مرات التجميد",
			holdingdays: "14 عدد أيام التجميد",
		},
	]);
	return (
		<div>
			<section className="cersol" id="sec-1">
				<h2>
					IT'S <span>GYM</span> TIME. LET'S GO WE ARE READY TO
					<span>FIT YOU</span>
				</h2>
			</section>
			<section className="cards" id="sec-2">
				<div className="container">
					<div className="row card-gro">
						<div className="card">
							<img src={card1} class="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">بناء الجسم المثالي</h4>
							</div>
						</div>
						<div className="card">
							<img src={card2} class="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">أفضل تدريب</h4>
							</div>
						</div>
						<div className="card">
							<img src={card3} class="card-img-top" alt="..." />
							<div className="card-body">
								<h4 className="card-title">الخبرة الحقيقية</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="our-classes" id="sec-3">
				<div className="container">
					<div className="row">
						<div className="cards col-7">
							{activity.map((act) => (
								<div className="card col-3">
									<h5 className="">{act.title}</h5>
									<h5 className="num">{act.price}</h5>
								</div>
							))}
						</div>

						<div className="col-5">
							<img src={img3} alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="galliry" id="sec-4">
				<div className="img col-6">
					<img src={img5} alt="" />
				</div>
				<div className="img col-6">
					<img src={img6} alt="" />
				</div>
				<div className="img col-6">
					<img src={img7} alt="" />
				</div>
				<div className="img col-6">
					<img src={img8} alt="" />
				</div>
			</section>
			<section className="membership" id="sec-5">
				<div className="cont col-11">
					<div class="card col-3">
						{membership.map((memp) => (
							<div class="card-body">
								<h4 class="card-title">{memp.title}</h4>
								<h2 class="card-title">{memp.salary}</h2>
								<h5 class="card-info">{memp.ndays}</h5>
								<h5 class="card-info">{memp.traning}</h5>
								<h5 class="card-info">{memp.holdingnum}</h5>
								<h5 class="card-info">{memp.holdingdays}</h5>

								<Link to="#" class="btn">
									اشتري الان
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
