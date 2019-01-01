import React from 'react';
import Valerie from '../assets/AmyWinehouse-Valerie.mp3'
import SinkIntoTheFloor from '../assets/FengSuave-SinkIntoTheFloor.mp3'
import Reptilia from '../assets/TheStrokes-Reptilia.mp3'


export default class SongList extends React.Component {
  state = { songs: [Valerie, SinkIntoTheFloor, Reptilia ]}


//TODO render proper song title
  render(){
    return this.state.songs.map(song => {
      console.log(song);
      return <p></p>
    })
  }
}
