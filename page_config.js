/*
 * @Author: wangteng
 * @Date: 2020-04-16 20:30:20
 * @LastEditTime: 2020-04-16 20:38:12
 * @LastEditors: wangteng
 * @FilePath: /coureseware/page_config.js
 */

const baseUrl = 'src/views';
const templateUrl = 'public/index.html';

 module.exports ={
  index: {
    entry: `${baseUrl}/index/main.js`,
    template: templateUrl,
    filename: 'index.html',
    title:'首页',
    meta:{
      keyword:'interactive,hudong'
    }
  },
  interactive: {
    entry: `${baseUrl}/interactive/main.js`,
    template: templateUrl,
    filename: 'interactive.html',
    title:'互动题',
    meta:{
      keyword:'interactive,hudong'
    }
  },
  studyReport: {
    entry: `${baseUrl}/studyReport/main.js`,
    template: templateUrl,
    filename:'studyReport.html',
    title:'学习报告'
  }
}