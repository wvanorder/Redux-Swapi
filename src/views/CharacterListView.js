import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import { getThing } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getThing();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return <h1>Yo stuff is loading.</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state);
  return{
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading
  }
};

export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getThing
  }
)(CharacterListView);
