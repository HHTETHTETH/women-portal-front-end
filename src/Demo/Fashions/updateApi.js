import axios from "axios";
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResultsForUpdateFashion(values) {
    await sleep(500); // simulate server latency
    //window.alert(`${JSON.stringify(values, null, 1)}`);

    const data = {
        id: values.id,
        album: values.album,
        date: values.date,
        description: values.description,
        gallery: values.gallery,
    }

    axios.post(`http://localhost:9008/api/v1/update/fashion`, data)
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

