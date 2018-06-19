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
          label = "Tags" // key and val both can be anything
          name="tags"
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

export default reduxForm({
  form: 'PostsNewForm' // This has to be a unique name and name does not matter
})(PostsNew);
