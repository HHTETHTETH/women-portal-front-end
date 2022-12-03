import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForUpdateFashion from "./updateApi";
import FieldArraysForm from "./updateForm";

class UpdateFashion extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Fashion</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForUpdateFashion} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateFashion;