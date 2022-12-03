import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForCreateFashion from "./createApi";
import FieldArraysForm from "./createForm";

class CreateFashion extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Fashion</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForCreateFashion} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateFashion;