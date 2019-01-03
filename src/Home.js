import React from 'react';
import Content from './Components/Content'
import Spotify from './Components/Spotify'
import Valerie from './assets/AmyWinehouse-Valerie.mp3'
import Reptilia from './assets/TheStrokes-Reptilia.mp3'
import FengSuave from './assets/FengSuave-SinkIntoTheFloor.mp3'

export default class Home extends React.Component {
  state = { playlist: [ {name: "Valerie", likes: 4}, {name: "Reptilia", likes: 2}, {name: "FengSuave", likes: 3} ]}

  handleClick = (track) => {
    let song = {name: track, likes: 0}
    this.setState({ playlist: [...this.state.playlist, song] })
    let list = document.getElementById('playlist_container')
    list.scrollIntoView({behavior: "smooth"})
  }

  findTrack = (songName) => {
    return this.state.playlist.find(track => {
      return track.name == songName
    })
  }


  handleLikes = (songName) => {
    let foundTrack = this.findTrack(songName)
    let track = {name: foundTrack.name, likes: ++foundTrack.likes}
    const playlist =  this.state.playlist.filter(song => {
      return song.name !== foundTrack.name
    })
    this.setState({ playlist: [...playlist, track]}, () => console.log(this.state))
  }

  handleDelete = (songName) => {
    const updatedPlaylist =  this.state.playlist.filter(song => {
      return song.name !== songName
    })
    this.setState({ playlist: updatedPlaylist }, () => console.log(this.state))

  }

   render() {
          return (
              <div className="App">
                <Content playlist={this.state.playlist} handleLikes={this.handleLikes} handleDelete={this.handleDelete}/>
                <Spotify handleClick={this.handleClick} /><br/>
              </div>
            );
   }
}
