!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},r={},a={}.hasOwnProperty,s=/^\.\.?(\/|$)/,i=function(e,t){for(var n,r=[],a=(s.test(t)?e+"/"+t:t).split("/"),i=0,o=a.length;o>i;i++)n=a[i],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var r=i(o(t),n);return e.require(r,t)}},c=function(e,t){var r=null;r=f&&f.createHot(e);var a={id:e,exports:{},hot:r};return n[e]=a,t(a.exports,l(e),a),a.exports},u=function(e){return r[e]?u(r[e]):e},d=function(e,t){return u(i(o(e),t))},m=function(e,r){null==r&&(r="/");var s=u(e);if(a.call(n,s))return n[s].exports;if(a.call(t,s))return c(s,t[s]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};m.alias=function(e,t){r[t]=e};var p=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,g=function(e){if(p.test(e)){var t=e.replace(p,"");a.call(r,t)&&r[t].replace(p,"")!==t+"/index"||(r[t]=e)}if(h.test(e)){var n=e.replace(h,"");a.call(r,n)||(r[n]=e)}};m.register=m.define=function(e,r){if("object"==typeof e)for(var s in e)a.call(e,s)&&m.register(s,e[s]);else t[e]=r,delete n[e],g(e)},m.list=function(){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e};var f=e._hmr&&new e._hmr(d,m,t,n);m._cache=n,m.hmr=f&&f.wrap,m.brunch=!0,e.require=m}}(),function(){var e;window;require.register("Actions.ls",function(e,t,n){var r,a;r=t("./dispatcher/AppDispatcher"),a=t("./Constants"),n.exports={placeBet:function(e,t){return r.dispatch({actionType:a.PLACE_BET,game:e,index:t})},closeBetModal:function(){return r.dispatch({actionType:a.PLACE_BET_CLOSE})}}}),require.register("Constants.ls",function(e,t,n){var r;r=t("keymirror"),n.exports=r({PLACE_BET:null,PLACE_BET_CLOSE:null})}),require.register("components/BetModal.ls",function(e,t,n){var r,a,s,i,o,l,c,u,d,m;r=t("react"),a=r.DOM,s=a.div,i=a.form,o=a.h2,l=a.h4,c=a.i,u=a.input,d=a.p,m=t("../Actions"),n.exports=r.createClass({propTypes:{game:r.PropTypes.object.isRequired,index:r.PropTypes.number.isRequired},betAddress:function(){return this.props.game.addr[this.props.index]},betText:function(){var e,t;switch(e=this.props.game.names[0],t=this.props.game.names[1],this.props.index){case 0:return e+" wins against "+t+"?";case 1:return t+" wins against "+e+"?";case 2:return e+" & "+t+" play a draw?"}},render:function(){return s({className:"ui basic modal"},s({className:"ui middle aligned center aligned grid"},s({className:"twelve wide column"},i({className:"ui form"},o(null,this.betText()),d(null,"WARNING: Never pay directly from an exchange, as winnings are sent back to the sending address!"),l(null,"Place your bet by paying to:"),s({className:"field"},s({className:"ui left icon input"},c({className:"money icon"}),u({id:"addr",value:this.betAddress(),readOnly:!0}))),s({className:"ui field middle aligned center aligned grid"},s({id:"qrcode"})),s({className:"ui field fluid large blue button",onClick:this.closeModal},"Close")))))},closeModal:function(){return $(".ui.modal").modal("hide"),m.closeBetModal()},componentDidMount:function(){return $(".ui.modal").modal({detachable:!1,onApprove:this.ok,onDeny:this.cancel}),new QRCode(document.getElementById("qrcode"),this.betAddress()),$(".ui.modal").modal("setting","closable",!1),$(".ui.modal").modal("show")},componentDidUpdate:function(){return $("#qrcode").html(""),this.componentDidMount()},componentWillUnmount:function(){return this.closeModal()}})}),require.register("components/GameEntry.ls",function(e,t,n){var r,a,s,i,o,l,c,u,d,m,p,h;r=t("react"),a=r.DOM,s=a.div,i=a.h1,o=a.h2,l=a.h4,c=a.img,u=a.button,d=a.p,m=a.a,p=t("../Actions"),h=t("../stores/GameStore"),n.exports=r.createClass({propTypes:{game:r.PropTypes.object.isRequired,alternate:r.PropTypes.bool.isRequired,hasStarted:r.PropTypes.bool.isRequired},placeHomeBet:function(){return p.placeBet(this.props.game,0)},placeAwayBet:function(){return p.placeBet(this.props.game,1)},placeDrawBet:function(){return p.placeBet(this.props.game,2)},getBnbFor:function(e){var t;return t=this.props.game.addr[e],h.getBetNBalanceFor(t)},loadBnb:function(){return h.loadBnbFor(this.props.game)},"class":function(){return this.props.alternate?"ui alternate three column middle aligned stackable grid":"ui three column middle aligned stackable grid"},renderBetInfo:function(e){var t;return t=this.getBnbFor(e),s(null,d(null," "),void 0!==t?s(null,null===t.balance?s({className:"ui active small inline loader"}):t.balance===!1?m({className:"ui basic blue button",target:"_blank",href:"https://chainz.cryptoid.info/ppc/address.dws?"+this.props.game.addr[e]},2>e?"Show bets on "+this.props.game.names[e]:"Show bets on Draw"):s(null,null!==t.bets?o(null,t.bets+" Bets"):void 0,l(null,t.balance+" PPC"))):void 0)},render:function(){return s({id:"game_"+this.props.game.id,className:"ui vertical segment center aligned"},s({className:this["class"]()},s({className:"row"},s({className:"sixteen wide column"},i(null,this.props.game.timestamp.toDateString()),o(null,this.props.game.timestamp.toLocaleTimeString()+" @ "+this.props.game.city))),s({className:"row"},s({className:"six wide column"},o(null,this.props.game.names[0]),c({className:"ui small centered image",src:"flags/4x3/"+this.props.game.shortnames[0]+".svg",alt:"Flag of "+this.props.game.names[0]})),s({className:"two wide column"}),s({className:"ui vertical divider"},"VS"),s({className:"two wide column"}),s({className:"six wide column"},o(null,this.props.game.names[1]),c({className:"ui small centered image",src:"flags/4x3/"+this.props.game.shortnames[1]+".svg",alt:"Flag of "+this.props.game.names[1]}))),s({className:"row"}),s({className:"column"}),s({className:"middle aligned center alignend grid"}),this.props.hasStarted?s({className:"ui red label"},"Game is on! No bets allowed."):void 0,s({className:"row"},s({className:"six wide column"},s(null,this.props.hasStarted?void 0:u({className:"ui primary button",onClick:this.placeHomeBet},"Bet on "+this.props.game.names[0])),this.renderBetInfo(0)),s({className:"four wide column"},s(null,this.props.hasStarted?void 0:u({className:"ui primary button",onClick:this.placeDrawBet},"Bet on Draw")),this.renderBetInfo(2)),s({className:"six wide column"},s(null,this.props.hasStarted?void 0:u({className:"ui primary button",onClick:this.placeAwayBet},"Bet on "+this.props.game.names[1])),this.renderBetInfo(1)))))},lazyload:function(){var e,t,n,r,a;return e=$(window).scrollTop(),t=e+$(window).height(),n=$("#game_"+this.props.game.id),r=n.offset().top,a=r+n.height(),!n.attr("loaded")&&a>=e&&t>=r?(h.loadBnbFor(this.props.game),console.log(this.props.game.id+" loaded"),n.attr("loaded",!0)):void 0},componentDidMount:function(){return $(window).scroll(this.lazyload),this.lazyload()}})}),require.register("components/Games.ls",function(e,t,n){var r,a,s,i,o,l,c,u,d,m,p,h,g,f,v,b,w;r=t("react"),a=r.DOM,s=a.div,i=a.h1,o=a.h2,l=a.h4,c=a.form,u=a.i,d=a.input,m=a.text,p=t("../stores/GameStore"),h=t("./GameEntry"),g=t("./BetModal"),a=t("prelude-ls"),f=a.map,v=a.sortBy,b=function(){return{allGames:v(function(e){return e.timestamp})(p.getAllFutureGames()),placingBet:p.placingBet()}},w=function(e){var t,n;return t=new Date,n=!1,f(function(e){return n=!n,r.createElement(h,{game:e,alternate:n,key:e.id,hasStarted:t>e.timestamp})})(e)},n.exports=r.createClass({render:function(){return this.state.allGames.length>0?s(null,w(this.state.allGames),this.renderModal()):s({className:"ui middle aligned center aligned segment"},s({className:"ui active large inline loader"}))},renderModal:function(){return this.state.placingBet?r.createElement(g,{game:p.getBetGame(),index:p.getBetIndex()}):void 0},getInitialState:b,_onChange:function(){return this.setState(b())},componentDidMount:function(){return p.addChangeListener(this._onChange)},componentWillUnmount:function(){return p.removeChangeListener(this._onChange)}})}),require.register("dispatcher/AppDispatcher.ls",function(e,t,n){var r,a;r=t("flux").Dispatcher,a=new r,n.exports=a}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=t("react-dom"),s=r(a),i=t("react"),o=r(i),l=t("components/Games"),c=r(l);document.addEventListener("DOMContentLoaded",function(){s["default"].render(o["default"].createElement(c["default"],null),document.querySelector("#games"))})}),require.register("stores/GameStore.ls",function(e,t,n){function r(e,t,n){var a=this;return function(){var s,i=_.call(arguments),o=i.length,l=n.length,c=t?t.concat():[],u=n?n.concat():[];for(s=0;o>s;++s)c[u[0]]=i[s],u.shift();return l>o&&o?r.apply(a,[e,c,u]):e.apply(a,c)}}function a(e,t){var n,r=function(a){return e.length>1?function(){var s=a?a.concat():[];return n=t?n||this:this,s.push.apply(s,arguments)<e.length&&arguments.length?r.call(n,s):e.apply(n,s)}:e};return r()}var s,i,o,l,c,u,d,m,p,h,g,f,v,b,w,y,B,N,C,x,_=[].slice;s=t("../dispatcher/AppDispatcher"),i=t("events").EventEmitter,o=t("../Constants"),l=t("object-assign"),c=t("prelude-ls"),u=c.concat,d=c.difference,m=c.each,p=c.filter,h=c.map,g="change",f=[],v=!1,b=null,w=null,y={P9mVk9MdGZb3VE2Vy7BhvmBWQbUVPkoGSV:{bets:5,balance:1e4},PRMzjuAKywP8YJfKTX1J4UPYykRAwYEiRp:{bets:2,balance:5e4},PLaNHk6UYHvYN7HwoiA8cf8JrVt9QPLgPG:{bets:null,balance:null}},n.exports=B=l({},i.prototype,{getAllFutureGames:function(){var e;return e=new Date,e.setHours(e.getHours()-3),p(function(t){return t.timestamp>e})(f)},loadGames:function(){return $.get("data/games.json",N)},placingBet:function(){return v},getBetGame:function(){return b},getBetIndex:function(){return w},getAllAddresses:function(){return u(h(function(e){return e.addr})(f))},loadBnbFor:function(e){var t;return m(function(e){return y[e]={bets:null,balance:null}})(e.addr),this.emitChange(),t=$.get("http://chainz.cryptoid.info/ppc/api.dws?q=multiaddr&key=7547f94398e3&active="+e.addr.join("|")),t.success(r.apply(this,[C,[e.addr,void 0],[1]])),t.error(r.apply(this,[x,[e.addr,void 0],[1]]))},getBetNBalanceFor:function(e){return y[e]},emitChange:function(){return this.emit(g)},addChangeListener:function(e){return this.on(g,e)},removeChangeListener:function(e){return this.removeListener(g,e)}}),N=function(e){return f=h(function(e){return e.timestamp=new Date(e.timestamp),e})(e),B.emitChange()},C=a(function(e,t){var n;return n=[],m(function(e){return n.push(e.address),y[e.address]={bets:e.n_tx,balance:e.final_balance/1e8}})(t.addresses),m(function(e){return y[e]={bets:0,balance:0}})(d(e,n)),B.emitChange()}),x=a(function(e,t){return m(function(e){return y[e]={bets:!1,balance:!1}})(e),B.emitChange()}),s.register(function(e){switch(e.actionType){case o.PLACE_BET:return v=!0,b=e.game,w=e.index,B.emitChange();case o.PLACE_BET_CLOSE:return v=!1,B.emitChange()}}),B.loadGames()}),require.alias("events/events.js","events"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");