Ext.define('App.model.Address', {
    extend: 'Ext.data.Model',               
    fields: [               // Improve coding style.
        'firstn',
        'lastn',
        'street',
        'city',
        {name:'zipcode', type: 'int'},
        {name:'birthday', type:'date'},
        'band',
        'favsong',
        'favkey'
    ],
    idProperty: 'adresslist'
});
