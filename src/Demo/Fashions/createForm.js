import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Divider } from 'antd';
import 'antd/dist/antd.css';

import { makeField } from '../Component/constant';
import { DateInput } from '../Component/datePicker';
import { renderGalleryForFashion } from '../Component/fashionConstant';
import { EditorInput } from '../Component/editor';

const FieldInput = makeField(Input);

const FieldArraysFormForCreateFashion = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="album"
                component={FieldInput}
                label="Album"
                placeholder="Enter Album Name"
                hasFeedback
            />
            <Field
                component={DateInput}
                name="date"
                hasFeedback
            />
            <Divider />
            <FieldArray name="gallery" component={renderGalleryForFashion} />
            <Divider />
            <Field
                component={EditorInput}
                name="description"
                hasFeedback
            />
            <div className="Login">
                <button className="button" type="sumit" style={{backgroundColor: '#4fc3f7'}} disabled={pristine || submitting}>Submit</button>
                <button className="button" style={{backgroundColor: 'red'}} disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
})(FieldArraysFormForCreateFashion);
