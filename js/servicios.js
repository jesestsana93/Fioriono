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
                        <h1 class="text-weight-200 text-gradient-gold sm-width-90 margin-bottom-20px sm-margin-left-right-auto sm-text-weight-300 seccion">Servicios adicionales</h1>
                        
                      <h6 class="text-weight-200 text-white margin-left-right-auto">Completa tu evento con<br/><span class="text-lime">detalles únicos</span></h6>
                        <a class="btn btn-small btn-white border-radius-50 sm-margin-left-right-auto d-none d-lg-inline-block" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Ver más</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-xs-12 center-col text-center md-margin-top-75px">
                    <div data-uk-scrollspy="cls: uk-animation-slide-right-small; target: > .row > div ; delay: 50; repeat: false">
                        <div class="row">
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                <button type="button" class="btn btn-primary btn-servicios text-weight-200  margin-top-20px margin-bottom-15px text-white sm-text-weight-300" data-bs-toggle="modal" data-bs-target="#finalFiesta">
                                    <i class="fas fa-camera-retro text-danger mb-2"></i>
                                   <p>Final de Fiesta</p>
                                    
                                </button>

                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#biografiaExpress">
                                    <i class="fas fa-camera-retro text-danger mb-2"></i>
                                    <p class="text-capitalize">Biografía express</p>
                                </button>
                                
                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#drone">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Drone</p>
                            </button>
                                
                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 margin-bottom-100px text-left sm-text-center">
                                
                                <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#invitacionWeb">
                                    <i class="fas fa-camera-retro text-danger mb-2"></i>
                                    <p class="text-capitalize">Invitación web</p>
                                </button>
                                
                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 sm-margin-bottom-100px text-left sm-text-center">
                                <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#360">
                                    <i class="fas fa-camera-retro text-danger mb-2"></i>
                                    <p>360º</p>
                                </button>
                                
                                
                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

                                
                            </div>
                            <!-- End Column -->
                            
                            
                            <!-- Column -->
                            <div class="col-md-6 col-sm-12 col-xs-12 text-left sm-text-center mb-5 ">
                                
                                <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#espejoMagico">
                                    <i class="fas fa-camera-retro text-danger mb-2"></i>
                                    <p class="text-capitalize">Espejo mágico</p>
                                </button>
                                
                                <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>

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
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#backDeEntrada">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Back de Entrada</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#habiaUnaVez">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Habia una vez</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#cabinaFoto">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Cabina foto</p>
                        </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#cabinaMensajes">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Cabina mensajes</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#drawMyLife">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Draw my life</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#saveTheDate">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Save the date</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 my-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#invitacionWeb">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p class="text-capitalize">Invitación web</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#shimmer">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Shimmer</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#grua">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Grua</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#postalesPolaroid">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Postales/Polaroid</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#banner">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Banner</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#fotoIman">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Foto Iman</p>
                            </button>
                            
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                        <div class="col-md-6 col-lg-3 mt-lg-5">
                            <button type="button" class="btn btn-primary btn-servicios" data-bs-toggle="modal" data-bs-target="#clip">
                                <i class="fas fa-camera-retro text-danger mb-2"></i>
                                <p>Clip</p>
                            </button>
                        
                            <a href="#" class="text-underline no-margin text-weight-400 text-medium"></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `);
    }
});
