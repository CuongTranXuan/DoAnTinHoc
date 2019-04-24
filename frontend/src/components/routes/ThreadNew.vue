<template>
	<div class='route_container thread_new'>

		<div class='h1'>Post new thread</div>
		<div class='thread_meta_info'>
			<div class='thread_meta_info__text'>Enter the thread title and the category to post it in</div>

			<div class='thread_meta_info__form'>
				<select-button v-model='selectedCategory' :options='categories'></select-button>
				<fancy-input
					placeholder='Thread title'
					v-model='name'
					:error='errors.name'
					class='thread_meta_info__title'
					large='true'
					width='15rem'
				></fancy-input>
				
			</div>
		</div>

		<div
			class='editor'
			:class='{
				"editor--focus": focusInput,
				"editor--error": errors.content
			}'
		>
			<div class='editor__input'>
				<div class='editor__format_bar editor__format_bar--editor'>
					editor
				</div>
				<input-editor-core
					v-model='editor'
					@mentions='setMentions'
					@focus='setFocusInput(true)'
					@blur='setFocusInput(false)'
				></input-editor-core>
			</div>
		</div>
		<error-tooltip :error='errors.content' class='editor_error'></error-tooltip>

		<loading-button class='button--green submit' :loading='loading' @click='postThread'>Post thread</loading-button>
	</div>
</template>

<script>
	import InputEditorCore from '../InputEditorCore'
	import InputEditorPreview from '../InputEditorPreview'
	import FancyInput from '../FancyInput'
	import SelectButton from '../SelectButton'
	import LoadingButton from '../LoadingButton'
	import ErrorTooltip from '../ErrorTooltip'

	import AjaxErrorHandler from '../../assets/js/errorHandler'
	import logger from '../../assets/js/logger'
	
	export default {
		name: 'ThreadNew',
		components: {
			InputEditorCore,
			InputEditorPreview,
			SelectButton,
			FancyInput,
			LoadingButton,
			ErrorTooltip
		},
		data () {
			return {
				selectedCategory: this.$store.state.category.selectedCategory,
				editor: '',
				mentions: [],
				name: '',
				loading: false,
				focusInput: false,

				errors: {
					content: '',
					name: ''
				}
			}
		},
		computed: {
			categories () {
				return this.$store.getters.categoriesWithoutAll
			}
		},
		methods: {
			setErrors (errors) {
				errors.forEach(error => {
					this.errors[error.name] = error.error
				})
			},
			clearErrors () {
				this.errors.content = ''
				this.errors.name = ''
			},

			hasDuplicates (array, cb) {
				if(cb) array = array.map(cb)
				
				return array.length !== (new Set(array)).size
			},

			postThread () {
				let thread
				let errors = []

				this.clearErrors()

				if(!this.editor.trim().length) {
					errors.push({name: 'content', error: 'Post content cannot be blank'})
				} if(!this.name.trim().length) {
					errors.push({name: 'name', error: 'Cannot be blank'})
				} if(errors.length) {
					this.setErrors(errors)
					return
				}

				this.loading = true

				this.axios.post('/api/v1/thread', {
					name: this.name,
					category: this.selectedCategory
				}).then(res => {
					thread = res.data

					let ajax = []
					ajax.push(
						this.axios.post('/api/v1/post', {
							threadId: res.data.id,
							content: this.editor,
							mentions: this.mentions
						})
					)

					return Promise.all(ajax)
				}).then(res => {
					this.loading = false
					this.$router.push(`/thread/${thread.slug}/${thread.id}/0`)
				}).catch(e => {
					this.loading = false

					AjaxErrorHandler(this.$store)(e, (error, errors) => {
						let path = error.path

						if(this.errors[path] !== undefined) {
							this.errors[path] = error.message
						} else {
							errors.push(error.message)
						}
					})
				})
			},
			setFocusInput (val) {
				this.focusInput = val
			},
			setMentions (mentions) {
				this.mentions = mentions
			}
		},
		watch: {
			'$store.state.username' (username) {
				if(!username) {
					this.$router.push('/')
				}
			}
		},
		mounted () {
			this.$store.dispatch('setTitle', 'new thread')
			logger('threadNew')
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				if(!vm.$store.state.username) {
					vm.$store.commit('setAccountModalState', true);
					next('/')
				}
			})
		}
	}
</script>

<style lang='scss'>
	@import '../../assets/scss/variables.scss';

	.thread_new {
		margin-top: 1rem;
	}

	.thread_meta_info {
		background-color: #fff;
		border: thin solid $color__gray--darker;
		border-radius: 0.25rem;
		padding: 1rem;
		margin: 1rem 0;

		@at-root #{&}__title {
			margin: 0 0.5rem;
			margin-top: 0.5rem;
			display: inline-block;
		}

		@at-root #{&}__form {
			display: flex;
			align-items: baseline;
		}

		@at-root #{&}__text {
			margin-bottom: 0.5rem;
		}

	}

	.submit {
		margin-top: 1rem;
	}

	.editor {
		display: flex;
		background-color: #fff;
		border-radius: 0.25rem;
		border: thin solid $color__gray--darker;
		
		transition: all 0.2s;

		@at-root #{&}--focus {
			border: thin solid $color__gray--darkest;
		}
		@at-root #{&}--error {
			border: thin solid $color__red--primary;
		}

		@at-root #{&}__format_bar {
			height: 2.5rem;
			background-color: $color__gray--primary;
			display: flex;
			padding-right: 1rem;
			padding-bottom: 0.25rem;
			justify-content: flex-end;
			align-items: center;
			font-variant: small-caps;

			@at-root #{&}--preview {
				border-radius: 0 0.25rem 0 0;
			}
			@at-root #{&}--editor {
				border-radius: 0.25rem 0 0 0;
			}
		}

		@at-root #{&}__input {
			width: 50%;
			position: relative;

			.input_editor_core__format_bar {
				left: 0rem;
			}
			.input_editor_core textarea {
				height: 14rem;
			}
		}

		@at-root #{&}__preview {
			border-left: 1px solid $color__gray--darker;
			width: 50%;

			div.input_editor_preview__markdownHTML {
				height: 14.1rem;
			}
		}
	}

	.editor_error {
		width: 100%;
		background: #fff;
		margin-top: 0.5rem;
		border-radius: 0.2rem;
		border: thin solid $color__red--primary;
		
		&.error_tooltip--show {
			max-height: 4rem;
			padding: 0.5rem;
		}
	}

	@media (max-width: 600px) {
		.thread_meta_info {
			@at-root #{&}__form {
				flex-direction: column;
			}

			@at-root #{&}__title.fancy_input {
				margin: 0;
				margin-top: 0.5rem;
			}

		}

		.editor {
			flex-direction: column;
			overflow-x: hidden;

			@at-root #{&}__input, #{&}__preview {
				border: 0;
				width: 100%;
			}
		}
	}
</style>