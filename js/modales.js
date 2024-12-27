$(function () {
    var pageName = window.location.pathname
        .split("/")
        [window.location.pathname.split("/").length - 1].substring(0, 4);
    var pathImg = "";
    var path = "";
    modales();

    function modales() {
        $("#header").append(`
		<div class="modal fade" id="finalFiesta" tabindex="-1" aria-labelledby="finalFiestaLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="finalFiestaLabel">Final de fiesta</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=LBDXS10Exxs" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/final-de-fiesta.jpg" alt="final-fiesta" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

        <div class="modal fade" id="biografiaExpress" tabindex="-1" aria-labelledby="biografiaExpressLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="finalFiestaLabel">Biografía express</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=-XYKqNZvGzU" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/biografia-express.jpg" alt="biografia express" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="drone" tabindex="-1" aria-labelledby="droneLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="droneLabel">Drone</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=Vj_O7y47els" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/drone.jpg" alt="drone" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="invitacionWeb" tabindex="-1" aria-labelledby="invitacionWebLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="invitacionWebLabel">Invitación web</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/shorts/-kF8LKWznxI" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/invitacion-web.png" alt="invitacion web" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="360" tabindex="-1" aria-labelledby="360Label" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="360Label">360º</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=Jff4z1-CT-g" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/360.jpg" alt="360 grados" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="espejoMagico" tabindex="-1" aria-labelledby="espejoMagicoLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="espejoMagicoLabel">Espejo mágico</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/espejo-magico.jpg" alt="espejo magico" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="backDeEntrada" tabindex="-1" aria-labelledby="backDeEntradaLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="backDeEntradaLabel">Back de entrada</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body"> 
						<a href="https://www.youtube.com/watch?v=jNlCDHjPtpM" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/back-entrada.jpg" alt="back entrada" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="habiaUnaVez" tabindex="-1" aria-labelledby="habiaUnaVezLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="habiaUnaVezLabel">Habia una vez</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=cKM-TFbCTLg " target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/habia-una-vez.jpeg" alt="habia una vez" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="cabinaFoto" tabindex="-1" aria-labelledby="cabinaFotoLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="cabinaFotoLabel">Cabina foto</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/cabina-fotos.jpg" alt="cabina foto" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="cabinaMensajes" tabindex="-1" aria-labelledby="cabinaMensajesLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="cabinaMensajesLabel">Cabina mensajes</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=ADnY0Wk4lac" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/cabina-mensajes.jpg" alt="cabina-mensajes" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="drawMyLife" tabindex="-1" aria-labelledby="drawMyLifeLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="drawMyLifeLabel">Draw my life</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=aK_7i-WNbA8" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/draw-my-life.jpg" alt="draw-my-life" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="saveTheDate" tabindex="-1" aria-labelledby="saveTheDateLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="saveTheDateLabel">Save the date</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=IzuZS4RZmEY " target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/save-the-date.jpg" alt="save-the-date" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="shimmer" tabindex="-1" aria-labelledby="shimmerLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="shimmerLabel">Shimmer</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/shimmer.jpg" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="grua" tabindex="-1" aria-labelledby="gruaLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="gruaLabel">Grua</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/grua.jpg" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="postalesPolaroid" tabindex="-1" aria-labelledby="postalesPolaroidLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="postalesPolaroidLabel">Postales/Polaroid</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/postales.jpg" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="banner" tabindex="-1" aria-labelledby="bannerLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="bannerLabel">Banner</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/banner.jpg" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="fotoIman" tabindex="-1" aria-labelledby="fotoImanLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="fotoImanLabel">Foto Iman</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="../../../images/servicios/foto-iman.jpg" alt="" class="img-fluid"/>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="clip" tabindex="-1" aria-labelledby="clipLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="clipLabel">Clip</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<a href="https://www.youtube.com/watch?v=gMFlggCYf_A " target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
								<!-- Image -->
								<img src="../../../images/servicios/miniaturas/clip.jpg" alt="clip" class="img-fluid"/>
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px youtube-icon"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
        `);
    }
});