import axios from 'axios';
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResultsForCreateFashion(values) {
    await sleep(500); // simulate server latency
    
    const data = {
        album: values.album,
        date: values.date,
        description: values.description,
        gallery: values.gallery,
    }
    //console.log("data :: ", data)

    axios.post(`http://localhost:9008/api/v1/add/fashion`, data)
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

