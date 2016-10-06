import React from 'react';
import { Link } from 'react-router';

export default class Terms extends React.Component {
  
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
          	<h3>Terms of Use</h3>
          	<p>
          		Welcome to the Urban Outfitters, Inc. (collectively with its affiliates and subsidiaries, “URBN”) site (this "Site"). We provide this Site as a service to our customers, employees, investors and the public. Please review the following terms and conditions that govern your use of our Site (this “Agreement”). Please note that your use of the Site constitutes your agreement to follow and be bound by these terms. If you do not agree to these terms, please do not use this Site.
				      Although you may “bookmark” a particular portion of this Site and thereby bypass this Agreement, your use still binds you to the terms. We reserve the right to update or modify these terms at any time without prior notice. Your use of the Site following any such changes constitutes your agreement to follow and be bound by the terms as changed. For this reason, we encourage you to review these terms whenever you use this Site. 
      			</p>
      			<h4>Termination</h4>
      			<p>
      			  URBN reserves the right at any time to terminate your use of this Site if you fail to comply in full with any term of this Agreement, or any other terms, agreements, or policies that apply to this Site and the use of it. URBN also reserves the right to discontinue this Site at any time for any reason. The provisions relating to Copyrights, Trademark, and Miscellaneous, shall survive any termination.
      			</p>
      			<h4>Termination</h4>
      			<p>
      			  URBN reserves the right at any time to terminate your use of this Site if you fail to comply in full with any term of this Agreement, or any other terms, agreements, or policies that apply to this Site and the use of it. URBN also reserves the right to discontinue this Site at any time for any reason. The provisions relating to Copyrights, Trademark, and Miscellaneous, shall survive any termination.
      			</p>
      			<h4>Termination</h4>
      			<p>
      			  URBN reserves the right at any time to terminate your use of this Site if you fail to comply in full with any term of this Agreement, or any other terms, agreements, or policies that apply to this Site and the use of it. URBN also reserves the right to discontinue this Site at any time for any reason. The provisions relating to Copyrights, Trademark, and Miscellaneous, shall survive any termination.
      			</p>
          </div>
        </div>
      </div>
    )
  }
  
}