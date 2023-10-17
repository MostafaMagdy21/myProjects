import ActivityPage from "./Activities/ActivityPage";
import BlockListPage from "./BlockList/BlockListPage";
import DailyClientPage from "./DailyClient/DailyClientPage";
import DepositePage from "./Deposite/DepositePage";
import LoginPage from "./LoginPage/LoginPage";
import MembershipsPage from "./Memberships/MembershipsPage";
import MoneyBoxPage from "./MoneyBox/MoneyBoxPage";
import ReportFromMoneyBoxPage from "./ReportFromMoneyBox/ReportFromMoneyBoxPage";
import SubscribedClientPage from "./SubscribedClient/SubscribedClientPage";
import UsersPage from "./UsersPage/UsersPage";
import WithdrowPage from "./WithdrowPage/WithdrowPage";
import HomePage from "./HomePage/HomePage";
import AddUserPage from "./UsersPage/AddUserPage";
import ProfilePage from "./ProfilePage/ProfilePage";

const Pages = {
	LoginPage: LoginPage,
	HomePage: HomePage,
	UsersPage: UsersPage,
	AddUserPage: AddUserPage,
	DailyClientPage: DailyClientPage,
	SubscribedClient: SubscribedClientPage,
	ActivityPage: ActivityPage,
	MembershipsPage: MembershipsPage,
	MoneyBoxPage: MoneyBoxPage,
	DepositePage: DepositePage,
	WithdrowPage: WithdrowPage,
	ReportFromMoneyBox: ReportFromMoneyBoxPage,
	BlockPage: BlockListPage,
	ProfilePage: ProfilePage,
};

export default Pages;
