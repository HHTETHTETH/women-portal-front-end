import React from 'react';
import { Button, Input } from 'antd';
import { Field, FieldArray } from 'redux-form';
import 'antd/dist/antd.css';

import { makeField } from './constant';
import { FashionFilePicker } from './fashionFilePicker';

const FieldInput = makeField(Input);

export const renderPhotosForFashion = ({ fields, meta: { error } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push()}>Add Photo</Button>
        </p>
        {fields.map((photos, index) => (
            <p key={index}>
                <Button
                    title="Remove Photo"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Photo</Button>
                <h5>Photo #{index + 1}</h5>
                <Field
                    component={FashionFilePicker}
                    name={`${photos}.src`}
                    type="file"
                    hasFeedback
                />
            </p>
        ))}
        {error && <li className="error">{error}</li>}
    </div>
);

export const renderGalleryForFashion = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Gallery</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((gallery, index) => (
            <p key={index}>
                <Button
                    title="Remove Gallery"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Gallery</Button>
                <h5>Gallery #{index + 1}</h5>
                <Field
                    name={`${gallery}.stories`}
                    type="text"
                    component={FieldInput}
                    label="Stories"
                    placeholder="Enter Stories"
                    hasFeedback
                />
                <FieldArray name={`${gallery}.photos`} component={renderPhotosForFashion} />
            </p>
        ))}
    </div>
);