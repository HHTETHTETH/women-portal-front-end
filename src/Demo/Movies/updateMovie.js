import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForUpdateMovie from "./updateApi";
import FieldArraysForm from "./updateForm";

class UpdateMovie extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Update Movie</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForUpdateMovie} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateMovie;