# Plugins and Modules

Plugins and modules extend the base functionality of Zephyr, and are how you build up your application.
They are fairly similar, but differ in in important ways.
The main difference is that a kernel module's classpath is visible to the kernel.
This lets you modify base functionality of how Zephyr works, but also means that you have to restart Zephyr for the changes to take.
Plugins can be installed, started, stopped and uninstalled on the fly.

Find out how to write a [kernel module](/get-started/write-kernel-module) or [plugin](/get-started/write-plugin)