import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Form from './Form'
import Header from './Header'
import SongList from './SongList.js'
import PlaylistContainer from './PlaylistContainer'




export default class Content extends React.Component {
  state = { users:[], currentUser: {}, username: "", usermail:"", currentlyPlaying: null }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => {
      this.setState({ users: json })
    })
  }

  handleChange = (event) => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    this.setState({ username: name, usermail: email}, () => console.log(this.state))

  }

  findExistingUser = () => {
    let existing = this.state.users.find(user => {
      return user.email === this.state.usermail
    })
    return existing
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = document.getElementById('form')
    const formCont = document.getElementById('form-cont')
    const user = this.findExistingUser()
    if( user != null){
      this.setState({ currentUser: user}, () => console.log(this.state))
    } else {
      this.handlePostUser()
    }
    form.reset()
    formCont.style.display = 'none'
  }

  handlePostUser = () => {
    let data = { name: this.state.username, email: this.state.usermail, mixes: []}
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
     headers: {
          'Content-Type': 'application/json'
        },
     body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(json => {
        console.log(json);
        this.setState({ users: [...this.state.users, json], currentUser: json }, () => console.log(this.state))
    })
  }


  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Form handleChange={this.handleChange}  handleSubmit={this.handleSubmit}/>
        {this.state.usermail !== "" ? <PlaylistContainer handleLikes={this.props.handleLikes} handleDelete={this.props.handleDelete} playlist={this.props.playlist}/> : ""}

      </>
  )
    }

}

{/* <ReactAudioPlayer
  src={Valerie}
  autoPlay
  controls
/> */}
