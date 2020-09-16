(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{381:function(t,e,a){t.exports=a.p+"assets/img/framework.d8268235.jpg"},508:function(t,e,a){"use strict";a.r(e);a(381);var l={data:function(){return{accpetType:["jpg","png"],maxSize:1048576,imageSize:{width:200,height:100}}},methods:{action:function(t,e){console.log(t),console.log(e)},success:function(t,e,a){console.log(t),console.log(e)},fail:function(t,e){console.log(t),console.log(e)}}},i=a(57),s=Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"upload-上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-上传"}},[t._v("#")]),t._v(" Upload 上传")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("实现文件上传的功能。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/upload/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Upload",{attrs:{url:"/upload",param:"file",accept:t.accpetType},on:{"on-success":t.success,"on-fail":t.fail}}),t._v(" "),a("Upload",{attrs:{url:"/upload",param:"file",accept:t.accpetType},on:{"on-success":t.success,"on-fail":t.fail}},[a("Wb-button",{attrs:{type:"primary"}},[t._v("点击上传")])],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("Upload组件可以直接使用，也可以通过slot自定义UI，点击触发选择文件，选择完毕使用XHR上传选择的文件。")]),t._v(" "),a("p",[t._v("通过设置accept来设置接收上传的文件类型。")]),t._v(" "),a("p",[t._v("on-success返回两个参数，第一个是上传文件的列表，第二个是通过返回的数据信息。")]),t._v(" "),a("p",[t._v("on-fail返回两个参数，第一个是上传文件的列表，第二个是上传失败相关的信息。")]),a("p")]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"高级用法",template:"ui/templates/upload/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Upload",{attrs:{"max-size":t.maxSize,"image-size":t.imageSize,accept:t.accpetType,action:t.action}})]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("如果设置action，则Upload内部不上传文件，需要用户自行处理上传。action有两个参数，第一个参数代表否通过已设置的较验规则，第二个参数包含上传文件的formData。")]),t._v(" "),a("p",[t._v("通过设置maxSize来设置最大上传文件的大小（单位：byte）。")]),t._v(" "),a("p",[t._v("通过设置image-size来限制上传图片的宽高。")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("url")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文件上传的远程api地址")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("param")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置"),a("code",[t._v("url")]),t._v("时，上传文件的请求参数名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("upFiles")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("accept")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("支持上传什么类型的文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String, Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("*")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否支持多文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("maxSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文件最大体积，单位是byte")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2097152")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("imageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当上传是图片文件时，控制图片的分辨率， 例如{width:200, height:200}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("action")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置手动执行上传动作，如果配置了action，则URL不是必须的。action有两个参数，第一个参数代表否通过已设置的较验规则，第二个参数包含上传文件的formData")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-success")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上传成功触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(files, result)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-fail")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上传失败触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(files, result)")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);