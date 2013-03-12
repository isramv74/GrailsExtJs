Ext.Loader.setConfig({  enabled: true });
Ext.application({
    name: 'Pandora',
    autoCreateViewport: true,
    
    models: ['Station', 'Song'],    
    stores: ['Stations', 'RecentSongs', 'SearchResults'],
    controllers: ['Station', 'Song']
});

console.log("App.Js inicio");