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
	<div class="container">
		<br><br>
		<div class="row">
			<div class="col">
				<table class="max-width">
					<% for item in items %>
						<tr>
							<td><strong><{ item.key|title }></strong></td><td><{ item.value }></td>
						</tr>
					<% endfor %>
				</table>
			</div>
		</div>
		<br><br>
		<div class="row">
			<% for node in nodes %>
				<div class="col">
					<table>
						<tr>
							<td colspan="4" class="center">
								<strong>Node <{ node.id }></strong>
							</td>
						</tr>
						<tr>
							<td><strong>Status</strong></td>
							<td><{ node.status }></td>
						</tr>
						<tr>
							<td><strong>Memory</strong></td>
							<td><{ node.memory }></td>
						</tr>
						<tr>
							<td><strong>CPU</strong></td>
							<td><{ node.cpu }></td>
						</tr>
						<tr>
							<td><strong>Uptime</strong></td>
							<td><{ node.uptime }></td>
						</tr>
						<tr>
							<td><strong>Unstable Restarts</strong></td>
							<td><{ node.unstableRestarts }></td>
						</tr>
					</table>
				</div>
			<% endfor %>
		</div>
	</div>
</script>
