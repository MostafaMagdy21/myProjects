import React from 'react';
import Footer from '../../component/Footer';
import './RegisterPage.scss';

class RegesterPage extends React.Component{

    state = {
        Users:{
            username: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },

        errors: {}

    }

    onChangeHandler = (e) =>{
        console.log(e.target.id);
        let {Users} = this.state;

        Users[e.target.id] = e.target.value;

        this.setState({
            Users
        })
    }

    getDataFromApi = async (e) =>{
        e.preventDefault();
        //validation

        const errors  = {};
        let invalid = false;
        if(!this.state.Users.username){
            errors.username = ['username is required'];
            invalid = true;
        }
        if(!this.state.Users.email){
            errors.email = ['email is required'];
            invalid = true;
        }
        if(!this.state.Users.password){
            errors.password = ['password is required'];
            invalid = true;
        }
        if(this.state.Users.password){
            if(this.state.Users.password.length < 8){
                errors.password = ['password shold be more than 7 chare'];
                invalid = true;
            }
        }
        if(!this.state.Users.rePassword){
            errors.rePassword = ['repassword is required'];
            invalid = true;
        }
        if(this.state.Users.rePassword && this.state.Users.password){
            if(this.state.Users.rePassword !== this.state.Users.password){
                errors.rePassword = ['password and repassword shold be match'];
                invalid = true;
            }
        }
        if(!this.state.Users.phone){
            errors.phone = ['phone is required'];
            invalid = true;
        }
        console.log(errors)


        if(invalid){
            this.setState({
                errors
            })
        }

        //call Api
        // const myHeader = new Headers();
        // myHeader.append("Accept", "application/json");
        // myHeader.append("Content-Type", "application/json");
        
        // const options = {
        //     method: "POST",
        //     // Headers: myHeader,
        //     Headers:{
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(this.state.Users),
        //     redirect: "follow"
        // }

        // const res = await fetch('https://learning-test.ide-academy.org/api/register', options);
        // const data = res.json();

        // console.log(data);
    }



    render(){
        return(
            <section className="regesterPage">
                <div className="container">

                    <form onSubmit={this.getDataFromApi}>
                        <div className="form-group">
                            <label htmlFor="username">*User Name</label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.onChangeHandler}
                                id="username" 
                                className={`form-control ${this.state.errors.username && 'error'}`} />
                            
                            {this.state.errors.username && this.state.errors.username
                            .map(error =><span className="username">{error}</span>)}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="e-mail">*Email</label>
                            <input type="email" 
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                id="email" 
                                className={`form-control ${this.state.errors.email && 'error'}`} />

                            {this.state.errors.email && this.state.errors.email
                            .map(error =><span className="username">{error}</span>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">*Password</label>
                            <input type="password" 
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                id="password" 
                                className={`form-control ${this.state.errors.password && 'error'}`} />

                            {this.state.errors.password && this.state.errors.password
                            .map(error =><span className="username">{error}</span>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="rePassword">*Re Password</label>
                            <input type="password" 
                                value={this.state.rePassword}
                                onChange={this.onChangeHandler}
                                id="rePassword" 
                                className={`form-control ${this.state.errors.rePassword && 'error'}`} />

                                {this.state.errors.rePassword && this.state.errors.rePassword
                                .map(error =><span className="username">{error}</span>)}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">*Phone</label>
                            <input type="number" 
                                value={this.state.phone}
                                onChange={this.onChangeHandler}
                                id="phone" 
                                className={`form-control ${this.state.errors.phone && 'error'}`} />

                                {this.state.errors.phone && this.state.errors.phone
                                .map(error =><span className="username">{error}</span>)}
                        </div>

                        <div className="text-center">
                            <button className="regester btn btn-primary">Regester</button>
                        </div>
                    </form>
                    
                </div>
                <section className="footer">
                    <Footer />
                </section>
            </section>
        )
    }
}

export default RegesterPage ;