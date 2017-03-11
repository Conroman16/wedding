<script id="lazyload-img-transition-template" data-name="llImgTransition" type="text/x-swig-template">
	@supports (background-image: filter(url('i.jpg'), blur(1px))) {
		@keyframes sharpen {
			from {
				background-image: -webkit-filter(url('<{ imgUrl }>'), blur(20px));
				background-image: filter(url('<{ imgUrl }>'), blur(20px));
			}
			to {
				background-image: -webkit-filter(url('<{ imgUrl }>'), blur(0px));
				background-image: filter(url('<{ imgUrl }>'), blur(0px));
			}
		}
	}
</script>

<script id="loader-template" data-name="loader" type="text/x-swig-template">
{% include '../partials/loader.swig' %}
</script>

<script id="server-page-template" data-name="serverPage" type="text/x-swig-template">
	<div class="container server-page">
		<br><br>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-block">
						<h5 class="card-title center">HOST INFO</h5>
						<table class="max-width">
							<% for item in items %>
							<tr>
								<td><strong><{ item.key|capfirst }></strong></td>
								<td><{ item.value }></td>
							</tr>
							<% endfor %>
						</table>
					</div>
				</div>
			</div>
		</div>
		<br><br>
		<div class="row">
			<% for node in nodes %>
				<div class="col-md-3">
					<div class="card server-node-card">
						<div class="card-block">
							<h5 class="card-title center">Node <{ node.id }></h5>
							<table class="max-width">
								<tr>
									<td><strong>Status</strong></td>
									<td class="center"><{ node.status }></td>
								</tr>
								<tr>
									<td><strong>Memory Usage</strong></td>
									<td class="center"><{ node.memory }></td>
								</tr>
								<tr>
									<td><strong>CPU Usage</strong></td>
									<td class="center"><{ node.cpu }></td>
								</tr>
								<tr>
									<td><strong>Unstable Restarts</strong></td>
									<td class="center"><{ node.unstableRestarts }></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			<% endfor %>
		</div>
	</div>
</script>
