import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForUpdateInspire from "./updateApi";
import FieldArraysForm from "./updateForm";

class UpdateInspire extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Inspire</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForUpdateInspire} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateInspire;