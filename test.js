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
Ext.create('Ext.window.Window', {
        height : 300,
        width  : 300,
        
    }).show();

});
