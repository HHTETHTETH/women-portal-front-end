import { Form } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const FormItem = Form.Item

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

export const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component className="date-picker-field" {...input} {...rest} children={children} />
        </FormItem>
    );
};

export const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);