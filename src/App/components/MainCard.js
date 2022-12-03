import React, {Component} from 'react';
import {Dropdown, Card, Collapse} from 'react-bootstrap';
import windowSize from 'react-window-size';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

class MainCard extends Component {
    state = {
        isOption: this.props.isOption,
        collapseCard: false,
    };

    render() {
        let fullScreenStyle, loader, cardHeaderRight, cardHeader;
        let card = '';
        let cardClass = [];

        if (this.state.isOption) {
            cardHeaderRight = (
                <div className="card-header-right">
                    <Dropdown alignRight={true} className="btn-group card-option">
                        <Dropdown.Toggle id="dropdown-basic" className="btn-icon">
                            <i className="feather icon-more-horizontal"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu as='ul' className="list-unstyled card-option">
                            <Dropdown.Item as='li' className="dropdown-item" onClick={() => {this.setState(prevState => {return {collapseCard: !prevState.collapseCard}})}}>
                                <i className={this.state.collapseCard ? 'feather icon-plus' : 'feather icon-minus'}/>
                                <a href={DEMO.BLANK_LINK}> {this.state.collapseCard ? 'Expand' : 'Collapse'} </a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            );
        }

        cardHeader = (
            <Card.Header>
                <Card.Title as='h5'>{this.props.title}</Card.Title>
                {cardHeaderRight}
            </Card.Header>
        );

        if (this.props.cardClass) {
            cardClass = [...cardClass, this.props.cardClass];
        }

        card = (
            <Card className={cardClass.join(' ')} style={fullScreenStyle}>
                {cardHeader}
                <Collapse in={!this.state.collapseCard}>
                    <div>
                        <Card.Body>
                            {this.props.children}
                        </Card.Body>
                    </div>
                </Collapse>
                {loader}
            </Card>
        );

        return (
            <Aux>
                {card}
            </Aux>
        );
    }
}

export default windowSize(MainCard);
