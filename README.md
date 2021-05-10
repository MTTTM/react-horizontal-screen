# README.md

## Desc
- It provides horizontal web page layout and events.[online](https://codesandbox.io/s/react-horizontal-screen-llkx4?file=/src/App.js)


## Start

```
npm install react-horizontal-screen
```

## HorizontalScreen props 
### attrs
| key            | desc                                                                     | default  | required |
| -------------- | ------------------------------------------------------------------------ | -------- | -------- |
| width          | Design draft width                                                       | --       | TRUE     |
| height         | Design draft height                                                      | --       | TRUE     |
| cssVar         | css variable name                                                        | --hc-var | FALSE    |
| times          | Design draft multiple                                                    | --       | TRUE     |
| triggerTime    | Time to trigger adaptation after window change(no work on computer side) | 1000     | FALSE    |
| AdaptEventName | Adaptation status Event                                                  | hsAdapt  | FALSE    |
| setWrapAttr    | Set the width and height of the container                                | TRUE     | FALSE    |

### adaptedCallback {func}
- Adaptation event callback function

## SwipeWrap props 

| key            | desc                                                                     | default  | required |
| -------------- | ------------------------------------------------------------------------ | -------- | -------- |
| swipeCallBack  | swipe event callback function                                            | --       | TRUE     |
| stop           | event.stopPropagation()                                                  | --       | TRUE     |
| prevent        | event.preventDefault()                                                   | --hc-var | FALSE    |

## Function event

- params {obj}
- description pre {string} Event name prefix
- description distance {number} The distance to trigger the event, default 50

### supper addEventListenter after run function  event

- swipeLeft
- swipeRight
- swipeTop
- swipeBottom
- hsAdapt

### css var usage

```scss
@function px($num) {
  @return calc((#{$num}/ 3 * var(--hc-var)) * 1px);
}
.main {
  height: px(275 * 3);
  background: green;
}
```


## Usage demo

### Design draft size （667 _ 3）_（375 \* 3）;
### app.js
```javascript
import React from 'react';
import './app.scss';
import {HorizontalScreen,SwipeWrap,event} from "react-horizontal-screen"
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
```

### app.scss
```scss
 
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: none; /**disabled browser native event */
}
@function px($num) {
  @return calc((#{$num}/ 3 * var(--hc-var)) * 1px);
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  word-wrap: break-word;
  width: 100%;
  height: 100%;
}
#wrap {
  width: px(667 * 3);
  height: px(375 * 3);
}
p {
  font-size: px(16 * 3);
  text-align: center;
  line-height: 1.4;
}
.header {
  height: px(50 * 3);
  background: goldenrod;
  display: flex;
  color: red;
  .left {
    background: pink;
    height: px(25 * 3);
    width: px(300 * 3);
  }
  .mid {
    background: yellow;
    height: px(40 * 3);
    width: px(300 * 3);
  }
  .right {
    background: black;
    height: px(50 * 3);
    width: px(75 * 3);
  }
}
.main {
  height: px(275 * 3);
  background: green;
  display: flex;
  flex-direction: column;
}
.dom-event {
  height: 50%;
  background: red;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer {
  height: px(50 * 3);
  background: blue;
}
```