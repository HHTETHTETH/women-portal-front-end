import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, message, Space, Dropdown, Menu, Modal, Divider, Popover, Button } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';
import ReactPlayer from 'react-player/lazy';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
//import '../Component/video.scss';

const { confirm } = Modal;

class GetMovie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    // setIsOpen = (actors) => {
    //     console.log("actor :: ", actors);
    //     const img = {
    //         photo: '',
    //         caption: '',
    //         subcaption: '',
    //         thumbnail: '',
    //     };
    //     const images = actors.map((actor, index) => {
    //         img.photo = actor.photo
    //         img.caption = actor.actorname
    //         img.thumbnail = actor.photo + '/100x67'

    //         return{
    //             ...img
    //         }
    //     });
    //     console.log("images :: ", images);
    //     this.showGallery(images)
    // }

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
                axios.post(`http://localhost:9008/api/v1/delete/movie`, data)
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

        axios.post('http://localhost:9008/api/v1/movies', params)
            .then(response => {
                const movies = response.data.movies;
                const updatedMovies = movies.map(movie => {
                    return {
                        ...movie
                    }
                });

                this.setState({movies: updatedMovies});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.movies.map((movie, index) => {            
            const date = movie.release.split("T")            
            return (
                <Card title={movie.name} isOption>
                    <Row>
                        <ReactPlayer 
                            url={movie.trailer}
                            width='300px'
                            height='250px'
                            controls
                        />
                    </Row>
                    <br />
                    <Row>
                        <Col span={12}>
                            <p>ID : {movie.ID}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>Board : {movie.board}</p>
                        </Col>
                        <Col span={24}>
                            <p>Release Date : {date[0]}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>IMDB : {movie.imdb}</p>
                        </Col>
                        <Col span={24}>
                            <p>Category : {movie.category}</p>
                        </Col>
                    </Row>
                    <br />
                    <p>
                        {ReactHtmlParser(movie.description)}
                    </p>
                    <Divider/>

                    <p className="site-description-item-profile-p">Actors</p>
                    {Actors(movie.actor)}
                    {/* <button onClick={() => {
                        this.setState({isOpen: true})
                        this.setIsOpen(movie.actor);
                        }}
                    >
                        Open gallery
                    </button> */}
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.movies)}</Menu>}>
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

function ActorPhoto(src) {
    return(
        <>
            <Image
                style={{
                    width: '200px',
                    height: '200px'
                }}
                src={src}
            />
        </>
    );
}

function Actors(actors) {
    if (actors !== null){
        return actors.map((actor, index) => {
            return (
                <>
                    <Popover content={ActorPhoto(actor.photo)} title={actor.actorname} trigger="hover">
                        <Button>{actor.actorname}</Button>
                    </Popover>
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
                      {item.name}
                    </Menu.Item>
                </>
            );
        });
    }
}

export default GetMovie;
