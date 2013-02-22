Ext.define('App.controller.Address', {
    extend: 'Ext.app.Controller',           //Works globally.
    requires: [
        'Ext.window.MessageBox'
    ],
    stores: [
        'Address'
    ],
    refs: [{
        ref: 'bandField',
        selector: 'textfield[name=band]' 
    }, {
        ref: 'favsongField',
        selector: 'textfield[name=favsong]'
    }, {
        ref: 'favkeyField',
        selector: 'textfield[name=favkey]'
    }],
    init: function() {
        this.control({
            'grid': {
                cellclick: this.handleRowSelect  
            }
        })
    },
    handleRowSelect: function(grid, td, cellIndex,record,tr,rowIndex) {
        var address = this.getAddressStore().getAt(rowIndex);
        this.getBandField().setValue(address.get('band'));
        this.getFavsongField().setValue(address.get('favsong'));
        this.getFavkeyField().setValue(address.get('favkey'));
    }
});
//xtype.form
//form, getform()
