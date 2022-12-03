import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Image, Input, message, Space, Dropdown, Menu, Modal } from 'antd';
import { DeleteTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

const { confirm } = Modal;

class GetSong extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
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
                axios.post(`http://localhost:9008/api/v1/delete/songs`, data)
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
        // const token = localStorage.getItem("token")
        // var params = {
        //     'token': token
        // }
        //console.log("params ::: ", params)

        axios.get("http://localhost:9008/api/v1/songs")
            .then(response => {
                const songs = response.data.songs;
                const updatedSongs = songs.map(song => {
                    return {
                        ...song
                    }
                });

                this.setState({songs: updatedSongs});
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    }

    renderTableData() {
        return this.state.songs.map((song, index) => {
            return (
                <Card title={song.name} isOption>
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '100px',
                                    height: '70px'
                                }}
                                src={song.image}
                            />
                        </Col>
                        <Col span={24}>
                            <p>{Mp3(song.mp3)}</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={12}>
                            <Image
                                style={{
                                    width: '100px',
                                    height: '70px'
                                }}
                                src={song.singer.photo}
                            />
                        </Col>
                        <Col span={24}>
                            <p>Album : {song.album}</p>
                            <p>Singer Name : {song.singer.name}</p>
                        </Col>
                    </Row>
                </Card>
            )
        })
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Space wrap>
                        <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.songs)}</Menu>}>
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

function Mp3(mp3) {

    if (mp3 !== ""){
        // use Audio constructor to create HTMLAudioElement
        const audioTune = new Audio(mp3);

        // play audio sound
        const playSound = () => {
            audioTune.play();
        }

        // pause audio sound
        const pauseSound = () => {
            audioTune.pause();
        }

        // stop audio sound
        const stopSound = () => {
            audioTune.pause();
            audioTune.currentTime = 0;
        }

        return (
            <div className="App">
                <h5 className="mb-4">Play the music</h5>

                <Input
                    type="button"
                    style={{ width: 100 , background: "#b39ddb"}}
                    value="Play"
                    onClick={playSound}
                />
                <Input
                    type="button"
                    style={{ width: 100 , background: "#673ab7"}}
                    value="Pause"
                    onClick={pauseSound}
                />
                <Input
                    type="button"
                    style={{ width: 100 , background: "#ff5722"}}
                    value="Stop"
                    onClick={stopSound} />

            </div>
        );
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

export default GetSong;