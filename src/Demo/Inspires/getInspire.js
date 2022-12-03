import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, message, Space, Dropdown, Menu, Modal, Divider } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
//import { param } from 'jquery';

const { confirm } = Modal;

class GetInspire extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inspires: [],
        }
    }

    handleMenuClick({key}) {
        const data = {
            id: key,
        }

        confirm({
            title: 'Delete this topic?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
                axios.post(`http://localhost:9008/api/v1/delete/inspire`, data)
                    .then(response => {
                        console.log(response.data.status);
                        if (response.data.status === 200){
                            message.success({
                                content: 'Successfully deleted!',
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
                            });
                        }
                    })
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        var params = {
            'token': token
        }
        //console.log("params ::: ", params)

        axios.post('http://localhost:9008/api/v1/inspires', params)
            .then(response => {
                const inspires = response.data.inspires;
                const updatedInspires = inspires.map(inspire => {
                    return {
                        ...inspire
                    }
                });

                this.setState({inspires: updatedInspires});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.inspires.map((inspire, index) => {
            const date = inspire.date.split("T")
            return (
                <Card title={inspire.name} isOption>
                    <Row>
                        <Col span={12}>
                            <p>ID : {inspire.ID}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Skills : {inspire.skills}</p>
                        </Col>
                        <Col span={24}>
                            <p>Profile : {inspire.profile}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Area : {inspire.area}</p>
                        </Col>
                        <Col span={24}>
                            <p>Date : {date[0]}</p>
                        </Col>
                    </Row>
                    <Divider/>

                    <p className="site-description-item-profile-p">Images</p>
                    {Images(inspire.images)}
                    <Divider />

                    <p className="site-description-item-profile-p">History</p>
                    {Histories(inspire.history)}
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.inspires)}</Menu>}>
                            Choose the topic that you want to delete!
                        </Dropdown.Button>
                    </Space>
                </Row>
                <br />
                <Row>
                    <Col>
                        {this.renderTableData()}
                    </Col>
                </Row>
            </Aux>
        );
    }
}

function Images(images) {

    if (images !== null){
        return images.map((image, index) => {
            return (
                <>
                    <Image
                        style={{
                            width: '200px',
                            height: '200px'
                        }}
                        src={image.src}
                    />
                </>
            );
        })
    }
}

function Histories(histories) {

    if (histories !== null){
        return histories.map((history, index) => {
            return (
                <p>
                    <p className="site-description-item-profile-p">History #{index + 1}</p>
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '150px',
                                    height: '100px'
                                }}
                                src={history.imageUrl}
                            />
                        </Col>
                        <Col span={24}>
                            <p>Text : {history.text}</p>
                            <p>Title : {history.title}</p>
                        </Col>
                    </Row>
                </p>
            );
        })
    }
}

function MenuItem(items) {

    if (items !== null){
        return items.map((item, index) => {
            return (
                <>
                    <Menu.Item key={item.ID} icon={<DeleteTwoTone />}>
                      {item.name}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetInspire;