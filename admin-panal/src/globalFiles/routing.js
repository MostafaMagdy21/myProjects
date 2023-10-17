import React from "react";
import Pages from "../pages/indix";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
	<Routes>
		<Route path="/login" exact element={<Pages.LoginPage />} />
		<Route path="/" exact element={<Pages.HomePage />} />
		<Route path="/statistics" exact element={<Pages.StatisticsPage />} />
		<Route path="/users" exact element={<Pages.UsersPage />} />
		<Route path="/users/add-user" exact element={<Pages.AddUserPage />} />
		<Route
			path="/clients/daily-client"
			exact
			element={<Pages.DailyClientPage />}
		/>
		<Route
			path="/clients/subscribed-client"
			exact
			element={<Pages.SubscribedClient />}
		/>
		<Route path="/activity" exact element={<Pages.ActivityPage />} />
		<Route path="/memberships" exact element={<Pages.MembershipsPage />} />
		<Route
			path="/money-box/report-money-box"
			exact
			element={<Pages.ReportFromMoneyBox />}
		/>
		<Route path="/money-box/deposite" exact element={<Pages.DepositePage />} />
		<Route path="/money-box/withdrow" exact element={<Pages.WithdrowPage />} />
		<Route path="/block-list" exact element={<Pages.BlockPage />} />
		<Route path="/profile" exact element={<Pages.ProfilePage />} />
	</Routes>
);

export default Router;
