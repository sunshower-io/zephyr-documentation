# Lifecycle

## Kernel Lifecycle

The module lifecycle is designed so that kernel module functionality and classpaths become available
at the very earliest opportunity.  The lifecycle is as follows:

1. Kernel Start
    1. Kernel Filesystem is created
    1. `droplet://kernel/modules.list` is read, producing list of existing kernel modules
    1. Kernel classloader is created as the combination of all kernel modules 
    1. Kernel loads all existing modules (initially none), sorted by `order`
    1. Plugin set is loaded
    
    
## Component Lifecycle
Some components in the Sunshower.io Kernel manage operations in phases, which allows for extensibility, 
   traceability, and simplicity.
   
   For instance, consider the `DefaultModuleManager`.  A user or process provides an
   installation request, at which the following phases are executed:
   
   1. The ModuleDownloadPhase downloads the module to the Kernel temporary storage folder and dispatches the following events
      1. DownloadStarted
      1. DownloadProgressed
      1. DownloadComplete
   2. The ModuleUnpackPhase 