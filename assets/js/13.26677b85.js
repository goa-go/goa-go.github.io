(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{278:function(t,a,s){"use strict";s.r(a);var n=s(22),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"上下文-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上下文-context","aria-hidden":"true"}},[t._v("#")]),t._v(" 上下文(Context)")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("🔖")]),t._v(" "),s("p",[t._v("Context将net/http的"),s("code",[t._v("*Request")]),t._v("和"),s("code",[t._v("ResponseWriter")]),t._v("对象及其对应的方法封装到单个对象中，方便调用处理请求和响应的方法。")])]),t._v(" "),s("h2",{attrs:{id:"field"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#field","aria-hidden":"true"}},[t._v("#")]),t._v(" Field")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名字")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Request")]),t._v(" "),s("td",[t._v("*http.Request")]),t._v(" "),s("td",[t._v("原生net/http的 *Request对象")])]),t._v(" "),s("tr",[s("td",[t._v("ResponseWriter")]),t._v(" "),s("td",[t._v("http.ResponseWriter")]),t._v(" "),s("td",[t._v("原生net/http的ResponseWriter对象")])]),t._v(" "),s("tr",[s("td",[t._v("Method")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("http请求方式")])]),t._v(" "),s("tr",[s("td",[t._v("URL")]),t._v(" "),s("td",[t._v("*url.URL")]),t._v(" "),s("td",[t._v("http请求的URL对象")])]),t._v(" "),s("tr",[s("td",[t._v("Path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("http请求的路径")])]),t._v(" "),s("tr",[s("td",[t._v("Header")]),t._v(" "),s("td",[t._v("http.Header")]),t._v(" "),s("td",[t._v("http请求头部")])]),t._v(" "),s("tr",[s("td",[t._v("Keys")]),t._v(" "),s("td",[t._v("map[string]interface{}")]),t._v(" "),s("td",[t._v("主要用于中间件之间数据传递，通过"),s("a",{attrs:{href:"#get"}},[t._v("Get")]),t._v("、"),s("a",{attrs:{href:"#set"}},[t._v("Set")]),t._v("方法使用")])]),t._v(" "),s("tr",[s("td",[t._v("Handled")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("是否绕过goa的响应处理")])])])]),t._v(" "),s("h2",{attrs:{id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next","aria-hidden":"true"}},[t._v("#")]),t._v(" Next")]),t._v(" "),s("p",[s("code",[t._v("Next()")]),t._v(" 用于调用下一个中间件。")]),t._v(" "),s("p",[t._v("不同于koajs，Next方法写在了Context对象中，koajs的next()实际上是dispatch(i + 1)，我们这样做的好处是可以节省dispatch函数传递带来的内存占用，更加高效的同时也可以让代码更加简洁。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// next() 这种方法在v0.4.0移除")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c.Next()")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth")]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do sth")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("当应用程序中绑定了多个中间件，除了最后一个中间件，"),s("code",[t._v("c.Next()")]),t._v("是必须调用的，否则goa只会执行第一个中间件。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//c.Next() 此处可以省略c.Next()")]),t._v("\n  fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果这是你第一次接触中间件，查看更多关于"),s("router-link",{attrs:{to:"/zh/docs/middleware.html"}},[t._v("中间件")]),t._v("。")],1)]),t._v(" "),s("h2",{attrs:{id:"set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[t._v("#")]),t._v(" Set")]),t._v(" "),s("p",[s("code",[t._v("Set(key string, value interface{})")]),t._v(" 设定Keys。")]),t._v(" "),s("h2",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" Get")]),t._v(" "),s("p",[s("code",[t._v("Get(key string) (value interface{}, exists bool)")]),t._v(" 获取指定Keys。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query","aria-hidden":"true"}},[t._v("#")]),t._v(" Query")]),t._v(" "),s("p",[s("code",[t._v("Query(key string) (value string)")]),t._v(' 获取query指定key的value，若key不存在则返回""。')]),t._v(" "),s("p",[t._v("若Query复杂或需要类型转换，推荐使用"),s("a",{attrs:{href:"#parsequery"}},[t._v("ParseQuery")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"getquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getquery","aria-hidden":"true"}},[t._v("#")]),t._v(" GetQuery")]),t._v(" "),s("p",[s("code",[t._v("GetQuery(key string) (value string, exists bool)")]),t._v(" 同"),s("a",{attrs:{href:"#query"}},[t._v("Query")]),t._v(", 额外返回是否存在。")]),t._v(" "),s("h2",{attrs:{id:"getqueryarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getqueryarray","aria-hidden":"true"}},[t._v("#")]),t._v(" GetQueryArray")]),t._v(" "),s("p",[s("code",[t._v("GetQueryArray(key string) ((value []string, exists bool)")]),t._v(" 获取query指定key的value数组和是否存在。")]),t._v(" "),s("h2",{attrs:{id:"postform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postform","aria-hidden":"true"}},[t._v("#")]),t._v(" PostForm")]),t._v(" "),s("p",[s("code",[t._v("PostForm(key string) (value string)")]),t._v(' 获取query指定key的value，若key不存在则返回""。')]),t._v(" "),s("p",[t._v("若form复杂或需要类型转换，推荐使用"),s("a",{attrs:{href:"#parseform"}},[t._v("ParseForm")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"param"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#param","aria-hidden":"true"}},[t._v("#")]),t._v(" Param")]),t._v(" "),s("p",[s("code",[t._v("Param(key string) (value string)")]),t._v(' 获取路由中的参数，若不存在则返回""。')]),t._v(" "),s("p",[t._v("需配合"),s("a",{attrs:{href:"https://github.com/goa-go/router",target:"_blank",rel:"noopener noreferrer"}},[t._v("router"),s("OutboundLink")],1),t._v("或其他路由中间件使用:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/example/:key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"parsejson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsejson","aria-hidden":"true"}},[t._v("#")]),t._v(" ParseJSON")]),t._v(" "),s("p",[s("code",[t._v("ParseJSON(pointer interface{}) error")]),t._v(" 解析请求body中的json，pointer必须为指针。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Key "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"key"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseJSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("还可以通过goa.M使用，实际上goa.M只是"),s("code",[t._v("map[string]interface{}")])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseJSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("goa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"parsexml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsexml","aria-hidden":"true"}},[t._v("#")]),t._v(" ParseXML")]),t._v(" "),s("p",[s("code",[t._v("ParseXML(pointer interface{}) error")]),t._v(" 解析请求body中的xml。同"),s("a",{attrs:{href:"#parsejson"}},[t._v("ParseJSON")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"parsestring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsestring","aria-hidden":"true"}},[t._v("#")]),t._v(" ParseString")]),t._v(" "),s("p",[s("code",[t._v("ParseString() (string, error)")]),t._v(" 读取请求的body。")]),t._v(" "),s("h2",{attrs:{id:"parsequery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsequery","aria-hidden":"true"}},[t._v("#")]),t._v(" ParseQuery")]),t._v(" "),s("p",[s("code",[t._v("ParseQuery(pointer interface{}) error")]),t._v(" 解析Query为结构体。若需要使用tag，tag名为query。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Person "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`query:"name"`')]),t._v("\n  Age     "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`query:"age"`')]),t._v("\n  Married "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`query:"-"`')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "-"为忽略')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"parseform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parseform","aria-hidden":"true"}},[t._v("#")]),t._v(" ParseForm")]),t._v(" "),s("p",[s("code",[t._v("ParseForm(pointer interface{}) error")]),t._v(" 解析form为结构体，标签名为form。同"),s("a",{attrs:{href:"#parsequery"}},[t._v("ParseQuery")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[t._v("#")]),t._v(" Status")]),t._v(" "),s("p",[s("code",[t._v("Status(code int)")]),t._v(" 设置http状态码。")]),t._v(" "),s("p",[t._v("当没设定状态码时，若正常响应，则会自动设定为200，否则默认为404。")]),t._v(" "),s("h2",{attrs:{id:"getstatus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getstatus","aria-hidden":"true"}},[t._v("#")]),t._v(" GetStatus")]),t._v(" "),s("p",[s("code",[t._v("GetStatus() (code int)")]),t._v(" 获取当前设定的状态码，不一定是最后响应的状态码，\n再次设定状态码或者 "),s("code",[t._v("c.Error(...)")]),t._v(" 都可以改变最后响应的状态码。")]),t._v(" "),s("h2",{attrs:{id:"json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON")]),t._v(" "),s("p",[s("code",[t._v("JSON(json interface{})")]),t._v(" 响应json数据，会自动响应200状态码、自动设置http响应头部的"),s("code",[t._v("Content-Type")]),t._v("，以下不再赘述。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Key "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"key"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xml","aria-hidden":"true"}},[t._v("#")]),t._v(" XML")]),t._v(" "),s("p",[s("code",[t._v("XML(xml interface{})")]),t._v(" 响应xml数据。")]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String")]),t._v(" "),s("p",[s("code",[t._v("String(str string)")]),t._v(" 响应字符串。")]),t._v(" "),s("h2",{attrs:{id:"html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),s("p",[s("code",[t._v("HTML(html string)")]),t._v(" 响应html。")]),t._v(" "),s("h2",{attrs:{id:"redirect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redirect","aria-hidden":"true"}},[t._v("#")]),t._v(" Redirect")]),t._v(" "),s("p",[s("code",[t._v("Redirect(code int, url string)")]),t._v(" 重定向，会绕过goa的响应处理。")]),t._v(" "),s("h2",{attrs:{id:"setheader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setheader","aria-hidden":"true"}},[t._v("#")]),t._v(" SetHeader")]),t._v(" "),s("p",[s("code",[t._v("SetHeader(key string, value string)")]),t._v(" 设置http响应头部。")]),t._v(" "),s("h2",{attrs:{id:"error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error","aria-hidden":"true"}},[t._v("#")]),t._v(" Error")]),t._v(" "),s("p",[s("code",[t._v("Error(code int, msg string)")]),t._v(" 抛出http错误，并且会被goa捕捉来响应错误。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StatusText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这之后的操作都会跳过")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这不会起作用。")]),t._v("\nc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这也不会起作用。")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);