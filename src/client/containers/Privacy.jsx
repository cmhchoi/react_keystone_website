import React from 'react';
import { Link } from 'react-router';

export default class Privacy extends React.Component {
  
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <ol className="breadcrumb">
              <li><Link className="grey underline" to={{pathname: "/"}}>Home</Link></li>
              <li className="active">Terms of Use</li>
            </ol>
          </div>
          <div className="col-xs-12 text-body">
          	<h3>Privacy Policy</h3>
          	<p>
          		The privacy policy (“Policy”) below governs your use of URBN.com, the Urban Outfitters Inc. corporate website. To review the privacy policies that apply to customers of the URBN brands, please click on the following links:
              At Urban Outfitters Inc., we respect the privacy of all visitors who access and use our corporate website. The information we collect on this site is used to understand how we can enhance our site and improve your experience. This policy describes the circumstances in which we collect personal information, why we collect it and how we use it. Our policy also describes the choices you can make about how we collect and use your information. This policy is for URBN.com only and does not apply to the urbanoutfitters.com, anthropologie.com, freepeople.com or any other brand sites. You can visit any of those sites to read about their specific privacy policies.
              If our information practices change in the future, we will post an updated policy on this website. Any changes made will be posted here, and will be effective upon posting.
              If you have any questions about our privacy policy, please contact us at PR@URBN.com or write to us at Urban Outfitters Inc., Attn: Corporate Website, 5000 South Broad Street, Philadelphia, PA 19112-1495, URBN Urban Outfitters Inc.
      			</p>
            <h4>Types of Information Collected</h4>
            <p>We may collect personal information from you, such as your name, email address, postal address, phone number, etc., when you visit our website, apply for a job, or contact us with a question or concern.</p>
          </div>
        </div>
      </div>
    )
  }
  
}