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
    fields: ['firstn','lastn','street','city',{name:'zipcode', type: 'int'},
                {name:'birthday', type:'date'},'band','favsong','favkey'],
    idProperty: 'company'
});
*/

Ext.onReady(function() {

    var store = Ext.create('Ext.data.JsonStore', {
        proxy: {
            type: 'ajax',
            url : 'data.php',
            storeId : 'MyStore',
            reader: {
                type: 'json'
            }
        },
        fields: ['firstn','lastn','street','city',{name:'zipcode', type: 'int'},
                {name:'birthday', type:'date'},'band','favsong','favkey']
    });
    store.load();

   var grid2 = Ext.create('Ext.grid.Panel', {
        region: 'east',
        selType: 'rowmodel',
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
        }],
        title: 'Secretinfo',
    });



    var grid = Ext.create('Ext.grid.Panel', {
        region: 'center',
        selType: 'rowmodel',
        store: store,
        stateful: true,
        multiSelect: true,
        stateId: 'stateGrid',
        listeners: {
            cellclick: function handleRowSelect(grid, td, cellIndex,record,tr,rowIndex) {
                var field1 = store.getAt(rowIndex).get('band');
                var field2 = store.getAt(rowIndex).get('favsong');
                var field3 = store.getAt(rowIndex).get('favkey');
                filterPanel.query('textfield[name="band"]')[0].setValue(field1);
                filterPanel.query('textfield[name="favsong"]')[0].setValue(field2);
                filterPanel.query('textfield[name="favkey"]')[0].setValue(field3); 
            }
        },
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

var filterPanel = Ext.create('Ext.panel.Panel', {
    region: 'east',
    bodyPadding: 5,  // Don't want content to crunch against the borders
    title: 'Filters',
    items: [{
        name : 'band',
        xtype: 'textfield',
        fieldLabel: 'Band name'
    }, {
        name : 'favsong',
        xtype: 'textfield',
        fieldLabel: 'Favourite Song'
    }, {
        name : 'favkey',
        xtype: 'textfield',
        fieldLabel: 'Fav Key'
    }]
});


    var mainPanel = Ext.create('Ext.Panel', {
        title: "Adressbook for you!",
        layout: 'border'
         
    });


    var mainView = Ext.create('Ext.Viewport',{
        layout:'fit',
    });

    mainPanel.add(grid);
    mainPanel.add(filterPanel);
    mainView.add(mainPanel);


});
