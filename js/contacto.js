$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    contacto();

    function contacto() {
        $("#contact").append(`    
        <div class="container">
            <div class="row margin-bottom-75px" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div ; delay: 150; repeat: false">
                <div class="col-md-8 col-sm-12 col-xs-12 center-col text-center" data-uk-scrollspy="cls: uk-animation-slide-left-medium; target: > div ; delay: 50; repeat: false">
                    <h1 class="title-extra-large text-weight-200 sm-width-90 margin-bottom-10px sm-margin-left-right-auto text-gradient-gold sm-text-weight-300 seccion birdHouse">Contacto</h1>
                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                    <h6 class="text-weight-200 roboto text-white margin-left-right-auto no-margin-bottom"></span></h6>
                </div>
            </div>
            
            <!-- Row -->
            <div class="row">
                <div class="col-md-8 col-sm-12 col-xs-12 center-col text-center margin-auto">
                    <div class="container contact-wrapper">
                        <form class="contact-form text-left" method="post" action=" ">
                            <div class="messages"></div>
                            <div class="controls" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > .row > div ; delay: 50; repeat: false">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Nombre(s) *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="text" name="nombres"  placeholder="Nombre(s)" required="required">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Apellidos *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="text" name="apellidos"  placeholder="Apellidos" required="required">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Correo electrónico *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="email" name="correo" placeholder="Correo electrónico" required="required" data-error="Valid email is required.">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Número telefónico *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="tel" name="telefono" placeholder="Número telefónico">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-20px">Mensaje *</p>
                                            <textarea class="form-control form_message no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" name="mensaje" type="text" placeholder="Mensaje..." rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                            
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Fecha de fiesta *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="date" name="fecha_fiesta" placeholder="Fecha de fiesta" required="required" >
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Tipo de fiesta *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="text" name="tipo_fiesta" placeholder="Tipo de fiesta">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">Cantidad de invitados *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="number" name="invitados" placeholder="Cantidad de invitados">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <p class="text-gradient-gold text-weight-400 margin-bottom-10px">¿Cómo nos conociste? *</p>
                                            <input class="form-control form_name no-margin-top padding-10px text-white text-weight-400 bg-transparent border-color-gray-extra-dark" type="text" name="como_nos_conociste" placeholder="¿Cómo nos conociste?" required="required">
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <input type="submit" class="btn btn-small border-radius-50 btn-white sm-display-table" value="Enviar mensaje">
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
});
