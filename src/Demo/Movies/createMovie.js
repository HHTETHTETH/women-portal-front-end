import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";

import Aux from "../../hoc/_Aux";
import store from "../Component/store";
import resultForCreateMovie from "./createApi";
import FieldArraysForm from "./createForm";

class CreateMovie extends Component {
    render() {
        return (
            <Aux>
                <Card>
                    <Card.Header>Create Movie</Card.Header>
                    <Card.Body>
                        <Provider store={store}>
                            <FieldArraysForm onSubmit={resultForCreateMovie} />
                        </Provider>
                    </Card.Body>
                </Card>
            </Aux>
        );
    }
}

export default CreateMovie;

// import React, { Component, useState } from "react";
// import "./styles.css";
// import ReactPlayer from "react-player/lazy";
// import ReactBnbGallery from "react-bnb-gallery";
// import "react-bnb-gallery/dist/style.css";

// // function incrementCount () {
// //   this.setState((state) => {
// //     // Important: read `state` instead of `this.state` when updating.
// //     return {count: state.count + 1}
// //   });
// // }

// class Test extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//         count : 0,
//     }
//     this.handleSomething = this.handleSomething.bind(this);
//   }

//   handleSomething = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//     console.log("count :: ", this.state.count)
//   }

//   render(){
//     return(
//       <>
//         <button onClick={this.handleSomething}> Click </button>
//       </>
//     );
//   }

// }

// // function handleSomething () {
// //   // Let's say `this.state.count` starts at 0.
// //   incrementCount();
// //   incrementCount();
// //   incrementCount();

// //   // If you read `this.state.count` now, it would still be 0.
// //   // But when React re-renders the component, it will be 3.
// // }

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const images = [
//     {
//       photo: "https://source.unsplash.com/aZjw7xI3QAA/300x250",
//       caption: "Viñales, Pinar del Río, Cuba",
//       subcaption: "Photo by Simon Matzinger on Unsplash",
//       thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67"
//     },
//     {
//       photo: "https://source.unsplash.com/c77MgFOt7e0/300x250",
//       caption: "La Habana, Cuba",
//       subcaption: "Photo by Gerardo Sanchez on Unsplash",
//       thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67"
//     },
//     {
//       photo: "https://source.unsplash.com/QdBHnkBdu4g/300x250",
//       caption: "Woman smoking a tobacco",
//       subcaption: "Photo by Hannah Cauhepe on Unsplash",
//       thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67"
//     }
//   ];
  

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <ReactPlayer
//         url="https://fb.watch/36kq61m6k9/"
//         width="300px"
//         height="250px"
//         controls
//       />
//       <>
//         <button onClick={() => setIsOpen(true)}>
//           Open gallery
//         </button>
//         <ReactBnbGallery
//           show={isOpen}
//           photos={images}
//           onClose={() => setIsOpen(false)}
//         />
//       </>
//       <Test />
//       {/* <ReactBnbGallery photos={images} show /> */}
//     </div>


//     //https://www.youtube.com/watch?v=ysz5S6PUM-U
//   );
// }
