Page({

  /**
   * 页面的初始数据
   */
  data: {
    house_name: '胡同民宿|四合院儿',
    house_city: '杭州',
    house_address: '拱墅区湖州街51号,浙江大学城市学院',
    house_owner_name: 'fengziwei',
    house_owner_photo: '../../assets/portrait.jpg',
    house_pics: ['../../assets/display1.jpg',
                '../../assets/display2.png',
                '../../assets/display3.png'],
    house_info: '该单位位于伦敦市中心最热闹的地区之一肖尔迪奇(Shoreditch)。该公寓距离伦敦塔，塔桥，布里克巷，Spitalfields市场10-15分钟的步行距离，而该地区最好的烤肉屋和印度餐馆都在5分钟的步行距离之内。 因此，无论短期还是长期逗留，肯定会是这个惊人的大都市所提供的令人兴奋的味道。',
    house_start_date: '2018-05-26',
    house_end_date: '2018-05-27',
    house_price: '331'
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
  previewPic: function (e) {
    /*暂时用不了，因为需要绝对路径 */
    wx.previewImage({
      current: this.data.house_pics[e.currentTarget.dataset.index],
      urls: this.data.house_pics
    })
  }
})