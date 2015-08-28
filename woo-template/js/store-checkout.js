var storeCheckout = {
	init: function() {

		storeCheckout.controlViews();
		storeCheckout.controlBillFields();

	},

	onResize: function(){
		
	},

	controlViews: function(){

		// click one of the view controls
		jQuery(document).on('click', '.checkout-controls .switch', function(e){
			e.preventDefault();

			// get target phase
			var phase = jQuery(this).data('phase');

			// strip active classes
			jQuery('.checkout-controls .switch').removeClass('active');

			// set active class
			jQuery(this).addClass('active');

			// hide all views
			jQuery('form.checkout .view').hide();

			// show the target view
			jQuery('form.checkout .view[data-phase="' + phase + '"]').show();

		});

		// on ready, click first control
		jQuery('.checkout-controls .switch').first().click();

	},

	controlBillFields: function(){

		// function to set state of billing fields based on checkbox
		var toggleFields = function(){

			// determine if box is currently checked
			var checked = jQuery('#bill-to-different-address-checkbox').get(0).checked;

			// if so...
			if ( checked ){

				// slide open the form
				jQuery('.bill-fields').slideDown();

			// not checked...
			} else {

				// close the form
				jQuery('.bill-fields').slideUp();

			}

		}

		// listen for checkbox toggle
		jQuery('#bill-to-different-address-checkbox').change(function(){

			// run controller
			toggleFields();

		});

		// kick it
		toggleFields();

	}

};
jQuery(document).ready(function($){

	storeCheckout.init();
	jQuery(window).resize(function(){
		storeCheckout.onResize();
	});

});