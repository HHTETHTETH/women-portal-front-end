import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, message, Space, Dropdown, Menu, Modal, Divider } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';
import "react-bnb-gallery/dist/style.css";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

const { confirm } = Modal;

class GetFashion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fashions: [],
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
                axios.post(`http://localhost:9008/api/v1/delete/fashion`, data)
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
        axios.post('http://localhost:9008/api/v1/fashions')
            .then(response => {
                const fashions = response.data.fashions;
                const updatedFashions = fashions.map(fashion => {
                    return {
                        ...fashion
                    }
                });

                this.setState({fashions: updatedFashions});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.fashions.map((fashion, index) => {            
            const date = fashion.date.split("T")            
            return (
                <Card title={fashion.album} isOption>
                    <Row>
                        <Col span={12}>
                            <p>ID : {fashion.ID}</p>
                        </Col>
                        <Col span={24}>
                            <p>Date : {date[0]}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(fashion.description)}
                    </p>
                    <Divider/>

                    <p className="site-description-item-profile-p">Gallery</p>
                    {Gallery(fashion.gallery)}
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.fashions)}</Menu>}>
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

function GalleryPhotos(photos) {
    if (photos !== null){
        return photos.map((photo, index) => {
            return (
                <>
                    <Image
                        style={{
                            width: '200px',
                            height: '200px'
                        }}
                        src={photo.src}
                    />
                </>
            );
        })
    }
}

function Gallery(galleries) {
    if (galleries !== null){
        return galleries.map((gallery, index) => {
            return (
                <>
                    <Row>
                        <p>Stories : {gallery.stories}</p>
                    </Row>
                    <Row>
                        {GalleryPhotos(gallery.photos)}
                    </Row>
                </>
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
                      {item.album}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetFashion;
