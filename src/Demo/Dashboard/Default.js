import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class Dashboard extends React.Component {
    render() {

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={9}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Khint-Kabar</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h5 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-anchor text-c-green f-30 m-r-5"/> Welcome to Khint-Kabar Panel</h5>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '60%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;