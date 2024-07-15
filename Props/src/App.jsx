import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import UserProfileCard from './UserProfileCard';
import Styled from './Styled';

const App = () => {
  return (
    <div>
      <Greeting name="John Doe" />
      <UserProfileCard
        name="Jane Smith"
        age={30}
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
        location="New York, USA"
        profilePicture="https://via.placeholder.com/150"
      />
      <Styled isStyled={true} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


export default App
