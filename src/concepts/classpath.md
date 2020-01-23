---
order: 3
---

# Plugin Classpath

Zephyr's classloading is designed to maximize sharing between similar plugins
while enforcing isolation between dissimilar plugins.  Zephyr supports restricting resource imports
and exports at the package or class level via package filters, and dependency-graph filters at the plugin level.

## Package Filters
Plugins may exclude or include packages, resources, and services at the plugin level or at the dependency level.

### Plugin Resource Filters
A plugin can describe which packages and resources it wishes to provide to, or restrict from its dependencies. 
For instance, in our Greeter plugin configuration, suppose `com.greeters:greeter` contained the following resources:

*com.greeters:greeter/packages*
```
com.greeters.internal
com.greeters.lib
```

The greeters plugin could restrict the `com.greeters.internal` package from its dependents as follows:


*com.greeters:greeter/plugin.yaml*
```yaml
plugin:
    name: greeter
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: plugin
    description: Friendly ways to say hello!
    exports:
      exclude:
        - com/greeters/internal
      include:
        - com/greeters/lib
```

Such filters can contain wildcards and globs. 

Similarly, if a plugin wishes to include or exclude classpath resources from a dependency, it may use the
identical format in its dependency import declaration, e.g.

*com.greeters:greeter-german/plugin.yaml*
```yaml
plugin:
    name: greeter-german
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: plugin
    description: Freundliche Art Hallo zu sagen!
    dependencies:
      - dependency:
          required: true
          type: classpath 
          group: com.greeters
          name: greeter
          version: 1.0.0
          imports:
            exclude:
              - com/greeters/internal
            include:
              - com/greeters/lib

```


## Classloader Graph



A plugin's classloader graph mirrors its dependency graph subject to import/export restrictions as described above.  
This may be counterintuitive to many users coming from other modular environments where classpath sharing is severely restricted, 
if it's supported at all.  

![Greeter Classpath Graph](./img/classloader-graph.png)

This is a conscious decision on our part:  we believe that dependencies are best managed relative to the system they belong to as a whole,
rather than on a per-plugin basis.  Maximizing sharing can dramatically reduce memory consumption and startup times relative to alternative solutions.  
We've found that the plugin classloader graph selects the correct classes where conflicts exists in most cases.  Where it doesn't, altering the plugin graph by
adding or removing dependencies has resolved the issue.  If there are still problems, they can easily be resolved via import and export restrictions
as described above.

### Java ServiceLoader API
Zephyr supports and leverages the Java ServiceLoader API for plugins.  By default, plugins do not inherit their dependencies'
services.  This behavior can be overridden via the `services` element, which accepts `include` and `exclude` as arguments.


*com.greeters:greeter-german/plugin.yaml*
```yaml
plugin:
    name: greeter-german
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: plugin
    description: Freundliche Art Hallo zu sagen!
    dependencies:
      - dependency:
          required: true
          type: classpath 
          group: com.greeters
          name: greeter
          version: 1.0.0
          services: exclude
          imports:
            exclude:
              - com/greeters/internal
            include:
              - com/greeters/lib

```







