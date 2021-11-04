# Module Classpath

Zephyr's classloading is designed to maximize sharing between similar modules
while enforcing isolation between dissimilar modules.  Zephyr supports restricting resource imports
and exports at the package or class level via package filters, and dependency-graph filters at the module level.

## Package Filters
Modules may exclude or include packages, resources, and services at the module level or at the dependency level.

### Module Descriptor Formats
Zephyr supports `YAML`, `JSON`, and `MANIFEST.MF` module descriptor formats by default. Implementing a new `ModuleScanner`
allows you to extend or modify the formats understood by Zephyr.


#### MANIFEST.MF

MANIFEST files are typically the easiest to generate with existing build-tools.  Understood fields are:



```manifest
name: <module name> (string, required)
group: <module group> (string, required)
version: <module version> (semantic version)
order: <startup order> (int, optional)
type: <plugin|kernel-module> (enum, optional, defaults to "plugin")
dependencies: {dependency-descriptor}

```

The format for `dependency-descriptors` is as follows:

`<imports=[import-list]; exports=[export-list]>`
Where the `import-list` and `export-list` are comma-separated path definitions of 
type `resource` or `package`. For instance, if you would like to only expose `io.sunshower.my.plugin.package`
you would specify `<imports:[io.sunshower.my.plugin.package.*]>`. 



```text
[type]@[group]:[name]:[version]
```
for instance, if you've defined a plugin with 
`[group]` `io.sunshower.zephyr.plugins`, `[name]` `translator-plugin`, `version` `1.0.0.Final`, 
and this plugin contains services (not just a useful classpath), then that can be identified within Zephyr
at `service@io.sunshower.zephyr.plungins:translator-plugin:1.0.0.Final`

Dependencies are separated by commas with optional leading and trailing whitespace


#### Dependency Descriptors
Following a dependency-declaration, you can specify a dependency-descriptor which contains the following elements:

1. `export`: if this set to `true`, then dependencies of your plugin will see this dependency.  i.e. 
    this plugin will be _re-exported_
2. `services`: (none|import|export), default: `none`.  If set to `export`, then this module's services will
    be re-exported as described above
3. optional: if set to `true`, then dependency-resolution will not be enforced.  If it is present, then
   the lifecycle of this module will be executed according to its location within the dependency graph





### Module Resource Filters
A module can describe which packages and resources it wishes to provide to, or restrict from its dependencies. 
For instance, in our Greeter module configuration, suppose `com.greeters:greeter` contained the following resources:

*com.greeters:greeter/packages*
```
com.greeters.internal
com.greeters.lib
```

The greeters module could restrict the `com.greeters.internal` package from its dependents as follows:


*com.greeters:greeter/module.yaml*
```yaml
module:
    name: greeter
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: module
    description: Friendly ways to say hello!
    exports:
      exclude:
        - com/greeters/internal
      include:
        - com/greeters/lib
```

Such filters can contain wildcards and globs. 

Similarly, if a module wishes to include or exclude classpath resources from a dependency, it may use the
identical format in its dependency import declaration, e.g.

*com.greeters:greeter-german/module.yaml*
```yaml
module:
    name: greeter-german
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: module
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

A module's classloader graph mirrors its dependency graph subject to import/export restrictions as described above.  
This may be counterintuitive to many users coming from other modular environments where classpath sharing is severely restricted, 
if it's supported at all.  

![Greeter Classpath Graph](./img/classloader-graph.png)

This is a conscious decision on our part:  we believe that dependencies are best managed relative to the system they belong to as a whole,
rather than on a per-module basis.  Maximizing sharing can dramatically reduce memory consumption and startup times relative to alternative solutions.  
We've found that the module classloader graph selects the correct classes where conflicts exists in most cases.  Where it doesn't, altering the module graph by
adding or removing dependencies has resolved the issue.  If there are still problems, they can easily be resolved via import and export restrictions
as described above.

### Java ServiceLoader API
Zephyr supports and leverages the Java ServiceLoader API for modules.  By default, modules do not inherit their dependencies'
services.  This behavior can be overridden via the `services` element, which accepts `include` and `exclude` as arguments.


*com.greeters:greeter-german/module.yaml*
```yaml
module:
    name: greeter-german
    group: com.greeters
    version: 1.0.0-SNAPSHOT
    type: module
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







