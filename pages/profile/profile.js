// pages/s.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    openid: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    /*这些都需要ajax获取，因此每次进入这个页面就发出请求，所以从修改页面回来不用传值*/
    phone: '13690760178',
    email: 'fengzw0809@gmail.com'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    /*var that = this;
    wx.login({
      //获取code
      success: function (res) {
        that.setData({code: res.code})
      }
    })

    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + 'wx1fc7283d72fb0be8' + '&secret=' + '1b52397140e7b75ae54f48df83b8481a' + '&js_code=' + that.code + '&grant_type=authorization_code',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({openid : res.data.openid}) //返回openid
      }
    })*/


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  getUserInfo: function (e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  navigateToOrderlist: function() {
    wx.switchTab({
      url: '../orderlist/orderlist',
    })
  },
  navigateToPublishHouse: function() {
    wx.navigateTo({
      url: '../Publish/Publish'
    })
  },
  navigateToInfoModify: function() {
    wx.navigateTo({
      url: '../infoModify/infoModify?phone=' + this.data.phone + '&email=' + this.data.email,
    })
  }
})