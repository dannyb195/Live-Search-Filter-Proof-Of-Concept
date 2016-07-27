(function($){


	/**
	 * [filterSearchItems description]
	 * @param  {string} val        The string typing into the input text field
	 * @param  {string} searchItem The class of the items to be search / filtered
	 */
	function filterSearchItems( val, searchItem ) {

		$( '.' + searchItem + '' ).each( function() {

			content = $( this ).html();
			content = content.toLowerCase();

			if ( -1 === content.search( val ) ) {
				$( this ).hide();
			} else {
				$( this ).show();
			}

		} );

	}

	/**
	 * This function takes the input text field's class and a class of all items to be searched.
	 * It then fires liveSearch(); which controls the showing and hiding of search / filter results
	 *
	 * @param  {string} searchInput       The class of the text box to use as a search box
	 * @param  {string} searchItem        A class applied to all items to be searched / filtered
	 */
	function liveSearch( searchInput, searchItem ) {

		$( '.' + searchInput + '' ).on( 'keyup', function() {
			var val = $( this ).val();

			console.log( val );

			filterSearchItems( val, searchItem );
		} );
	}

	liveSearch( 'search-box', 'search-item' );

})(jQuery);