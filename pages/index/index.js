Page({
  data: {},

  startTest() {
    wx.navigateTo({ url: '/pages/test/test' })
  },

  onShareAppMessage() {
    return {
      title: '测测你的恋爱依恋类型',
      path: '/pages/index/index'
    }
  }
})