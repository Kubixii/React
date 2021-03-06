import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Main from './Main/Main'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'
import Footer from './Footer'
import VideoTest from './VideoTest/VideoTest';
import APItest from './APItest/APItest';
import Drzewo from './Drzewo/Drzewo'
import OnOff from './OnOff/OnOff';
import CSSSomething from './CSSSometring/CSSSomething';
import DoBazyDanych from './DoBazyDanych/DoBazyDanych';

class App extends Component {
  state = {
    page: <Main />,
  }
  render() {
    return (
      <>
        <Header pageChangeHandler={this.pageChangeHandler.bind(this)} />
        {this.state.page}
        <Footer />
      </>
    );
  }

  pageChangeHandler(page) {
    let pageSwap;
    switch (page) {
      case 'main': {
        pageSwap = <Main />
        break;
      }
      case 'gallery': {
        pageSwap = <Gallery />
        break;
      }
      case 'contact': {
        pageSwap = <Contact Alphabet={Alphabet} />
        break;
      }
      case 'videotest': {
        pageSwap = <VideoTest />
        break;
      }
      case 'APItest': {
        pageSwap = <APItest />
        break;
      }
      case 'drzewo': {
        pageSwap = <Drzewo />
        break;
      }
      case 'onoff': {
        pageSwap = <OnOff />
        break;
      }
      case 'csssth': {
        pageSwap = <CSSSomething />
        break;
      }
      case 'dobazy': {
        pageSwap = <DoBazyDanych />
        break;
      }
      default: {
        pageSwap = <Main />
        break;
      }
    }

    this.setState({
      page: pageSwap
    })
  }
}

export default App;


const Alphabet = [
  {
    "id": 0,
    "letter": "a",
    "picked": false
  },
  {
    "id": 1,
    "letter": "ą",
    "picked": false
  },
  {
    "id": 2,
    "letter": "b",
    "picked": false
  },
  {
    "id": 3,
    "letter": "c",
    "picked": false
  },
  {
    "id": 4,
    "letter": "ć",
    "picked": false
  },
  {
    "id": 5,
    "letter": "d",
    "picked": false
  },
  {
    "id": 6,
    "letter": "e",
    "picked": false
  },
  {
    "id": 7,
    "letter": "ę",
    "picked": false
  },
  {
    "id": 8,
    "letter": "f",
    "picked": false
  },
  {
    "id": 9,
    "letter": "g",
    "picked": false
  },
  {
    "id": 10,
    "letter": "h",
    "picked": false
  },
  {
    "id": 11,
    "letter": "i",
    "picked": false
  },
  {
    "id": 12,
    "letter": "j",
    "picked": false
  },
  {
    "id": 13,
    "letter": "k",
    "picked": false
  },
  {
    "id": 14,
    "letter": "l",
    "picked": false
  },
  {
    "id": 15,
    "letter": "ł",
    "picked": false
  },
  {
    "id": 16,
    "letter": "m",
    "picked": false
  },
  {
    "id": 17,
    "letter": "n",
    "picked": false
  },
  {
    "id": 18,
    "letter": "ń",
    "picked": false
  },
  {
    "id": 19,
    "letter": "o",
    "picked": false
  },
  {
    "id": 20,
    "letter": "ó",
    "picked": false
  },
  {
    "id": 21,
    "letter": "p",
    "picked": false
  },
  {
    "id": 22,
    "letter": "q",
    "picked": false
  },
  {
    "id": 23,
    "letter": "r",
    "picked": false
  },
  {
    "id": 24,
    "letter": "s",
    "picked": false
  },
  {
    "id": 25,
    "letter": "ś",
    "picked": false
  },
  {
    "id": 26,
    "letter": "t",
    "picked": false
  },
  {
    "id": 27,
    "letter": "u",
    "picked": false
  },
  {
    "id": 28,
    "letter": "v",
    "picked": false
  },
  {
    "id": 29,
    "letter": "w",
    "picked": false
  },
  {
    "id": 30,
    "letter": "x",
    "picked": false
  },
  {
    "id": 31,
    "letter": "y",
    "picked": false
  },
  {
    "id": 32,
    "letter": "z",
    "picked": false
  },
  {
    "id": 33,
    "letter": "ź",
    "picked": false
  },
  {
    "id": 34,
    "letter": "ż",
    "picked": false
  }
]