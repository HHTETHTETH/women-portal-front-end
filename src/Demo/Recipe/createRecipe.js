import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForCreateRecipe from "./createApi";
import FieldArraysForm from "./createForm";

class CreateRecipe extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Recipe</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForCreateRecipe} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateRecipe;