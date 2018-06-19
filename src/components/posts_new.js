import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
  renderField(field){ // field contains some event-handlers
    const { meta } = field;
    const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {meta.touched ? meta.error : ''}
        </div>
      </div>
    );
  }
        //    1              2         3
        // if 1 then (2 and 3), else (3)

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const { handleSubmit } = this.props;
    // handleSubmit is a property being passed to the component on behalf of redux-form
    // this.onSubmit.bind(this) is the action to call once handleSubmit passes

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label = "Title" // instead of passing a param
          name="title" // the key for JSON to be POSTed
          component={this.renderField} // Needed JSX
        />
        <Field
          label = "Categories" // key and val both can be anything
          name="categories"
          component={this.renderField}
        />
        <Field
          label = "Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  // console.log(values) -> {title: 'Title x', categories: "y", content: "z"}
  const errors = {}

  // Validate input from values
  if(!values.title){
    errors.title = "Enter a title"; // tied to name
  }
  if(!values.categories){
    errors.categories = "Enter a catagory or two";
  }
  if(!values.content){
    errors.content = "Enter some content";
  }

  //Return the object (if errors is empty, the form is fine)
  return errors;
}

export default reduxForm({
  validate, // key and value are the same
  form: 'PostsNewForm' // This has to be a unique name and name does not matter
})(
  connect(null, { createPost })(PostsNew)
);
