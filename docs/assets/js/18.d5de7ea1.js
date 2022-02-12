(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{411:function(e,t,a){"use strict";a.r(t);var r=a(54),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"writing-a-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-plugin"}},[e._v("#")]),e._v(" Writing a Plugin")]),e._v(" "),a("p",[e._v("Zephyr was designed to make plugin implementation a breeze.  Zephyr is bundled with support\nfor common archive formats such as WAR, JAR, and Spring Boot applications.  Let's start with a\nZephyr "),a("code",[e._v("Hello World")]),e._v("!")]),e._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[e._v("#")]),e._v(" Hello World!")]),e._v(" "),a("h3",{attrs:{id:"step-0-check-out-the-hello-world-tutorial-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-0-check-out-the-hello-world-tutorial-project"}},[e._v("#")]),e._v(" Step 0: Check out the Hello World Tutorial Project")]),e._v(" "),a("p",[e._v("First, checkout the "),a("a",{attrs:{href:"https://github.com/sunshower-io/zephyr-tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("zephyr-tutorials"),a("OutboundLink")],1),e._v("\nby executing "),a("code",[e._v("git clone git@github.com:sunshower-io/zephyr-tutorials && git checkout hello-world")])]),e._v(" "),a("p",[e._v("You will see the following directory structure")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".\n├── build.gradle\n├── gradle\n│   └── wrapper\n│       ├── gradle-wrapper.jar\n│       └── gradle-wrapper.properties\n├── gradle.properties\n├── gradlew\n├── gradlew.bat\n├── lessons\n│   └── 1\n│       └── hello-world\n│           ├── build.gradle\n│           ├── pom.xml\n│           └── src\n│               └── main\n│                   ├── java\n│                   │   └── io\n│                   │       └── zephyr\n│                   │           └── lessons\n│                   │               └── helloworld\n│                   │                   └── HelloWorldModuleActivator.java\n│                   └── resources\n│                       └── META-INF\n│                           └── services\n│                               └── io.zephyr.api.ModuleActivator\n├── LICENSE\n├── mvnw\n├── mvnw.cmd\n├── pom.xml\n├── README.md\n├── settings.gradle\n└── settings.xml\n")])])]),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" Password")]),e._v(" "),a("p",[e._v("Since Github does not currently allow public (unauthenticated) access to package repositories,\nuse the following read-only personal access token ("),a("code",[e._v("$PAT")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("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\n")])])]),a("h3",{attrs:{id:"step-1-set-your-environment-variables-and-system-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-set-your-environment-variables-and-system-properties"}},[e._v("#")]),e._v(" Step 1: Set your environment variables and system properties")]),e._v(" "),a("p",[e._v("Set the environment-variable "),a("code",[e._v("ZEPHYR_REPO_PASSWORD")]),e._v(" to "),a("code",[e._v("$PAT")]),e._v(" (the value above)")]),e._v(" "),a("p",[a("strong",[e._v("OR")])]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("settings.xml")]),e._v(" file, replace the "),a("code",[e._v("<password>${ENV.ZEPHYR_REPO_PASSWORD}</password>")]),e._v("\nsegment with "),a("code",[e._v("$PAT")]),e._v(" above in the section:")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("sunshower-github"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("packages"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("${ENV.ZEPHYR_REPO_PASSWORD}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("h3",{attrs:{id:"step-2-add-the-personal-access-token-to-the-gradle-properties-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-add-the-personal-access-token-to-the-gradle-properties-file"}},[e._v("#")]),e._v(" Step 2: Add the Personal Access Token to the gradle.properties file")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("$HOME/.gradle/gradle.properties")]),e._v(" set the property "),a("code",[e._v("repoAccessToken")]),e._v(" to "),a("code",[e._v("$PAT")]),e._v(".  It will look like:")]),e._v(" "),a("p",[a("em",[e._v("$HOME/.gradle/gradle.properties")])]),e._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("repoAccessToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[e._v("<$PAT>")]),e._v("\n")])])]),a("h3",{attrs:{id:"step-3-build-your-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-build-your-plugin"}},[e._v("#")]),e._v(" Step 3: Build your plugin")]),e._v(" "),a("p",[e._v("In the "),a("code",[e._v("zephyr-tutorials")]),e._v(" project, run "),a("code",[e._v("mvn clean install && gradle clean build")]),e._v(".  This will\nproduce "),a("code",[e._v("WAR")]),e._v(" file at "),a("code",[e._v("zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war")]),e._v(".  This is\nyour plugin archive")]),e._v(" "),a("h3",{attrs:{id:"download-a-zephyr-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-a-zephyr-distribution"}},[e._v("#")]),e._v(" Download a Zephyr Distribution")]),e._v(" "),a("p",[e._v("Grab the latest "),a("a",{attrs:{href:"https://github.com/sunshower-io/zephyr/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zephyr distribution"),a("OutboundLink")],1),e._v("\nfrom "),a("a",{attrs:{href:"https://github.com/sunshower-io/zephyr/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/sunshower-io/zephyr/releases"),a("OutboundLink")],1),e._v("\n(either "),a("code",[e._v("zephyr-main.tar")]),e._v(" or "),a("code",[e._v("zephyr-main.zip")]),e._v(")--if you're on Windows, you'll probably want the "),a("code",[e._v("zip")]),e._v("\ndistribution.  If you're on "),a("code",[e._v("linux")]),e._v(" you'll probably want the "),a("code",[e._v("tar")]),e._v(" distribution.")]),e._v(" "),a("p",[e._v("Extract the distribution by either right-clicking on it and selecting "),a("code",[e._v("unzip")]),e._v(" or running\n"),a("code",[e._v("tar xvf zephyr-main.tar")])]),e._v(" "),a("p",[e._v("You will get this directory structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".\n├── zephyr-main\n│   ├── bin\n│   │   ├── zephyr\n│   │   └── zephyr.bat\n│   └── lib .../etc\n")])])]),a("p",[e._v("In a terminal, CD into "),a("code",[e._v("zephyr-main")]),e._v(" (the parent of "),a("code",[e._v("bin")]),e._v(") and start the zephyr server\nvia "),a("code",[e._v("./bin/zephyr-home -h ./zephyr-home -s -c 2 &")])]),e._v(" "),a("p",[e._v("where:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("-h")]),e._v(" specifies the ZEPHYR_HOME directory (defaults to "),a("code",[e._v("$HOME/.zephyr")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("-s")]),e._v(" start the server")]),e._v(" "),a("li",[a("code",[e._v("-c")]),e._v(" the number of threads to allocate to the kernel.  Defaults to 2")])]),e._v(" "),a("p",[e._v("This will start the server in the background.  You may trace its logs by locating the "),a("code",[e._v("logs")]),e._v(" directory\nand tailing the latest logs (you'll see something like:)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ tail -f zephyr.log\n12/11/2021 12:36:30.799 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.logging.LogEntryPoint@157696f...\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.logging.LogEntryPoint@157696f\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.banner.Banner@7ed70f...\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.banner.Banner@7ed70f\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.kernel.launch.KernelLauncher@9d10bd...\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.kernel.launch.KernelLauncher@9d10bd\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.kernel.modules.shell.ZephyrCliEntryPoint@1479c6...\n12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.kernel.modules.shell.ZephyrCliEntryPoint@1479c6\n12/11/2021 12:36:30.831 - [io.zephyr.kernel.launch.KernelLauncher.runAll] - [WARNING:main] - Entry Point java.util.concurrent.FutureTask@67f029[Completed normally] has successfully exited\n12/11/2021 12:36:30.831 - [io.zephyr.kernel.launch.KernelLauncher.runAll] - [WARNING:main] - Entry Point java.util.concurrent.FutureTask@1a20f67[Completed normally] has successfully exited\n")])])]),a("h3",{attrs:{id:"start-the-zephyr-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-zephyr-client"}},[e._v("#")]),e._v(" Start the Zephyr Client")]),e._v(" "),a("p",[e._v("In the same terminal, execute "),a("code",[e._v("./bin/zephyr -i")]),e._v("\nwhere "),a("code",[e._v("-i")]),e._v(" stands for "),a("code",[e._v("interactive")]),e._v(".  Zephyr will display its banner.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./bin/zephyr -i\nNov 12, 2021 12:36:30 PM io.zephyr.kernel.launch.KernelLauncher doLaunch\nINFO: Zephyr Kernel Initiated...\nNov 12, 2021 12:36:30 PM io.zephyr.kernel.launch.KernelLauncher initialize\nINFO: Initializing Entry Point io.zephyr.logging.LogEntryPoint@157696f...\nWelcome to\n======================================\n _____              __\n/__  /  ___  ____  / /_  __  _______\n  / /  / _ \\/ __ \\/ __ \\/ / / / ___/\n / /__/  __/ /_/ / / / / /_/ / /\n/____/\\___/ .___/_/ /_/\\__, /_/\n         /_/          /____/\n\n======================================\nZephyrCore :: Kernel Version 2.8.5.Final:: Revision <>\nBuild: <>\n")])])]),a("p",[e._v("Start the Kernel by running "),a("code",[e._v("kernel start")])]),e._v(" "),a("p",[e._v("You'll see:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\nkernel start\nKernel is not running\nStarting Zephyr Kernel\nSuccessfully started Zephyr Kernel\nFailed to restore kernel state.  Reason:\nModules installed:\n")])])]),a("p",[e._v("Don't worry about the warnings--they're informational.")]),e._v(" "),a("h3",{attrs:{id:"install-your-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-your-plugin"}},[e._v("#")]),e._v(" Install your plugin!")]),e._v(" "),a("p",[e._v("Locate your "),a("code",[e._v("hello-world.war")]),e._v(" under "),a("code",[e._v("zephyr-tutorials/lessons/1/hello-world/build/libs")]),e._v(" and\ngrab its absolute path via "),a("code",[e._v("realpath hello-world.war")]),e._v(".  Then, returning to your Zephyr terminal,\nrun "),a("code",[e._v("plugin install <path>")]),e._v(".")]),e._v(" "),a("p",[e._v("For instance, mine is at "),a("code",[e._v("C:/Users/josiah/dev/source/github.com/zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war")])]),e._v(" "),a("p",[e._v("This should result in the following output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Will install:\n C:/Users/josiah/dev/source/github.com/zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war\nSuccessfully scheduled plugin installation set\nBeginning download of plugin at 'Module{io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT}'\nsuccessfully installed plugins\nSuccessfully installed plugin 'io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT'\nsuccessfully installed plugins\n")])])]),a("h4",{attrs:{id:"familiarize-yourself-with-the-zephyr-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#familiarize-yourself-with-the-zephyr-cli"}},[e._v("#")]),e._v(" Familiarize yourself with the Zephyr CLI")]),e._v(" "),a("p",[a("strong",[e._v("plugin list")])]),e._v(" "),a("p",[e._v("In your zephyr terminal, run "),a("code",[e._v("plugin list")]),e._v(".  You should see:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Modules installed:\n io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT | state Resolved\n")])])]),a("p",[a("strong",[e._v("plugin start")]),e._v("\nIn your terminal, execute\n"),a("code",[e._v("plugin start")]),e._v("io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT`")]),e._v(" "),a("p",[e._v("You will see:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Hello from io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT\n")])])]),a("p",[e._v("output to the terminal")]),e._v(" "),a("p",[a("strong",[e._v("plugin stop")]),e._v("\nIn your terminal, execute:\n"),a("code",[e._v("plugin stop io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT")]),e._v("\nYou will see:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Goodbye from io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT\n")])])]),a("p",[a("strong",[e._v("Note on State")]),e._v("\nZephyr automatically saves and restores plugin state upon restarts.  Plugins that are inactive upon\nstopping the kernel will remain inactive when it starts.  Plugins that are active upon stopping\nthe kernel will be activated when the kernel starts.")])])}),[],!1,null,null,null);t.default=n.exports}}]);