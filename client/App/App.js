Ext.application({
    name: 'App',
    appFolder: 'App',
    autoCreateViewport: true,
    paths: {
        'App': 'App',
        'Ext': 'ext/src'
    },
    requires: [
    ],
    controllers: [
        'Address'
    ],
    launch: function() {
    }
});
