import axios from 'axios';
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function resultForCreate(values) {
    await sleep(500);
    //window.alert(`${JSON.stringify(values, null, 1)}`);

    const data = {
        name: values.name,
        description: values.description,
        board: values.board,
        trailer: values.trailer,
        release: values.release,
        imdb: Number(values.imdb),
        actor: values.actor,
        category: values.category
    }
    //console.log("data :: ", data);

    axios.post(`http://localhost:9008/api/v1/add/movie`, data)
        .then(response => {
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
        })
        .catch(err => {
            console.log(err);
            this.setState({error : true});
        });
});

