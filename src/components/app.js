/*
    ./client/components/App.jsx
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import GoogleApiComponent from './container.js';
// import fetch from 'node-fetch';
import fetch from 'isomorphic-fetch'
import promise from 'es6-promise/auto'
// promise.polyFill()
// import keys from '../../keys.js';

const navList = [
  { name: 'Bookmarks', url: '#'},
  { name: 'Contact', url: 'huiquanlu@gmail.com'}
]

class MyNavBar extends React.Component {
  render() {
    return(
      <Navbar style={{marginBottom:'0px'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Chaser</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="tabs" activeKey="1">
          {this.props.list.map((e, i) =>
              (
                <NavItem key={i} href={e.url}>
                  {e.name}
                </NavItem>
              )
          )}
        </Nav>
      </Navbar>);
  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputValue: '',
      busJson: ''
    };
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  handleSubmit(event) {
    let that = this
    event.preventDefault();
    let reg = /^\d{1,5}$/g;
    if(reg.test(this.state.inputValue)){
      fetch(`http://localhost:8080/api/businfo?stopNo=${this.state.inputValue}`).then((response)=>{
        return response.json();
      }).then(function(json){
        console.log(json);
        if (json.error) {
          alert(json.error);
        } else {
          that.setState({
            busJson: json
          })
          that.props.update(json)
        }
      })
    } else {
      alert('Invalid Input');
    }
  }
  render() {
    const style = {
      position: 'absolute',
      top: '60px',
      left: '20%',
      width: '60%',
      zIndex: '99'
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <InputGroup style={style}>
          <FormControl type="text" placeholder="Enter bus # or code" onChange={this.handleChange} />
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
        </InputGroup>
      </form>
    )
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.onBusChange = this.onBusChange.bind(this);
    this.state = {
      busJson: []
    };
  }
  onBusChange(data) {
    this.setState({
      busJson: data
    })
  }
  render() {
    return (
      <div>
        <MyNavBar list={navList} />
        <div style={{textAlign: 'center',width:'100%'}}>
          <SearchBar update={this.onBusChange} />
          <GoogleApiComponent busJson ={this.state.busJson}/>
        </div>
      </div>);
  }
}
