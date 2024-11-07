$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    header();
    header_mobile();

    function header() {
        $("#header").append(`    
        <div class="navbar-dark" data-uk-sticky>
            <nav class="uk-navbar-container" data-uk-navbar="boundary-align: true; align: center;">
                <div class="uk-navbar-left padding-left-two-percent ">
                    <a class="uk-navbar-item uk-logo" href="index.html" ><img src="images/fiorino.png" alt="" /></a>
                </div>

                <div class="uk-navbar-right uk-light padding-right-two-percent">
                    <ul class="uk-navbar-nav text-weight-300">
                        <li class="d-none d-xl-flex">
                            <a class="uk-visible@m" href="index.html" >Inicio</a>
                        </li>							
                        <li class="d-none d-xl-flex">
                            <a class="text-gray-extra-light text-extra-small uk-visible@l" href="#">Trabajos</a>
                            <div class="bg-black all-border border-1px border-color-gray-extra-dark" data-uk-dropdown>
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li>
                                        <a class="text-gray-extra-light text-extra-small uk-visible@l" href="#">15 años</a>
                                        <ul class="uk-nav uk-navbar-dropdown-nav ml-3">
                                            <li><a href="book.html">Book</a></li>
                                            <li><a href="fiesta.html">Fiesta</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="bodas.html">Bodas</a></li>
                                    <li><a href="bar.html">Bar y Bat Mitzvah</a></li>
                                    <li><a href="celebraciones.html">Celebraciones</a></li>
                                    <li><a href="empresariales.html">Empresariales</a></li>
                                </ul>
                            </div>
                        </li>							
                        <li class="d-none d-xl-flex">							
                            <a class="uk-visible@m" href="#services" data-uk-scroll>Servicios adicionales</a>
                        </li>
                        <li class="d-none d-xl-flex">							
                            <a class="uk-visible@m" href="#reviews" data-uk-scroll>Reviews</a>
                        </li>							
                        <li class="d-none d-xl-flex">
                            <a class="uk-visible@m" href="#contact" data-uk-scroll>Contacto</a>
                        </li>	
                        <li class="d-none d-xl-flex"><a class="uk-visible@m" href="https://www.instagram.com/gustavofiorino/" target="_blank" title="Seguinos en instagram"><i class="fab fa-instagram instagram"></i></a></li>
                        <li class="d-none d-xl-flex"><a class="uk-visible@m" href="https://www.tiktok.com/@gustavofiorino" target="_blank"  title="Seguinos en tiktok">
                            <i class="fab fa-tiktok"></i> 
                        </a></li>
                        <li class="d-none d-xl-flex"><a class="uk-visible@m" href="https://www.youtube.com/@GustavoFiorinoGF" target="_blank" title="Seguinos en YouTube"><i class="fab fa-youtube text-danger"></i></a></li>
                        
                        <!-- Off-Canvas Navigation Toggle -->
                        <li class="d-xl-none">
                            <div class="uk-navbar-right uk-hidden@l">
                                <a class="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #offcanvas-nav"></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        `);
    }

    function header_mobile() {
        $(".header_mobile").append(`    
        <div class="uk-offcanvas-bar menu-dark bg-black">
            <ul class="uk-nav-default uk-nav-parent-icon text-left" data-uk-nav>
                <li class="margin-top-20px"><a class="uk-navbar-item uk-logo" href="index.html"><img style="width:100%;" src="images/fiorino.png" alt="" /></a></li>

                <li class="margin-bottom-10px">
                    <a href="index.html" class="bottom-border border-1px border-color-gray-extra-dark" ><span class="text-small text-white roboto text-weight-300 padding-bottom-20px">Inicio</span></a>
                </li>
                
                <li class="uk-parent margin-bottom-10px">
                    <a href="#" class="bottom-border border-1px border-color-gray-extra-dark"><span class="text-small text-white roboto text-weight-300 padding-bottom-20px">Trabajos</span></a>
                    <ul class="uk-nav-sub">
                        <li><a href="15-anios.html">15 años</a></li>
                        <li><a href="bodas.html">Bodas</a></li>
                        <li><a href="bar.html">Bar y Bat Mitzvah </a></li>
                        <li><a href="celebraciones.html">Celebraciones</a></li>
                        <li><a href="empresariales.html">Empresariales</a></li>
                    </ul>
                </li>
                
                <li class="margin-bottom-10px">
                    <a href="#works" class="bottom-border border-1px border-color-gray-extra-dark" data-uk-scroll><span class="text-small text-white roboto text-weight-300 padding-bottom-20px">Servicios adicionales</span></a>
                </li>					
                
                <li class="margin-bottom-10px">
                    <a href="#services" class="bottom-border border-1px border-color-gray-extra-dark" data-uk-scroll><span class="text-small text-white roboto text-weight-300 padding-bottom-20px">Reviews</span></a>
                </li>

                <li class="margin-bottom-10px">
                    <a href="#contact" class="bottom-border border-1px border-color-gray-extra-dark" data-uk-scroll><span class="text-small text-white roboto text-weight-300 padding-bottom-20px">Contacto</span></a>
                </li>

            </ul>
            <!-- End Off-Canvas Links -->
            
            
            
            <!-- Navigation Footer -->
            <div class="nav-footer margin-top-50px">

                <!-- Social Links for Off-Canvas Footer -->
                <ul class="list-unstyled no-margin-bottom margin-top-20px">
                
                    <li class="display-inline-block margin-right-25px"><a href="https://www.instagram.com/gustavofiorino/" target="_blank" title="Seguinos en instagram"><i class="fab fa-instagram instagram"></i></a></li>
                    <li class="display-inline-block margin-right-25px"><a href="https://www.tiktok.com/@gustavofiorino" target="_blank"  title="Seguinos en tiktok"><i class="fab fab fa-tiktok"></i></a></li>
                    <li class="display-inline-block margin-right-25px"><a href="https://www.youtube.com/@GustavoFiorinoGF" target="_blank" title="Seguinos en YouTube"><i class="fab fab fa-youtube text-danger"></i></a></li>

                </ul>
            </div>
        </div>
        `);
    }
});
