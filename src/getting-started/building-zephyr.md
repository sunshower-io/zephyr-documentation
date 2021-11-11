---
order: 1
---
# Building Zephyr

Once the [prerequisites have been installed](/getting-started/getting-started.html), clone
Zephyr by running `git clone git@github.com:sunshower-io/zephyr.git`.  

Navigate to the `zephyr` (`cd zephyr`) and run:

1. `mvn clean install -f bom`
2. `gradle`


The first time this runs it may take a while as dependencies are downloaded.  We strongly recommend
[IntelliJ IDEA](https://www.jetbrains.com/idea/) as an IDE for Zephyr.  The community edition will
suffice for development on core Zephyr.  However, you will likely want the enterprise edition
for development on Aire.  Zephyr and Aire are generously supported by JetBrains in the form
of open-source licenses.  If you would like to contribute regularly to their development, please
open a ticket for a license (you will need somewhat regular PRs in order to qualify)


## Project Structure

Zephyr contains main subprojects which broadly fall into 4 categories:
1. Core Projects: These projects contain Zephyr's implementation, kernel modules, etc.
2. Test Projects: These projects are used by Zephyr's integration and system-tests to validate behavior
3. Modules: These projects provide support for additional frameworks, etc.
4. Maven Projects (under the `bom` directory).  Zephyr consolidates its dependencies in `bills of materials` which
   describe the imported and exported dependencies for the project.



The project structure is as follows:
```
.
├── bom
│   ├── exported
│   │   └── pom.xml
│   ├── imported
│   │   └── pom.xml
│   ├── pom.xml
│   └── settings
│       └── settings.xml
├── check
│   └── pmd
│       └── rules
│           └── errorprone.xml
├── gradle
│   └── wrapper
│       └── gradle-wrapper.properties
├── gradle.properties
├── gradlew
├── gradlew.bat
├── kernel-api
├── kernel-core
├── kernel-gyre
│   ├── gyre-api
│   ├── gyre-breeze
│   ├── gyre-common
│   └── gyre-core
├── kernel-modules
│   ├── kernel-lib
│   ├── sunshower-felix
│   ├── sunshower-spring
│   ├── sunshower-xml-state
│   ├── sunshower-yaml-reader
│   ├── synchronous-api
│   └── zephyr
│       ├── zephyr-banner
│       ├── zephyr-directory-scanner
│       ├── zephyr-logging
│       ├── zephyr-mvel
│       └── zephyr-shell
├── kernel-tests
│   ├── kernel-system-tests
│   ├── kernel-test
│   ├── kernel-test-common
│   ├── test-modules
│   │   └── test-module-1
│   └── test-plugins
│       ├── module-order
│       │   ├── dependent-module
│       │   ├── module-one-v1
│       │   └── module-one-v2
│       ├── test-plugin-1
│       ├── test-plugin-2
│       ├── test-plugin-3
│       ├── test-plugin-flyway
│       ├── test-plugin-spring
│       ├── test-plugin-spring-dep
│       ├── test-plugin-spring-error
│       ├── test-plugin-spring-jar
│       └── test-spring-web-plugin
├── LICENSE
├── plugins
│   ├── barometer
│   └── spring
│       ├── spring-embedded-plugin
│       └── spring-web-plugin
├── README.MD
├── support
│   └── flyway
├── tasks
├── tools
│   ├── dll-finder
│   │   └── test
│   ├── examples
│   │   └── maven
│   │       ├── pom.xml
│   │       └── simple-executable
│   ├── gradle-plugin
│   ├── zephyr-bundle
│   │   ├── native-packages
│   │   │   ├── linux
│   │   │   ├── mac
│   │   │   └── windows
│   │   └── zephyr-bundle-core
│   └── zephyr-maven-plugin
│       ├── pom.xml
│       └── target
│           └── test-classes
└── zephyr-main
```

### Zephyr API

The `zephyr-api` project contains the core APIs for Zephyr, along with some common implementation details.  
Any class within the Zephyr API is accessible to any module or kernel module (although its implementation, if it's an interface, may not be).

### Zephyr Core
`zephyr-core` contains most of the Zephyr implementation except for Zephyr's default classloading

### Zephyr Main
`zephyr-main` is the project that produces application bundles.  Most of the time, your modules will
be deployed using this package

### Support
The `support` directory contains libraries that help integrate Zephyr with other tools such as `Flyway`, `Hibernate`, `Spring`, etc.

