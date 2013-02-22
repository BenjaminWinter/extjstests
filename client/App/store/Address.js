Ext.define('App.store.Address', {
    extend: 'Ext.data.Store',
    model: 'App.model.Address',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../server/app/data.php',
        reader: {
            type: 'json'
        }
    }
});