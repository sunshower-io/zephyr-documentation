# Write Your First Kernel Module

Kernel modules alter the basic behavior of Zephyr. This example is based on `zephyr-logging`, which modifies the default Java logging behavior.

## A basic build.gradle
You'll want to depend on `kernel-core` and `kernel-api`, as well as `kernel-tests`.
```groovy
apply plugin: 'java'
apply plugin: 'java-library'
dependencies {

    [
            'info.picocli:picocli',
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

### Accepting CLI Arguments
You can accept options from the CLI within `initialize()`. First, you need to implement `io.zephyr.kernel.Options`.
```java
public class LogOptions extends AbstractValidatable<LogOptions> implements Options<LogOptions> {

  /**
   * Specify the home directory for Zephyr. Zephyr logs are stored here. For clustered Zephyr
   * kernels, this should be a distributed directory unless a data-distribution module is installed
   */
  @Getter
  @Setter
  @CommandLine.Option(
    names = {"-h", "--home-directory"},
    defaultValue = "zephyr"
  )
  private File homeDirectory;
}
```
You can then tweak `getOptions()` to return your new class.
```java
   public class LogEntryPoint implements EntryPoint {
    
     private LogOptions options;
   
     @Override
     public Logger getLogger() {}
     
     @Override
     public LogOptions getOptions() {
         return options;
     }
     
     @Override
     public int getPriority() {}
   
     @Override
     public void initialize(Map<ContextEntries, Object> context) { }
   }
```
Finally, as the first step in `initialize()`, you can create and set your new options.
```java
     public class LogEntryPoint implements EntryPoint {
      
       private LogOptions options;
     
       @Override
       public Logger getLogger() {}
       
       @Override
       public LogOptions getOptions() {
           return options;
       }
       
       @Override
       public int getPriority() {}
     
       @Override
       public void initialize(Map<ContextEntries, Object> context) {
           options = Options.create(LogOptions::new, context);
       }
     }
```


### Initializing a Kernel Module
The `initialize()` method gets called by the KernelLauncher, and does the heavy lifting for setting up your kernel module.
```java
import io.zephyr.common.Options;
import io.zephyr.kernel.extensions.EntryPoint;
import io.zephyr.kernel.log.Logging;
import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import lombok.val;

public class LogEntryPoint implements EntryPoint {

  static final Logger log = Logging.get(LogEntryPoint.class);

  private LogOptions options;

  @Override
  public Logger getLogger() {
    return log;
  }

  @Override
  @SuppressWarnings("unchecked")
  public void initialize(Map<ContextEntries, Object> context) {
    options = Options.create(LogOptions::new, context);

    if (options.getHomeDirectory() != null) {

      val logdir = new File(options.getHomeDirectory().getAbsoluteFile(), "logs");
      if (!logdir.exists()) {
        if (!logdir.mkdirs()) {
          log.log(Level.SEVERE, "log.entrypoint.mkdir.failed", logdir.getAbsolutePath());
          return;
        }
      }
      val logpattern = new File(logdir, "zephyr.log");

      Logger root = getRootAndClearHandlers();
      try {
        val handler = new FileHandler(logpattern.getAbsolutePath());
        handler.setFormatter(new LogFormatter());
        root.addHandler(handler);
      } catch (IOException ex) {
        log.log(Level.SEVERE, "log.entrypoint.configuration.failed", ex.getMessage());
        log.log(Level.SEVERE, "log.entrypoint.configuration.failed.ex", ex);
      }
    }
  }

  Logger getRootAndClearHandlers() {
    val logger = getRootLogger();

    val handlers = logger.getHandlers();
    for (val handler : handlers) {
      logger.removeHandler(handler);
    }
    return logger;
  }

  Logger getRootLogger() {
    Logger logger;
    for (logger = getLogger(); logger.getParent() != null; logger = logger.getParent()) {}
    return logger;
  }

  @Override
  public LogOptions getOptions() {
    return options;
  }

  @Override
  public int getPriority() {
    return EntryPoint.HIGHEST_PRIORITY + 4;
  }
}
```

## Handling Localization
Logging should be localized.
To do this, pass a name-spaced string to your logging method, and set up a corresponding string in the i18n properties file for the class.
The file should be in `src/main/resources/i18n/`, and then nested in directories to reflect the package name.
In this case, the directory for our logging localization is `io/zephyr/logging/`.
Because our EntryPoint's class name is LogEntryPoint and we're working in American English, we create the file `LogEntryPoint_en_US.properties`
Then we make an entry for each of our three logging messages in the class:
```properties
log.entrypoint.mkdir.failed=Could not make log directory ''{{0}}''
log.entrypoint.configuration.failed=Failed to configure logging. Reason: {{0}}
log.entrypoint.configuration.failed.ex=Full cause: {{0}}
```

## Registering an EntryPoint
The final step to getting your kernel module to build is registering it as a service in `src/main/resources/META-INF/services`.
Create a file named the zephyr extension you're using. In this case: `io.zephyr.kernel.extensions.EntryPoint`.
The content of the file should simply be the class you're providing that implements that extension: `io.zephyr.logging.LogEntryPoint`.