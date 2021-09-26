import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    const name = event.target.value;
    this.props.onNameChange(name)
  }

  render(){
    return (
      <div className="Playlist">
        <input defaultValue={this.props.name || "New Playlist"}  onChange={this.handleNameChange}/>
        <TrackList name={this.props.name} tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}
