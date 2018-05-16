<template>

<div>
	<nav>
		<ol class="breadcrumb mb-4">
			<li class="breadcrumb-item">
				<router-link tag="a" to="/">首页</router-link>
			</li>
			<li class="breadcrumb-item active">活动列表</li>
		</ol>
	</nav>


	<div class="row">
		<div class="col-sm-8">
			<h3>全部活动</h3>
			<hr>
			
			<activity-list :activityList="activityList"></activity-list>
		</div>

		<div class="col-sm-4">
			<add-activity :get-activity-list="getActivityList"></add-activity>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';

import ActivityList from './List.vue';
import AddActivity from './Create.vue';

export default {
	name: 'activity',
	components: {
		ActivityList,
		AddActivity
	},
	data() {
		return {
			activityList: []
		}
	},
	methods: {
		
		getActivityList() {
			return axios.get(`/api/ufwd/service/activity`)
				.then(res => {
					console.log(res.data.data);
					const activityData = res.data.data;

					activityData.forEach(activity => {
						activity.published === true
							? activity.published = '已发布'
							: activity.published = '未发布'
					});

					this.activityList = activityData;
				})
		}
	},
	mounted() {
		this.getActivityList();
	}
}
</script>
