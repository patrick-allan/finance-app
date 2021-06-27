import React from 'react'
import Row from '../shared/layout/Row';
import Spacer from '../shared/layout/Spacer';

const Dashboard = props => {
    return (
        <React.Fragment>
            <Row xright>
                <h2>Dashboard</h2>
                <Spacer x={50}/>
            </Row>        
        </React.Fragment>
    )
}


export default Dashboard;