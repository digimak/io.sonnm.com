import './Site.scss';
import 'bootstrap';
import 'prismjs/components/prism-ruby';
import Site from './modules/site';
import Lazy from 'jquery-lazy';

(function( $ ) {
  console.log('Jquery version ' + $.fn.jquery);  
  $(document).ready(function($) {
    Site.bootstrap();
  });
})(jQuery);