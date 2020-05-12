import React, {Component} from 'react';
//dev 开发   prod 产品

let active = 'dev';

let API_URL;
let GET_COURSES;
//正式
if (active == 'prod') {
    API_URL = 'http://dev.nc.com';
}
if (active == 'test' || active == 'dev') {
    //开发和测试
    API_URL = 'http://dev.nc.com';
}

export default class api extends Component {
    static API_URL = API_URL;
    static GET_COURSES = '/api/excellent_courses/courses?'; //精品课列表
    static GET_CATEGORIES = '/api/categories'; //课程分类列表
}
