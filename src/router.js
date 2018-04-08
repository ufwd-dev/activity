'use strict';

const {
	isAccountSignedIn,
	$testBody,
	$testQuery
} = require('express-handler-loader')('all');

const {
	isAdminiSignedIn,
} = require('express-handler-loader')('ufwd');

const {
	createActivity,
	getActivityList,
	getActivity,
	isPublished,
	updateActivity,
	deleteActivity,
	createActivityTag,
	deleteActivityTag,
	getAccountAttendanceList,
	getActivityAttendanceList,
	getPublishedActivityList,
	createAttendance,
	getOwnAttendance
} = require('express-handler-loader')('ufwd_activity');

const router = module.exports = require('express').Router();

router.post('/api/ufwd/service/activity', $testBody({
	properties: {
		title: {
			type: 'string',
			minLength: 4
		},
		description: {
			type: 'string'
		},
		location: {
			type: 'string',
			minLength: 4
		},
		abstract: {
			type: 'string'
		},
		start: {
			type: 'string',
			format: 'date-time'
		},
		end: {
			type: 'string',
			format: 'date-time'
		},
		published: {
			type: 'string',
			pattern: '(^true$|^false$)'
		}
	},
	required: ['title', 'description', 'location', 'abstract', 'start', 'end', 'published'],
	additionalProperties: false
}), isAdminiSignedIn, createActivity);

router.get('/api/ufwd/service/activity', $testQuery({
	properties: {
		keyword: {
			type: 'string'
		},
		tag: {
			type: 'string'
		},
		published: {
			type: 'string',
			pattern: '(^true$|^false$)'
		},
		start: {
			type: 'string',
			format: 'date-time'
		},
		end: {
			type: 'string',
			format: 'date-time'
		}
	},
	additionalProperties: false
}), isAdminiSignedIn, getActivityList);

router.get('/api/ufwd/service/activity/:activityId', isAdminiSignedIn, getActivity);

router.put('/api/ufwd/service/activity/:activityId', $testBody({
	properties: {
		title: {
			type: 'string',
			minLength: 4
		},
		description: {
			type: 'string'
		},
		location: {
			type: 'string',
			minLength: 4
		},
		abstract: {
			type: 'string'
		},
		start: {
			type: 'string',
			format: 'date-time'
		},
		end: {
			type: 'string',
			format: 'date-time'
		},
		published: {
			type: 'string',
			pattern: '(^true$|^false$)'
		}
	},
	additionalProperties: false
}), isAdminiSignedIn, isPublished, updateActivity);

router.delete('/api/ufwd/service/activity/:activityId', isAdminiSignedIn, isPublished, deleteActivity);

router.post('/api/ufwd/service/activity/:activityId/tag', $testBody({
	properties: {
		tag: {
			type: 'string'
		}
	},
	additionalProperties: false,
	required: ['tag']
}), isAdminiSignedIn, isPublished, createActivityTag);

router.delete('/api/ufwd/service/activity/tag/:tagId', isAdminiSignedIn, deleteActivityTag);

router.get('/api/ufwd/sevice/activity/:activityId/attendance', isAdminiSignedIn, getActivityAttendanceList);

router.get('/api/ufwd/sevice/account/:accountId/activity', isAdminiSignedIn, getAccountAttendanceList);

router.get('/api/ufwd/app/activity', $testQuery({
	properties: {
		keyword: {
			type: 'string'
		},
		tag: {
			type: 'string'
		},
		start: {
			type: 'string',
			format: 'date-time'
		},
		end: {
			type: 'string',
			format: 'date-time'
		}
	},
	additionalProperties: false
}), isAccountSignedIn, getPublishedActivityList);

router.post('/api/ufwd/app/attendance', $testBody({
	properties: {
		token: {
			type: 'string'
		}
	},
	additionalProperties: false,
	required: ['token']
}), isAccountSignedIn, createAttendance);

router.get('/api/ufwd/app/activity/:activityId', isAccountSignedIn, getOwnAttendance);
