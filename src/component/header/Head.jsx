import React, {Component} from 'react';

class Head extends Component {
   constructor() {
      super();

      this.state = {
         mode: "inline"
      }
   }

   render() {
      return <div>Im Head...</div>;
   }
}

export default Head;