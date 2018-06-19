import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{
  componentDidMount(){
    const { id } =this.props.match.params; // id from url
    this.props.fetchPost(id);
  }

  render(){
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <Link to="/">Back to Home</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <h3>{post.content}</h3>
      </div>
    );
  }
}
                                  // vvv props object that is headed to this component
function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
