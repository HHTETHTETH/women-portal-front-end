import React from 'react';
import { Form, DatePicker } from 'antd';
import 'antd/dist/antd.css';

import './design.css';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

export class DateInput extends React.Component {

    handleChange = async (value, dateString) => {
        const { input } = this.props
        input.onChange(dateString)
    }

    render() {

        return (
            <FormItem {...formItemLayout} label="Date">
                <DatePicker className="date-picker" placeholder="Enter Date" onChange={this.handleChange} />
            </FormItem>
        )
    }
}

