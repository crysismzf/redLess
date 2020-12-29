import React from "react";
import {connect} from "react-redux";

class App extends React.Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  cleanTracks() {
      this.props.onCleanTracks();
      this.trackInput.value = '';
  }

    findTrack() {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value)
    }

  render() {
    return (
        <React.Fragment>
            <div>
                <input type="text" ref={(input) => { this.trackInput = input; }} />
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
                <button onClick={this.cleanTracks.bind(this)}>Clean</button>
            </div>
            <div>
                <input type="text" ref={(input) => { this.searchInput = input }} />
                <button onClick={this.findTrack.bind(this)}>Find track</button>
            </div>
        </React.Fragment>
    )
  }
}

export default connect (
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
      onAddTrack: (name) => {
          const payload = {
              id: Date.now().toString(),
              name
          }
        dispatch({ type: 'ADD_TRACK', payload })
      },
      onCleanTracks:() => {
          dispatch({ type: 'CLEAN_TRACKS' })
      },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },

    })
)(App)
