$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    servicios();

    function servicios() {
        $("#services").append(`    
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 center-col text-center uk-flex uk-flex-middle" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div ; delay: 50; repeat: false">
                    <div class="text-left sm-text-center sm-width-100">
                        <h1 class="title-extra-large text-weight-200 text-gradient-gold sm-width-90 margin-bottom-20px sm-margin-left-right-auto sm-text-weight-300" style="font-size:110px;">Servicios adicionales</h1>
                        
                        <h6 class="text-weight-200 roboto text-white margin-left-right-auto">Completa tu evento con<br/><span class="text-lime">detalles únicos</span></h6>
                        <a class="btn btn-small btn-white border-radius-50 sm-margin-left-right-auto d-none d-lg-inline-block" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Ver más</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-xs-12 center-col text-center md-margin-top-75px">
                    <div data-uk-scrollspy="cls: uk-animation-slide-right-small; target: > .row > div ; delay: 50; repeat: false">
                        <div class="row">

                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: camera; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Invitaciones</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: image; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Mural</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: bolt; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Book</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: tag; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Book digital</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 sm-margin-bottom-100px text-left sm-text-center">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: video-camera; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Banner</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 text-left sm-text-center mb-5 ">
                                
                                <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                                
                                <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Banner digital</h6>
                                
                                <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>

                                <a class="btn btn-small btn-white border-radius-50 sm-margin-left-right-auto sm-display-table d-inline-block d-lg-none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Ver más</a>
                            </div>
                            <!-- End Column -->
                        </div>
                    </div>						
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 text-left sm-text-center mt-lg-4 pt-lg-4">
                <div class="collapse" id="collapseExample">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Silueta</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Lámina</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Postales</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Número de mesa</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Fotolog</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Foto express</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Cabina de fotos</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Álbum</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <span class="text-danger ext-center" data-uk-icon="icon: paint-bucket; ratio: 1.5"></span>
                        
                            <h6 class="text-weight-200 roboto margin-top-20px margin-bottom-15px text-white sm-text-weight-300">Estuche pendrive</h6>
                        
                            <a href="#" class="text-underline roboto no-margin text-weight-400 text-medium"></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `);
    }
});
