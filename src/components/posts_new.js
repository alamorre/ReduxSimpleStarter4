import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
  renderField(field){ // field contains some event-handlers
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render(){
    return (
      <form>
        <Field
          label = "Title" // instead of passing a param
          name="title" // the key for JSON to be POSTed
          component={this.renderField} // Needed JSX
        />
        <Field
          label = "Catagories" // key and val both can be anything
          name="catagories"
          component={this.renderField}
        />
        <Field
          label = "Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values){
  // console.log(values) -> {title: 'Title x', catagories: "y", content: "z"}
  const errors = {}

  // Validate input from values
  if(!values.title){
    errors.title = "Enter a title"; // tied to name
  }
  if(!values.catagories){
    errors.title = "Enter a catagory or two";
  }
  if(!values.content){
    errors.title = "Enter some content";
  }

  //Return the object (if errors is empty, the form is fine)
  return errors;
}

export default reduxForm({
  validate, // key and value are the same
  form: 'PostsNewForm' // This has to be a unique name and name does not matter
})(PostsNew);
