import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
  render(){
    return (
      <div class="Playlist">
        <input defaultValue="New Playlist"/>
        <TrackList name={this.props.name} tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
