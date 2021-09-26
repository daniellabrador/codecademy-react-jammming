import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this)
    this.handleTermChangeClick = this.handleTermChangeClick.bind(this)
    this.handleTermChangeEnter = this.handleTermChangeEnter.bind(this)
  }

  search(term){
    this.props.onSearch(term);
  }

  handleTermChangeClick(){
    const term = document.getElementById('SearchBar').value;
    this.search(term);
  }

  handleTermChangeEnter(e){    
    if (e.key === 'Enter'){
      document.getElementById('SearchButton').click();
    }
    
  }

  render(){
    return (
      <div className="SearchBar">
        <input id="SearchBar" placeholder="Enter A Song, Album, or Artist" onKeyUp={this.handleTermChangeEnter}/>
        <input type="submit" id="SearchButton" className="SearchButton" onClick={this.handleTermChangeClick} value="SEARCH"/>
      </div>
    )
  }
}