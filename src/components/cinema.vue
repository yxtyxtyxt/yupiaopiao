<template>
	<div>
		<div id="popover" class="mui-popover">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a href="#">Item1</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">Item2</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">Item3</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">Item4</a>
				</li>
				<li class="mui-table-view-cell">
					<a href="#">Item5</a>
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'cinema'
	}
	mui('.bottomPopover').popover('toggle');
</script>

<style>

</style>