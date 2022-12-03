import React from 'react';
import { Button, Input } from 'antd';
import { Field, FieldArray } from 'redux-form';
import 'antd/dist/antd.css';

import { makeField } from './constant';
import { EditorInput } from './editor';
import { FileInputForSrc } from '../Articles/fileInput';

const FieldInput = makeField(Input);

export const renderCategories = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Category</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((categories, index) => (
            <p key={index}>
                <Button
                    title="Remove Category"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Category</Button>
                <h5>Category #{index + 1}</h5>
                <Field
                    name={`${categories}.label`}
                    type="text"
                    component={FieldInput}
                    label="Label"
                    placeholder= "Enter Category's Label"
                    hasFeedback
                />
            </p>
        ))}
    </div>
);

export const renderCount = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <Field
            name={`count.like`}
            type="number"
            component={FieldInput}
            label="Like"
            placeholder="Enter Like"
            hasFeedback
        />
        <Field
            name={`count.count`}
            type="number"
            component={FieldInput}
            label="Count"
            placeholder="Enter Count"
            hasFeedback
        />
    </div>
);

export const renderContents = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Content</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((contents, index) => (
            <p key={index}>
                <Button
                    title="Remove Content"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Content</Button>
                <h5>Content #{index + 1}</h5>
                <Field
                    name={`${contents}.title`}
                    type="text"
                    component={FieldInput}
                    label="Title"
                    placeholder="Enter Content's Title"
                    hasFeedback
                />
                <Field
                    name={`${contents}.description`}
                    type="text"
                    component={EditorInput}
                    label="Description"
                    placeholder="Enter Content's Description"
                    hasFeedback
                />
                <FieldArray name={`${contents}.images`} component={renderContentImage} />
            </p>
        ))}
    </div>
);

export const renderContentImage = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add Image</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((images, index) => (
            <p key={index}>
                <Button
                    title="Remove Image"
                    onClick={() => fields.remove(index)}
                    danger
                >Remove Image</Button>
                <h5>Image #{index + 1}</h5>
                <Field
                    name={`${images}.src`}
                    component={FileInputForSrc}
                    type="file"
                    label="Src"
                    placeholder="Enter Content's Image Src"
                    hasFeedback
                />
                <Field
                    name={`${images}.title`}
                    type="text"
                    component={FieldInput}
                    label="Title"
                    placeholder="Enter Content's Image Title"
                    hasFeedback
                />
            </p>
        ))}
    </div>
);
