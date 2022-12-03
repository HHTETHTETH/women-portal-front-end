import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button, message } from 'antd';

import Aux from '../../hoc/_Aux';
import '../Component/design.css';
import { getBase64 } from "../Component/functions";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class CreateFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            iconphoto: ''
        };
    }
   
    imageFileHandler = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            this.setState({
                iconphoto : base64
            })
        });
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            iconphoto: this.state.iconphoto,
        };
        //console.log("data :: ", data)
        axios.post(`http://localhost:9008/api/v1/cook/newcategory`, data)
            .then(response => {
                if (response.data.status === 200){
                    message.success({
                        content: 'Successfully added!',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                    });
                    window.location.reload();
                }else {
                    message.error({
                        content: 'Something Wrong! Please check your input data.',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                    });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    };

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Food Category</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
                            <Form.Item 
                                name="name" 
                                label="Food Name : " 
                                rules={[{ required: true, message: 'Missing Food Name' }]}
                            >
                                <Input placeholder="Enter Food Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Icon Photo : "
                                name="iconphoto"
                                rules={[{ required: true, message: 'Missing Icon Photo!' }]}
                            >
                                <Input type="file" onChange={this.imageFileHandler} />
                            </Form.Item>
                            <Form.Item className="Login">
                                <Button type="primary" htmlType="submit" onClick={this.postDataHandler}>
                                    Add Category
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateFood;
