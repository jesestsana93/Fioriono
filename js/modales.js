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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
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
        `);
    }
});