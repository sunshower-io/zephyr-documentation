# Overview
Developing extensible applications for the JVM can be a challenging task.  Zephyr is a next-generation
plugin management system for the JVM, designed with simplicity, performance, microservices readiness and testability in mind.

## Simplicity
Plugin management is complicated, but Zephyr uses powerful graph algorithms to intelligently manage every aspect of plugin lifecycle,
including:

#### Dependency Management
Zephyr automatically computes the transitive closure of your dependency graph and provides useful error messages when a dependency can't be resolved. If you have the registry plugin installed, Zephyr will intelligently resolve dependencies for you if they exist in the registry.

#### Lifecycle Management
Determining start and shutdown order for complex dependency graphs is, well, complex.  Zephyr intelligently resolves all service and classpath dependencies for any plugin and starts or stops them in the correct order.

#### Classloader Management
Free yourself from the complexity of package imports and exports. Zephyr automatically resolves the correct plugin classpath so you never have to worry about it. 

## Performance
Zephyr was designed from the ground up to sip resources and take advantage of multicore architectures.  Zephyr weighs in at 1.3 MB and operates in less than 512 KB of memory while aggressively and automatically parallelizing all management operations.

## Compatibility

Your plugin framework shouldn't dictate which frameworks and technologies you can use.  Zephyr is designed to play nicely with every JVM language and framework. 
- Install language runtimes as plugins
- Easily add support for new frameworks. Support for a given framework never "leaks" into any other framework support
- Use multiple frameworks and run them all side-by-side within a given Zephyr installation

## Microservices Readiness

We understand that microservices are taking over, but we think there's a lot of fertile middle-ground between monoliths and microservices.  Zephyr's goal is to help out with that by allowing users to coalesce or split services where appropriate.

## Testability 
Testing complex plugin interactions proved extremely difficult in other technologies, so we developed the Zephyr testing technology alongside the platform to ensure
seamless, beautiful test capabilities that integrate with any frameworks you use.

