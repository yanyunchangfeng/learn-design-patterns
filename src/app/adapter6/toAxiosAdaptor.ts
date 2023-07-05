/**
 * 原来项目里全用的jquery $.ajax
 */
let $ = require('jquery');
// let axios = require("axios");

function toAxiosAdaptor(options: any) {
  return axios({
    url: options.url,
    method: options.type
  })
    .then(options.success)
    .catch(options.error);
}
$.ajax = function (options: any) {
  return toAxiosAdaptor(options);
};
$.ajax({
  url: 'http://localhost:8080/api/user',
  type: 'GET',
  success(data: any) {
    console.log(data);
  },
  error(err: any) {
    console.log(err);
  }
});
