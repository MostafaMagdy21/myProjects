import React, {Component} from 'react';
import './HomePage.scss';
import '../../config/config';
import TechCards from '../../component/techCard';
import Footer from '../../component/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class HomePage extends Component{

    state= {
        data: []
    }


    async componentDidMount(){
        const response = await fetch(global.config.base_url);
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        this.setState({
            data
        })
    }

    

    render(){
        return(
                <div className="home">
                    <section className="learn-programming">
                        <div className="container">
                            <div className="row  justify-content-end">
                                <div className="about col-6">
                                    <h1>LEARN PROGRAMMING</h1>
                                    <p>
                                        It is a long established fact that a reader 
                                        will be distracted by the readable content 
                                        of a page when looking at its layout
                                    </p>
                                    <button type="button" className="btn btn-primary">App Store</button>
                                    <button type="button" className="btn btn-outline-primary">PLAY STORE</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="tech-card">
                        <div className="container">
                            <div className="row">
                                <div className="col-one col-md-4">
                                    {this.state.data && this.state.data.map((tech, i)=>(
                                        i % 3 === 0 && <TechCards tech={tech} key={i}/>
                                        ))}
                                </div>

                                <div className="col-two col-md-4">
                                    {this.state.data && this.state.data.map((tech, i)=>(
                                        i % 3 === 1 && <TechCards  tech={tech} key={i}/>
                                        ))}
                                </div>

                                <div className="col-three col-md-4">
                                    {this.state.data && this.state.data.map((tech, i)=>(
                                        i % 3 === 2 && <TechCards  tech={tech} key={i}/>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="choose">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="Choose-Your-Path col-md-4">
                                    <h3>Choose Your Path</h3>
                                    <p>
                                        It is a long established fact that 
                                        a reader will be distracted by the 
                                        readable content of a page when looking at its layout
                                    </p>
                                    <div className="Path">
                                        <span className="Path-1">
                                            
                                        </span>
                                        <span className="Path-2">
                                            
                                        </span>
                                    </div>
                                </div>

                                <div className="Rectangle-4 col-md-4">
                                    <h3>iOS App Development</h3>
                                </div>

                                <div className="Rectangle-4-copy col-md-3">
                                    <h3>Android App Development</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                
                    <section className="Color-Fill-1">
                        <div className="container">
                            <div className="row">
                                <div className="Subscribe col-md-6">
                                    <h5>Subscribe Newsletter</h5>
                                    <h3>STAY UP TO DATE</h3>
                                </div>

                                <div className="email col-md-4">
                                    <input type="email" value="Email"/>
                                </div>

                                <div className="button col-md-2">
                                    <button type="button" className="btn btn-warning">NEXT</button>
                                </div>
                            </div>
                        </div>
                    </section>
            
                    <section className="info">
                        <div className="container">
                            <div className="row">
                                <div className="blue col-md-5">
                                    <h3 className="About-our-experience">
                                        About our experience so far
                                    </h3>

                                    <div className="blue-box">
                                        <h3>Already Five year in Education</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>

                                    <Link className="more" to="/about">MORE</Link>
                                </div>

                                <div className="yellow col-md-5">
                                    <div className="line"></div>
                                    <p className="Lorem-Ipsum">
                                        Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been 
                                        the industry's standard dummy text ever since.
                                    </p>
                                    <div className="blue-box">
                                        <div className="yellow-box">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="Rectangle">
                        <div className="container">
                            <div className="row">
                                
                                <div className="Color-Fill"></div>

                                <div className="arrow">
                                    <Link to="#">
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </Link>
                                    <h3><i className="fas fa-people-arrows"></i>CEO FOUNDER</h3>
                                </div>

                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section className="footer">
                        <Footer />
                    </section>

                </div>
        )
    }
}

export default HomePage ;