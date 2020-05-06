/*
 * @Author: tao 
 * @Date: 2019-02-18 22:42:17 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-04-27 15:11:21
 * @func 图片上传的相关接口
 * 
 */
const fs = require('fs');
const path = require('path');
const uid = require('uid');
const Controller = require('egg').Controller;
class FileController extends Controller{
    async index(){
        // console.log(this.ctx);
        const {filepath,filename} = this.ctx.request.files[0];
        const images = fs.readFileSync(filepath);
        const newfilename = uid(10)+'_'+Date.now()+'_'+uid(15)+(filename.match(/\.\w+$/)[0]);
        fs.writeFileSync(path.join(__dirname,'../../public/image/',newfilename),images);

        this.ctx.body = {msg:'file ok',code:1,filepath:newfilename}
    }
}

module.exports = FileController;