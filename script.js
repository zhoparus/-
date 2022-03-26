$('#checkbox_check').on('click', function () {
    if ( $(this).is(':checked') ) {
      var elements = d.getElementsByClassName(oldClass),i,len;

      for (i = 0, len = elements.length; i < len; i += 1) {
         elements[i].className = listitem;
      }
   }
})