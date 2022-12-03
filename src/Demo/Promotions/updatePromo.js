import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, DatePicker, Button, message, TimePicker } from 'antd';
import { Editor } from '@tinymce/tinymce-react';

import Aux from '../../hoc/_Aux';
import '../Component/design.css';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class UpdatePromo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            eventsdate: '',
            eventedate: '',
            eventtime: '',
            place: '',
            posttime: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.onChangeStart = this.onChangeStart.bind(this)
        this.onChangeEnd = this.onChangeEnd.bind(this)
        this.onChangeEvent = this.onChangeEvent.bind(this)
    }
   
    handleChange(description, editor) {
        this.setState({ description });
    }
    onChangeStart(date, dateString) {
        this.setState({eventsdate:dateString})
    }
    onChangeEnd(date, dateString) {
        this.setState({eventedate:dateString})
    }
    onChangeEvent(time, timeString) {
        this.setState({eventtime:timeString.toString()})
    }

    postDataHandler = () => {
        const data = {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            eventsdate: this.state.eventsdate.toString(),
            eventedate: this.state.eventedate.toString(),
            eventtime: this.state.eventtime.toString(),
            place: this.state.place,
        };
        //console.log("data :: ", data)
        axios.post(`http://localhost:9008/api/v1/update/promotion`, data)
            .then(response => {
                if (response.data.status === 200){
                    message.success({
                        content: 'Successfully updated!',
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
                    <Card.Header>Update Promotion</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
                            <Form.Item 
                                name="id" 
                                label="Promo ID : " 
                                rules={[{ required: true, message: 'Missing Promo ID' }]}
                            >
                                <Input placeholder="Enter Promo ID" value={this.state.id} onChange={(event) => this.setState({id: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="title" 
                                label="Title : " 
                                rules={[{ required: true, message: 'Missing Title' }]}
                            >
                                <Input placeholder="Enter Title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                            </Form.Item>
                            <Form.Item 
                                name="eventsdate" 
                                label="Event Start Date : " 
                                rules={[{ required: true, message: 'Missing Event Start Date' }]}
                            >
                                <DatePicker
                                    className="date-picker"
                                    placeholder="Enter Event Start Date"
                                    value={this.state.eventsdate}
                                    onChange={this.onChangeStart}
                                />
                            </Form.Item>
                            <Form.Item 
                                name="eventedate" 
                                label="Event End Date : " 
                                rules={[{ required: true, message: 'Missing Event End Date' }]}
                            >
                                <DatePicker
                                    className="date-picker"
                                    placeholder="Enter Event End Date"
                                    value={this.state.eventedate}
                                    onChange={this.onChangeEnd}
                                />
                            </Form.Item>
                            <Form.Item 
                                name="eventtime" 
                                label="Event Time : " 
                                rules={[{ required: true, message: 'Missing Event Time' }]}
                            >
                                <TimePicker.RangePicker
                                    className="date-picker"
                                    value={this.state.eventtime}
                                    onChange={this.onChangeEvent}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Promotion Place : "
                                name="place"
                                rules={[{ required: true, message: 'Missing Promotion Place!' }]}
                            >
                                <Input placeholder="Enter Promotion Place" value={this.state.place} onChange={(event) => this.setState({place: event.target.value})} />
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
                                    Update Promo
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdatePromo;
