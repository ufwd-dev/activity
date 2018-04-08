service:
===========================

## POST /api/ufwd/service/activity
创建活动
```
{
    title: string,
    description: string,
    location: string,
    abstract: string,
    start: date,
    end: date,
    published: boolean
}
```

## GET /api/ufwd/service/activity?keyword=string&tag=string&start=string&end=string
查看所有的活动

## GET /api/ufwd/service/activity/:activityId
查看某一个活动

## PUT /api/ufwd/service/activity/:activityId
修改某一个活动
```
{
    title: string,
    description: string,
    location: string,
    abstract: string,
    start: date,
    end: date，
    published: boolean
}
(在published为true之前)
```

## DELETE /api/ufwd/service/activity/:activityId
删除某一个活动

## POST /api/ufwd/service/activity/:activityId/tag
给某个活动添加标签
```
{
    tag: string
}
```

## DELETE /api/ufwd/service/activity/tag/:tagId
删除给某个活动某个标签

## GET /api/ufwd/sevice/account/:accountId/activity
查看某个用户所有的的签到信息

## GET /api/ufwd/sevice/activity/:activityId/attendance
查看某个活动所有的的签到信息

app:
======================================

## GET /api/ufwd/app/activity?keyword=string&start=string&end=string&tag=string
查看所有的活动

## POST /api/ufwd/app/attendance
```
{
    token: string
}
```
添加签到

## GET /api/ufwd/app/activity/:activityId(是否出席作为属性)
查看自己的某条签到信息

add column 'token'(生成二维码，固定长度，token找id); uuid -> 改模型