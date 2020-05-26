import React, {Component} from 'react';
//dev 开发   prod 产品
const host = {
  dev: {
      API_URL: 'http://nc_course.dev.test:88',
  },
  prd: {
      API_URL: 'https://nc.course.com',
  }
}

let ENV = 'dev'
let currentHost = host[ENV]

const setHost = (env = 'dev') => {
  ENV = env
  currentHost = host[ENV]
}
const API_URL = currentHost.API_URL


export {ENV, API_URL,  setHost}
