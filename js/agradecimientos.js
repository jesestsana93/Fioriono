$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    agradecimientos();

    function agradecimientos() {
        $("#agradecimientos").append(`    
        <div class="container">
            <div class="row margin-bottom-75px" data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > div ; delay: 150; repeat: false">
                <div class="col-12 center-col text-center" data-uk-scrollspy="cls: uk-animation-slide-left-medium; target: > div ; delay: 50; repeat: false">
                
                    <h1 class="title-extra-large text-weight-200 sm-width-90 margin-bottom-10px sm-margin-left-right-auto text-gradient-gold sm-text-weight-300">Agradecimientos</h1>
                
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
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/01.jpg" alt="" />
                                    </div>

                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Gustavo Fiorino es superlativo. Es mágico lo que hicieron. Todo fue perfecto, pero el registro que nos queda lo hacen todos ustedes, para que sea todo mejor aun. Un sueño. Vi los videos no menos de 50 veces. En todas lloro creo.</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Gabriel Palestrini</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                    
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/02.jpeg" alt="" />
                                        
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>
                                    
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">La calidad con la que trabajan es extraordinaria...muy comprometidos con el trabajo pasa que podamos disfrutar...felicitaciones a todo el que pueda se los voy a recomendar...muchas gracias por la paciencia y saludos para todos.
                                        </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Julieta Casaccia</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/03.jpg" style="height: 8rem" alt="" />
                                        
                                    </div>
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Chicos <br> 
                                    Como va? <br> 
                                    Solo te escribo para agradecerles, de parte de toda nuestra familia. Nuestra fiesta fue TODO lo que esperabamos y mas! El equipo que vino fue todo lo que estaba bien, atentos y pendientes. GRACIAS de nuevo por el profesionalismo.</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Laura Gamalerio</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>
                            
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">		
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/04.jpg" alt="" />
                                        
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Estamos súper contentos con todo y quedó espectacular. <br> 
                                    Muchísimas gracias por todo!! <br>
                                    El video, las fotos todo súper hermoso.<br> 
                                    El resultado reafirma la buena decisión de haberlo hecho con ustedes. Estamos muy contentos, se nota el amor que le pusieron todos y posta que laburan espectacular, se nota <br>
                                    Te mando un beso enorme a vos y toda la familia. Cariñitos y gracias!!</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Florencia y Emanuel</p>

                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"> </p>
                                </div>
                            </li>								

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/05.jpg" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Aimé, Lihui, Kily Aye...a todos! <br> 
                                    ¡Este mensaje es simplemente para agradecerles por todo! <br>
                                    La verdad es que todo impecable. Nos dejan plasmado en foto y video un recuerdo que quedará para siempre en nuestros corazones. <br>
                                    Gracias por la buena onda, por meterse en el pogo y sobre todo, por tenerle paciencia a Lucky! Jajajaja. <br>
                                    Preparense que en un año y medio, volvemos recargados con Lali! <br>
                                    Beso a todo el equipo! </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Lucas</p>
                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/06.jpg" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Hola Aime, quería agradecerles por todo! La verdad unos genios desde el primer momento. Kily y Ramiro unos genios!!!! Estuvieron en cada detalle. Gracias </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Flia Echegaray</p>
                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/07.jpg" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80">Hola gente de Fiorino. Eternamente agradecido por todo lo que hicieron para el cumple de mi hija Mili. Estuvo muy lindo todo. <br>
                                    Los chicos trabajaron espectacular <br>
                                    Muchas gracias por todo </p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Flia Arancibia</p>
                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/08.jpg" style="height: 7rem" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80"> Chicos buen día!!! Quería agradecerles el día de ayer, la pasamos súper súper bien!!!! Volvimos diciendo con Juana la verdad q no nos equivocamos en elegirlos!!!! Voy a escribir lo que dijo Juana ayer: <br>
                                    Ma: "los amé a Li, Killy y Cami, tienen una onda buenísima y la pasé súper con ellos" <br>
                                    Tremendo trabajo hicieron ayer!!!! <br> 
                                    Yo tb los amo!!!! GRACIAS TOTALES</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Flia Cerdeiro</p>
                                    <p class="text-light-blue text-weight-400 text-medium margin-bottom-5px"></p>
                                </div>
                            </li>

                            <!-- Testimonial -->
                            <li>
                                <div class="testimonial padding-top-bottom-75px bg-black">
                                    <div class="width-100px text-center center-col margin-bottom-25px">
                                        <img class="border-radius-20  width-100px" src="images/agradecimientos/09.jpeg" alt="" />
                                    </div>
                                    
                                    <span class="text-black bg-gold width-50px height-50px line-height-48 border-radius-100 margin-bottom-15px" data-uk-icon="icon: quote-right; ratio: 1"></span>

                                    <!-- Text -->
                                    <p class="margin-top-15px center-col text-weight-300 text-white width-80"> Buen dia!!!!! 
                                    Aca felices!!!! <br>
                                    Quiero agradecer a TODOS los que forman la gran flia. Fiorino. 
                                    Todo salio divino!!! <br>
                                    Desde aquel día en las primeras reuniones, día de vestuario, día de book, los días en que escucharon a Aylu y editaron y re editaron según sus exigencias, para que ella esté a gusto! 
                                    Y el viernes 13 tan esperado, el book divinooooo, las postales, el mural, el back de entrada, las fotos imanes, el final de fiesta, la grúa, todo de 10!!! 
                                    Los videos sorpresa, bio y boca, todooooo salió precioso. Muchos comentarios de los invitados de que genial foto y video. El sinfin...todo quedó precioso tal cual ella lo quiso.
                                    Nosotros felices de volver a confiar otro evento tan importante con uds. 
                                    Todosssss unos genios profesionales y divinos con nosotros sobre todo el viernes en las fotos q tan nerviosos estábamos.</p>
                                    
                                    <div class="separator width-30px center-col bottom-border border-2px border-color-gray-dark margin-top-bottom-30px sm-margin-left-right-auto"></div>
                                    <p class="text-weight-300 text-extra-large text-gray-light margin-bottom-5px">Flia Andrusyszyn</p>
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
