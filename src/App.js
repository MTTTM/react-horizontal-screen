import React from 'react';
import './app.scss';
//import {HorizontalScreen,SwipeWrap,event} from "./src/index.js"
 import {HorizontalScreen,SwipeWrap,event} from "react-horizontal-screen"
// import {HorizontalScreen,SwipeWrap,event} from "react-xx"
event();
export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        hsObj:{
          width: 2001,
          height: 1125,
          cssVar: "hc-var",
          times: 3
        },
        domSwipeText:""
      
    };
    this.myRef = React.createRef();
  }
  swipeCallBack(data,el){
    let { type, dis } = data;
      console.log("dom event", data, type, dis, el);
      if (type === "swipeLeft" && dis >= 20) {
        this.setState({"domSwipeText":"swipeLeft"})
        console.log("swipeLeft");
      } else if (type === "swipeRight" && dis >= 20) {
        console.log("swipeRight");
        this.setState({"domSwipeText":"swipeRight"})
      }
       // if (type == "swipeBottom" && dis >= 5) {
      //   console.log("swipeBottom");
      //   this.domSwipe = "swipeBottom";
      // } else if (type == "swipeTop" && dis >= 5) {
      //   console.log("swipeTop");
      //   this.domSwipe = "swipeTop";
      // }
  }
  swipeCallback(obj) {
    if (obj.data.data.type) {
        alert(obj.data.data.type);
    } else {
      clearTimeout(window.hsAdaptTimer);
       window.hsAdaptTimer=setTimeout(()=>{
          alert('hsAdapt');
        },1000)
    }
  }
  adaptedCallback(){
    clearTimeout(window.hsAdaptTimer);
    window.hsAdaptTimer=setTimeout(()=>{
      alert('hsAdapt');
    },1000)
  }
  componentDidMount() {
    window.addEventListener("hsAdapt", this.swipeCallback);
    window.addEventListener("swipeLeft", this.swipeCallback);
    window.addEventListener("swipeRight", this.swipeCallback);
    window.addEventListener("swipeTop", this.swipeCallback);
    window.addEventListener("swipeBottom", this.swipeCallback);
  }
  componentWillUnmount(){
     /*don't forget to remove eventlistener!!*/
     window.removeEventListener("hsAdapt", this.swipeCallback);
     window.removeEventListener("swipeLeft", this.swipeCallback);
     window.removeEventListener("swipeRight", this.swipeCallback);
     window.removeEventListener("swipeTop", this.swipeCallback);
     window.removeEventListener("swipeBottom", this.swipeCallback);
  }
  render() {
    return (
      <div className="App">
        <HorizontalScreen 
        attrs={this.state.hsObj}
        adaptedCallback={this.adaptedCallback}
        className="box">
            <div id="wrap">
              <div className="header">
                <div className="left">25</div>
                <div className="mid">40</div>
                <div className="right">50</div>
              </div>
              <div className="main">
                <SwipeWrap 
                  swipeCallBack={(data,el)=>this.swipeCallBack(data,el)}
                  stop={true}
                  prevent={true}
                  className="dom-event">
                  <div  className="dom-event">
                    <p>Red block is Dom Swipe area.</p>
                    <h3>swipe type:{this.state.domSwipeText}</h3>
                  </div>
                </SwipeWrap>
                
                <p>window swipe area</p>
              </div>
              <div className="footer"></div>
            </div>
       
        </HorizontalScreen>
      </div>
    );
  }
 
}


