import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile'
import {shallow} from 'enzyme';

const user = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "password" : "jdhusd8asjfjkwaeuijkfanw",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  };

describe("Profile Test Suite", function(){
  it('Profile renders without crashing', function(){
    const div = document.createElement('div');
    ReactDOM.render(<Profile user={user} />, div)
  });
  it('Profile is rendered with properties of user', function(){
    const profile = shallow(
      <Profile user={user} />
    );
    expect(profile.contains("Ervin Howell")).toBe(true);
  })
  it('Profile is rendered without password', function(){
    const profile = shallow(
      <Profile user={user} />
    );
    expect(profile.contains("jdhusd8asjfjkwaeuijkfanw")).toBe(false);
  })

})
