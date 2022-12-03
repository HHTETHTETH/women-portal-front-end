import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Divider } from 'antd';
import 'antd/dist/antd.css';

import { FileInput } from './fileInput';
import { EditorInput } from '../Component/editor';
import { DateInput } from '../Component/datePicker';
import { renderCategories, renderCount, renderContents } from '../Component/articleConstant';
import { makeField } from '../Component/constant';

const FieldInput = makeField(Input);

const ArraysFormForCreateArticle = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="id"
                component={FieldInput}
                label="ID"
                placeholder="Enter ID"
                hasFeedback
            />
            <Field
                label="Title"
                name="title"
                component={FieldInput}
                placeholder="Enter Title"
                hasFeedback
            />
            <Field
                component={DateInput}
                name="date"
                hasFeedback
            />
            <Divider />
            <FieldArray name="categories" component={renderCategories} />
            <Divider />
            <Field
                component={FileInput}
                name="image"
                type="file"
                hasFeedback
            />
            <Field
                name="author"
                placeholder="Enter Author"
                component={FieldInput}
                label="Author"
                hasFeedback
            />
            <Divider />
            <Field name="count" component={renderCount}/>
            <Divider />
            <FieldArray name="contents" component={renderContents} />
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
})(ArraysFormForCreateArticle);
