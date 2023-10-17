import React from 'react';
import Footer from '../../component/Footer';
import './InviromentSetup.scss';


class InviromentSetup extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className="hellow">Hellow from Inviroment setup</h1>
                <section className="footer">
                    <Footer />
                </section>
            </React.Fragment>
        )
    }
}

export default InviromentSetup ;