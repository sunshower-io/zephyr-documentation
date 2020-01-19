# Installing Plugins and Modules

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
