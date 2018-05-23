// pages/infoModify/infoModify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    email: '',
    ifPhoneTextChosen: false,
    ifEmailTextChosen: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      phone: options.phone,
      email: options.email
    })
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
  updateProfile : function() {
    //进行ajax操作

    wx.navigateBack({
      delta: 1
    })
  },
  focusPhone:function() {
    this.setData({
      ifPhoneTextChosen : true
    })
  },
  blurPhone: function () {
    this.setData({
      ifPhoneTextChosen: false
    })
  },
  focusEmail: function(){
    this.setData({
      ifEmailTextChosen: true
    })
  },
  blurEmail: function () {
    this.setData({
      ifEmailTextChosen: false
    })
  }
})