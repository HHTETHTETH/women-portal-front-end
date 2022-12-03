import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, message, Space, Dropdown, Menu, Modal } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player/lazy';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

const { confirm } = Modal;

class GetDiy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diys: [],
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
                axios.post(`http://localhost:9008/api/v1/delete/diy`, data)
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

        axios.post('http://localhost:9008/api/v1/diys', params)
            .then(response => {
                const diys = response.data.diys;
                const updatedDiys = diys.map(diy => {
                    return {
                        ...diy
                    }
                });

                this.setState({diys: updatedDiys});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.diys.map((diy, index) => {
            //console.log("diy :: ", diy);
            const date = diy.date.split("G");
            return (
                <Card title={diy.title} isOption>
                    <Row>
                        <ReactPlayer 
                            url={diy.video}
                            width='300px'
                            height='250px'
                            controls
                        />
                    </Row>
                    <br />
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '100px',
                                    height: '70px'
                                }}
                                src={diy.img}
                            />
                        </Col>
                        <Col span={24}>
                            <p>ID : {diy.ID}</p>
                            <p>Date : {date[0]}</p>
                            <p>Author : {diy.author}</p>
                            <p>Requirements : {diy.requirements}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(diy.description)}
                    </p>
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.diys)}</Menu>}>
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

function MenuItem(items) {

    if (items !== null){
        return items.map((item, index) => {
            return (
                <>
                    <Menu.Item key={item.ID} icon={<DeleteTwoTone />}>
                      {item.title}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetDiy;