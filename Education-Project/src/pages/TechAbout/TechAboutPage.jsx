import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faChevronLeft,
    faChevronRight, faImages,
    faPencilRuler,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import './TechAboutPage.scss';
import {Link} from "react-router-dom";
import LessonCard from "../../component/LessonCard";
import Footer from '../../component/Footer';

class TechAboutPage extends Component {
    // state = {
    //     tech: {},
    //     techId: this.props.match.params.id
    // };

    // async componentDidMount() {

    //     const response = await fetch(`${global.config.api_endpoints.tech}/${this.state.techId}`);
    //     const res = await response.json();

    //     if (res.response.status === 200) {
    //         this.setState({
    //             tech: res.response.data
    //         });
    //         return;
    //     }

    //     if (res.response.code === 404) {
    //         // window.location.href = '/404';
    //         this.props.history.push("/404");
    //     }
    // }

    render() {
        return (
            <div className="about-page">
                <div className="container">

                    {/* <section className="php" style={{backgroundImage: `url(${this.state.tech.tech_logo})`}}>
                        <div className="container">
                            <h3 className="pt-5">All About {this.state.tech && this.state.tech.name} You Must know</h3>
                            <p className=" pt-4 par">{this.state.tech && this.state.tech.description}</p>
                        </div>
                    </section> */}

                    <section className="php">
                        <h3 className="pt-5">All About lesson You Must know</h3>
                        <p className=" pt-4 par">discribtion</p>
                    </section>

                    <section className="all">
                        <div className="container">
                            <div className="row row1 justify-content-center">
                                <div className="col card card1">
                                    {/* <Link to={`tech-env/${this.state.tech && this.state.tech.environment_setup}`}>
                                        <h5 className="pt-4">Environment</h5>
                                        <p>Install Your Environment</p>
                                    </Link> */}

                                    <Link to="/inviroment_setup">
                                        <h5 className="pt-4">Environment</h5>
                                        <p>Install Your Environment</p>
                                    </Link>
                                </div>
                                <div className="col card">
                                    <h5 className="pt-4">Videos</h5>
                                    <p>Technology Related Videos</p>
                                </div>
                                <div className="col card">
                                    <h5 className="pt-4">Overview</h5>
                                    <p>Language Oviewview</p>
                                </div>
                                <div className="col card">
                                    <h5 className="pt-4">Overview</h5>
                                    <p>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                    <section className=" why">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-7 text-left">
                                    <h2>Why Learn PHP In 2020!!</h2>
                                    <p>Supercharge your agent productivity and improve customer satisfaction
                                        by an average of 45% with our platform. We believe a company is only as good as
                                        the people behind it. We go
                                        on workation once a year why we give interns and employees responsibility from
                                        day one.
                                    </p>
                                </div>
                                <div className="col-3">
                                    <div className="d-flex info">
                                        <FontAwesomeIcon icon={faPencilRuler} className="icon mr-4"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <div className="d-flex info">
                                        <FontAwesomeIcon icon={faQuestionCircle} className="icon mr-4"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                    <div className="d-flex info">
                                        <FontAwesomeIcon icon={faImages} className="icon mr-4"/>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <div className="row justify-content-center lesson-row">
                        {this.state.tech.tutorial && this.state
                            .tech
                            .tutorial
                            .tutorial_sections
                            .map(tutorialSection => {
                                return (
                                    tutorialSection.lessons.map(lesson => (<LessonCard key={lesson.id} lesson={lesson}/>)
                                )
                            )})}
                    </div> */}

                    <section className="row justify-center lesson-row">
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                        <LessonCard />
                    </section>


                    <section className="test-btn-container w-100 text-center">
                        <button className="btn test-btn btn-warning">Test Your PHP Skills</button>
                    </section>

                    <section className="related-tech d-flex align-items-center">
                        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                        <div className="related-tech-img">
                            <img src="" alt="" className="w-100 h-100"/>
                        </div>
                        <div className="related-tech-content">
                            <h3>Related Tech</h3>
                            <h2>Laravel</h2>
                            <p>Supercharge your agent productivity and improve customer satisfaction by an average
                                of </p>
                        </div>
                    </section>

                    <div className="swap d-flex justify-content-between">
                        <FontAwesomeIcon icon={faChevronLeft} className="icon"/>
                        <ul className="d-flex justify-content-between">
                            <li>Aleana</li>
                            <li>Chavy</li>
                            <li>Fortune</li>
                            <li>Fortune</li>
                        </ul>
                        <FontAwesomeIcon icon={faChevronRight} className="icon"/>
                    </div>
                </div>

                <section className="footer">
                    <Footer />
                </section>

            </div>

        );
    }

}

export default TechAboutPage;