$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    nosotros();

    function nosotros() {
        $("#nosotros").append(`    
        <div class="container">
            <div class="row">
                <div class="col-12 center-col text-center uk-flex uk-flex-middle" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > div ; delay: 50; repeat: false">
                    <div class="text-left sm-text-center sm-width-100">
                        <h1 class="title-extra-large text-weight-200 text-gradient-gold sm-width-90 margin-bottom-20px sm-margin-left-right-auto sm-text-weight-300">Nosotros</h1>

                        <p style="font-size:18px;">Fundada en 1988, Gustavo Fiorino comenzó como un sueño personal que se transformó en una productora familiar con más de tres décadas de experiencia. Con pasión por la imagen y un compromiso constante con la calidad, nos especializamos en crear recuerdos visuales de manera artesanal.</p>

                        <p style="font-size:18px;">Nos dedicamos a cubrir una amplia gama de servicios, siempre con un enfoque personalizado y profesional. Ya sea para bodas, fiestas de 15, celebraciones especiales, o eventos corporativos, cada proyecto es único para nosotros. 
                        </p>

                        <p style="font-size:18px;">Actualizandonos permanentemente en equipamientos de última generación para estar a la vanguardia y ofrecer la más alta calidad visual. Contamos con un grupo de profesionales especializados que combinan: experiencia, dedicación, innovación y creatividad, para brindarte lo mejor en fotografía & video. </p>

                        <p style="font-size:18px;">Vivilo una vez, revivilo siempre.</p>
                    </div>
                </div>
            </div>
        </div>
        `);
    }
});
