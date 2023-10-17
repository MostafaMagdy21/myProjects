import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail, AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
	return (
		<div className="footer" id="sec-6">
			<div className="container">
				<div className="row">
					<div className="col-3 icon-1"></div>
					<div className="col-2 ather">
						<h2>اللغات</h2>
						<div>
							<span className="icon"></span>
							English
						</div>
						<div>
							<span className="icon"></span>
							عربي
						</div>
					</div>
					<div className="col-7 info">
						<h2>تواصل معنا</h2>
						<p>
							إذا كان لديك أي شكوى تريد إخبارنا بها ، فنحن جميعًا أذنين ومستعدون
							للمساعدة في تحسين الأمور بالنسبة لك ولباقي زملائنا الرياضيين.
						</p>
						<h6>
							أبراج بشائر الخير ، محطة الشهيد ، شبين الكوم ، المنوفية ، مصر.
							<span className="icon">
								<MdLocationOn />
							</span>
						</h6>
						<h6>
							<span>0482052527</span>
							<span className="icon">
								<BsFillTelephoneFill />
							</span>
						</h6>
						<h6>
							<span>sayedelashkar@outlook.com</span>
							<span className="icon">
								<AiTwotoneMail />
							</span>
						</h6>
						<div className="icons"></div>
						<div className="copy-write">
							Developed by
							<span className="icon">
								<AiOutlineCopyright />
							</span>
							<span className="cname">ATCompony</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
