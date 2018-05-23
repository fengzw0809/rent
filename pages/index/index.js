//index.js
//获取应用实例
const app = getApp()

var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

var dateTools = require('../../tools/dateTools.js');

Page({
  data: {
    currentLocation: '位置', //初始化自动定位
    checkInDate: '2018-05-10',  //自动获取当天日期
    checkOutDate: '2018-05-11',  //自动获取当天日期
    imgUrls: ['../../assets/display1.jpg',
              '../../assets/display2.png',
              '../../assets/display3.png'],
    houses: [
    {
      name: '胡同民宿|四合院儿',
      brief_info: '整间阁楼.一室一床',
      price: '￥311 每晚',
      id: '111111',
      photo_src: '../../assets/decoration/1.jpg',
      owner_src: '../../assets/portrait.jpg'
    }, 
    {
      name: '胡同民宿|四合院儿',
      brief_info: '整间阁楼.一室一床',
      price: '￥311 每晚',
      id: '111112',
      photo_src: '../../assets/decoration/2.jpg',
      owner_src: '../../assets/portrait.jpg'
    },
    {
      name: '胡同民宿|四合院儿',
      brief_info: '整间阁楼.一室一床',
      price: '￥311 每晚',
      id: '111113',
      photo_src: '../../assets/decoration/3.jpg',
      owner_src: '../../assets/portrait.jpg'
    },
    {
      name: '胡同民宿|四合院儿',
      brief_info: '整间阁楼.一室一床',
      price: '￥311 每晚',
      id: '111114',
      photo_src: '../../assets/decoration/4.jpg',
      owner_src: '../../assets/portrait.jpg'
    },
    {
      name: '胡同民宿|四合院儿',
      brief_info: '整间阁楼.一室一床',
      price: '￥311 每晚',
      id: '111114',
      photo_src: '../../assets/decoration/5.jpg',
      owner_src: '../../assets/portrait.jpg'
    },]
  },
  checkInDateChange: function(e) {
    this.setData({
      checkInDate: e.detail.value,
      checkOutDate: dateTools.dateToStr(dateTools.addDate(dateTools.strToDate(e.detail.value)))
    })
  },
  checkOutDateChange: function (e) {
    this.setData({
      checkOutDate: e.detail.value
    })
  },
  showGpsLoading: function () {
    wx.showToast({
      title: '定位中',
      icon: 'loading'
    })
  },
  cancelGpsLoading: function () {
    wx.hideToast()
  },
  onLoad: function() {
    qqmapsdk = new QQMapWX({
      key: 'YK5BZ-KV7CG-JQFQM-IDNJR-HCUB7-HCB6V'
    });
  },
  onReady: function() {
    /*用that来使promise能访问到Page对象*/
    var that = this;
    /*获取坐标 */
    this.showGpsLoading();
    new Promise(function(resolve) {
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          resolve({latitude : res.latitude, 
                   longitude: res.longitude})
        }
      });
    }).then(function (location) {
      /*通过坐标逆地址解析*/
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: location.latitude,
          longitude: location.longitude
        },
        success: function (res) {
          //为了与citySelect的名称对应
          var length = res.result.address_component.city.length;
          that.setData({ currentLocation: (res.result.address_component.city[length - 1] == '市' ? res.result.address_component.city.substr(0, length - 1) : res.result.address_component.city) });
          that.cancelGpsLoading();
        },
        fail: function (res) {
          /*错误提示后期再加*/
          console.log(res)
        }
      })
    })
    this.setData({
      checkInDate: dateTools.dateToStr(new Date()),
      checkOutDate: dateTools.dateToStr(dateTools.addDate(new Date()))
    })
  },
  navigateToCitySelect: function() {
    wx.navigateTo({
      url: '../citySelect/citySelect?currentLocation=' + this.data.currentLocation,
    })
  },
  
})