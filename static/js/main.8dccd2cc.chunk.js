(this["webpackJsonpcodecademy-react-jammming"]=this["webpackJsonpcodecademy-react-jammming"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(11),c=a.n(r),i=(a(10),a(12)),o=a(3),l=a(4),u=a(1),h=a(6),d=a(5),p=(a(17),a(0)),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).search=n.search.bind(Object(u.a)(n)),n.handleTermChangeClick=n.handleTermChangeClick.bind(Object(u.a)(n)),n.handleTermChangeEnter=n.handleTermChangeEnter.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(e){this.props.onSearch(e)}},{key:"handleTermChangeClick",value:function(){var e=document.getElementById("SearchBar").value;this.search(e)}},{key:"handleTermChangeEnter",value:function(e){"Enter"===e.key&&document.getElementById("SearchButton").click()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchBar",children:[Object(p.jsx)("input",{id:"SearchBar",placeholder:"Enter A Song, Album, or Artist",onKeyUp:this.handleTermChangeEnter}),Object(p.jsx)("input",{type:"submit",id:"SearchButton",className:"SearchButton",onClick:this.handleTermChangeClick,value:"SEARCH"})]})}}]),a}(s.a.Component),b=(a(19),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){var e;return e=this.props.isRemoval?Object(p.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"\u2013"}):Object(p.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"}),Object(p.jsxs)("div",{className:"Track",children:[Object(p.jsxs)("div",{className:"Track-information",children:[Object(p.jsx)("h3",{children:this.props.track.name}),Object(p.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),e]})}}]),a}(s.a.Component)),j=(a(20),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(t){return Object(p.jsx)(b,{track:t,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})}))})}}]),a}(s.a.Component)),k=(a(21),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchResults",children:[Object(p.jsx)("h2",{children:"Results"}),Object(p.jsx)(j,{tracks:this.props.tracks,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(s.a.Component)),v=(a(22),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){var t=e.target.value;this.props.onNameChange(t)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsx)("input",{defaultValue:this.props.name||"New Playlist",onChange:this.handleNameChange}),Object(p.jsx)(j,{name:this.props.name,tracks:this.props.tracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(p.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(s.a.Component)),f=a(7),y=a.n(f),O=a(9),T={_accessToken:null,_expiresIn:null,_userId:null,getAccessToken:function(){var e=this;if(this._accessToken)return this._accessToken;if(window.location.href.match(/access_token=([^&]*)/))return this._accessToken=window.location.href.match(/access_token=([^&]*)/)[1],this._expiresIn=window.location.href.match(/expires_in=([^&]*)/)[1],window.setTimeout((function(){return e._accessToken=""}),1e3*this._expiresIn),window.history.pushState("Access Token",null,"/"),this._accessToken;var t=window.location.href.replaceAll("/","%2F");t=t.replaceAll("-","%2D");var a=["playlist-modify-public"].join("%20");window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("f7827d17dafd4d18aee166e694d61941","&redirect_uri=").concat(t,"&scope=").concat(a,"&response_type=token&show_dialogue=true")},search:function(e){var t=this;return Object(O.a)(y.a.mark((function a(){var n,s,r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t.getAccessToken())}});case 3:if((n=a.sent).ok){a.next=6;break}throw new Error("Request failed.");case 6:return a.next=8,n.json();case 8:if(s=a.sent){a.next=11;break}return a.abrupt("return",[]);case 11:return a.next=13,s.tracks.items;case 13:return r=a.sent,a.next=16,r.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}));case 16:return c=a.sent,a.abrupt("return",c);case 20:a.prev=20,a.t0=a.catch(0),console.log(a.t0);case 23:case"end":return a.stop()}}),a,null,[[0,20]])})))()},savePlaylist:function(e,t){var a=this;return Object(O.a)(y.a.mark((function n(){var s,r,c,i,o,l;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return s={Authorization:"Bearer ".concat(a.getAccessToken())},n.prev=3,n.next=6,fetch("https://api.spotify.com/v1/me",{headers:s});case 6:if((r=n.sent).ok){n.next=9;break}throw new Error("User ID request failed.");case 9:return n.next=11,r.json();case 11:return c=n.sent,a._userId=c.id,n.next=15,fetch("https://api.spotify.com/v1/users/".concat(a._userId,"/playlists"),{method:"POST",headers:s,body:JSON.stringify({name:e})});case 15:if((i=n.sent).ok){n.next=18;break}throw new Error("Playlist creation request failed.");case 18:return n.next=20,i.json();case 20:return o=n.sent,n.next=23,o.id;case 23:return l=n.sent,n.next=26,fetch("https://api.spotify.com/v1/playlists/".concat(l,"/tracks"),{method:"POST",headers:s,body:JSON.stringify({uris:t})});case 26:n.next=31;break;case 28:n.prev=28,n.t0=n.catch(3),console.log(n.t0);case 31:case"end":return n.stop()}}),n,null,[[3,28]])})))()}},x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(e){this.state.playlistTracks.find((function(t){return t.id===e.id}))||this.setState({playlistTracks:[].concat(Object(i.a)(this.state.playlistTracks),[e])})}},{key:"removeTrack",value:function(e){this.setState({playlistTracks:this.state.playlistTracks.filter((function(t){return t.id!==e.id}))})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));T.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(e){var t=this;T.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Ja",Object(p.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{onSearch:this.search}),Object(p.jsxs)("div",{className:"App-playlist",children:[Object(p.jsx)(k,{tracks:this.state.searchResults,onAdd:this.addTrack}),Object(p.jsx)(v,{name:this.state.playlistName,tracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(s.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.8dccd2cc.chunk.js.map