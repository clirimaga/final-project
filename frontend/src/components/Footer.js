import React from 'react'

import yt from './image/yt_logo_rgb_light.png';
import sp from './image/Spotify_Logo_RGB_Green.png';
export default function Footer() {
  return (
    
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="flex-row-reverse">
                    <ul class="list-unstyled text-muted">
                      
                        <li><a href='https://www.youtube.com/@LearnGermanOriginal'><img src={yt} alt="youtube logo" height="30px"/></a></li>
                        <li><a href='https://open.spotify.com/show/2rnCPyV8A9J80QtmGj2pAx'><img src={sp} alt="spotify logo" height="40px"/></a></li>
                    </ul>
                </div>
            </div>
            <div class="row-lg-4 row-md-6">
              <h5>&copy; Copyrights. All rights reserved.</h5>  
            </div>
        </div>
    </footer>
  );
}
