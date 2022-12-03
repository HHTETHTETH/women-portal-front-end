// import React, {useState} from 'react';
// import axios from 'axios';

// export default function FileUploadPage(){
// 	const [selectedFile, setSelectedFile] = useState();
// 	const [isSelected, setIsSelected] = useState(false);

// 	const changeHandler = (event) => {
// 		setSelectedFile(event.target.files[0]);
// 		setIsSelected(true);
// 	};

// 	const handleSubmission = () => {
//         // const formData = new FormData();
//         console.log("ss :: ", selectedFile);
//         // formData.append('file', selectedFile);
//         // console.log("selecte :: ", formData.get("file"));

//         axios.post("http://localhost:9008/api/v1/upload", selectedFile)
//             .then((resp) => {
//                 if (resp.status === 200) {
//                 console.log('File uploaded :: ', resp)
//                 }
//             });

//     // fetch(
//     //     'http://localhost:9008/api/v1/upload',
//     //     {
//     //         method: 'POST',
//     //         body: formData,
//     //     }
//     // )
//     //     .then((response) => response.json())
//     //     .then((result) => {
//     //         console.log('Success:', result);
//     //     })
//     //     .catch((error) => {
//     //         console.error('Error:', error);
//     //     });
//     };

// 	return(
//         <div>
// 			<input type="file" name="file" onChange={changeHandler} />
// 			{isSelected ? (
// 				<div>
// 					<p>Filename: {selectedFile.name}</p>
// 					<p>Filetype: {selectedFile.type}</p>
// 					<p>Size in bytes: {selectedFile.size}</p>
// 					<p>
// 						lastModifiedDate:{' '}
// 						{selectedFile.lastModifiedDate.toLocaleDateString()}
// 					</p>
// 				</div>
// 			) : (
// 				<p>Select a file to show details</p>
// 			)}
// 			<div>
// 				<button onClick={handleSubmission}>Submit</button>
// 			</div>
// 		</div>
// 	)
// }

import React from 'react'
import axios, { post } from 'axios';

class FileUploadPage extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log("res :: ", response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:9008/api/v1/upload';
    const formData = new FormData();
    formData.append('file',file)
    console.log("file :: ", file);
    console.log("formData :: ", formData);
    console.log("get :: ", formData.get("file"));
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}



export default FileUploadPage;