(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{406:function(e,n,t){"use strict";t.r(n);var r=t(54),s=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"building-zephyr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-zephyr"}},[e._v("#")]),e._v(" Building Zephyr")]),e._v(" "),t("p",[e._v("Once the "),t("RouterLink",{attrs:{to:"/getting-started/getting-started.html"}},[e._v("prerequisites have been installed")]),e._v(", clone\nZephyr by running "),t("code",[e._v("git clone git@github.com:sunshower-io/zephyr.git")]),e._v(".")],1),e._v(" "),t("p",[e._v("Navigate to the "),t("code",[e._v("zephyr")]),e._v(" ("),t("code",[e._v("cd zephyr")]),e._v(") and run:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("mvn clean install -f bom")])]),e._v(" "),t("li",[t("code",[e._v("gradle")])])]),e._v(" "),t("p",[e._v("The first time this runs it may take a while as dependencies are downloaded.  We strongly recommend\n"),t("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliJ IDEA"),t("OutboundLink")],1),e._v(" as an IDE for Zephyr.  The community edition will\nsuffice for development on core Zephyr.  However, you will likely want the enterprise edition\nfor development on Aire.  Zephyr and Aire are generously supported by JetBrains in the form\nof open-source licenses.  If you would like to contribute regularly to their development, please\nopen a ticket for a license (you will need somewhat regular PRs in order to qualify)")]),e._v(" "),t("h2",{attrs:{id:"project-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project Structure")]),e._v(" "),t("p",[e._v("Zephyr contains main subprojects which broadly fall into 4 categories:")]),e._v(" "),t("ol",[t("li",[e._v("Core Projects: These projects contain Zephyr's implementation, kernel modules, etc.")]),e._v(" "),t("li",[e._v("Test Projects: These projects are used by Zephyr's integration and system-tests to validate behavior")]),e._v(" "),t("li",[e._v("Modules: These projects provide support for additional frameworks, etc.")]),e._v(" "),t("li",[e._v("Maven Projects (under the "),t("code",[e._v("bom")]),e._v(" directory).  Zephyr consolidates its dependencies in "),t("code",[e._v("bills of materials")]),e._v(" which\ndescribe the imported and exported dependencies for the project.")])]),e._v(" "),t("p",[e._v("The project structure is as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\n├── bom\n│   ├── exported\n│   │   └── pom.xml\n│   ├── imported\n│   │   └── pom.xml\n│   ├── pom.xml\n│   └── settings\n│       └── settings.xml\n├── check\n│   └── pmd\n│       └── rules\n│           └── errorprone.xml\n├── gradle\n│   └── wrapper\n│       └── gradle-wrapper.properties\n├── gradle.properties\n├── gradlew\n├── gradlew.bat\n├── kernel-api\n├── kernel-core\n├── kernel-gyre\n│   ├── gyre-api\n│   ├── gyre-breeze\n│   ├── gyre-common\n│   └── gyre-core\n├── kernel-modules\n│   ├── kernel-lib\n│   ├── sunshower-felix\n│   ├── sunshower-spring\n│   ├── sunshower-xml-state\n│   ├── sunshower-yaml-reader\n│   ├── synchronous-api\n│   └── zephyr\n│       ├── zephyr-banner\n│       ├── zephyr-directory-scanner\n│       ├── zephyr-logging\n│       ├── zephyr-mvel\n│       └── zephyr-shell\n├── kernel-tests\n│   ├── kernel-system-tests\n│   ├── kernel-test\n│   ├── kernel-test-common\n│   ├── test-modules\n│   │   └── test-module-1\n│   └── test-plugins\n│       ├── module-order\n│       │   ├── dependent-module\n│       │   ├── module-one-v1\n│       │   └── module-one-v2\n│       ├── test-plugin-1\n│       ├── test-plugin-2\n│       ├── test-plugin-3\n│       ├── test-plugin-flyway\n│       ├── test-plugin-spring\n│       ├── test-plugin-spring-dep\n│       ├── test-plugin-spring-error\n│       ├── test-plugin-spring-jar\n│       └── test-spring-web-plugin\n├── LICENSE\n├── plugins\n│   ├── barometer\n│   └── spring\n│       ├── spring-embedded-plugin\n│       └── spring-web-plugin\n├── README.MD\n├── support\n│   └── flyway\n├── tasks\n├── tools\n│   ├── dll-finder\n│   │   └── test\n│   ├── examples\n│   │   └── maven\n│   │       ├── pom.xml\n│   │       └── simple-executable\n│   ├── gradle-plugin\n│   ├── zephyr-bundle\n│   │   ├── native-packages\n│   │   │   ├── linux\n│   │   │   ├── mac\n│   │   │   └── windows\n│   │   └── zephyr-bundle-core\n│   └── zephyr-maven-plugin\n│       ├── pom.xml\n│       └── target\n│           └── test-classes\n└── zephyr-main\n")])])]),t("h3",{attrs:{id:"zephyr-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zephyr-api"}},[e._v("#")]),e._v(" Zephyr API")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("zephyr-api")]),e._v(" project contains the core APIs for Zephyr, along with some common implementation details."),t("br"),e._v("\nAny class within the Zephyr API is accessible to any module or kernel module (although its implementation, if it's an interface, may not be).")]),e._v(" "),t("h3",{attrs:{id:"zephyr-core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zephyr-core"}},[e._v("#")]),e._v(" Zephyr Core")]),e._v(" "),t("p",[t("code",[e._v("zephyr-core")]),e._v(" contains most of the Zephyr implementation except for Zephyr's default classloading")]),e._v(" "),t("h3",{attrs:{id:"zephyr-main"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zephyr-main"}},[e._v("#")]),e._v(" Zephyr Main")]),e._v(" "),t("p",[t("code",[e._v("zephyr-main")]),e._v(" is the project that produces application bundles.  Most of the time, your modules will\nbe deployed using this package")]),e._v(" "),t("h3",{attrs:{id:"support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("support")]),e._v(" directory contains libraries that help integrate Zephyr with other tools such as "),t("code",[e._v("Flyway")]),e._v(", "),t("code",[e._v("Hibernate")]),e._v(", "),t("code",[e._v("Spring")]),e._v(", etc.")])])}),[],!1,null,null,null);n.default=s.exports}}]);