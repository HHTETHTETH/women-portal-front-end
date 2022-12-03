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

class GetRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
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
                axios.post(`http://localhost:9008/api/v1/cook/delete/recipe`, data)
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

        axios.post('http://localhost:9008/api/v1/cook/recipe', params)
            .then(response => {
                const recipes = response.data.recipes;
                const updatedRecipes = recipes.map(recipe => {
                    return {
                        ...recipe
                    }
                });

                this.setState({recipes: updatedRecipes});
                //console.log("art :: ", articles);
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.recipes.map((recipe, index) => {
            const date = recipe.date.split("T")
            return (
                <Card title={recipe.title} isOption>
                    <p>
                        <video
                            src={recipe.mainvideo}
                            style={{
                                width: '250px',
                                height: '170px'
                            }}
                            controls
                        />
                    </p>
                    <br />
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '150px',
                                    height: '100px'
                                }}
                                src={recipe.mainphoto}
                            />
                        </Col>
                        <Col span={24}>
                            <p>ID : {recipe.ID}</p>
                            <p>Date : {date[0]}</p>
                            <p>Author : {recipe.author}</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={12}>
                            <p>Credit : {recipe.credit}</p>
                        </Col>
                        <Col span={24}>
                            <p>Food Category : {recipe.foodcategory}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(recipe.description)}
                    </p>
                    <Divider />

                    <p className="site-description-item-profile-p">SlidePhotos</p>
                    {SlidePhoto(recipe.slidephotos)}
                    <Divider/>

                    <p className="site-description-item-profile-p">CookIngres</p>
                    {CookIngres(recipe.cookingres)}
                    <Divider/>

                    <p className="site-description-item-profile-p">CookSteps</p>
                    {CookSteps(recipe.cooksteps)}
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
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.recipes)}</Menu>}>
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

function SlidePhoto(slidePhoto) {

    if (slidePhoto !== null){
        return slidePhoto.map((slide, index) => {
            return (
                <Row>
                    <Image
                        style={{
                            width: '150px',
                            height: '100px'
                        }}
                        src={slide.src}
                    />
                </Row>
            );
        })
    }
}

function CookSteps(cookSteps) {
    if (cookSteps !== null){
        return cookSteps.map((cookStep, index) => {
            return (
                <p>
                    <Row>
                        <Col span={12}>
                            <p>Title : {cookStep.title}</p>
                        </Col>
                        <Col span={24}>
                            <p>Step : {cookStep.step}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Process : {cookStep.process}</p>
                        </Col>
                    </Row>
                </p>
            );
        })
    }
}

function CookIngres(cookIngres) {

    if (cookIngres !== null){
        return cookIngres.map((cook, index) => {
            return (
                <p>
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '150px',
                                    height: '100px'
                                }}
                                src={cook.icon}
                            />
                        </Col>
                        <Col span={24}>
                            <p>Weight : {cook.weight}</p>
                            <p>Unit : {cook.unit}</p>
                            <p>IngresName : {cook.ingrename}</p>
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
                      {item.title}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetRecipe;