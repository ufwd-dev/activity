<template>

<div>
	<nav>
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<router-link tag="a"
					to="/">首页</router-link>
			</li>
			<li class="breadcrumb-item">
				<router-link tag="a"
					to="/ufwd/activity/list">活动</router-link>
			</li>
			<li class="breadcrumb-item active">{{activity.title}}</li>
		</ol>
	</nav>

	<h3>修改活动</h3>
	<hr>

	<el-form :model="activity"
		label-width="100px"
		label-position="left">
		<el-form-item label="活动名称">
			<el-input v-model="activity.title"
				ref="name"></el-input>
		</el-form-item>

		<el-form-item label="活动地点">
			<el-input v-model="activity.location"></el-input>
		</el-form-item>

		<el-form-item label="开始时间">
			<el-date-picker
				type="datetime"
				v-model="activity.start"></el-date-picker>
		</el-form-item>

		<el-form-item label="结束时间">
			<el-date-picker
				type="datetime"
				v-model="activity.end"></el-date-picker>
		</el-form-item>

		<el-form-item label="发布活动" v-if="isUnpublished">
			<el-switch v-model="activity.published"></el-switch>
		</el-form-item>

		<el-form-item label="活动标签">
			<el-input v-model="activity.tag"></el-input>
		</el-form-item>

		<el-form-item label="二维码">
			<qrcanvas :options="options"></qrcanvas>
		</el-form-item>

		<el-form-item label="活动摘要">
			<el-input
				type="textarea"
				rows="3"
				v-model="activity.abstract"></el-input>
		</el-form-item>

		<el-form-item label="活动描述">
			<el-input
				type="textarea"
				rows="5"
				v-model="activity.description"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button
				v-if="isUnpublished"
				type="primary"
				@click="updateActivity()">更新</el-button>
			<el-button
				type="danger"
				@click="deleteActivity()">删除</el-button>
		</el-form-item>

	</el-form>
</div>
</template>

<script>
import Qrcanvas from 'qrcanvas-vue';
import axios from 'axios';

export default {
	name: 'activity-detail',
	components: { Qrcanvas },
	computed: {
		activityId() {
			return this.$route.params.id;
		},
		options() {
			return {
				data: 'new data',
				size: '100',
				correctLevel: 'H'
			}
		}
	},
	data() {
		return {
			activity: {
				published: null
			},
			isUnpublished: null
		}
	},
	methods: {
		getActivity() {
			return axios.get(`/api/ufwd/service/activity/${this.activityId}`)
				.then(res => {
					// console.log(res.data.data)


					if (!res.data.data.published) {
						this.isUnpublished = true;
					}
					this.activity = res.data.data;
				})
		},
		updateActivity() {
			return axios.put(`/api/ufwd/service/activity/${this.activityId}`, {
				title: this.activity.title,
				location: this.activity.location,
				start: this.activity.start,
				end: this.activity.end,
				abstract: this.activity.abstract,
				description: this.activity.description,
				published: this.activity.published
			}).then(() => {
					this.$notify({
						title: 'success',
						message: '',
						type: 'success'
					})
				})
		}
	},
	mounted() {
		this.getActivity();
	}
}
</script>
