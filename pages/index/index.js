Page({
  data: {},

  startTest() {
    wx.navigateTo({ url: '/pages/test/test' })
  },

  onShareAppMessage() {
    return {
      title: '测测你的依恋风格 | 亲密关系探索',
      path: '/pages/index/index'
    }
  }
})