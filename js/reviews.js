$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    reviews();

    function reviews() {
        $("#reviews").append(`    
        <div class="container">
            <div class="row margin-bottom-75px" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div ; delay: 150; repeat: false">
                <div class="col-md-8 col-sm-12 col-xs-12 center-col text-center" data-uk-scrollspy="cls: uk-animation-slide-left-medium; target: > div ; delay: 50; repeat: false">
                
                    <h1 class="title-extra-large text-weight-200 sm-width-90 margin-bottom-10px sm-margin-left-right-auto text-gradient-gold sm-text-weight-300">Reviews.</h1>
                
                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>

                    <h6 class="text-weight-200 roboto text-white margin-left-right-auto no-margin-bottom"></span></h6>						
                </div>					
            </div>
            
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12 center-col text-center margin-auto">
                    <div data-uk-slider="finite: true">
                        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid">
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-100-percent width-50px" src="images/avatars/02.jpg" alt="" />
                                    </div>

                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Lihue es una locura, deja la vida en cada foto, se pone toda la fiesta al hombro y da admiración verla trabajar. Me gusto mucho la onda de kily... hace un año el hijo tuvo el bar y no pude hacerlo por cuestiones económicas, estoy completamente arrepentida de no haber sacrificado un poco mas para poder llegar a pagarlo. Gustavo tiene que estar orgulloso de los hijos que tiene.</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Grace</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                    
                                        <img class="border-radius-100-percent width-50px" src="images/avatars/01.jpg" alt="" />
                                        
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>
                                    
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Super agradecidos a todos, espectacular los chicos de la noche del evento... Los invitados super felices con ellos y ni hablar de nosotros...

                                        Felices de haber trabajado con ustedes..
                                        
                                        Un placer!!! Y los vamos a seguir eligiendo y recomendando
                                        
                                        Besos ❤️❤️
                                        </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Camila Cardena</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-100-percent width-50px" src="images/avatars/03.jpg" alt="" />
                                        
                                    </div>
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Aimé: Quería dejarte mis comentarios sobre el evento... La verdad, quedamos súper conformes. Desde la realización del book (tu papá es increíble!!!) en diciembre del año pasado, hasta este sábado... Norberto (filmaba): muy amable y ubicado. Y el fotógrafo (no recuerdo su nombre): inmejorable!. Hacía chistes, copado, buena onda, estaba por todos lados...... Pasamos una noche increíble. El book: hermoso; las polaroid, ....todo. Gracias por contribuir para que la fiesta saliera genial. Saludos </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">María Laura, mamá de Sofía</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">		
                                        <img class="border-radius-100-percent width-50px" src="images/avatars/04.jpg" alt="" />
                                        
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Estuvo todo PERFECTO!!!!

                                        Mil gracias a uds, de verdad!! 
                                        
                                        La energía y buena onda que tiene Lahuel, es uníca!! 
                                        
                                        Mil gracias! 
                                        
                                        El trato, desde que los confirmamos el evento, hasta hoy, fue impecable, siempre respondieron rapido y super amable! 
                                        
                                        Sin dudas, los vuelvo a recomendar para mis próximos clientes!!! 
                                        
                                        Valen estaba super contenta!! 
                                        
                                        Gracias!!!</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Organizadora Sabrina Noschese</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"> </p>
                                </div>
                            </li>								

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-100-percent width-50px" src="images/avatars/05.jpg" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Estamos muy agradecidos con todo el equipo ya que supieron registrar con excelencia unos de los eventos más importantes en la vida de nuestra familia. Estamos muy agradecidos y contentos de haberlos conocido, son geniales!!!!!!!!!!!! gracias, gracias, graciassssss. </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Beatriz, mama Magali</p>
                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                        </ul>
                        
                        <!-- Carousel Navigation -->
                        <a class="uk-position-center-left uk-position-small uk-hidden-hover text-black bg-lime width-50px height-50px line-height-35 border-radius-100 text-center uk-slidenav-next uk-icon uk-slidenav" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover text-black bg-lime width-50px height-50px line-height-35 border-radius-100 text-center uk-slidenav-next uk-icon uk-slidenav" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
});
