import '../styles/Loader.css'
import $ from 'jquery';
import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  })

  return (
    <div id="preloader">
        <div id="status">
            <div className="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
            </div>
        </div>
    </div>
  )
}

export default Loader