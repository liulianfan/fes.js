(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{404:function(t,e,l){},467:function(t,e,l){"use strict";var a=l(404);l.n(a).a},505:function(t,e,l){"use strict";l.r(e);l(8);var a={data:function(){return{}},methods:{showModal1:function(){this.$refs.modal1.show()},showModal2:function(){this.$refs.modal2.show()},showModal3:function(){this.$refs.modal3.show()},showModal4:function(){this.$refs.modal4.show()},beforeClose:function(){var t=this;return new Promise((function(e,l){t.$Message.confirm("是否关闭模态框？").then((function(t){e(0===t)}))}))},close:function(){console.log("closed")},scroll:function(t){console.log(t)}}},s=(l(467),l(57)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"modal-模态框"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#modal-模态框"}},[t._v("#")]),t._v(" Modal 模态框")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("主要用于在不跳转页面的前提下，在当前流程里面展示部分内容，可以是表单可以是一大段描述。")]),t._v(" "),l("h2",{attrs:{id:"代码示例"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),l("ClientOnly",[l("row",[l("cell",{staticClass:"pr-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/modal/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-button",{on:{click:t.showModal1}},[t._v("显示弹窗")]),t._v(" "),l("modal",{ref:"modal1",attrs:{title:"新增","sub-title":"客户信息"},on:{"on-close":t.close}},[l("Wb-form",[l("Form-item",{attrs:{label:"输入框"}},[l("Wb-input",{attrs:{placeholder:"我是文本哦"}})],1),t._v(" "),l("Form-item",{attrs:{label:"下拉框"}},[l("Wb-select",[l("wb-option",{attrs:{value:1}},[t._v("北京市")]),t._v(" "),l("wb-option",{attrs:{value:2}},[t._v("上海市")]),t._v(" "),l("wb-option",{attrs:{value:3,disabled:""}},[t._v("深圳市")]),t._v(" "),l("wb-option",{attrs:{value:4}},[t._v("杭州市")]),t._v(" "),l("wb-option",{attrs:{value:5}},[t._v("南京市")]),t._v(" "),l("wb-option",{attrs:{value:6}},[t._v("重庆市")])],1)],1),t._v(" "),l("Form-item",{attrs:{label:"单选框"}},[l("Radio-group",[l("Radio",{attrs:{value:"1"}},[t._v("\n                                    apple\n                                ")]),t._v(" "),l("Radio",{attrs:{value:"2"}},[t._v("\n                                    android\n                                ")]),t._v(" "),l("Radio",{attrs:{value:"3",disabled:""}},[t._v("\n                                    github\n                                ")])],1)],1),t._v(" "),l("Form-item",{attrs:{label:"多选框"}},[l("Checkbox-group",[l("Checkbox",{attrs:{value:"1"}},[t._v("\n                                    apple\n                                ")]),t._v(" "),l("Checkbox",{attrs:{value:"2"}},[t._v("\n                                    android\n                                ")]),t._v(" "),l("Checkbox",{attrs:{value:"3"}},[t._v("\n                                    github\n                                ")])],1)],1),t._v(" "),l("Form-item",{attrs:{label:"开关"}},[l("Wb-switch",[l("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")]),t._v(" "),l("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")])])],1),t._v(" "),l("Form-item",[l("Wb-button",{attrs:{type:"primary"}},[t._v("提交")])],1)],1)],1)]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("最基本的模态框")]),t._v(" "),l("p",[t._v("按下Esc、按下关闭按钮、点击Modal之外的区域均可以关闭Modal")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"全屏显示",template:"ui/templates/modal/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-button",{on:{click:t.showModal3}},[t._v("显示弹窗")]),t._v(" "),l("modal",{ref:"modal3",attrs:{title:"我是标题","sub-title":"我是副标题",canFullScreen:""}},[t._v("\n                    我是内容，我是内容\n                ")])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置canFullScreen为true，显示全屏控制Icon")])]},proxy:!0}])})],1),t._v(" "),l("cell",{staticClass:"pl-20",attrs:{span:"12"}},[l("componetTemplate",{attrs:{title:"超出屏幕高的模态框",template:"ui/templates/modal/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-button",{on:{click:t.showModal2}},[t._v("显示弹窗")]),t._v(" "),l("modal",{ref:"modal2",attrs:{width:"600",title:"我是标题","sub-title":"我是副标题"},on:{"on-close":t.close,"on-scroll":t.scroll}},[l("div",{staticStyle:{height:"1000px"}},[t._v("\n                        我是内容，我是内容\n                    ")])])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("超出屏幕高的模态框显示时，可以滚动查看")])]},proxy:!0}])}),t._v(" "),l("componetTemplate",{attrs:{title:"是否关闭",template:"ui/templates/modal/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[l("Wb-button",{on:{click:t.showModal4}},[t._v("显示弹窗")]),t._v(" "),l("modal",{ref:"modal4",attrs:{title:"我是标题","sub-title":"我是副标题",beforeClose:t.beforeClose}},[t._v("\n                    我是内容，我是内容\n                ")])]},proxy:!0},{key:"description",fn:function(){return[l("p",[t._v("设置beforeClose，在关闭前执行，通过执行结果判断是否关闭模态框")])]},proxy:!0}])})],1)],1)],1),t._v(" "),l("h2",{attrs:{id:"api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),l("p",[t._v("通过组件实例的"),l("code",[t._v("show")]),t._v("方法显示模态框")]),t._v(" "),l("div",{staticClass:"language-js extra-class"},[l("pre",{pre:!0,attrs:{class:"language-js"}},[l("code",[l("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("modal"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),l("h3",{attrs:{id:"props"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("主标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("subTitle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("副标题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("模态框的宽度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("400")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("closeOnClickShadow")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("点击背景是否关闭modal")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("canFullScreen")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示全屏按钮")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("disableEsc")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止使用ESC关闭模态框")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("beforeClose")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭前执行的函数，必须返回promise")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])]),t._v(" "),l("h3",{attrs:{id:"events"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-close")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭模态框时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("() => void")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("on-scroll")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("滚动模态框时触发")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(event) => void")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);