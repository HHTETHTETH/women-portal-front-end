import React from 'react';
import { Form } from 'antd';
import 'antd/dist/antd.css';

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

const FormItem = Form.Item;

export class RecipeFilePickerForVideo extends React.Component {

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    onFileChange = async (e) => {
        const { input } = this.props
        const targetFile = e.target.files[0]
        if (targetFile) {
            const val = await this.getBase64(targetFile)
            input.onChange(val)
        } else {
            input.onChange(null)
        }
    }

    render() {
        return (
            <FormItem
                {...formItemLayout}
                label= "Main Video"
            >
                <input
                    className="date-picker-field"
                    type="file"
                    onChange={this.onFileChange}
                />
            </FormItem>
        )
    }
}

export class RecipeFilePickerForPhoto extends React.Component {

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    onFileChange = async (e) => {
        const { input } = this.props
        const targetFile = e.target.files[0]
        if (targetFile) {
            const val = await this.getBase64(targetFile)
            input.onChange(val)
        } else {
            input.onChange(null)
        }
    }

    render() {
        return (
            <FormItem
                {...formItemLayout}
                label= "Main Photo"
            >
                <input
                    className="date-picker-field"
                    type="file"
                    onChange={this.onFileChange}
                />
            </FormItem>
        )
    }
}

export class RecipeFilePickerForIcon extends React.Component {

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    onFileChange = async (e) => {
        const { input } = this.props
        const targetFile = e.target.files[0]
        if (targetFile) {
            const val = await this.getBase64(targetFile)
            input.onChange(val)
        } else {
            input.onChange(null)
        }
    }

    render() {
        return (
            <FormItem
                {...formItemLayout}
                label= "CookIngres Icon"
            >
                <input
                    className="date-picker-field"
                    type="file"
                    onChange={this.onFileChange}
                />
            </FormItem>
        )
    }
}

export class RecipeFilePickerForSrc extends React.Component {

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    onFileChange = async (e) => {
        const { input } = this.props
        const targetFile = e.target.files[0]
        if (targetFile) {
            const val = await this.getBase64(targetFile)
            input.onChange(val)
        } else {
            input.onChange(null)
        }
    }

    render() {
        return (
            <FormItem
                {...formItemLayout}
                label= "Photo Src"
            >
                <input
                    className="date-picker-field"
                    type="file"
                    onChange={this.onFileChange}
                />
            </FormItem>
        )
    }
}
