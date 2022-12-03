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

class UpdateSong extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            sId: '',
            sName: '',
            sPhoto: '',
            album: '',
            image: '',
            mp3: '',
            posttime: '',
            singer:{}
        };
    }
   
    imageFileHandler = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            this.setState({
                image : base64
            })
        });
    }

    singerImageFileHandler = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            this.setState({
                sPhoto : base64
            })
        });
    }

    mp3FileHandler = (event) => {
        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            this.setState({
                mp3 : base64
            })
        });
    }

    postDataHandler = () => {
        const data = {
            id: this.state.id,
            name: this.state.name,
            singer: {
                id: this.state.sId,
                name: this.state.sName,
                photo: this.state.sPhoto
            },
            album: this.state.album,
            image: this.state.image,
            mp3: this.state.mp3
        };
        //console.log("data :: ", data)
        axios.post(`http://localhost:9008/api/v1/update/songs`, data)
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
                    <Card.Header>Update Song</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
                            <Form.Item
                                label="Song ID : "
                                name="id"
                                rules={[{ required: true, message: 'Missing Song ID!' }]}
                            >
                                <Input placeholder="Enter Song ID" value={this.state.id} onChange={(event) => this.setState({id: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Song Name : "
                                name="name"
                                rules={[{ required: true, message: 'Missing Song Name!' }]}
                            >
                                <Input placeholder="Enter Song Name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Singer ID : "
                                name="sId"
                                rules={[{ required: true, message: 'Missing Singer ID!' }]}
                            >
                                <Input placeholder="Enter Singer ID" value={this.state.sId} onChange={(event) => this.setState({sId: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Singer Name : "
                                name="sName"
                                rules={[{ required: true, message: 'Missing Singer Name!' }]}
                            >
                                <Input placeholder="Enter Singer Name" value={this.state.sName} onChange={(event) => this.setState({sName: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Singer Photo : "
                                name="sPhoto"
                                rules={[{ required: true, message: 'Missing Singer Photo!' }]}
                            >
                                <Input type="file" onChange={this.singerImageFileHandler} />
                            </Form.Item>
                            <Form.Item
                                label="Album Name : "
                                name="album"
                                rules={[{ required: true, message: 'Missing Album Name!' }]}
                            >
                                <Input placeholder="Enter Album Name" value={this.state.album} onChange={(event) => this.setState({album: event.target.value})} />
                            </Form.Item>
                            <Form.Item
                                label="Album Image : "
                                name="image"
                                rules={[{ required: true, message: 'Missing Album Image!' }]}
                            >
                                <Input type="file" onChange={this.imageFileHandler} />
                            </Form.Item>
                            <Form.Item
                                {...layout}
                                label="Mp3 : "
                                name="mp3"
                                rules={[{ required: true, message: 'Please input Mp3!' }]}
                            >
                                <Input type="file" onChange={this.mp3FileHandler} />
                            </Form.Item>
                            <Form.Item className="Login">
                                <Button type="primary" htmlType="submit" onClick={this.postDataHandler}>
                                    Update Song
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateSong;
