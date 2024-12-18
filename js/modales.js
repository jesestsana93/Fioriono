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
						<a href="https://www.youtube.com/watch?v=cKM-TFbCTLg" target="_blank">
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0" >
							<!-- Image -->
							<img src="../../../images/miniaturas/habia-una-vez.jpeg" alt="habia-una-vez" class="img-fluid"/>
							
							
								<div class="uk-position-top-left margin-50px">
									<span data-uk-icon="icon: play; ratio: 2.4" class="text-lime margin-right-10px" style="transform: translate(160px,100px); border: 1px solid red; border-radius: 10px; padding: 0px 7px;background-color: red; color: white;"></span>
								</div>
								<!-- Title -->
								<div class="uk-position-bottom-left margin-50px">
									<!-- <h1 class="text-weight-200 text-gradient-gold sm-text-weight-300">Empresas</h1> -->
								</div><!-- End Title -->
							
							
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
					Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
					Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
					</div>
				</div>
			</div>
		</div>


		<div class="modal fade" id="albumes" tabindex="-1" aria-labelledby="albumesLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h1 class="modal-title fs-5" id="albumesLabel">Albumes</h1>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
					Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
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
						Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu morbi quisque mus himenaeos cras placerat. Conubia iaculis purus hac curabitur hendrerit sodales scelerisque elit. Ultricies etiam dis vel scelerisque porta. Nostra sed conubia eu felis ante vulputate purus orci. Placerat iaculis ante et porttitor; lobortis sem donec semper. Porttitor massa vitae dignissim enim luctus dapibus praesent. Ornare parturient varius mi lobortis nostra nisi.
					</div>
				</div>
			</div>
		</div>




        `);
    }
});