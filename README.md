
## Table of Contents

* [Prerequisite](#prerequisite)
* [Installation](#installation)
* [Props](#props)
* [Examples](#examples)

## Prerequisite
Foundation: Install [Foundation](https://foundation.zurb.com) css to your application. 

## Installation

To install, you can use [npm](https://npmjs.org/):


    $ npm install react-foundation-modal

## Props
| Attribute   | Required | Type     | description                                 | example                      |
|:------------|:---------|:---------|:--------------------------------------------|:-----------------------------|
| open     | required | Boolean  | to show or hide the dialog                  | false                        |
| isModal      | option   | Boolean   | to make the popup modal poup                       | false |
| size       | option   | String   | to set modal size               | tiny, small, large, full              |
| overlayStyle      | option   | Object   | to override overlay style               | -              |
| closeModal | required   | Function | callback function to set modal open to false | -                            |

## Examples

Here is a simple example of react-foundation-modal being used in an app with some all the options available.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-foundation-modal';

const overlayStyle = {
    'backgroundColor': 'rgba(33,10,10,.45)'
    };

class App extends React.Component {
  constructor(){
        super();
        this.state = {
            modalIsOpen: false
        }
    }
    showPopup = (status) => {
        this.setState({
            modalIsOpen: status
        });
    }

  render() {
    return (
      <div>
        <p><button className="button" onClick={() => this.showPopup(true)}>Click me for a modal</button></p>
            <Modal 
                open={this.state.modalIsOpen}
                closeModal={this.showPopup}
                isModal={true}
                size="large"
                overlayStyle={overlayStyle} >
                <h1>Awesome. I Have It.</h1>
                <p className="lead">Your couch. It is mine.</p>
                <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
                <button className="button" type="button" onClick={() => this.showPopup(false)} >
                    Close
                </button>
            </Modal>  
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);
```