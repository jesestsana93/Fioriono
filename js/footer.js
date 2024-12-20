$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    footer();

    function footer() {
        $("footer").append(`    
        <div class="row bg-gray-extra-dark padding-left-right-twelve-percent padding-top-bottom-150px">
            <div class="col-md-3 col-sm-6 col-xs-12 center-col md-margin-bottom-50px sm-text-center">
                <a href="#" class="margin-bottom-35px display-inline-block" data-uk-scroll><img src="images/fiorino.png" class="img-fluid" alt="" /></a>
                
                
               
            </div>

            <!-- Links -->
            <div class="col-md-2 col-sm-6 col-xs-12 center-col padding-left-35px md-margin-bottom-50px sm-text-center xs-no-border-left xs-no-padding-left">
                <h5 class="text-extra-large text-weight-300 text-white">Enlaces</h5>
                <ul class="list-unstyled no-margin-bottom">
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="index.html"><span data-uk-icon="icon: home; ratio: .8" class="margin-right-5px position-relative bottom-2"></span>Inicio</a></li>
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="book.html"><i class="fas fa-wine-glass mr-2"></i>Eventos</a></li>
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="nosotros.html"><span data-uk-icon="icon: info; ratio: .8" class="margin-right-5px position-relative bottom-2"></span>Nosotros</a></li>
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="#"><span data-uk-icon="icon: thumbnails; ratio: .8" class="margin-right-5px position-relative bottom-2"></span>Servicios adicionales</a></li>
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="#"><i class="fas fa-comments mr-2"></i>Reseñas</a></li>
                    <li><a class="text-small text-white" href="#"><span data-uk-icon="icon: mail; ratio: .8" class="margin-right-5px position-relative bottom-2"></span> Contacto</a></li>
                </ul>
            </div>
            
            <!-- Social -->
            <div class="col-md-2 col-sm-6 col-xs-12 center-col padding-left-35px md-margin-bottom-50px sm-text-center xs-no-border-left xs-no-padding-left">
                <h5 class="text-extra-large text-weight-300 text-white">Social</h5>
                <ul class="list-unstyled no-margin-bottom"> 
                    <li class="margin-bottom-10px text-white"><a class="text-small text-white" href="https://www.instagram.com/gustavofiorino/" target="_blank" title="Seguinos en instagram"><i class="fab fa-instagram instagram mr-2"></i> Instagram</a></li>               
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="https://www.tiktok.com/@gustavofiorino" target="_blank" title="Seguinos en TikTok"><img src="images/tiktok.png" class="img-fluid mr-2" style="height:15px;" /> TikTok</a></li>
                    <li class="margin-bottom-10px"><a class="text-small text-white" href="https://www.youtube.com/@GustavoFiorinoGF" target="_blank" title="Seguinos en YouTube"><i class="fab fa-youtube text-danger mr-2"></i>YouTube</a></li>
                    
                </ul>                
            </div>            
            
            
            <!-- Galeria -->
            <div class="col-md-3 col-sm-6 col-xs-12 center-col padding-bottom-10px md-no-border-right sm-text-center xs-no-border-left xs-no-padding-left xs-no-padding-bottom">
                <h5 class="text-extra-large text-weight-300 text-white">Estudio</h5>
                <div class="uk-grid-small uk-child-width-1-3" data-uk-grid data-uk-lightbox="animation: fade">
                   
                </div>
               
                <p class="mt-2 text-white" style="font-size: 13px">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    Av. Montes de Oca 251 Piso 4 oficina 148. CABA. Argentina</p>
                <p class="text-white" style="font-size: 13px"> <i class="fas fa-phone mr-2"></i> (+5411) 4519-5615 <br> 
                <i class="fas fa-phone mr-2"></i> (+5411) 4307-3322  </p>
            </div>
        </div>
        
        <div class="row bg-black padding-top-bottom-50px padding-left-right-twelve-percent">
            <!-- Copyright -->
            <div class="col-md-8 col-sm-12 col-xs-12">
                <p class="no-margin-bottom text-small text-weight-400 text-center sm-margin-bottom-20px">Copyright © 2024<span class="text-gray-regular">. Todos los derechos reservados.</span></p>
            </div> 

            <div class="col-md-4 col-sm-12 col-xs-12">            
                <!-- Social Links for Footer -->
                <ul class="list-unstyled text-right no-margin-bottom sm-text-center">
                    <li class="display-inline-block margin-right-25px"><a href="https://www.instagram.com/gustavofiorino/" target="_blank" title="Seguinos en instagram"><i class="fab fa-instagram instagram"></i></a></li>
                    <li class="display-inline-block margin-right-25px"><a class="text-medium text-weight-700" href="https://www.tiktok.com/@gustavofiorino" target="_blank" title="Seguinos en tiktok"><img src="images/tiktok.png" class="img-fluid" style="height:15px;" /></a></li>
                    <li class="display-inline-block margin-right-25px"><a class="text-medium text-weight-700" href="https://www.youtube.com/@GustavoFiorinoGF" target="_blank" title="Seguinos en YouTube"><i class="fab fa-youtube text-danger"></i></a></li>                
                </ul>
            </div>
        </div>
        `);
    }
});
