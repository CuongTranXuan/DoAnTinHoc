<template>
	<div class='admin_dashboard'>
		<h1 style='margin: 0.5rem 1rem;'>Dashboard</h1>
		<div class='admin_dashboard__row'>
			<div class='admin_dashboard__card admin_dashboard__card--2'>
				<new-posts></new-posts>
				<div class='admin_dashboard__card__title'>New threads in the last 24 hours</div>
			</div>
			<div class='admin_dashboard__card admin_dashboard__card--2'>
				<categories-chart></categories-chart>
				<div class='admin_dashboard__card__title'>Number of threads by category</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NewPosts from '../widgets/NewPosts'
	import CategoriesChart from '../widgets/CategoriesChart'

	export default {
		name: 'AdminDashboard',
		components: {
			NewPosts,
			CategoriesChart,
		},
		mounted () {
			this.$store.dispatch('setTitle', 'admin | dashboard')
		}
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';

	.admin_dashboard {
		padding: 1rem;

		@at-root #{&}__row {
			display: flex;
		}

		@at-root #{&}__card {
			margin: 1rem;
			height: 12rem;
			background-color: #fff;
			border-radius: 0.25rem;
			flex: 1;
			display: flex;
			flex-direction: column;

			@extend .shadow_border;

			@for $i from 1 through 5 {
				@at-root #{&}--#{$i} {
					flex: $i;
				}
			}

			@at-root #{&}--hidden {
				visibility: hidden;
			}

			@at-root #{&}__title {
				background-color: $color__gray--primary;
				width: 100%;
				padding: 0.25rem 0.35rem;
				box-shadow: 0 0.1rem 0.075rem rgba(175, 175, 175, 0.25);
				border-radius: 0 0 0.25rem 0.25rem;
				cursor: default;
				font-size: 0.9rem;
			}
		}
	}
</style>