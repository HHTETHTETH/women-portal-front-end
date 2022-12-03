import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, Divider, message, Space, Dropdown, Menu, Modal } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

const { confirm } = Modal;

class GetArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
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
                axios.post(`http://localhost:9008/api/v1/delete/article`, data)
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

        axios.post('http://localhost:9008/api/v1/articles', params)
            .then(response => {
                console.log("res :: ", response.data);
                const articles = response.data.articles;
                const updatedArticle = articles.map(article => {
                    return {
                        ...article
                    }
                });

                this.setState({articles: updatedArticle});
                console.log("art :: ", articles);
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.articles.map((article, index) => {
            const date = article.date.split("T")
            return (
                <Card title={article.title} isOption>
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '150px',
                                    height: '100px'
                                }}
                                src={article.image}
                            />
                        </Col>
                        <Col span={24}>
                            <p>ID : {article.ID}</p>
                            <p>Date : {date[0]}</p>
                            <p>Author : {article.author}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(article.description)}
                    </p>
                    <Divider />

                    <p className="site-description-item-profile-p">Categories</p>
                    {Categories(article.categories)}
                    <Divider />

                    <p className="site-description-item-profile-p">Count</p>
                    {Count(article.count)}
                    <Divider />

                    <p className="site-description-item-profile-p">Content</p>
                    {Contents(article.contents)}
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    {/* <Button icon={<EditTwoTone />}><NavLink to="/update/article">Update</NavLink></Button> */}
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.articles)}</Menu>}>
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

function Categories(categories) {
    if (categories !== null){
        return categories.map((category, index) => {
            return (
                <p>
                    <p className="site-description-item-profile-p">Category #{index + 1}</p>
                    <Row>
                        <Col span={24}>
                            Label : {category.Label}
                        </Col>
                    </Row>
                </p>
            );
        })
    }
}

function Count(count) {
    return(
        <p>
            <Row>
                <Col span={12}>
                    Like : {count.Like}
                </Col>
                <Col span={12}>
                    Count : {count.Count}
                </Col>
            </Row>
        </p>
    )
}

function Contents(contents) {

    if (contents !== null){
        return contents.map((content, index) => {
            return (
                <p>
                    <p>
                        <h5>{content.title}</h5>
                        {ContentImages(content.images)}
                    </p>
                    <p>
                        {ReactHtmlParser(content.description)} 
                    </p>
                </p>
            );
        })
    }
}

function ContentImages(images) {

    if (images !== null){
        return images.map((image, index) => {
            return (
                <Row>
                    <Col span={12}>
                        <Image
                            style={{
                                width: '150px',
                                height: '100px'
                            }}
                            src={image.src}
                        />
                    </Col>
                    <Col span={24}>
                        <p>Title : {image.title}</p>
                    </Col>
                </Row>
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
                      {item.title}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetArticle;