(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"008a":function(t,e,i){},"27c4":function(t,e,i){"use strict";i("3e0f")},"34f8":function(t,e,i){"use strict";i("008a")},3661:function(t,e,i){"use strict";i("8e56")},"37f9":function(t,e,i){},"3e0f":function(t,e,i){},"50e3":function(t,e,i){"use strict";i("fe37")},"713b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{staticClass:"base",attrs:{view:"lHh Lpr lFf"}},[i("q-header",{attrs:{elevated:""}},[i("q-toolbar",[i("div",{staticClass:"row justify-between full-width"},[i("div",{staticClass:"col-auto"},[i("q-toolbar-title",[t._v("\n            OBS Festival Control\n          ")])],1),i("div",{staticClass:"col-grow"},[i("MidiHub",{attrs:{obsIsConnected:t.obsIsConnected,scenes:t.scenes,sources:t.sources,updateFader:t.updateFader}})],1),i("div",{staticClass:"col-auto"},[i("div",{staticClass:"row no-wrap justify-end"},[i("q-btn",{attrs:{loading:t.obsConnectionPending,color:t.obsBtnColor,label:t.obsBtnLabel},on:{click:function(e){return t.onConnectBtn()}}}),i("q-input",{attrs:{outlined:"","bg-color":"white",label:t.obsAddressLabel,"stack-label":"",dense:!0},model:{value:t.obsAddress,callback:function(e){t.obsAddress=e},expression:"obsAddress"}})],1)])])]),i("div",{staticClass:"row flex-nowrap",staticStyle:{"background-color":"black"}},[i("FaderPanel",{ref:"faderPanel",attrs:{obs:t.obs,sources:t.sources}})],1),i("div",{staticClass:"row"},[i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_before",label:"Timetable"},on:{click:function(e){return t.timetable("retract")}}}),i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_next",label:"Timetable"},on:{click:function(e){return t.timetable("advance")}}}),i("q-btn",{staticClass:"col",attrs:{color:"red",label:"Transition"},on:{click:function(e){return t.transition()}}}),i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_before",label:"Timetable"},on:{click:function(e){return t.timetable("retract")}}}),i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_next",label:"Timetable"},on:{click:function(e){return t.timetable("advance")}}}),i("q-btn",{staticClass:"col",attrs:{color:"red",label:"Transition"},on:{click:function(e){return t.transition()}}}),i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_before",label:"Timetable"},on:{click:function(e){return t.timetable("retract")}}}),i("q-btn",{staticClass:"col-auto mini",attrs:{color:"grey",stack:"",icon:"navigate_next",label:"Timetable"},on:{click:function(e){return t.timetable("advance")}}})],1)],1),i("q-page-container",[i("q-page",[i("div",{staticClass:"q-pa-sm"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col panel"},[i("ScenePanel",{attrs:{obs:t.obs,scenes:t.scenes,status:t.status}})],1),i("div",{staticClass:"col panel"},[i("SourcePanel",{attrs:{obs:t.obs,sources:t.sources}})],1)])])])],1)],1)},n=[],o=(i("e01a"),i("4e82"),i("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-sm"},[i("div",{staticClass:"row"},t._l(t.scenes,(function(e,s){return i("SceneButton",{key:e.name,attrs:{obs:t.obs,scene:e,index:s,status:t.status,isPreview:s==t.status.previewIndex,isCurrent:s==t.status.currentIndex}})})),1)])}),a=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quarter"},[i("q-btn",{staticClass:"full-width",attrs:{color:t.color,"text-color":"black",label:t.scene.name},on:{click:function(e){return t.switchToScene()}}})],1)},r=[],l={name:"SceneButton",props:{obs:Object,scene:Object,index:Number,isPreview:Boolean,isCurrent:Boolean},created:function(){this.$root.$on("scene"+this.index,this.switchToScene)},destroyed:function(){this.$root.$off("scene"+this.index)},computed:{color:function(){let t="white";return this.isCurrent?t="red":this.isPreview&&(t="yellow"),console.log(`scene${this.index} color changed to ${t}`),this.$root.$emit("midiout",{name:"scene",index:this.index,color:t}),t}},methods:{switchToScene(){console.log(`switchToScene("${this.scene.name}")`),this.obs.send("SetPreviewScene",{"scene-name":this.scene.name})}}},d=l,u=(i("50e3"),i("710d")),h=i("9c40"),m=i("984b"),b=i.n(m),p=Object(u["a"])(d,c,r,!1,null,"2adca226",null),f=p.exports;b()(p,"components",{QBtn:h["a"]});var v={name:"ScenePanel",props:{obs:Object,scenes:Array,status:Object},components:{SceneButton:f},methods:{}},g=v,S=Object(u["a"])(g,o,a,!1,null,null,null),I=S.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-sm"},[i("div",{staticClass:"row"},t._l(t.sources,(function(e,s){return i("SourceButton",{key:e.name,attrs:{obs:t.obs,source:e,index:s}})})),1)])},O=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"quarter"},[i("q-btn",{staticClass:"full-width",attrs:{stack:"",color:t.color,"text-color":"black"},on:{click:function(e){return t.onClick()}}},[i("q-icon",{attrs:{name:t.icon}}),i("div",{staticClass:"label"},[t._v("\n      "+t._s(t.source.name)+"\n    ")])],1)],1)},w=[],$=(i("e6cf"),{name:"SourceButton",props:{obs:Object,source:Object,index:Number},data(){return{settings:{},mediaState:"unknown"}},created:function(){this.loadSourceSettings(this.source),this.loadMediaState(),this.$root.$on("source"+this.index,this.onClick)},destroyed:function(){this.$root.$off("source"+this.index)},computed:{color:function(){let t="white";return"playing"===this.mediaState?t="red":"paused"===this.mediaState&&(t="yellow"),this.$root.$emit("midiout",{name:"source",index:this.index,color:t}),t},icon:function(){return this.settings.is_local_file?"playing"===this.mediaState?"pause":"play_arrow":"autorenew"}},watch:{source:{deep:!0,handler(){this.source.needsUpdate=!1,this.loadMediaState()}}},methods:{onClick(){this.settings.is_local_file?"playing"===this.mediaState?this.obs.send("PlayPauseMedia",{sourceName:this.source.name,playPause:!0}):"paused"===this.mediaState?this.obs.send("PlayPauseMedia",{sourceName:this.source.name,playPause:!1}):this.obs.send("RestartMedia",{sourceName:this.source.name}):this.reloadSource()},reloadSource(){(async()=>{var t=await this.obs.send("GetSourceSettings",{sourceName:this.source.name});this.settings=t.sourceSettings,await this.obs.send("SetSourceSettings",{sourceName:this.source.name,sourceSettings:t.sourceSettings}),setTimeout(this.loadMediaState,50)})()},loadSourceSettings(t){(async()=>{var t=await this.obs.send("GetSourceSettings",{sourceName:this.source.name});this.settings=t.sourceSettings})()},loadMediaState(){(async()=>{var t=await this.obs.send("GetMediaState",{sourceName:this.source.name});this.mediaState=t.mediaState,console.log(`Media state is ${this.mediaState} for source ${this.source.name}`)})()}}}),y=$,B=(i("3661"),i("0016")),T=Object(u["a"])(y,x,w,!1,null,"7dd1fcfa",null),k=T.exports;b()(T,"components",{QBtn:h["a"],QIcon:B["a"]});var q={name:"SourcePanel",props:{obs:Object,sources:Array},components:{SourceButton:k},methods:{transition(){}}},M=q,N=Object(u["a"])(M,C,O,!1,null,null,null),J=N.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-sm full-width"},[i("div",{staticClass:"row"},t._l(4,(function(e,s){return i("Fader",{key:s,ref:"faders",refInFor:!0,attrs:{index:s,obs:t.obs,sources:t.sources}})})),1)])},_=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col fader"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4 fader"},[i("q-select",{attrs:{options:t.sources,"option-label":"name","option-value":"name","map-options":"","emit-value":"",dark:"",dense:"",borderless:"","hide-bottom-space":""},model:{value:t.selectedSource,callback:function(e){t.selectedSource=e},expression:"selectedSource"}})],1),i("div",{staticClass:"col fader"},[i("q-slider",{attrs:{color:"red",min:0,max:127,"label-value":t.calcDB(t.value).toFixed(1),label:"",dark:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])])},A=[],E={name:"Fader",props:{obs:Object,sources:Array,index:Number},data(){return{value:0,selectedSource:""}},created:function(){this.$root.$on("midiFader"+this.index,this.onMidiEvent)},destroyed:function(){this.$root.$off("midiFader"+this.index)},watch:{value:function(t){if(!this.selectedSource||0===this.selectedSource.length||""===this.selectedSource)return;const e=this.calcDB(t);this.obs.send("SetVolume",{source:this.selectedSource,volume:e,useDecibel:!0})}},computed:{color:function(){return"white"}},methods:{calcDB(t){let e=(t-127)/2.1167;return 0===t&&(e=-100),e},onMidiEvent(t){this.value=t.value}}},j=E,F=(i("eca9"),i("ddd8")),L=i("c1d0"),Q=i("8572"),H=Object(u["a"])(j,P,A,!1,null,"78041d0c",null),U=H.exports;b()(H,"components",{QSelect:F["a"],QSlider:L["a"],QField:Q["a"]});var G={name:"FaderPanel",components:{Fader:U},props:{obs:Object,sources:Array},data(){return{}},created:function(){},computed:{color:function(){return"white"}},methods:{updateFaderValue(t,e){t<0||t>=this.$refs.faders.length||this.$refs.faders[t].onMidiEvent({value:e})}}},R=G,W=(i("27c4"),Object(u["a"])(R,D,_,!1,null,"61ddb4f5",null)),V=W.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-center no-wrap"},[i("div",{staticClass:"col-2"},[i("q-select",{attrs:{options:t.midiInputsAvailable,disable:t.midiSelectDisabled,label:"MIDI Inputs","label-color":"orange",dense:"","hide-bottom-space":"",dark:""},on:{filter:t.initMidi},model:{value:t.midiInputName,callback:function(e){t.midiInputName=e},expression:"midiInputName"}})],1),i("div",{staticClass:"col-1"},[i("q-btn",{attrs:{icon:"edit",size:"m",color:"orange",padding:"none",disable:t.midiSelectDisabled},on:{click:function(e){t.showJsInputTextDialog=!0}}})],1),i("div",{staticClass:"col-2"},[i("q-select",{attrs:{options:t.midiOutputsAvailable,disable:t.midiSelectDisabled,label:"MIDI Outputs","label-color":"cyan",dense:"","hide-bottom-space":"",dark:""},on:{filter:t.initMidi},model:{value:t.midiOutputName,callback:function(e){t.midiOutputName=e},expression:"midiOutputName"}})],1),i("div",{staticClass:"col-1"},[i("q-btn",{attrs:{icon:"edit",size:"m",color:"cyan",padding:"none",disable:t.midiSelectDisabled},on:{click:function(e){t.showJsOutputTextDialog=!0}}})],1),i("div",{staticClass:"col-auto"},[i("q-btn",{attrs:{color:t.midiBtnColor,label:t.midiBtnLabel},on:{click:t.onMidiBtn}})],1),i("q-dialog",{attrs:{"full-width":"","full-height":""},on:{"before-hide":t.parseMidiJsHandler},model:{value:t.showJsInputTextDialog,callback:function(e){t.showJsInputTextDialog=e},expression:"showJsInputTextDialog"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("MIDI Input Dispatcher")])]),i("q-card-section",{staticClass:"q-pt-none editor-height"},[i("jsEditor",{attrs:{lang:"javascript",theme:"chrome",width:"100%"},on:{init:t.editorInit},model:{value:t.midiInputJsText,callback:function(e){t.midiInputJsText=e},expression:"midiInputJsText"}})],1),i("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),i("q-dialog",{attrs:{"full-width":"","full-height":""},on:{"before-hide":t.parseMidiJsHandler},model:{value:t.showJsOutputTextDialog,callback:function(e){t.showJsOutputTextDialog=e},expression:"showJsOutputTextDialog"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("MIDI Output Dispatcher")])]),i("q-card-section",{staticClass:"q-pt-none editor-height"},[i("jsEditor",{attrs:{lang:"javascript",theme:"chrome",width:"100%"},on:{init:t.editorInit},model:{value:t.midiOutputJsText,callback:function(e){t.midiOutputJsText=e},expression:"midiOutputJsText"}})],1),i("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1)],1)},K=[],X={name:"MidiInputHub",components:{jsEditor:i("7c9e")},props:{obsIsConnected:Boolean,updateFader:Function},data(){return{midi:null,midiIsConnected:!1,midiBtnLabel:"Attach MIDI",midiInputsAvailable:null,midiInputName:"",showJsInputTextDialog:!1,midiInputJsText:null,midiInputJsHandler:null,midiOutputsAvailable:null,midiOutputName:"",showJsOutputTextDialog:!1,midiOutputJsText:null,midiOutputJsHandler:null,midiOutput:null}},created:function(){this.$root.$on("midiout",this.onMidiOutEvent),this.midi=i("c62b"),this.midiInputJsText=this.$q.localStorage.getItem("midiInputJsText"),this.midiInputJsText||(this.midiInputJsText="\n// Input: midiData\n// Output: [ eventName, eventData ]\n\nconsole.log(midiData);\n\nreturn [null, null];\n"),this.midiOutputJsText=this.$q.localStorage.getItem("midiOutputJsText"),this.midiOutputJsText||(this.midiOutputJsText="\n// Input: eventData, midiOutput\n// Output: none\n\nconsole.log(eventData);\n\n"),this.parseMidiJsHandler()},destroyed:function(){this.$root.$off("midiout"),this.midiInput.removeListener(),this.midi.disable()},computed:{midiBtnColor:function(){return this.midiIsConnected?"green":"grey"},midiSelectDisabled:function(){return!!this.midiIsConnected}},methods:{editorInit(){i("2099"),i("bb36"),i("95b8")},parseMidiJsHandler(){this.$q.localStorage.set("midiInputJsText",this.midiInputJsText),this.midiInputJsHandler=new Function("midiData",this.midiInputJsText),this.$q.localStorage.set("midiOutputJsText",this.midiOutputJsText),this.midiOutputJsHandler=new Function("eventData","midiOutput",this.midiOutputJsText)},onMidiBtn(){if(this.midiIsConnected)this.disconnectMidi(),this.midiIsConnected=!1,this.midiBtnLabel="Attach MIDI";else{const t=this.connectMidi();t&&(this.midiIsConnected=!0,this.midiBtnLabel="Detach MIDI")}},onMidiOutEvent(t){null!=this.midiOutput&&this.midiOutputJsHandler(t,this.midiOutput)},initMidi(t,e,i){this.midi.disable(),this.midiInputsAvailable=[],this.midiOutputsAvailable=[],this.midi.enable((t=>{t&&console.log("Webmidi Error:"+t),this.midi.inputs.map((t=>{this.midiInputsAvailable.push(t.name),console.log(`'${t.id} / '${t.name}`)})),this.midi.outputs.map((t=>{this.midiOutputsAvailable.push(t.name),console.log(`'${t.id} / '${t.name}`)})),"undefined"!==typeof e&&e()}))},disconnectMidi(){this.midiInput.removeListener(),this.midi.disable(),this.midiInputName="",this.midiInputsAvailable=[],this.midiOutputName="",this.midiOutputsAvailable=[],this.midiOutput=null},connectMidi(){return!(!this.midiInputName||""===this.midiInputName)&&(this.midiInput=this.midi.getInputByName(this.midiInputName),console.log(this.midiInput),this.midiInput?(this.midiInput.addListener("noteon","all",(t=>{const e=t.channel,i=t.note.number,s=t.velocity;this.obsIsConnected||console.log(`Channel: ${e} / Note: ${i} / Velocity: ${s}`);const[n,o]=this.midiInputJsHandler({channel:e,note:i});n&&this.$root.$emit(n,o)})),this.midiInput.addListener("controlchange","all",(t=>{const e=t.channel,i=t.controller.number,s=t.value;this.obsIsConnected||console.log(`Channel: ${e} / Control: ${i} / Value: ${s}`);const[n,o]=this.midiInputJsHandler({channel:e,control:i,value:s});n&&(n.startsWith("midiFader")?this.updateFader(o.index,o.value):this.$root.$emit(n,o))})),console.log(this.midiOutputName),this.midiOutputName&&(this.midiOutput=this.midi.getOutputByName(this.midiOutputName),console.log(this.midiOutput),!this.midiOutput)?(console.log(`MIDI Output named ${this.midiOutputName} could not be opened`),!0):(this.$root.$emit("midiout",{name:"init"}),!0)):(console.log(`MIDI Input named '${this.midiInputName}' could not be opened`),this.onMidiBtn(),!1))}}},Y=X,Z=(i("34f8"),i("24e8")),tt=i("f09f"),et=i("a370"),it=i("4b7e"),st=i("7f67"),nt=Object(u["a"])(Y,z,K,!1,null,"4c724f94",null),ot=nt.exports;b()(nt,"components",{QSelect:F["a"],QBtn:h["a"],QDialog:Z["a"],QCard:tt["a"],QCardSection:et["a"],QCardActions:it["a"]}),b()(nt,"directives",{ClosePopup:st["a"]});var at={name:"MainLayout",components:{ScenePanel:I,SourcePanel:J,FaderPanel:V,MidiHub:ot},data(){return{obsAddress:"",obsConnectionPending:!1,obsIsConnected:!1,obsBtnLabel:"Connect",obsAddressLabel:"OBS Address",obs:{},scenes:[],sources:[],srcMap:null,status:{previewIndex:-1,currentIndex:-1}}},computed:{obsBtnColor:function(){return this.obsIsConnected?"green":"grey"}},created:function(){"undefined"===typeof window.OBSWebSocket&&(window.OBSWebSocket=i("c223")),this.$root.$on("transition",this.transition),this.$root.$on("timetable",this.timetable)},destroyed:function(){try{this.obs.disconnect()}catch(t){}this.$root.$off("transition"),this.$root.$off("timetable")},methods:{updateFader(t,e){this.$refs.faderPanel.updateFaderValue(t,e)},onConnectBtn(){if(!this.obsConnectionPending)if(this.obsConnectionPending=!0,this.obsIsConnected)this.disconnectOBS();else try{this.connectOBS()}catch(t){console.log(t),this.obsConnectionPending=!1}},connectOBS(){this.initOBS(),this.obs.connect({address:this.obsAddress}).catch((t=>{this.onOBSError(t)}))},disconnectOBS(){this.obs.disconnect(),this.obsConnectionPending=!1},onOBSConnected(){this.obsBtnLabel="Disconnect",this.obsConnectionPending=!1,this.obsIsConnected=!0,this.obs.send("GetSceneList").then((t=>{console.log("GetSceneList retrieved # scenes: "+String(t.scenes.length)),this.scenes=t.scenes,this.status.currentIndex=this.findSceneIndex(t.currentScene),this.obs.send("GetPreviewScene").then((t=>{this.status.previewIndex=this.findSceneIndex(t.name)})),this.obs.send("GetSourcesList").then((t=>{var e=new Map;t.sources.sort(((t,e)=>t.name<e.name?-1:t.name>e.name?1:0)),t.sources.forEach(((t,i)=>{"ffmpeg_source"===t.typeId&&(t.needsUpdate=!1,e.set(t.name,t))})),t.sources=Array.from(e.values()),this.sources=t.sources,this.srcMap=e}))}))},onOBSDisconnected(){this.obsBtnLabel="Connect",this.obsConnectionPending=!1,this.obsIsConnected=!1,this.scenes=[],this.sources=[],this.status.previewIndex=-1,this.status.currentIndex=-1},onOBSError(t){"CONNECTION_ERROR"===t.code&&(this.disconnectOBS(),this.onOBSDisconnected(),this.obsAddressLabel=t.description),this.obsConnectionPending=!1,console.error("OBS Websocket Error: ",t)},findSceneIndex(t){console.log(`findScene("${t}")`);for(var e=0;e<this.scenes.length;e++)if(this.scenes[e].name===t)return e;return-1},transition(){this.obsIsConnected&&this.obs.send("TransitionToProgram")},timetable(t){this.obsIsConnected&&("retract"===t?this.obs.send("TriggerHotkeyByName",{hotkeyName:"ROTATE_ccw"}):this.obs.send("TriggerHotkeyByName",{hotkeyName:"ROTATE_cw"}))},initOBS(){try{this.obs.disconnect()}catch(t){}this.obs=new window.OBSWebSocket,this.obs.on("error",(t=>{this.onOBSError(t)})),this.obs.on("ConnectionOpened",this.onOBSConnected),this.obs.on("ConnectionClosed",this.onOBSDisconnected),this.obs.on("SwitchScenes",(t=>{this.status.currentIndex=this.findSceneIndex(t.sceneName)})),this.obs.on("PreviewSceneChanged",(t=>{this.status.previewIndex=this.findSceneIndex(t.sceneName)})),this.obs.on("MediaPlaying",(t=>{this.notifySourceUpdate(t.sourceName)})),this.obs.on("MediaEnded",(t=>{this.notifySourceUpdate(t.sourceName)})),this.obs.on("MediaPaused",(t=>{this.notifySourceUpdate(t.sourceName)})),this.obs.on("MediaRestarted",(t=>{this.notifySourceUpdate(t.sourceName)}))},notifySourceUpdate(t){console.log("notifySourceUpdate to "+t),this.srcMap.get(t).needsUpdate=!0}}},ct=at,rt=(i("8785"),i("4d5a")),lt=i("e359"),dt=i("65c6"),ut=i("6ac5"),ht=i("27f9"),mt=i("09e3"),bt=i("9989"),pt=Object(u["a"])(ct,s,n,!1,null,"42f74848",null);e["default"]=pt.exports;b()(pt,"components",{QLayout:rt["a"],QHeader:lt["a"],QToolbar:dt["a"],QToolbarTitle:ut["a"],QBtn:h["a"],QInput:ht["a"],QPageContainer:mt["a"],QPage:bt["a"]})},8785:function(t,e,i){"use strict";i("37f9")},"8e56":function(t,e,i){},b76a:function(t,e,i){},eca9:function(t,e,i){"use strict";i("b76a")},fe37:function(t,e,i){}}]);