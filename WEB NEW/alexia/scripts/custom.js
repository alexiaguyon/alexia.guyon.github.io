$( function() {

  $( '#toTop' ).click( function(e) {
    scroll(0);
  } );

  function scrollTo( e, identifier ) {
    e.stopPropagation();
    e.preventDefault();
    var target = $( identifier );
    var pos = $( target ).position().top;
    scroll( pos );
  };

  function scroll( position ) {
    var trigger = false;
    var time = ( 1 / ( $( "body" ).height() / Math.abs( $( window ).scrollTop() - position ) ) ) * 1800;
    if ( time < 500 ) {
      time = 500
    };
    $( "html, body" ).animate( {
      scrollTop: position
    }, time, function() {
      if ( !trigger ) {
        trigger = true;
      }
    } );
  };

    $( 'a' ).bind( 'click', function( e ) {
      if ( $( this ).attr( 'href' ).indexOf( '#' ) == -1 ) {
        return;
      }
      scrollTo( e, $( this ).attr( 'href' ) );
    } );
  } );
