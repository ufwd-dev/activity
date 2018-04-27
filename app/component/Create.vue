<template>

<div>
	<nav>
		<ol class="breadcrumb mb-4">
			<li class="breadcrumb-item">
				<router-link tag="a" to="/">Home</router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link tag="a" to="/ufwd/activity">Activity</router-link>
			</li>
			<li class="breadcrumb-item active">Add activity</li>
		</ol>
	</nav>

	<h3>Add Activity</h3>
	<hr>

	<div class="container">
		<div class="form-group row">
			<label for="" class="col-sm-2 col-form-label">Title</label>
			<div class="col-sm-10">
				<input type="text"
					class="form-control"
					v-model="title">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-2 col-form-label">Description</label>
			<div class="col-sm-10">
				<input type="text"
					class="form-control"
					v-model="description">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-2 col-form-label">Location</label>
			<div class="col-sm-10">
				<input type="text"
					class="form-control"
					v-model="location">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-2 col-form-label">Start</label>
			<div class="col-sm-10">
				<input type="date"
					class="form-control"
					v-model="start">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-2 col-form-label">End</label>
			<div class="col-sm-10">
				<input type="date"
					class="form-control"
					v-model="end">
			</div>
		</div>
		<div class="form-group">
			<button type="button"
				class="btn btn-primary btn-lg"
				@click="createActivity()">Create</button>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'add-activity',
	data() {
		return {
			title: '',
			description: '',
			location: '',
			start: new Date(),
			end: new Date(),
		}
	},
	methods: {
		createActivity() {
			return axios.post(`/api/ufwd/service/activity/`, {
				title: this.title,
				description: this.description,
				location: this.location,
				start: this.start,
				end: this.end,
				published: false
			})
		}

	}
}
</script>
