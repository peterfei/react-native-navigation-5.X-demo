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
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNjVkYTc5MWRmYWQxY2Q1NTUxNmE5MDdhYTU5YjI3NWZlZGI1NWIzMzlhNjMyNTMzOGFhYTZiOGQwMWU5N2M4MzdkMWFjZDZmNjk2ZjIyM2MiLCJpYXQiOjE1ODc0NjE5ODcsIm5iZiI6MTU4NzQ2MTk4NywiZXhwIjoxNjE4OTk3OTg3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.CHf-BxmgVBCj_M5ElIXnaICYR-mO5hz_18YbHhRG9AyBgH1-vyXn7deNcTv_iGoFPNzYwyoGRDddTlW0RQtkQmvvhm4U5yj6mbb1Ki7tncESh8vNrjVbYwZq7HfsoTzO0hAYPuJQdebxElBS7Yw8zHmx2qUTAFBPPg0cIkqJQt_LSIKQclPx3gfsm1PxxdBbye0kHRsgIA6fG5UUZJC2WZLNzH-7VXPiVB0-R8ZuKLiEnKnK8r_ppADpTDsnPutP0kqNTum6YiDMg35bJLsTRfxWUD-TyEQxVxc1yvW-ZSOZkfs85eEekPk0_7_kpFMJfxtXRRFMvOEVbq7NMJJGNHm21kjc2_9EUrjm_W1qUmOpOTdUWS6M24DC-Rioajents1_m0K9zY1cKGLTajFVoZeMthwLmh7c_i-Qr48dIBt89CZRAdHPJ2UURVvxIaACusYJ13krZY3Z_lX6pKGzYDkljUX0gjFRa1BdGZ4IgDkU22VYQ4qDqWcrp7U_RGihwHFtLBeOFRD530rRLhP31HoC9MXmVl-KfdYQoh5HqgMpyItvRWjGrEyYxxyvp2CL3HN-6WOxZpSm_pELi9VEunMlRRLFkwqqps-97jHO_Tjm1qDWPrUUYEtj6f4e46PZT4hatBbEgG_wtVAO6A2-ab7CI52m3zpfetX9MUVot0g"

export {ENV, API_URL,  setHost,TOKEN}
