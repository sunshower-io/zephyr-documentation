# Plugins and Modules

Zephyr has two types of plugins: `kernel modules` and `plugins`.  Plugins may generally be added, removed, started, stopped, etc. without
requiring a restart of the kernel (it's generally a bug if they can't).  However, kernel modules directly modify the kernel's behavior, and so the
Zephyr kernel must be restarted after a kernel module has been installed.

Modules and plugins share many similarities, but differ in important ways. For instance, any kernel-module's classpath is visible to the kernel. Second, kernel-modules are loaded before any plugins are.