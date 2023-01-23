// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello,{this.props.name}</h1>;
//     }
// }

// const UserDefindedFunction = <Welcome name='Sara' />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const rooty = <Welcome name="Sara" />;
// root.render(rooty);

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// function App() {
//     return (<>
//         <Welcome name='pablo'/>
//         <Welcome name='picaso'/>
//         <Welcome name='poophead'/>
//         </>
//     );
// }


import axios from 'axios';
import React from 'react';
var APIKEY = '07afb695e6aff4daa2b961878f8e5316'
var city_name = 'Miami'
function Axiosget(){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIKEY}`)
    .then(response =>{
      console.log(response.data)
      return response.data})
    .catch(error => {
      console.log(error);
      }) 
}
export default function GetData(props){
return (
<div>
<h1>Big Boy</h1>
<Axiosget />
<p></p>


</div>
);
};
