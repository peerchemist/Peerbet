!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],a=(i.test(t)?e+"/"+t:t).split("/"),s=0,o=a.length;o>s;s++)n=a[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var r=s(o(t),n);return e.require(r,t)}},u=function(e,t){var r=null;r=g&&g.createHot(e);var a={id:e,exports:{},hot:r};return n[e]=a,t(a.exports,l(e),a),a.exports},c=function(e){return r[e]?c(r[e]):e},m=function(e,t){return c(s(o(e),t))},p=function(e,r){null==r&&(r="/");var i=c(e);if(a.call(n,i))return n[i].exports;if(a.call(t,i))return u(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};p.alias=function(e,t){r[t]=e};var d=/\.[^.\/]+$/,f=/\/index(\.[^\/]+)?$/,h=function(e){if(d.test(e)){var t=e.replace(d,"");a.call(r,t)&&r[t].replace(d,"")!==t+"/index"||(r[t]=e)}if(f.test(e)){var n=e.replace(f,"");a.call(r,n)||(r[n]=e)}};p.register=p.define=function(e,r){if("object"==typeof e)for(var i in e)a.call(e,i)&&p.register(i,e[i]);else t[e]=r,delete n[e],h(e)},p.list=function(){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e};var g=e._hmr&&new e._hmr(m,p,t,n);p._cache=n,p.hmr=g&&g.wrap,p.brunch=!0,e.require=p}}(),function(){var e;window;require.register("Actions.ls",function(e,t,n){var r,a;r=t("./dispatcher/AppDispatcher"),a=t("./Constants"),n.exports={placeBet:function(e,t){return r.dispatch({actionType:a.PLACE_BET,game:e,index:t})}}}),require.register("Constants.ls",function(e,t,n){var r;r=t("keymirror"),n.exports=r({PLACE_BET:null})}),require.register("components/App.jsx",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=t("react"),u=r(l),c=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),o(t,[{key:"render",value:function(){return u["default"].createElement("div",{id:"content"},u["default"].createElement("h1",null," "),u["default"].createElement("h2",null,"Welcome!"),u["default"].createElement("ul",null,u["default"].createElement("li",null,u["default"].createElement("a",{href:"http://brunch.io"},"Brunch homepage")),u["default"].createElement("li",null,u["default"].createElement("a",{href:"https://facebook.github.io/react/"},"React.js homepage"))))}}]),t}(u["default"].Component);e["default"]=c}),require.register("components/BetModal.ls",function(e,t,n){var r,a,i,s,o,l,u,c,m;r=t("react"),a=r.DOM,i=a.div,s=a.form,o=a.h2,l=a.h4,u=a.i,c=a.input,m=t("../Actions"),n.exports=r.createClass({propTypes:{game:r.PropTypes.object.isRequired,index:r.PropTypes.number.isRequired},betAddress:function(){return this.props.game.addr[this.props.index]},betText:function(){var e,t;switch(e=this.props.game.names[0],t=this.props.game.names[1],this.props.index){case 0:return e+" wins against "+t+"?";case 1:return t+" wins against "+e+"?";case 2:return e+" & "+t+" play a draw?"}},render:function(){return i({className:"ui basic modal"},i({className:"ui middle aligned center aligned grid"},i({className:"twelve wide column"},s({className:"ui form"},o(null,this.betText()),l(null,"Place your bet by paying to:"),i({className:"field"},i({className:"ui left icon input"},u({className:"money icon"}),c({id:"addr",value:this.betAddress(),readOnly:!0}))),i({className:"ui field middle aligned center aligned grid"},i({id:"qrcode"})),i({className:"ui field fluid large blue button",onClick:this.closeModal},"Close")))))},closeModal:function(){return $(".ui.modal").modal("hide")},componentDidMount:function(){return $(".ui.modal").modal({detachable:!1,onApprove:this.ok,onDeny:this.cancel}),new QRCode(document.getElementById("qrcode"),this.betAddress()),$(".ui.modal").modal("show")},componentDidUpdate:function(){return $("#qrcode").html(""),this.componentDidMount()},componentWillUnmount:function(){return this.closeModal()}})}),require.register("components/GameEntry.ls",function(e,t,n){var r,a,i,s,o,l,u,c,m,p,d,f;r=t("react"),a=r.DOM,i=a.div,s=a.h1,o=a.h2,l=a.h4,u=a.img,c=a.button,m=a.p,p=a.a,d=t("../Actions"),f=t("../stores/GameStore"),n.exports=r.createClass({propTypes:{game:r.PropTypes.object.isRequired,alternate:r.PropTypes.bool.isRequired},placeHomeBet:function(){return d.placeBet(this.props.game,0)},placeAwayBet:function(){return d.placeBet(this.props.game,1)},placeDrawBet:function(){return d.placeBet(this.props.game,2)},getBnbFor:function(e){var t;return t=this.props.game.addr[e],f.getBetNBalanceFor(t)},loadBnb:function(){return f.loadBnbFor(this.props.game)},"class":function(){return this.props.alternate?"ui alternate three column middle aligned stackable grid":"ui three column middle aligned stackable grid"},renderBetInfo:function(e){return i(null,m(null," "),p({className:"ui basic blue button",target:"_blank",href:"https://chainz.cryptoid.info/ppc/address.dws?"+this.props.game.addr[e]},2>e?"Show bets on "+this.props.game.names[e]:"Show bets on Draw"))},render:function(){return i({className:"ui vertical segment center aligned"},i({className:this["class"]()},i({className:"row"},i({className:"sixteen wide column"},s(null,this.props.game.timestamp.toDateString()),o(null,this.props.game.timestamp.toLocaleTimeString()+" @ "+this.props.game.city))),i({className:"row"},i({className:"six wide column"},o(null,this.props.game.names[0]),u({className:"ui small centered image",src:"flags/4x3/"+this.props.game.shortnames[0]+".svg",alt:"Flag of "+this.props.game.names[0]})),i({className:"two wide column"}),i({className:"ui vertical divider"},"VS"),i({className:"two wide column"}),i({className:"six wide column"},o(null,this.props.game.names[1]),u({className:"ui small centered image",src:"flags/4x3/"+this.props.game.shortnames[1]+".svg",alt:"Flag of "+this.props.game.names[1]}))),i({className:"row"},i({className:"six wide column"},c({className:"ui primary button",onClick:this.placeHomeBet},"Bet on "+this.props.game.names[0]),this.renderBetInfo(0)),i({className:"four wide column"},c({className:"ui primary button",onClick:this.placeDrawBet},"Bet on Draw"),this.renderBetInfo(2)),i({className:"six wide column"},c({className:"ui primary button",onClick:this.placeAwayBet},"Bet on "+this.props.game.names[1]),this.renderBetInfo(1)))))}})}),require.register("components/Games.ls",function(e,t,n){var r,a,i,s,o,l,u,c,m,p,d,f,h,g,b,v,w;r=t("react"),a=r.DOM,i=a.div,s=a.h1,o=a.h2,l=a.h4,u=a.form,c=a.i,m=a.input,p=a.text,d=t("../stores/GameStore"),f=t("./GameEntry"),h=t("./BetModal"),a=t("prelude-ls"),g=a.map,b=a.sortBy,v=function(){return{allGames:b(function(e){return e.timestamp})(d.getAllFutureGames()),placingBet:d.placingBet()}},w=function(e){var t;return t=!1,g(function(e){return t=!t,r.createElement(f,{game:e,alternate:t,key:e.id})})(e)},n.exports=r.createClass({render:function(){return this.state.allGames.length>0?i(null,w(this.state.allGames),this.renderModal()):i({className:"ui middle aligned center aligned segment"},i({className:"ui active large inline loader"}))},renderModal:function(){return this.state.placingBet?r.createElement(h,{game:d.getBetGame(),index:d.getBetIndex()}):void 0},getInitialState:v,_onChange:function(){return this.setState(v())},componentDidMount:function(){return d.addChangeListener(this._onChange)},componentWillUnmount:function(){return d.removeChangeListener(this._onChange)}})}),require.register("dispatcher/AppDispatcher.ls",function(e,t,n){var r,a;r=t("flux").Dispatcher,a=new r,n.exports=a}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t("react-dom"),i=r(a),s=t("react"),o=r(s),l=t("components/Games"),u=r(l);document.addEventListener("DOMContentLoaded",function(){i["default"].render(o["default"].createElement(u["default"],null),document.querySelector("#games"))})}),require.register("stores/GameStore.ls",function(e,t,n){function r(e,t){var n,r=function(a){return e.length>1?function(){var i=a?a.concat():[];return n=t?n||this:this,i.push.apply(i,arguments)<e.length&&arguments.length?r.call(n,i):e.apply(n,i)}:e};return r()}var a,i,s,o,l,u,c,m,p,d,f,h,g,b,v,w,y,B;a=t("../dispatcher/AppDispatcher"),i=t("events").EventEmitter,s=t("../Constants"),o=t("object-assign"),l=t("prelude-ls"),u=l.concat,c=l.filter,m=l.map,p="change",d=[],f=!1,h=null,g=null,b={P9mVk9MdGZb3VE2Vy7BhvmBWQbUVPkoGSV:{bets:5,balance:1e4},PRMzjuAKywP8YJfKTX1J4UPYykRAwYEiRp:{bets:2,balance:5e4},PLaNHk6UYHvYN7HwoiA8cf8JrVt9QPLgPG:{bets:null,balance:null}},n.exports=v=o({},i.prototype,{getAllFutureGames:function(){var e;return e=new Date,c(function(t){return t.timestamp>e})(d)},loadGames:function(){return $.get("data/games.json",w)},placingBet:function(){return f},getBetGame:function(){return h},getBetIndex:function(){return g},getAllAddresses:function(){return u(m(function(e){return e.addr})(d))},loadBnbFor:function(e){},getBetNBalanceFor:function(e){return b[e]},emitChange:function(){return this.emit(p)},addChangeListener:function(e){return this.on(p,e)},removeChangeListener:function(e){return this.removeListener(p,e)}}),w=function(e){return d=m(function(e){return e.timestamp=new Date(e.timestamp),e})(e),v.emitChange()},y=function(e,t,n){return console.log(e)},B=r(function(e,t){return t=JSON.parse('{"block":241216,"stake":0,"stakenb":0,"received":39744293200,"receivednb":5,"sent":5000000000,"sentnb":1,"stakeIn":0,"stakeOut":0,"balance":34744293200,"tx":[[918280,"A43AC2D944FA5BFE",218344,1453934435,50,50],[938718,"B95F99474917551B",224359,2974713,-50,0],[970986,"7B672AA2691B9CE5",233478,4603613,3.32,3.32],[977992,"8EB329D1D1FD4543",234621,653155,299.122932,302.442932],[995397,"40DC735320EFD181",240262,2802771,25,327.442932],[996657,"52BA1EC07E4B8935",240689,250705,20,347.442932]]}'),b[e]={bets:t.receivednb,balance:t.received},f=!1,v.emitChange()}),a.register(function(e){switch(f=!1,e.actionType){case s.PLACE_BET:return f=!0,h=e.game,g=e.index,v.emitChange()}}),v.loadGames()}),require.alias("events/events.js","events"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");