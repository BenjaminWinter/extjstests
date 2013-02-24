Ext.define('App.store.Address', {
    extend: 'Ext.data.Store',
    model: 'App.model.Address',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root : 'datj',
            successProperty: 'success'            
        },
        writer: {
            type: 'json',
            root : 'data',
            successProperty: 'success'
        },
        api: {
            read: '../server/app/data.php?action=read',
            create: '../server/app/data.php?action=create',
            update: '../server/app/data.php?action=update',
            destroy: '../server/app/data.php?action=destroy',

        }
    }
});