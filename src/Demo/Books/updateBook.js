import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, DatePicker, Button, message } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

import Aux from '../../hoc/_Aux';
import '../Component/design.css';
import { getBase64 } from "../Component/functions";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class UpdateBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            author: '',
            cover: '',
            release: '',
            description: '',
            posttime:'',
        };
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(description, editor) {
        this.setState({ description });
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            //console.log("file stored :: ", typeof(base64) );
            this.setState({
                cover : base64
            })
        });
    }

    onChange = (value, dateString) => {
        this.setState({
            release : dateString
        })
    }
    
    postDataHandler = () => {
        const data = {
            id: this.state.id,
            name: this.state.name,
            author: this.state.author,
            cover: this.state.cover,
            release: this.state.release,
            description: this.state.description,
        };
        //console.log("data :: ", data);
        axios.post(`http://localhost:9008/api/v1/update/book`, data)
            .then(response => {
                if (response.data.status === 200){
                    message.success({
                        content: 'Successfully updated!',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                    }, 10);
                    window.location.reload();
                }else {
                    message.error({
                        content: 'Something Wrong! Please check your input data.',
                        className: 'custom-class',
                        style: {
                          marginTop: '20vh',
                        },
                    }, 10);
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
                    <Card.Header>Update Book</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
                            <Form.Item 
                                name="id" 
                                label="Book ID : " 
                                rules={[{ required: true, message: 'Missing Book ID' }]}
                            >
                                <Input placeholder="Enter Book ID" value={this.state.id} onChange={(event) => this.setState({id: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="name" 
                                label="Book Name : " 
                                rules={[{ required: true, message: 'Missing Book Name' }]}
                            >
                                <Input placeholder="Enter Book Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="author" 
                                label="Author : " 
                                rules={[{ required: true, message: 'Missing Author Name' }]}
                            >
                                <Input placeholder="Enter Author Name" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="cover" 
                                label="Cover Photo : " 
                                rules={[{ required: true, message: 'Missing Book Cover' }]}
                            >
                                <Input placeholder="Enter Cover Photo" type="file" onChange={this.fileChangedHandler} />
                            </Form.Item>
                            <Form.Item 
                                name="release" 
                                label="Release Date : " 
                                rules={[{ required: true, message: 'Missing Release Date' }]}
                            >
                                <DatePicker className="date-picker" placeholder="Enter Release Date" value={this.state.release} onChange={this.onChange} />
                            </Form.Item>
                            <Form.Item 
                                name="description" 
                                label="Description : " 
                                rules={[{ required: true, message: 'Missing Description' }]}
                            >
                                <Editor
                                    className="mce-notification"
                                    init={{
                                        branding: false,
                                        height: 200,
                                        toolbar:
                                            "bold italic underline strikethrough | forecolor backcolor blockquote | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                                    }}
                                    value={this.state.description}
                                    onEditorChange={this.handleChange}
                                />
                            </Form.Item>
                            <Form.Item className="Login">
                                <Button type="primary" htmlType="submit" onClick={this.postDataHandler}>
                                    Update Book
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateBook;
