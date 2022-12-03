import axios from 'axios';
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function resultForCreateArticle(values) {

    await sleep(500);
    //window.alert(`${JSON.stringify(values, null, 1)}`);
   
    if (values.count !== undefined) {
        if (values.count.like !== "" && values.count.count !== "") {
            values.count.like = Number(values.count.like)
            values.count.count = Number(values.count.count)
        } else {
            values.count.like = Number(0)
            values.count.count = Number(0)
        }
    }
    

    const data = {
        title: values.title,
        date: values.date,
        categories: values.categories,
        image: values.image,
        description: values.description,
        author: values.author,
        count: values.count,
        contents: values.contents,
    }

    axios.post(`http://localhost:9008/api/v1/add/article`, data)
        .then(response => {
            console.log(response.data.status);
            if (response.data.status === 200){
                message.success({
                    content: 'Successfully added!',
                    className: 'custom-class',
                    style: {
                      marginTop: '20vh',
                    },
                }, 10);
                window.location.reload();
            }else {
                message.error({
                    content: 'Something Wrong! Please check your input data.',
                    className: 'custom-class',
                    style: {
                      marginTop: '20vh',
                    },
                }, 10);
            }
            //window.location.reload();
        })
        .catch(err => {
            console.log(err);
            this.setState({error : true});
        });
});
