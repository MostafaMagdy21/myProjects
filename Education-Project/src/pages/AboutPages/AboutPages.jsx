import React from 'react';
import Footer from '../../component/Footer';


class AboutPages extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>Hellow from About Page</h1>
                <section className='footer'>
                    <Footer />
                </section>
            </React.Fragment>
        )
    }
}

export default AboutPages ;