import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, DatePicker, Button, message } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import moment from 'moment';

import Aux from '../../hoc/_Aux';
import '../Component/design.css';
import { getBase64, disabledDate, disabledDateTime } from "../Component/functions";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class CreateDiy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: '',
            video: '',
            title: '',
            author: '',
            date: '',
            requirement: '',
            requirements: [],
            description: '',
            posttime: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }
   
    handleChange(description, editor) {
        this.setState({ description });
    }

    imageFileHandler = (event) => {
        const file = event.target.files[0];
        console.log("file :: ", file, typeof(file));
        getBase64(file).then(base64 => {
            this.setState({
                img : base64
            })
        });
    }

    // videoFileHandler = (event) => {
    //     const file = event.target.files[0];
    //     console.log("file video :: ", file, typeof(file));
    //     this.setState({
    //         video : file
    //     });
    //     // getBase64(file).then(base64 => {
    //     //     this.setState({
    //     //         video : base64
    //     //     })
    //     // });
    // }

    onChange = (value, dateString) => {
        this.setState({
            date : dateString
        })
    }
    
    postDataHandler = () => {
        const data = {
            img: this.state.img,
            video: this.state.video,
            title: this.state.title,
            author: this.state.author,
            date: this.state.date.toString(),
            requirements: this.state.requirement.split(','),
            description: this.state.description,
        };
        //console.log("data :: ", data.video, typeof(data.video));
        axios.post(`http://localhost:9008/api/v1/add/diy`, data)
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
                    <Card.Header>Create DIY</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
                            <Form.Item 
                                name="img" 
                                label="Image : " 
                                rules={[{ required: true, message: 'Missing Image' }]}
                            >
                                <Input type="file" onChange={this.imageFileHandler} />
                            </Form.Item>
                            <Form.Item 
                                name="video" 
                                label="Video : " 
                                rules={[{ required: true, message: 'Missing Video' }]}
                            >
                                {/* <Input type="file" onChange={this.videoFileHandler} /> */}
                                <Input placeholder="Enter Video Play Link" value={this.state.video} onChange={(event) => this.setState({video: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="title" 
                                label="Title : " 
                                rules={[{ required: true, message: 'Missing Title Name' }]}
                            >
                                <Input placeholder="Enter Title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="author" 
                                label="Author : " 
                                rules={[{ required: true, message: 'Missing Author Name' }]}
                            >
                                <Input placeholder="Enter Author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="date" 
                                label="Date : " 
                                rules={[{ required: true, message: 'Missing Date' }]}
                            >
                                <DatePicker
                                    className="date-picker"
                                    format="YYYY-MM-DD HH:mm:ss"
                                    disabledDate={disabledDate}
                                    disabledTime={disabledDateTime}
                                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                                    value={this.state.date}
                                    onChange={this.onChange}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Requirements : "
                                name="requirement"
                                rules={[{ required: true, message: 'Missing Requirements!' }]}
                            >
                                <Input placeholder="Separate Requirements With Commas(',') Please" value={this.state.requirement} onChange={(event) => this.setState({requirement: event.target.value})} />
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
                                    Add Diy
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateDiy;
