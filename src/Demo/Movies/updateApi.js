import axios from 'axios';
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function resultForUpdate(values) {
    await sleep(500);

    const data = {
        id: values.id,
        name: values.name,
        description: values.description,
        board: values.board,
        trailer: values.trailer,
        release: values.release,
        imdb: Number(values.imdb),
        actor: values.actor,
        category: values.category
    }

    axios.post(`http://localhost:9008/api/v1/update/movie`, data)
        .then(response => {
            if (response.data.status === 200){
                message.success({
                    content: 'Successfully updated!',
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

