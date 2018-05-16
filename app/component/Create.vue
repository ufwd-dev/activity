<template>

<el-card class="box-card" shadow="never">
	<div slot="header">
		<span>创建活动</span>
	</div>

	<el-form :model="activityForm"
		label-width="50px"
		label-position="left">
		<el-form-item label="名称" required>
			<el-input v-model="activityForm.title"></el-input>
		</el-form-item>

		<el-form-item label="地点" required>
			<el-input v-model="activityForm.location"></el-input>
		</el-form-item>

		<el-form-item label="开始" required>
			<el-date-picker
				type="datetime"
				placeholder="活动开始日期和时间"
				v-model="activityForm.start"></el-date-picker>
		</el-form-item>

		<el-form-item label="结束" required>
			<el-date-picker
				type="datetime"
				placeholder="活动结束日期和时间"
				v-model="activityForm.end"></el-date-picker>
		</el-form-item>

		<el-form-item label="发布" required>
			<el-switch v-model="activityForm.published"></el-switch>
		</el-form-item>

		<el-form-item label="摘要" required>
			<el-input
				type="textarea"
				rows="3"
				v-model="activityForm.abstract"></el-input>
		</el-form-item>

		<el-form-item label="描述" required>
			<el-input
				type="textarea"
				rows="5"
				v-model="activityForm.description"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button
				type="primary"
				@click="createActivity()">创建</el-button>
		</el-form-item>
	</el-form>
</el-card>
</template>

<script>
import axios from 'axios';

export default {
	name: 'add-activity',
	props: ['getActivityList'],
	data() {
		return {
			activityForm: {

			}
		}
	},
	methods: {
		createActivity() {
			return axios.post(`/api/ufwd/service/activity/`, this.activityForm)
				.then(res => {
					console.log('111');

					this.getActivityList();
				})
		}

	}
}
</script>
