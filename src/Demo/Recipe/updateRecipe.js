import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForUpdateRecipe from "./updateApi";
import FieldArraysForm from "./updateForm";

class UpdateRecipe extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Update Recipe</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForUpdateRecipe} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateRecipe;