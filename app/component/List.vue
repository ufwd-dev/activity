<template>
<!-- <div> -->
	<data-tables
		:data="activityList"
		:search-def="searchDef"
		:pagination-def="paginationDef"
		:checkbox-filter-def="checkboxFilterDef">
		<el-table-column
			v-for="column in activityColumns"
			:key="column.label"
			align="center"
			:label="column.label"
			:prop="column.prop"
			:sortable="column.sortable"
			:width="column.width"
			:minWidth="column.minWidth">
		</el-table-column>
		<el-table-column
			label="操作"
			width="80"
			align="center">
			<template slot-scope="scope">
				<el-button type="text"
					@click="getActivityById(scope.row.id)">查看</el-button>
			</template>
		</el-table-column>
	</data-tables>
<!-- </div> -->

</template>

<script>
import axios from 'axios';
import DataTables from 'vue-data-tables';

export default {
	name: 'activity-list',
	components: { DataTables },
	props: ['activityList'],
	data() {
		return {
			activityColumns: [
				{
					label: '活动名称',
					prop: 'title',
					width: '180'
				},
				{
					label: '活动摘要',
					prop: 'abstract',
					minWidth: '200'
				},
				{
					label: '活动地点',
					prop: 'location',
					width: '200'
				},
				{
					label: '发布状态',
					prop: 'published',
					width: '160'
				},
				{
					label: '创建时间',
					prop: 'created_at',
					sortable: 'custom',
					width: '180'
				}
			],
			searchDef: {
				colProps: {
					span: 8
				},
				props: ['title']
			},
			paginationDef: {
				pageSize: 10,
				pageSizes: [5, 10, 20]
			},
			checkboxFilterDef: {
				colProps: {
					span: 8
				},
				def: [
					{
						'code': '已发布',
						'name': '已发布'
					},
					{
						'code': '未发布',
						'name': '未发布'
					}
				],
				filterFunction(el, filter) {
					return el['published'] === filter.vals[0];
				}
			}
		}
	},
	methods: {
		getActivityById(id) {
			return this.$router.push(`/ufwd/activity/list/${id}/detail`);
		}
	}
}
</script>
