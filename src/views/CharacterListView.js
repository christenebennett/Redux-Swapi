import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { fetchData } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    { this.props.error !== "" ? <p>this.props.error</p> : null }
    { this.props.loading ? <h2>LOADING</h2> : null }
    return (
      <div className="CharactersList_wrapper">
        <h2>Star Wars Characters:</h2>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  } 
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mstp = state => {
  return { 
    characters: state.characters,
    fetching: state.fetching,
    error: state.error
  }
}
export default connect( mstp,{ fetchData: fetchData })(CharacterListView);
