import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { DatePicker, Input, Divider, Form } from 'antd';
import 'antd/dist/antd.css';

import { makeField } from '../Component/constant';
import { renderMembers } from '../Component/movieConstant';
// import { MovieFilePickerForTrailer } from '../Component/movieFilePicker';
import { EditorInput } from '../Component/editor';

const FieldInput = makeField(Input);
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

const ArraysFormForCreateMovie = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="name"
                component={FieldInput}
                label="Movie Name"
                placeholder="Enter Movie Name"
                hasFeedback
            />
            <Field
                name="board"
                component={FieldInput}
                label="Board"
                placeholder="Enter Board"
                hasFeedback
            />
            <Field
                name="trailer"
                component={FieldInput}
                label="Trailer"
                placeholder="Enter Trailer(video play link)"
                hasFeedback
            />
            {/* <Field
                name="trailer"
                type="file"
                component={MovieFilePickerForTrailer}
                hasFeedback
            /> */}
            <Field
                component={DateInput}
                name="release"
                hasFeedback
            />
            <Field
                name="imdb"
                component={FieldInput}
                label="IMDB"
                placeholder="Enter IMDB"
                hasFeedback
            />
            <Divider />
            <FieldArray name="actor" component={renderMembers} />
            <Divider />
            <Field
                name="category"
                component={FieldInput}
                label="Movie Category"
                placeholder="Enter Movie Category"
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

class DateInput extends React.Component {

    handleChange = async (value, dateString) => {
        const { input } = this.props
        input.onChange(dateString)
    }

    render() {

        return (
            <FormItem {...formItemLayout} label="Release Date">
                <DatePicker className="date-picker" placeholder="Enter Release Date" onChange={this.handleChange} />
            </FormItem>
        )
    }
}

export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
})(ArraysFormForCreateMovie);
