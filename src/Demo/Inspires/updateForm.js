import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Divider } from 'antd';
import 'antd/dist/antd.css';

import { renderImage, renderHistory } from '../Component/inspireConstant';
import { makeField } from '../Component/constant';
import { DateInput } from '../Component/datePicker';

const FieldInput = makeField(Input);

const FormForUpdateInspire = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="id"
                component={FieldInput}
                label="Inspires ID"
                placeholder="Enter Inspires ID"
                hasFeedback
            />
            <Field
                name="name"
                component={FieldInput}
                label="Inspires Name"
                placeholder="Enter Inspires Name"
                hasFeedback
            />
            <Field
                name="skills"
                component={FieldInput}
                label="Skills"
                placeholder="Enter Skills"
                hasFeedback
            />
            <Field
                name="profile"
                component={FieldInput}
                label="Profile"
                placeholder="Enter Profile"
                hasFeedback
            />
            <Field
                name="area"
                component={FieldInput}
                label="Area"
                placeholder="Enter Area"
                hasFeedback
            />
            <Field
                component={DateInput}
                name="date"
                hasFeedback
            />
            <Divider />
            <FieldArray name="images" component={renderImage} />
            <Divider />
            <FieldArray name="history" component={renderHistory} />
            <Divider />
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
})(FormForUpdateInspire);
