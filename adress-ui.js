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
        name : 'current_project',
        xtype: 'textfield',
        fieldLabel: 'Current Project'
    }, {
        name : 'last_project',
        xtype: 'textfield',
        fieldLabel: 'Last Project'
    }, {
        name : 'hobby',
        xtype: 'textfield',
        fieldLabel: 'Hobby'
    }]
});

filterPanel.query('textfield[name="current_project"]')[0].setValue('Java Editing');
filterPanel.query('textfield[name="last_project"]')[0].setValue('Pascal fanaticism');
filterPanel.query('textfield[name="hobby"]')[0].setValue('Sleeping');

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
