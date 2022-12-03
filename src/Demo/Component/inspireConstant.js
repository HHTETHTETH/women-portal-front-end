import React from 'react';
import { Button, Input } from 'antd';
import { Field } from 'redux-form';
import 'antd/dist/antd.css';

import { makeField } from './constant';
import { InspireFilePicker, InspireFilePickerForUrl } from './inspireFilePicker';

const FieldInput = makeField(Input);

export const renderImage = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Image Src</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((images, index) => (
            <p key={index}>
                <Button
                    title="Remove Src"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Image</Button>
                <h5>Image Src #{index + 1}</h5>
                <Field
                    name={`${images}.src`}
                    type="file"
                    component={InspireFilePicker}
                    hasFeedback
                />
            </p>
        ))}
    </div>
);

export const renderHistory = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add History</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((history, index) => (
            <p key={index}>
                <Button
                    title="Remove History"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove History</Button>
                <h5>History #{index + 1}</h5>
                <Field
                    name={`${history}.text`}
                    component={FieldInput}
                    label="Text"
                    placeholder="Enter Text"
                    hasFeedback
                />
                <Field
                    name={`${history}.title`}
                    component={FieldInput}
                    label="Title"
                    placeholder="Enter Title"
                    hasFeedback
                />
                <Field
                    name={`${history}.imageUrl`}
                    type="file"
                    component={InspireFilePickerForUrl}
                    hasFeedback
                />
            </p>
        ))}
    </div>
);