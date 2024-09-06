$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    skills();

    function skills() {
        $("#our_skills").append(`    
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-xs-12 center-col text-center md-margin-bottom-150px" data-uk-scrollspy="cls: uk-animation-scale-up; target: > div ; delay: 50; repeat: false">

                    <div class="position-relative overflow-hidden width-100 image-bg-3 overlay-black uk-box-shadow-large border-radius-10 padding-100px sm-padding-50px">
                        <div class="row margin-bottom-30px">
                            <div class="col-md-12 col-sm-12 col-xs-12">

                                <div class="width-70 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">73%</span></div>
                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Portraits</p>
                            </div>
                        </div>

                        <div class="row margin-bottom-30px">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="width-100 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">100%</span></div>
                                
                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Landscapes</p>
                            </div>
                        </div>

                        <div class="row margin-bottom-30px">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="width-85 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">85%</span></div>
                                
                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Events</p>
                            </div>
                        </div>
        
                        <div class="row margin-bottom-30px">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="width-90 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">91%</span></div>
                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Cinematography</p>
                            </div>
                        </div>

                        <div class="row margin-bottom-30px">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="width-70 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">70%</span></div>

                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Photoshop</p>
                            </div>							
                        </div>
                        
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="width-85 height-3px bg-lime text-right"><span class="roboto text-white text-weight-300 position-relative top-8">87%</span></div>
                                
                                <p class="roboto text-white text-left text-weight-300 text-medium margin-top-5px no-margin-bottom">Experimental</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 center-col text-center uk-flex uk-flex-middle" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div ; delay: 50; repeat: false">
                    
                    <div class="text-left sm-text-center sm-width-100">
                        <h1 class="title-extra-large text-weight-200 text-gradient-gold sm-width-90 margin-bottom-20px sm-margin-left-right-auto sm-text-weight-300">Nuestros focos</h1>

                        <h6 class="text-weight-200 roboto text-white margin-left-right-auto">We provide premium<br/><span class="text-lime">quality services.</span></h6>
        
                        <a class="btn btn-small btn-white border-radius-50 sm-margin-left-right-auto sm-display-table" href="page-about.html">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
});
