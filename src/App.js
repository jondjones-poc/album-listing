import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import AlbumContainer from './components/AlbumContainer'
import getAlbums from './state/selectors/getAlbums';
import styled from "styled-components"

const Heading = styled.div`
    display: block;
    font-weight: bold;
    font-size: 1.5rem;
    padding-bottom: 1rem;

    span {
      padding-left: 1rem;
    }
`


// Use container pattern to decouple concerns from grid
const AlbumListingContainer = connect(getAlbums)(AlbumContainer);

function App() {

  const [showAll, setShowAll] = useState(true);

  return (
    <Fragment>    
      <Heading>
        Albums  <span onClick={() => setShowAll(!showAll)}> {showAll ?  '⬆️' : '⬇️'}</span>
      </Heading>
      <AlbumListingContainer showAll={showAll}></AlbumListingContainer>
    </Fragment>

  );
}

export default App;
