/*
 * @Author: tao 
 * @Date: 2019-06-28 16:58:39 
 * @Last Modified by: tao
 * @Last Modified time: 2019-06-28 16:59:12
 * @func 对数据进行gzip压缩
 */
// const isJSON = require('koa-is-json');
// const zlib = require('zlib');
const options = { threshold: 1024 };
const compress = require('koa-compress');
module.exports = () => {
  return compress(options);
};