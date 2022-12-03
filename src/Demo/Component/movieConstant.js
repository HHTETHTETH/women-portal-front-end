import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import { Field } from 'redux-form';

import { makeField } from "./constant";
import { MovieFilePickerForPhoto } from "./movieFilePicker";

const FieldInput = makeField(Input);

export const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Actor Info</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((member, index) => (
            <p key={index}>
                <Button
                    title="Remove Actor"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Actor</Button>
                <h5>Actor #{index + 1}</h5>
                <Field
                    name={`${member}.actorname`}
                    component={FieldInput}
                    label="Actor Name"
                    placeholder="Enter Actor Name"
                    hasFeedback
                />
                <Field
                    name={`${member}.photo`}
                    type="file"
                    component={MovieFilePickerForPhoto}
                    hasFeedback
                />
            </p>
        ))}
    </div>
);