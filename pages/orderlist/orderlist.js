// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: 'rent',
    book_records: [{
      house_photo_src: '../../assets/decoration/1.jpg',
      house_name: '胡同民宿|四合院儿',
      nights: '3',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/2.jpg',
      house_name: '胡同民宿|四合院儿',
      nights: '3',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/3.jpg',
      house_name: '胡同民宿|四合院儿',
      nights: '3',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/4.jpg',
      house_name: '胡同民宿|四合院儿',
      nights: '3',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/5.jpg',
      house_name: '胡同民宿|四合院儿',
      nights: '3',
      price: '331'
    }],
    publish_records: [
    {
        house_photo_src: '../../assets/decoration/1.jpg',
        house_name: '胡同民宿|四合院儿',
        info: '噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦',
        price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/2.jpg',
      house_name: '胡同民宿|四合院儿',
      info: '噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/3.jpg',
      house_name: '胡同民宿|四合院儿',
      info: '噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦',
      price: '331'
    },
    {
      house_photo_src: '../../assets/decoration/4.jpg',
      house_name: '胡同民宿|四合院儿',
      info: '噢噢噢噢哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦',
      price: '331'
    }]
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
  changeModeFromRent: function() {
      this.setData({
        mode : 'publish'
      })
  },
  changeModeFromPublish: function () {
    this.setData({
      mode: 'rent'
    }) 
  },
  returnToIndex : function() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  navigateToPublishHouse: function () {
    wx.navigateTo({
      url: '../Publish/Publish'
    })
  }
})