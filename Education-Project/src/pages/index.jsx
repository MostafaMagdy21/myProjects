import HomePage from './homePage/HomePage';
import AboutPages from './AboutPages/AboutPages';
import TechAboutPage from './TechAbout/TechAboutPage';
import RegesterPage from './contactUs/RegisterPage';
import InviromentSetup from './inviromentSetup/InviromentSetup';
import Error404 from './errors/404';
import StartLearn from './StartLearn/StartLearn';

export default {
    HomePage: HomePage,
    TechAboutPage: TechAboutPage,
    AboutPages: AboutPages,
    InviromentSetup: InviromentSetup,
    RegesterPage: RegesterPage,
    StartLearn: StartLearn,
    Errors: {
        E404: Error404
    }
};