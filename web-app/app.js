Ext.application({
    name: 'AM',
    //application name that becomes the namespace
    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,
    controllers: [
        'Users', 'Departments']
});