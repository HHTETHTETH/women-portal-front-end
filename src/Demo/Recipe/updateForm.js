import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Divider, Input } from 'antd';
import 'antd/dist/antd.css';

import { makeField } from '../Component/constant';
import { renderSlidePhotos, renderCookIngres, renderCookSteps } from '../Component/recipeConstant';
import { EditorInput } from '../Component/editor';
import { RecipeFilePickerForPhoto, RecipeFilePickerForVideo } from '../Component/recipeFilePicker';
import { DateInput } from '../Component/datePicker';

const FieldInput = makeField(Input);

const ArraysFormForUpdateRecipe = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="id"
                component={FieldInput}
                label="Recipe ID"
                placeholder="Enter ID"
                hasFeedback
            />
            <Field
                name="title"
                component={FieldInput}
                label="Title"
                placeholder="Enter Title"
                hasFeedback
            />
            <Field
                name="mainphoto"
                type="file"
                component={RecipeFilePickerForPhoto}
                hasFeedback
            />
            <Field
                name="mainvideo"
                type="file"
                component={RecipeFilePickerForVideo}
                hasFeedback
            />
            <Field
                name="author"
                component={FieldInput}
                label="Author"
                placeholder="Enter Author"
                hasFeedback
            />
            <Field
                component={DateInput}
                name="date"
                hasFeedback
            />
            <Field
                name="credit"
                component={FieldInput}
                label="Credit"
                placeholder="Enter Credit"
                hasFeedback
            />
            <Divider />
            <FieldArray name="slidephotos" component={renderSlidePhotos} />
            <Divider />
            <FieldArray name="cookingres" component={renderCookIngres} />
            <Divider />
            <FieldArray name="cooksteps" component={renderCookSteps} />
            <Divider />
            <Field
                name="foodcategory"
                component={FieldInput}
                label="Food Category"
                placeholder="Enter Food Category"
                hasFeedback
            />
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
})(ArraysFormForUpdateRecipe);
