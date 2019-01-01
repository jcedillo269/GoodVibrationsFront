import React from 'react';


export default class Form extends React.Component {



  render() {
    return (
      <div className="ui segment">
        <form id="form" onSubmit={(event) => this.props.handleSubmit(event)} className="ui form" >
          <input id="name" onChange={this.props.handleChange} type="text" placeholder="Full Name" defaultValue=""/>
          <input id="email" onChange={this.props.handleChange} type="email" placeholder="Email" defaultValue="" />
          <input type="submit" value="submit" />
        </form>
      </div>
            )
    }

}
