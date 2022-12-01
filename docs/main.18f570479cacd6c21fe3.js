/*! For license information please see main.18f570479cacd6c21fe3.js.LICENSE.txt */
(()=>{"use strict";var s={836:()=>{class s{startup(){console.log("open CPU")}shutdown(){console.log("close CPU")}}class t{startup(){console.log("open Disk")}shutdown(){console.log("close Disk")}}class e{startup(){console.log("open Memory")}shutdown(){console.log("close Memory")}}let o=new class{constructor(){this.cpu=new s,this.memory=new e,this.disk=new t}startup(){this.cpu.startup(),this.memory.startup(),this.disk.startup()}shutdown(){this.cpu.shutdown(),this.memory.shutdown(),this.disk.shutdown()}};o.startup(),o.shutdown()},762:()=>{class s{constructor(s){this.teacher=s}}let t=new class{constructor(){this.students=[],this.state="讲课"}askQuestion(){this.state="提问",this.notifyAllStudents()}getState(){return this.state}attach(s){this.students.push(s)}notifyAllStudents(){this.students.forEach((s=>s.update()))}};const e=new class extends s{update(){"提问"===this.teacher.getState()&&console.log("举手回答")}}(t),o=new class extends s{update(){"提问"===this.teacher.getState()&&console.log("低头看脚")}}(t);t.attach(e),t.attach(o),t.askQuestion()},586:()=>{class s{constructor(s,t){this.agency=s,this.name=t}order(s){this.agency.subscribe(s,((s,t)=>{console.log(this.name,s+"平",t+"元")}))}}let t=new class{constructor(){this._topic={}}subscribe(s,t){let e=this._topic[s];e?e.push(t):this._topic[s]=[t]}publish(s,...t){(this._topic[s]||[]).forEach((s=>s(...t)))}},e=new s(t,"大款"),o=new s(t,"北漂");e.order("豪宅"),o.order("单间");let n=new class{constructor(s){this.agency=s}lend(s,t,e){this.agency.publish(s,t,e)}}(t);n.lend("豪宅",1e5,1e6),n.lend("单间",10,2e3)},925:()=>{class s{constructor(s,t=1){this.rank=s,this.discount=t}}let t=new class{constructor(s,t){this.name=s,this.price=t}cost(s){return this.price*s.discount}}("笔记本电脑",1e3),e=new s("member",.8),o=new s("vip",.6),n=new s("superVip",.4),i=new s("guest");console.log(t.cost(e)),console.log(t.cost(o)),console.log(t.cost(n)),console.log(t.cost(i))}},t={};function e(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return s[o](i,i.exports,e),i.exports}(()=>{e(762),e(586);class s{sum(s,t){return s+t}}class t{minus(s,t){return s-t}}class o{multiply(s,t){return s*t}}class n{divide(s,t){return s/t}}let i=new class{constructor(){this.sumObj=new s,this.minusObj=new t,this.multiplyObj=new o,this.divideObj=new n}sum(s,t){return this.sumObj.sum(s,t)}minus(s,t){return this.minusObj.minus(s,t)}multiply(s,t){return this.multiplyObj.multiply(s,t)}divide(s,t){return this.divideObj.divide(s,t)}};console.log(i.sum(3,2)),i.minus(3,1),i.multiply(1,4),i.divide(5,5),e(836);class r{constructor(s,t){this.storage=t,this.name=s}save(){this.storage.save("cf",JSON.stringify(this))}read(){return this.storage.read("cf")}}let c=new class{save(s,t){throw new Error("Method not implemented.")}read(s){throw new Error("Method not implemented.")}},l=new class{save(s,t){}read(s){}},u=new r("cf",c);new r("cf",l),console.log(u.name),e(925)})()})();