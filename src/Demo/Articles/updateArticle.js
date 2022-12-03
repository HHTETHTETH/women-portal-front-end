// import React, {Component} from 'react';
// import axios from 'axios';
// //import {Card} from 'react-bootstrap';
// import {Menu, Dropdown, Space, message} from 'antd';
// import { EditTwoTone } from '@ant-design/icons';
// import 'antd/dist/antd.css';

// import Aux from "../../hoc/_Aux";

// class UpdateArticle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//         }
//     }

//     componentDidMount() {
//         const token = localStorage.getItem("token")
//         var params = {
//             'token': token
//         }
//         //console.log("params ::: ", params)

//         axios.post('http://localhost:9008/api/v1/articles', params)
//             .then(response => {
//                 const articles = response.data.articles;
//                 const updatedArticle = articles.map(article => {
//                     return {
//                         ...article
//                     }
//                 });

//                 this.setState({articles: updatedArticle});
//             })
//             .catch(err => {
//                 console.log(err);
//                 this.setState({error : true});
//             });
//     }

//     handleMenuClick({key}) {
//         message.info(`key : ` + key.title);
//     }

//     render() {
//         return (
//             <Aux>
//                 <Space wrap>
//                     <Dropdown.Button overlay={<Menu onClick={this.handleMenuClick}>{MenuItem(this.state.articles)}</Menu>}>
//                         Choose the topic that you want to update!
//                     </Dropdown.Button>
//                 </Space>
//             </Aux>
//         );
//     }
// }

// function MenuItem(items) {

//     if (items !== null){
//         return items.map((item, index) => {
//             return (
//                 <>
//                     <Menu.Item key={item} icon={<EditTwoTone />}>
//                       {item.title}
//                     </Menu.Item>
//                 </>
//             );
//         });
//     }
// }

// export default UpdateArticle;

import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForUpdateArticle from "./updateApi";
import FieldArraysForm from "./updateForm";

class UpdateArticle extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Update Article</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForUpdateArticle} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default UpdateArticle;