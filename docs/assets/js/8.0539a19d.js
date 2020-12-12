(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(e,t,s){e.exports=s.p+"assets/img/classloader-graph.7100bc49.png"},373:function(e,t,s){"use strict";s.r(t);var a=s(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-classpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-classpath"}},[e._v("#")]),e._v(" Plugin Classpath")]),e._v(" "),a("p",[e._v("Zephyr's classloading is designed to maximize sharing between similar plugins\nwhile enforcing isolation between dissimilar plugins.  Zephyr supports restricting resource imports\nand exports at the package or class level via package filters, and dependency-graph filters at the plugin level.")]),e._v(" "),a("h2",{attrs:{id:"package-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-filters"}},[e._v("#")]),e._v(" Package Filters")]),e._v(" "),a("p",[e._v("Plugins may exclude or include packages, resources, and services at the plugin level or at the dependency level.")]),e._v(" "),a("h3",{attrs:{id:"plugin-resource-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-resource-filters"}},[e._v("#")]),e._v(" Plugin Resource Filters")]),e._v(" "),a("p",[e._v("A plugin can describe which packages and resources it wishes to provide to, or restrict from its dependencies.\nFor instance, in our Greeter plugin configuration, suppose "),a("code",[e._v("com.greeters:greeter")]),e._v(" contained the following resources:")]),e._v(" "),a("p",[a("em",[e._v("com.greeters:greeter/packages")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("com.greeters.internal\ncom.greeters.lib\n")])])]),a("p",[e._v("The greeters plugin could restrict the "),a("code",[e._v("com.greeters.internal")]),e._v(" package from its dependents as follows:")]),e._v(" "),a("p",[a("em",[e._v("com.greeters:greeter/plugin.yaml")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" greeter\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" com.greeters\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("SNAPSHOT\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" plugin\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Friendly ways to say hello!\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/internal\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/lib\n")])])]),a("p",[e._v("Such filters can contain wildcards and globs.")]),e._v(" "),a("p",[e._v("Similarly, if a plugin wishes to include or exclude classpath resources from a dependency, it may use the\nidentical format in its dependency import declaration, e.g.")]),e._v(" "),a("p",[a("em",[e._v("com.greeters:greeter-german/plugin.yaml")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" greeter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("german\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" com.greeters\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("SNAPSHOT\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" plugin\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Freundliche Art Hallo zu sagen!\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" classpath \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" com.greeters\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" greeter\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/internal\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/lib\n\n")])])]),a("h2",{attrs:{id:"classloader-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classloader-graph"}},[e._v("#")]),e._v(" Classloader Graph")]),e._v(" "),a("p",[e._v("A plugin's classloader graph mirrors its dependency graph subject to import/export restrictions as described above."),a("br"),e._v("\nThis may be counterintuitive to many users coming from other modular environments where classpath sharing is severely restricted,\nif it's supported at all.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(354),alt:"Greeter Classpath Graph"}})]),e._v(" "),a("p",[e._v("This is a conscious decision on our part:  we believe that dependencies are best managed relative to the system they belong to as a whole,\nrather than on a per-plugin basis.  Maximizing sharing can dramatically reduce memory consumption and startup times relative to alternative solutions."),a("br"),e._v("\nWe've found that the plugin classloader graph selects the correct classes where conflicts exists in most cases.  Where it doesn't, altering the plugin graph by\nadding or removing dependencies has resolved the issue.  If there are still problems, they can easily be resolved via import and export restrictions\nas described above.")]),e._v(" "),a("h3",{attrs:{id:"java-serviceloader-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-serviceloader-api"}},[e._v("#")]),e._v(" Java ServiceLoader API")]),e._v(" "),a("p",[e._v("Zephyr supports and leverages the Java ServiceLoader API for plugins.  By default, plugins do not inherit their dependencies'\nservices.  This behavior can be overridden via the "),a("code",[e._v("services")]),e._v(" element, which accepts "),a("code",[e._v("include")]),e._v(" and "),a("code",[e._v("exclude")]),e._v(" as arguments.")]),e._v(" "),a("p",[a("em",[e._v("com.greeters:greeter-german/plugin.yaml")])]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" greeter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("german\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" com.greeters\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("SNAPSHOT\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" plugin\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Freundliche Art Hallo zu sagen!\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" classpath \n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" com.greeters\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" greeter\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" exclude\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("exclude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/internal\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" com/greeters/lib\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);