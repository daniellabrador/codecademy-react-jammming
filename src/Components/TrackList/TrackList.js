import React from 'react';
import { Track } from '../Track/Track';

import './TrackList.css';

export class TrackList extends React.Component {
  render(){
    return (
      <div className="TrackList">
          {this.props.searchedTracks.map(track => {
            return <Track name={track.name} artist={track.artist} album={track.album} key={track.id}/>
          })}
      </div>
    )
  }
}