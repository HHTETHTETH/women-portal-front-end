import React from 'react';
import { Form } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

export class MovieFilePickerForTrailer extends React.Component {

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
        console.log("file :: ", targetFile.name);
        if (targetFile) {
            //const val = await this.getBase64(targetFile)
            //input.onChange(val)
            input.onChange(targetFile.name)
        } else {
            input.onChange(null)
        }
    }
    //C:\Users\hp\AppData\Local\Microsoft\Windows\INetCache\IE\ZZ95RMHK

    render() {
        return (
            <FormItem
                {...formItemLayout}
                label= "Trailer"
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

export class MovieFilePickerForPhoto extends React.Component {

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
                label= "Actor Photo"
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