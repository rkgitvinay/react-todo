import React, {Component} from 'react';
import './Footer.css';
class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
			    <div className="row footer-top">
			        <div className="col-sm-4 text-center">
			            <h4 className="ft-text-title">Media Name</h4>
			            <h6 className="ft-desp">Company Name 
			                Country Name
			            </h6>
			            <h4 className="details">
			                <a className="contact" href="tel:+977-1-4107223">
			                    <i className="fa fa-phone" aria-hidden="true"></i> +977-000000</a>
			                </h4>
			            </div>
			            <div className="col-sm-4 text-center border-left">
			                <h4 className="ft-text-title">Our Team</h4>
			                <div className="address-member">
			                    <p className="member">
			                        <b>Director</b> : 
			                    </p>
			                    <p className="member">
			                        <b>Editor</b> : 
			                    </p>			                    
			               </div>
			           </div>
			           <div className="col-sm-4 col-xs-12 text-center border-left">
			            <h4 className="ft-text-title">About</h4>
			            <div className="pspt-dtls">
			                <a href="#" className="about">About</a>
			                <a href="#" className="team">Team</a>
			                <a href="#" className="advertise">Advertise</a>
			                <br /><br /><br /><br /><br /><br /><br />
			            </div>
			        </div>
			    </div>
				<div className="row ft-copyright pt-2 pb-2">
					<div className="col-sm-4 text-pp-crt">cpoyright 2018 All  Rights Reserved</div>
					<div className="col-sm-4 text-pp-crt-rg">Department of Information Reg No :</div>
					<div className="col-sm-4 developer">
						<a href="https://topline-tech.com" target="_blank" className="text-pp-crt">By : <b>T</b>op<b>L</b>ine</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;