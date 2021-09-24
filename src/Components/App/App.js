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
      ],
      playlistName: "Spotify Playlist",
      playlistTracks: [
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
      ]
    }
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults}/>
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
