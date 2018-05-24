const app = getApp()
var dateTools = require('../../tools/dateTools.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentLocation: '',
    house_name: '',
    house_info: '',
    house_address: '',
    house_city: '',
    BeginDate: '',
    EndDate: '',
    house_pics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      currentLocation: app.globalData.city
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      house_city: this.data.currentLocation
    })
    this.setData({
      BeginDate: dateTools.dateToStr(new Date()),
      EndDate: dateTools.dateToStr(dateTools.addDate(new Date()))
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  navigateToCitySelect: function () {
    wx.navigateTo({
      url: '../citySelect/citySelect?currentLocation=' + this.data.currentLocation,
    })
  },
  BeginDateChange: function (e) {
    this.setData({
      BeginDate: e.detail.value,
      EndDate: dateTools.dateToStr(dateTools.addDate(dateTools.strToDate(e.detail.value)))
    })
  },
  EndDateChange: function (e) {
    this.setData({
      EndDate: e.detail.value
    })
  },
  addPics: function() {
    var that = this
    wx.chooseImage({
      count: 9 - this.data.house_pics.length,
      success: function(res) {
        for (var i = 0; i < res.tempFilePaths.length; i++) {
          that.data.house_pics.push(res.tempFilePaths[i]);
        }
        that.setData({
          house_pics: that.data.house_pics    
        })
      }
    })
  },
  previewPic: function(e) {
    wx.previewImage({
      current: this.data.house_pics[e.currentTarget.dataset.index],
      urls: this.data.house_pics
    })
  }
})