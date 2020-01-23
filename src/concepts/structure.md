---
order: 2
---

# Structure

The Kernel filesystem is structured as follows:

`$SUNSHOWER_HOME = /`

When a kernel module is installed, a new "directory" is created at:
`droplet://<droplet-group>/<droplet-name>/<droplet-version>`
where `<droplet-group>`, `<droplet-name>` and `<droplet-version>` correspond to the following `META-INF/MANIFEST.MF` 
entries of the installed assembly

`version` (must be lower-case)
`name` (lower-case)
`group` (lower-case)


## ROOT
The directory `droplet:///` corresponds to the root of the Sunshower.io file-system
and may only be accessed by kernel modules. There are several notable files and directories
in this filesystem:

1. `kernel.idx`--an index of the installed plugins and kernel-modules, as well as information about location, digests, and state
1. `modules/` a directory containing the list (symlinked) of installed modules
1. `plugins/` a directory containing the list (symlinked) of installed plugins

## Kernel Module Registry
When a kernel module is installed, the kernel saves the entry to droplet://kernel/registry.modlist
upon starting the kernel, modules are read from this list.

The modules.list file contains the minimum amount of information required to load the kernel modules, and has the following format
```
<order>:<module-group>:<module-name>:<module-version>:[directory-list]
```

## Module URI structure
Given a module with `group=sunshower:artifact=stuff:version=1.0.0`, the module's structure
can be located at `droplet:///sunshower/artifact/1.0.0`.  Everything within this URI corresponds to the physical directory structure
of the assembly installed.   The Sunshower kernel creates several additional files at this scheme:

1.  `plugin.idx`: `droplet:///sunshower/artifact/1.0.0/plugin.idx` -- this file contains kernel-specific information and must not be modified
1.  `plugin.info`: `droplet:///sunshower/artifact/1.0.0/plugin.info` -- this file contains information about this plugin and its state
1   `paths.idx` : `etc.` --this file contains kernel-specific information about the plugin