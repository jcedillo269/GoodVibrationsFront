import React from 'react';

class PlaylistContainer extends React.Component {

  render() {
    return (
      <div id="playlist_container" class="ui celled list">
        <h3>Your Playlist</h3>
        {this.props.playlist.map(song => {
          return (
            <>
              <h3 key={song.name} class="item">{song.name}</h3>
              <button onClick={() => this.props.handleLikes(song.name)}>Likes: {song.likes}</button><button onClick={() => this.props.handleDelete(song.name)}>Delete</button>
            </>
          )
          })}

      </div>
    );
  }
}

export default PlaylistContainer;
