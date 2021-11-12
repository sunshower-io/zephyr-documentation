# Writing a Plugin

Zephyr was designed to make plugin implementation a breeze.  Zephyr is bundled with support
for common archive formats such as WAR, JAR, and Spring Boot applications.  Let's start with a
Zephyr `Hello World`!

## Hello World! 

### Step 0: Check out the Hello World Tutorial Project

First, checkout the [zephyr-tutorials](https://github.com/sunshower-io/zephyr-tutorials)
by executing `git clone git@github.com:sunshower-io/zephyr-tutorials && git checkout hello-world`

You will see the following directory structure

```
.
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradle.properties
├── gradlew
├── gradlew.bat
├── lessons
│   └── 1
│       └── hello-world
│           ├── build.gradle
│           ├── pom.xml
│           └── src
│               └── main
│                   ├── java
│                   │   └── io
│                   │       └── zephyr
│                   │           └── lessons
│                   │               └── helloworld
│                   │                   └── HelloWorldModuleActivator.java
│                   └── resources
│                       └── META-INF
│                           └── services
│                               └── io.zephyr.api.ModuleActivator
├── LICENSE
├── mvnw
├── mvnw.cmd
├── pom.xml
├── README.md
├── settings.gradle
└── settings.xml
```

### Password

Since Github does not currently allow public (unauthenticated) access to package repositories, 
use the following read-only personal access token (`$PAT`):

```
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
```

### Step 1: Set your environment variables and system properties

Set the environment-variable `ZEPHYR_REPO_PASSWORD` to `$PAT` (the value above)

**OR**

In the `settings.xml` file, replace the `<password>${ENV.ZEPHYR_REPO_PASSWORD}</password>`
segment with `$PAT` above in the section:

```xml
<servers>
  <server>
    <id>sunshower-github</id>
    <username>packages</username>
    <password>${ENV.ZEPHYR_REPO_PASSWORD}</password>
  </server>
</servers>
```

### Step 2: Add the Personal Access Token to the gradle.properties file
In `$HOME/.gradle/gradle.properties` set the property `repoAccessToken` to `$PAT`.  It will look like:

_$HOME/.gradle/gradle.properties_
```properties
repoAccessToken=<$PAT>
```

### Step 3: Build your plugin

In the `zephyr-tutorials` project, run `mvn clean install && gradle clean build`.  This will
produce `WAR` file at `zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war`.  This is 
your plugin archive

### Download a Zephyr Distribution
Grab the latest [Zephyr distribution](https://github.com/sunshower-io/zephyr/releases)
from [https://github.com/sunshower-io/zephyr/releases](https://github.com/sunshower-io/zephyr/releases)
(either `zephyr-main.tar` or `zephyr-main.zip`)--if you're on Windows, you'll probably want the `zip` 
distribution.  If you're on `linux` you'll probably want the `tar` distribution.

Extract the distribution by either right-clicking on it and selecting `unzip` or running
`tar xvf zephyr-main.tar`

You will get this directory structure:

```
.
├── zephyr-main
│   ├── bin
│   │   ├── zephyr
│   │   └── zephyr.bat
│   └── lib .../etc
```

In a terminal, CD into `zephyr-main` (the parent of `bin`) and start the zephyr server
via `./bin/zephyr-home -h ./zephyr-home -s -c 2 &`

where:
1. `-h` specifies the ZEPHYR_HOME directory (defaults to `$HOME/.zephyr`)
2. `-s` start the server
3. `-c` the number of threads to allocate to the kernel.  Defaults to 2


This will start the server in the background.  You may trace its logs by locating the `logs` directory
and tailing the latest logs (you'll see something like:)

```
$ tail -f zephyr.log
12/11/2021 12:36:30.799 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.logging.LogEntryPoint@157696f...
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.logging.LogEntryPoint@157696f
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.banner.Banner@7ed70f...
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.banner.Banner@7ed70f
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.kernel.launch.KernelLauncher@9d10bd...
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.kernel.launch.KernelLauncher@9d10bd
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Scheduling Entry Point io.zephyr.kernel.modules.shell.ZephyrCliEntryPoint@1479c6...
12/11/2021 12:36:30.815 - [io.zephyr.kernel.launch.KernelLauncher.scheduleTasks] - [INFO:main] - Successfully scheduled Entry Point io.zephyr.kernel.modules.shell.ZephyrCliEntryPoint@1479c6
12/11/2021 12:36:30.831 - [io.zephyr.kernel.launch.KernelLauncher.runAll] - [WARNING:main] - Entry Point java.util.concurrent.FutureTask@67f029[Completed normally] has successfully exited
12/11/2021 12:36:30.831 - [io.zephyr.kernel.launch.KernelLauncher.runAll] - [WARNING:main] - Entry Point java.util.concurrent.FutureTask@1a20f67[Completed normally] has successfully exited
```


### Start the Zephyr Client
In the same terminal, execute `./bin/zephyr -i`
where `-i` stands for `interactive`.  Zephyr will display its banner. 


```
$ ./bin/zephyr -i
Nov 12, 2021 12:36:30 PM io.zephyr.kernel.launch.KernelLauncher doLaunch
INFO: Zephyr Kernel Initiated...
Nov 12, 2021 12:36:30 PM io.zephyr.kernel.launch.KernelLauncher initialize
INFO: Initializing Entry Point io.zephyr.logging.LogEntryPoint@157696f...
Welcome to
======================================
 _____              __
/__  /  ___  ____  / /_  __  _______
  / /  / _ \/ __ \/ __ \/ / / / ___/
 / /__/  __/ /_/ / / / / /_/ / /
/____/\___/ .___/_/ /_/\__, /_/
         /_/          /____/

======================================
ZephyrCore :: Kernel Version 2.8.5.Final:: Revision <>
Build: <>
```

Start the Kernel by running `kernel start`

You'll see:

```

kernel start
Kernel is not running
Starting Zephyr Kernel
Successfully started Zephyr Kernel
Failed to restore kernel state.  Reason:
Modules installed:
```

Don't worry about the warnings--they're informational.

### Install your plugin!

Locate your `hello-world.war` under `zephyr-tutorials/lessons/1/hello-world/build/libs` and
grab its absolute path via `realpath hello-world.war`.  Then, returning to your Zephyr terminal,
run `plugin install <path>`.

For instance, mine is at `C:/Users/josiah/dev/source/github.com/zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war`

This should result in the following output:

```
Will install:
 C:/Users/josiah/dev/source/github.com/zephyr-tutorials/lessons/1/hello-world/build/libs/hello-world.war
Successfully scheduled plugin installation set
Beginning download of plugin at 'Module{io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT}'
successfully installed plugins
Successfully installed plugin 'io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT'
successfully installed plugins
```

#### Familiarize yourself with the Zephyr CLI

**plugin list**

In your zephyr terminal, run `plugin list`.  You should see:

```
Modules installed:
 io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT | state Resolved
```

**plugin start**
In your terminal, execute
`plugin start `io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT`

You will see:
```
Hello from io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT
```
output to the terminal

**plugin stop**
In your terminal, execute:
`plugin stop io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT`
You will see:
```
Goodbye from io.zephyr.tutorials:hello-world:1.0.0-SNAPSHOT
```

**Note on State**
Zephyr automatically saves and restores plugin state upon restarts.  Plugins that are inactive upon
stopping the kernel will remain inactive when it starts.  Plugins that are active upon stopping
the kernel will be activated when the kernel starts.



