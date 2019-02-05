import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

import { fetchData } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>LOADING</h2>;
    }
    console.log(this.props.characters)
    return (
      <div className="CharactersList_wrapper">
        <h1>Star Wars Characters:</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
  // render() {
  //   // return (
  //   //   <div className="CharactersList_wrapper">
  //   //     { this.props.error !== "" ? <p>this.props.error</p> : null }
  //   //     { this.props.loading ? <h2>LOADING</h2> : null }
  //   //     <h2>Star Wars Characters:</h2>
  //   //     <CharacterList characters={this.props.characters} />
  //   //   </div>
  //   // );
  // } 
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mstp = state => {
  return { 
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}
export default connect( mstp, { fetchData: fetchData } )( CharacterListView );
