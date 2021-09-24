import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: "bad guy",
          artist: "Billie Eilish",
          album: "When We All Fall Asleep, Where Do We Go?",
          id: "test1"
        }, 
        {
          name: "What A Beautiful Name",
          artist: "Hillsong Worship",
          album: "Let There Be Light",
          id: "test2"
        }, 
        {
          name: "The Night We Met",
          artist: "Lord Huron",
          album: "Strange Tails",
          id: "test3"
        }, 
        {
          name: "Jesus At The Center",
          artist: "Darlene Zschech",
          album: "Revealing Jesus",
          id: "test4"
        }, 
      ],
      playlistName: "Spotify Playlist",
      playlistTracks: [
        {
          name: "The Night We Met",
          artist: "Lord Huron",
          album: "Strange Tails",
          id: "test3"
        }, 
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)){
     return; 
    }
    this.setState({playlistTracks: [...this.state.playlistTracks, track]})
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
