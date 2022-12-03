import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { message, Space, Dropdown, Menu, Modal } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

const { confirm } = Modal;

class GetPromo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotions: [],
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
                axios.post(`http://localhost:9008/api/v1/delete/promotion`, data)
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

        axios.post('http://localhost:9008/api/v1/promotions', params)
            .then(response => {
                const promotions = response.data.promos;
                const updatedPromos = promotions.map(promo => {
                    return {
                        ...promo
                    }
                });

                this.setState({promotions: updatedPromos});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.promotions.map((promo, index) => {
            return (
                <Card title={promo.title} isOption>
                    <Row>
                        <Col span={12}>
                            <p>ID : {promo.ID}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Event Start Date : {promo.eventsdate}</p>
                        </Col>
                        <Col span={24}>
                            <p>Event End Date : {promo.eventedate}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Event Time : {promo.eventtime}</p>
                        </Col>
                        <Col span={24}>
                            <p>Event Place : {promo.place}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(promo.description)}
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
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.promotions)}</Menu>}>
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

export default GetPromo;