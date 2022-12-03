import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, DatePicker, Button, TimePicker } from 'antd';
import ReactHtmlParser from 'react-html-parser';

import Aux from '../../hoc/_Aux';
import '../Component/design.css';
import MyCard from "../../App/components/MainCard";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

class GetPromoByDate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventsdate: '',
            eventedate: '',
            eventtime: '',
            place: '',
            promotions: []
        };
        this.onChangeStart = this.onChangeStart.bind(this)
        this.onChangeEnd = this.onChangeEnd.bind(this)
        this.onChangeEvent = this.onChangeEvent.bind(this)
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
            eventsdate: this.state.eventsdate.toString(),
            eventedate: this.state.eventedate.toString(),
            eventtime: this.state.eventtime.toString(),
            place: this.state.place,
        };
        //console.log("data :: ", data)
        axios.post(`http://localhost:9008/api/v1/promotions/date`, data)
            .then(response => {
                if (response.data.status === 200 && response.data.promos != null) {
                    const promotions = response.data.promos;
                    const updatedPromos = promotions.map(promo => {
                        return {
                            ...promo
                        }
                    });

                    this.setState({promotions: updatedPromos});
                }else {
                    alert("There is any promotions for that day! Thank You!")
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            });
    };

    renderForPromoByDate(){
        return this.state.promotions.map((promo, index) => {
            return (
                <MyCard title={promo.title} isOption>
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
                </MyCard>
            )
        });
    }

    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Search Promotion</Card.Header>
                    <Card.Body>
                        <Form 
                            {...layout}
                            name="dynamic_form_nest_item" 
                            autoComplete="off"
                            //onFinish={onFinish}
                        >
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
                            <Form.Item className="Login">
                                <Button type="primary" htmlType="submit" onClick={this.postDataHandler}>
                                    Find Promotion
                                </Button>
                            </Form.Item>
                        </Form>
                        <Form>
                            {this.renderForPromoByDate()}
                        </Form>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default GetPromoByDate;
