## Modules

A module is an application or component of an application that may be deployed into Zephyr. A module
may be packaged as a `JAR`, a `WAR` or any other file-format for which there is a
corresponding [io.zephyr.kernel.extensions.ModuleAssemblyExtractor](https://github.com/sunshower-io/zephyr/tree/master/kernel-api/src/main/java/io/zephyr/kernel/extensions)

There are several implementations of this class supporting:

1. [JAR Files](https://github.com/sunshower-io/zephyr/blob/master/kernel-modules/kernel-lib/src/main/java/io/zephyr/kernel/module/JarModuleAssemblyExtractor.java)
2. [WAR Files](https://github.com/sunshower-io/zephyr/blob/master/kernel-modules/kernel-lib/src/main/java/io/zephyr/kernel/module/WarModuleAssemblyExtractor.java)
3. [Spring Boot WARs](https://github.com/sunshower-io/zephyr/blob/master/kernel-modules/sunshower-spring/src/main/java/io/zephyr/spring/ext/SpringModuleAssemblyExtractor.java)

As you can see, adding support for new module formats is quite easy: simply implement
your `ModuleAssemblyExtractor`
and add a `META-INF/services/io.zephyr.kernel.extensions.ModuleAssemblyExtractor` file that refers
to it per the
[Java Services API](https://docs.oracle.com/javase/tutorial/ext/basics/spi.html)

These ModuleAssemblyExtractors must be installed as [Kernel Modules](##Kernel Modules)

### Some notes on Zephyr vs. the Java Services API + Java Module Framework

There is a good deal of overlap between Zephyr and _combination_ of the Java Services API and the _
Java Module Framework_. So what's the difference?

#### Topological Ordering

Zephyr computes a dependency graph over each set of modules that are installed. Contrary to many
available plugin frameworks, dependency lifecycle ordering is implicitly encoded within this graph.
We have found it very challenging, for instance, in OSGi to explicitly manage the dependency
lifecycle across hundreds of bundles and thousands of services. Zephyr cleanly and elegantly solves
for this.

#### UI/UX Extensibility

Zephyr natively understands [Aire-UX] widgets, which allows us to dynamically add and remove
functionality to a single-page web application

## Kernel Modules

The Zephyr Kernel is also extensible, but at a lower level than Zephyr modules. Kernel modules may
also define extension-points, so the kernel is recursively extensible. The primary kernel extension
points are:

1. [io.sunshower.kernel.core.ModuleScanner](https://github.com/sunshower-io/zephyr/blob/master/kernel-core/src/main/resources/META-INF/services/io.sunshower.kernel.core.ModuleScanner)
2. [io.zephyr.kernel.extensions.EntryPoint](https://github.com/sunshower-io/zephyr/blob/master/kernel-core/src/main/resources/META-INF/services/io.zephyr.kernel.extensions.EntryPoint)
3. [java.nio.file.spi.FileSystemProvider](https://github.com/sunshower-io/zephyr/blob/master/kernel-core/src/main/resources/META-INF/services/java.nio.file.spi.FileSystemProvider) (
   Zephyr provides its own cluster-aware filesystem)
4. [io.zephyr.kernel.core.ModuleClasspathManagerProvider](https://github.com/sunshower-io/zephyr/blob/master/kernel-api/src/main/java/io/zephyr/kernel/core/ModuleClasspathManagerProvider.java)
5. `io.zephyr.kernel.core.ModuleAssemblyExtractor` (discussed above)


The `io.zephyr.kernel.extensions.EntryPoint` is a good candidate for registering new functionality, including
new extension-points for the kernel.
