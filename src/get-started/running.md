# Installation

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
1. `Offline`: In this mode, any Zephyr command can be run, but no persistent Zephyr process is created
1. `Server`: In this mode, the Zephyr server is started.  Commands may be run by connecting via `Interactive`
1. `Interactive`: In this mode, users may interact with an existing `Server` process or Zephyr directly

The typical interaction mode is via `Server` followed by `Interactive`. 

### Working in the Zephyr Shell

Once you've downloaded either a ZIP or a TAR file as described above, unzip it to `<ZEPHYR_INSTALL>` (e.g. `/home/username/zephyr`). You can start
Zephyr in Server mode via

```
<ZEPHYR_HOME>/bin/kernel-core -sh <ZEPHYR_HOME>
```

This should result in something like:

![Command Output](./img/zephyr-server-start.png)

With your server started, you can now interact with Zephyr via the [Shell](/shell/commands)
### 

## Installing a Module
Zephyr has two types of plugins: `kernel modules` and `plugins`.  Plugins may generally be added, removed, started, stopped, etc. without
requiring a restart of the kernel (it's generally a bug if they can't).  However, kernel modules directly modify the kernel's behavior, and so the
Zephyr kernel must be restarted after a kernel module has been installed.

With the Zephyr kernel running, you may install a new kernel module (or set of them) via
```
plugin install `<url to kernel module>`
kernel restart
```

## Installing a Plugin

Plugins have no restrictions as to when they can be installed and uninstalled.  Simply run `plugin install <plugin url>`  and you should see

![Installing plugin](./img/plugin-installing.png)

In this example, we installed a plugin with the coordinate `io.zephyr.spring:spring-web-plugin:1.0.0`.  It is now available in the plugin registry,
viewable via `plugin list`.


## Viewing the Plugin Registry

Once you've successfully installed a plugin, it should be available in the plugin registry.  You may view plugins, along 
with their start via `plugin list`.

## Starting a Plugin

You may start many plugins at once via `plugin start` which accepts a list of plugin coordinates (eg. `io.zephyr.spring:spring-web-plugin:1.0.0`).  Zephyr will automatically compute the transitive closure of
the set of plugins via their dependency declarations, and from that, a fully parallel schedule for starting them.  

## Stopping a Plugin 

You may similarly stop many plugins at once via `plugin stop`.  Zephyr automatically computes a reverse topological order of all the plugins that depend on a `stopping` plugin,
and from that computes a fully parallel schedule.  Plugins are stopped in the reverse order in which they are started.
