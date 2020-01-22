# Write Your First Kernel Module

Kernel modules alter the basic behavior of Zephyr. This example is based on `zephyr-logging`, which modifies the default Java logging behavior.

## A basic build.gradle
You'll want to depend on `kernel-core` and `kernel-api`, as well as `kernel-tests`.
```groovy
apply plugin: 'java'
apply plugin: 'java-library'
dependencies {

    [
            project(':kernel-api'),
            project(':kernel-core')
    ].each {
        implementation it
    }

    [
            project(':kernel-tests:kernel-test-common')
    ].each {
        testImplementation it
    }
}
```

## The basics of implementing an EntryPoint
`io.zephyr.kernel.extensions.EntryPoint` is the bread-and-butter of extending Zephyr.
`getLogger()` is simple enough -- you provide a logger for the class. In most cases, you'll want the logger to be a field in the class
`getOptions()` lets you get the options LogEntryPoint are initialized with. `io.zephyr.kernel.Options` can be implemented to allow you to pass in args from the command line.
`getPriority()` is used to determine the start order of a kernel module. The smaller the int, the higher the priority.
`initialize()` is called by the KernelLauncher to initialize the module with Zephyr's context.

```java
public class LogEntryPoint implements EntryPoint {

  @Override
  public Logger getLogger() {}
  
  @Override
  public Options<?> getOptions() {}
  
  @Override
  public int getPriority() {}

  @Override
  public void initialize(Map<ContextEntries, Object> context) { }
}
```

## Initializing a Kernel Module


## Extending Options
