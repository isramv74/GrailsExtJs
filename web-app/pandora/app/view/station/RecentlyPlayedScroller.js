Ext.define('Pandora.view.station.RecentlyPlayedScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.recentlyplayedscroller',    
    store: 'RecentSongs',
    itemTpl: '<div>{name}</div>'
});

console.log("Vista RecentlyPlayedScroller");