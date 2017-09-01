import React, { Component } from 'react';

var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var PanelGroup = require('react-bootstrap').PanelGroup;
var Panel = require('react-bootstrap').Panel;

class Posts extends Component {
  state = {posts: []}
   defaultKey = 1;

  constructor(props){
    super(props);
    this.state = {showPosts: false};
  }

  toogle = () => {
      this.setState(prevState => ({
            showPosts: !prevState.showPosts
    }));
  }

  handleClick = () => {
    console.log('this is:', this.props.user);
    fetch('/posts/user/'+this.props.user)
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
        this.defaultKey = posts[0].id;
        this.toogle();
      });  
  }


  render() {
    return (
        <div>
            <div>
                <ButtonGroup vertical block className="margin-10">
                    <Button onClick={this.handleClick}>Click to show <i><b>{this.props.name}</b></i>'s posts</Button>
                </ButtonGroup>            
            </div>
            <div>
                {this.state.showPosts 
                ? 
                    <div>
                        <PanelGroup defaultActiveKey={this.defaultKey} accordion>
                        {this.state.posts.map(post =>
                            <Panel className='margin-15-15' header={post.title} eventKey={post.id} key={post.id}>{post.body}.{post.body}</Panel>
                        )}
                        </PanelGroup>
                    </div>          
                : ''
                } 
            </div>
        </div>
      
        
    );
  }
}



export default Posts;
