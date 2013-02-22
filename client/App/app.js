Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*'
]);

// Data model including hidden fields for info panel
Ext.define('Adresslist', {
    extend:     'Ext.data.Model',
    fields:     ['firstn','lastn','street','city',{name:'zipcode', type: 'int'},
                {name:'birthday', type:'date'},'band','favsong','favkey'],
    idProperty: 'adresslist'
});

Ext.onReady(function() {
// Load data using php/json
    var store = Ext.create('Ext.data.JsonStore', {
        proxy: {
            type:       'ajax',
            model:      'Adresslist',
            url:        '../server/app/data.php',
            storeId:    'MyStore',
            reader: {
                type:   'json'
            }
        }
    });
    store.load();

// Define main grid
    var grid = Ext.create('Ext.grid.Panel', {
        region:         'center',
        selType:        'rowmodel',
        store:          store,
        stateful:       true,
        multiSelect:    true,
        stateId:        'stateGrid',
        listeners: {
// On click: Display information in info panel using data from hidden fields
            cellclick: function handleRowSelect(grid, td, cellIndex,record,tr,rowIndex) {
                var field1 = store.getAt(rowIndex).get('band');
                var field2 = store.getAt(rowIndex).get('favsong');
                var field3 = store.getAt(rowIndex).get('favkey');
                infoPanel.query('textfield[name="band"]')[0].setValue(field1);
                infoPanel.query('textfield[name="favsong"]')[0].setValue(field2);
                infoPanel.query('textfield[name="favkey"]')[0].setValue(field3); 
            }
        },
        flex: 2,
        columns: [{
            text:         'First Name',
            sortable:     false,
            dataIndex:    'firstn'
        }, {
            text:         'Last Name',
            sortable:     true,
            dataIndex:    'lastn'
        }, {
            text:         'Street',
            sortable:     true,
            dataIndex:    'street'
        }, {
            text:         'City',
            sortable:     true,
            dataIndex:    'city'
        }, {
            text:         'Zipcode',
            sortable:     true,
            dataIndex:    'zipcode'
        }, {
            text:         'Birthday',
            sortable:     true,
            dataIndex:    'birthday'
        }, {
            menuDisabled: false,
            sortable:     true,
            xtype:        'actioncolumn',
            width:        50
        }],
        title: 'Adresses',
    });

// Define infopanel with textfields
    var infoPanel = Ext.create('Ext.panel.Panel', {
        collapsible: true,
        region: 'east',
        bodyPadding: 5,  
        title: 'Additional Info',
        items: [{
            name:        'band',
            xtype:       'textfield',
            fieldLabel:  'Band name'
        }, {
            name:        'favsong',
            xtype:       'textfield',
            fieldLabel:  'Favourite Song'
        }, {
            name:        'favkey',
            xtype:       'textfield',
            fieldLabel:  'Fav Key'
        }]
    });

// Define mainPanel: Will contain grid + infoPanel
    var mainPanel = Ext.create('Ext.Panel', {
        title:      "Musician's Adressbook",
        layout:     'border'
    });

// Mainview contains mainPanel - extends full Browser width through viewport usage
    var mainView = Ext.create('Ext.Viewport',{
        layout:     'fit',
    });

// Add site Elements to mainView viewport
    mainPanel.add(grid);
    mainPanel.add(infoPanel);
    mainView.add(mainPanel);
});
