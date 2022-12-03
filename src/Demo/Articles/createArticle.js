import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForCreateArticle from "./createApi";
import FieldArraysForm from "./createForm";

class CreateArticle extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Article</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForCreateArticle} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateArticle;