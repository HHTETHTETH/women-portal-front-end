import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForCreateInspire from "./createApi";
import FieldArraysForm from "./createForm";

class CreateInspire extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Inspire</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForCreateInspire} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateInspire;