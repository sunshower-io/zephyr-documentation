module.exports = {
    title: 'Zephyr',
    base: '/zephyr-documentation/',
    description: 'A Java Plugin System for the 21st Century',
    themeConfig: {
        logo: 'wind-duotone.svg',
        sidebar: [
            '/',
            {
                title: 'Concepts',
                path: '/concepts/',
                sidebarDepth: 2,
                children: [
                    ['/concepts/', 'Concepts'],
                    ['/concepts/plugins-modules', 'Plugins and Modules'],
                    ['/concepts/structure', 'Structure'],
                    ['/concepts/lifecycle', 'Lifecycle']
                ]
            },
            {
                title: 'Getting Started',
                path: '/get-started/',
                sidebarDepth: 2,
                children: [
                    ['/get-started/', 'Installation'],
                    ['/get-started/plugin', 'Writing Your First Plugin'],
                    ['/get-started/command', 'Writing Your First Command']
                ]
            },
            {
                title: 'Available Plugins',
                path: '/plugins/',
                sidebarDepth: 2,
                children: [
                    ['/plugins/', 'Available Plugins'],
                ]
            }
        ],
        repo: 'sunshower-io/zephyr',
        repoLabel: 'Get Zephyr',
        editLinks: false,
        nextLinks: false,
        prevLinks: false
    }
}