Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*'
]);

 
// == FROM TEMPLATE ==
// Define Company entity
// Null out built in convert functions for performance *because the raw data is known to be valid*
// Specifying defaultValue as undefined will also save code. *As long as there will always be values in the data, or the app tolerates undefined field values*
/* Ext.define('Company', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'company'},
       {name: 'price',      type: 'float', convert: null,     defaultValue: undefined},
       {name: 'change',     type: 'float', convert: null,     defaultValue: undefined},
       {name: 'pctChange',  type: 'float', convert: null,     defaultValue: undefined},
       {name: 'lastChange', type: 'date',  dateFormat: 'n/j h:ia', defaultValue: undefined}
    ],
    idProperty: 'company'
});
*/

Ext.onReady(function() {

    var store = Ext.create('Ext.data.JsonStore', {
        proxy: {
            type: 'ajax',
            url : 'data.php',
            reader: {
                type: 'json'
            }
        },
        fields: ['firstn','lastn','street','city',{name:'zipcode', type: 'int'},
                {name:'birthday', type:'date'}]
    });
    store.load();

    var mainPanel = Ext.create('Ext.grid.Panel', {
        region: 'center',
        store: store,
        stateful: true,
        multiSelect: true,
        stateId: 'stateGrid',
        flex: 2,
        columns: [{
            text     : 'First Name',
            sortable : false,
            dataIndex: 'firstn'
        }, {
            text     : 'Last Name',
            sortable : true,
            dataIndex: 'lastn'
        }, {
            text     : 'Street',
            sortable : true,
            dataIndex: 'street'
        }, {
            text     : 'City',
            sortable : true,
            dataIndex: 'city'
        }, {
            text     : 'Zipcode',
            sortable : true,
            dataIndex: 'zipcode'
        }, {
            text     : 'Birthday',
            sortable : true,
            dataIndex: 'birthday'
        }, {
            menuDisabled: false,
            sortable: true,
            xtype: 'actioncolumn',
            width: 50                       //Komma: IE-Fehler
        }],
        title: 'Adresses',
    });

    var infoPanel = Ext.create('Ext.Panel', {
        title: "Adressbook for you!",
        layout: 'border',
        renderTo: Ext.getBody(),
        items: [{
            xtype: 'panel',
            region: 'east',
            collapsible: true,
            title: 'RockstarInfo',
            flex: 1
        }]
    });

    var mainView = Ext.create('Ext.Viewport',{
        layout:'fit'
    });

    infoPanel.add(mainPanel);
    mainView.add(infoPanel);

});
