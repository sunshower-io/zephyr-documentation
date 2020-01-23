---
order: 0
---

# Installing Zephyr

## Building from source 
To install Zephyr on your local system, you will require git, Maven 3+ and Gradle 6. [The repository](https://github.com/sunshower-io/zephyr) can be cloned from `git@github.com:sunshower-io/zephyr.git`.

Run `mvn clean install -f bom && gradle clean assemble build sA` to install all the dependencies and execute the tests.
Building from master should always build successfully. The build is set up to use both PMD and SpotBugs, so if the build fails you may get a listing of errors from those programs as well as any test failures.

## Downloading from Artifactory

You can download the latest snapshot from
```
http://artifacts.sunshower.io/repository/sunshower-snapshots/io/zephyr/kernel-core
```

Or the latest release from 
```
http://artifacts.sunshower.io/repository/sunshower-releases/io/zephyr/kernel-core/
```

## Zephyr Interaction Modes 

The Zephyr application has several modes:
1. `Embedded`: Embed Zephyr as the plugin manager inside your application. 
1. `Offline`: In this mode, any Zephyr command can be run, but no persistent Zephyr process is created. This is the default.
1. `Server`: In this mode, the Zephyr server is started.  Commands may be run by connecting via `Interactive`. To start in server mode, run with the flag `-s`
1. `Interactive`: In this mode, users may interact with an existing `Server` process or Zephyr directly. A server must already be running. To start in interactive mode, run with the flag `-i`. 

The typical interaction mode is via `Server` followed by `Interactive`. 

## Working in the Zephyr Shell

Once you've downloaded either a ZIP or a TAR file as described above, unzip it to `<ZEPHYR_INSTALL>` (e.g. `/home/username/zephyr`). You can start
Zephyr in Server mode via

```
<ZEPHYR_INSTALL_LOCATION>/bin/zephyr -s
```

This should result in something like:

![Command Output](./img/zephyr-server-start.png)

With your server started, you can now interact with Zephyr via the [Shell](/shell/commands)