Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'App.store.Address',
        'Ext.grid.column.Action',
        'Ext.grid.Panel',
        'Ext.layout.container.Border'
    ],
    title: "Musician's Adressbook",
    layout: 'border',
    items: [{
        xtype: 'grid',       
        region: 'center',
        selType: 'rowmodel',
        store: 'Address',
        stateful: true,
        multiSelect: true,
        stateId: 'stateGrid',
        flex: 2,
        columns: [{
            text: 'First Name',
            sortable: false,
            dataIndex: 'firstn'
        }, {
            text: 'Last Name',
            sortable: true,
            dataIndex: 'lastn'
        }, {
            text: 'Street',
            sortable: true,
            dataIndex: 'street'
        }, {
            text: 'City',
            sortable: true,
            dataIndex: 'city'
        }, {
            text: 'Zipcode',
            sortable: true,
            dataIndex: 'zipcode'
        }, {
            text: 'Birthday',
            sortable: true,
            dataIndex:'birthday'
        }, {
            menuDisabled: false,
            sortable: true,
            xtype: 'actioncolumn',
            width: 50
        }],
        title: 'Adresses' 
    }, {
        collapsible: true,
        region: 'east',
        bodyPadding: 5,  
        title: 'Additional Info',
        items: [{
            name: 'band',
            xtype: 'textfield',
            fieldLabel: 'Band name'
        }, {
            name: 'favsong',
            xtype: 'textfield',
            fieldLabel: 'Favourite Song'
        }, {
            name: 'favkey',
            xtype: 'textfield',
            fieldLabel: 'Fav Key'
        }, {
            name: 'update',
            xtype: 'button',
            text: 'Update'    
        }]
    }]
});