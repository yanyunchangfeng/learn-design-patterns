/*! For license information please see main.0c7607a18ba248caf3a1.js.LICENSE.txt */
(()=>{"use strict";var t={762:()=>{class t{constructor(t){this.teacher=t}}let e=new class{constructor(){this.students=[],this.state="讲课"}askQuestion(){this.state="提问",this.notifyAllStudents()}getState(){return this.state}attach(t){this.students.push(t)}notifyAllStudents(){this.students.forEach((t=>t.update()))}};const s=new class extends t{update(){"提问"===this.teacher.getState()&&console.log("举手回答")}}(e),o=new class extends t{update(){"提问"===this.teacher.getState()&&console.log("低头看脚")}}(e);e.attach(s),e.attach(o),e.askQuestion()},586:()=>{class t{constructor(t,e){this.agency=t,this.name=e}order(t){this.agency.subscribe(t,((t,e)=>{console.log(this.name,t+"平",e+"元")}))}}let e=new class{constructor(){this._topic={}}subscribe(t,e){let s=this._topic[t];s?s.push(e):this._topic[t]=[e]}publish(t,...e){(this._topic[t]||[]).forEach((t=>t(...e)))}},s=new t(e,"大款"),o=new t(e,"北漂");s.order("豪宅"),o.order("单间");let r=new class{constructor(t){this.agency=t}lend(t,e,s){this.agency.publish(t,e,s)}}(e);r.lend("豪宅",1e5,1e6),r.lend("单间",10,2e3)}},e={};function s(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s(762),s(586)})();