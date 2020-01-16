# Kernel Extension Points
Zephyr was designed with extreme extensibility and customizability in mind.  Zephyr's internal behaviors can be
modified in a variety of ways, including `plugins` , `kernel entry points`, and `kernel modules`

## Kernel Entry Points

Kernel Entry Points are the lowest-level mechanism to extend or modify Zephyr's internal behavior.  Kernel Entry Points
are added to the `$ZEPHYR_HOME/lib` directory, and so are available on the System classloader, in contrast to the other mechanisms.


### The Kernel Entry Point API

To modify Kernel behaviors, you must implement some portion of the Kernel `EntryPoint` API, defined in `kernel-api`.

```java

public interface EntryPoint extends PrioritizedExtension, Startable, Stoppable {
  enum ContextEntries {
    ARGS,
    ENTRY_POINTS,
    ENTRY_POINTS_TEMP,
    KERNEL_EXECUTOR_SERVICE,
    ENTRY_POINT_REGISTRY;
  }

  Logger getLogger();

  default void initialize(Map<ContextEntries, Object> context) {}

  default void finalize(Map<ContextEntries, Object> context) {}

  default void start() {
    getLogger().log(Level.INFO, "entry point starting...");
  }

  default void stop() {
    getLogger().log(Level.INFO, "entry point stopping...");
  }

  default <T> T getService(Class<T> type) {
    throw new UnsupportedOperationException("Empty Entry Point contains no services");
  }

  default <T> boolean exports(Class<T> type) {
    return false;
  }

  default void run(Map<ContextEntries, Object> ctx) {}

  Options<?> getOptions();
}
```

An `EntryPoint` may obtain the parameters used to start the Zephyr process via the `context` map supplied to `initialize` and
use them to modify its behavior, ideally creating and supplying an implementation of `io.zephyr.kernel.Options` ( [Picocli](https://picocli.info ) is available
as an `EntryPoint` by default.)

EntryPoints may provide additional Zephyr Shell commands, modify the shell, modify the internal concurrency mechanisms, alter logging, and many other things.

#### Entry Point Concurrency
Each EntryPoint is run asynchronously relative to the main Zephyr thread, but does not guarantee a unique ThreadLocal context.  Implementors should
use concurrency with caution.  Zephyr supplies an ExecutorService, available in the context under the key `KERNEL_EXECUTOR_SERVICE`.  Any tasks scheduled on the ExecutorService
must complete before `stop` is exited.

EntryPoint's `initialize` and `finalize` methods must not block for long periods.  However, `run` may block for as long as it needs to, but should
honor OS shutdown requests.

Finally, EntryPoints do not need to be thread-safe.

####  Entry Point Order

The kernel launcher is itself an entry point, and has priority `MAX_PRIORITY - 10`, allowing other entry points to preempt it.
Preempting the launcher should be done with care, if at all.

## Kernel Modules
Once Zephyr has scheduled and executed all available entry points, `kernel modules` are loaded and executed.  All
kernel modules reside in the `kernel classloader`, which is an optional predecessor to any [plugin classloader graph](/concepts/classpath.html)

Kernel modules don't have a defined lifecycle, and generally exist to supply various Java `Service Provider Interfaces` that modify the kernel's capabilities for interacting with
plugins.  For instance, to define a new packaging format, a kernel module may implement the `io.zephyr.kernel.extensions.ModuleAssemblyExtractor` API.

```java
public interface ModuleAssemblyExtractor {
  void extract(Assembly assembly, FileSystem moduleFilesystem, ExtractionListener listener)
      throws Exception;

  interface ExtractionListener {
    void beforeEntryExtracted(String name, Object target);

    void afterEntryExtracted(String name, Object target);
  }
}
```

### Kernel Module Concurrency
Kernel modules are safely and concurrently executed on the Gyre, and do not require any internal thread-safety mechanisms.





