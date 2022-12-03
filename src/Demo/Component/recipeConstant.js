import React from 'react';
import { Button, Input } from 'antd';
import { Field } from 'redux-form';
import 'antd/dist/antd.css';

import { makeField } from './constant';
import { RecipeFilePickerForIcon, RecipeFilePickerForSrc } from './recipeFilePicker';

const FieldInput = makeField(Input);

export const renderSlidePhotos = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add SlidePhoto</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((slidephotos, index) => (
            <p key={index}>
                <Button
                    danger
                    title="Remove SlidePhoto"
                    onClick={() => fields.remove(index)}
                >Remove SlidePhoto</Button>
                <h5>Slide Photo #{index + 1}</h5>
                <Field
                    name={`${slidephotos}.src`}
                    type="file"
                    component={RecipeFilePickerForSrc}
                    hasFeedback
                />
            </p>
        ))}
    </div>
);

export const renderCookIngres = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add CookIngres</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((cookingres, index) => (
            <p key={index}>
                <Button
                    danger
                    title="Remove CookIngres"
                    onClick={() => fields.remove(index)}
                >Remove CookIngres</Button>
                <h5>CookIngres #{index + 1}</h5>
                <Field
                    name={`${cookingres}.icon`}
                    type="file"
                    component={RecipeFilePickerForIcon}
                    hasFeedback
                />
                <Field
                    name={`${cookingres}.weight`}
                    component={FieldInput}
                    label="CookIngres Weight"
                    placeholder="Enter CookIngres Weight"
                    hasFeedback
                />
                <Field
                    name={`${cookingres}.unit`}
                    component={FieldInput}
                    label="CookIngres Unit"
                    placeholder="Enter CookIngres Unit"
                    hasFeedback
                />
                <Field
                    name={`${cookingres}.ingrename`}
                    component={FieldInput}
                    label="Ingres Name"
                    placeholder="Enter Ingres Name"
                />
            </p>
        ))}
    </div>
);

export const renderCookSteps = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div className="Login">
        <p>
            <Button type="primary" onClick={() => fields.push({})}>Add CookSteps</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </p>
        {fields.map((cooksteps, index) => (
            <p key={index}>
                <Button
                    danger
                    title="Remove Cook Steps"
                    onClick={() => fields.remove(index)}
                >Remove CookSteps</Button>
                <h5>Cook Steps #{index + 1}</h5>
                <Field
                    name={`${cooksteps}.title`}
                    component={FieldInput}
                    label="Title"
                    placeholder="Enter Title"
                    hasFeedback
                />
                <Field
                    name={`${cooksteps}.step`}
                    type="number"
                    component={FieldInput}
                    label="Step"
                    placeholder="Enter Step"
                    hasFeedback
                />
                <Field
                    name={`${cooksteps}.process`}
                    component={FieldInput}
                    label="Process"
                    placeholder="Enter Process"
                    hasFeedback
                />
            </p>
        ))}
    </div>
);
