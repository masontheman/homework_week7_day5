import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetData from './Tutorial';
import axios from 'axios';
import Example from './Hooks';
import PokeAPI from './PokeApI';
import WeatherAPI from './WeatherAPI';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <
//   </React.StrictMode>
// );

// reportWebVitals();
const APIKEY = '07afb695e6aff4daa2b961878f8e5316'
const city_name = 'Miami'
const root = ReactDOM.createRoot(document.getElementById('root'));
  
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
  return (
    <div>
      <h1></h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );
  }
  
}

class WeatherData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      myObj:[]
    }
  }
  componentDidMount(){
  }
  useAxiosGetData(city_name){
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${APIKEY}`)
  }
  GetTempAture(city_name){
    this.useAxiosGetData(city_name).then(res => {
      this.setState({
        myObj:res.data
      });
      console.log(this.state.myObj.name)
    });
    return this.state.myObj
  }
  render(){
    return(
      <p>hello</p>
    );
  }
}

// function Buttonn(){
//   return(
//     <div>
//       <form action='' id="aaa">
//       <input type='text' name='bbb'></input>
//       <input type='submit'></input>
//       </form>
//     </div>
//   );
// }

function Formm(){
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    );
  }
}

class LoggingButton extends React.Component {
handleClick = () => {
  console.log('this is:', this)
}
render() {
  return (
    <button onClick={() => this.handleClick()}>
      Click me
    </button>
  );
}
};

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginConrol extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn:false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn:true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Appp(){
  return(
    <div>
    <Clock />
    <PokeAPI />
    <Clock />
    <WeatherAPI />
    {/* <Buttonn /> */}
    </div>
  );
}
root.render(<Appp />);

