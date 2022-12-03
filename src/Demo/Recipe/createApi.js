import axios from 'axios';
import 'antd/dist/antd.css';
import { message } from 'antd';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function resultForCreateRecipe(values) {
    await sleep(500);
    //window.alert(`${JSON.stringify(values, null, 1)}`);

    const data = {
        title: values.title,
        mainphoto: values.mainphoto,
        mainvideo: values.mainvideo,
        author: values.author,
        date: values.date,
        credit: values.credit,
        slidephotos: values.slidephotos,
        description: values.description,
        cookingres: values.cookingres,
        cooksteps: values.cooksteps,
        foodcategory: values.foodcategory,
    }
    //console.log("data :: ", data);

    axios.post(`http://localhost:9008/api/v1/cook/add/recipe`, data)
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

