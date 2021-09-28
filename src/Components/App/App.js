import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { Spotify } from '../util/Spotify';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: [],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this)
  }

  addTrack(track){
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)){
     return; 
    }
    this.setState({playlistTracks: [...this.state.playlistTracks, track]})
  }

  removeTrack(track){
    this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack =>
      playlistTrack.id !== track.id)})
  }

  updatePlaylistName(name){
    this.setState({playlistName: name})
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(this.state.playlistName, trackURIs)
     .then(()=>{
        this.setState({
          playlistName: "New Playlist",
          playlistTracks: []
        })
     })
  }

  search(term){
    Spotify.search(term)
      .then(results => {
        this.setState({searchResults: results});
      })
  }

  componentDidMount(){
    window.addEventListener('load', ()=> Spotify.getAccessToken())
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults tracks={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
