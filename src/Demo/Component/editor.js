import React from 'react';
import { Form } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import 'antd/dist/antd.css';

import './design.css';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        span : 4
    },
    wrapperCol: {
        span: 17
    }
};

export class EditorInput extends React.Component {

    handleChange = async (e) => {
        const { input } = this.props
        input.onChange(e)
    }

    render() {

        return (
            <FormItem
                {...formItemLayout}
                label= "Description"
            >
                <Editor
                    className="mce-notification"
                    init={{
                        branding: false,
                        height: 200,
                        //menubar: true,
                        // plugins:
                        //     "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen link template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
                        toolbar:
                            "bold italic underline strikethrough | forecolor backcolor blockquote | link | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
                        //image_advtab: true
                    }}
                    onEditorChange={this.handleChange}
                />
            </FormItem>
        )
    }
}

