Page({
  data: { typeKey: '' },

  onLoad(options) {
    this.setData({ typeKey: options.type || 'mixed' })
  },

  onShareAppMessage() {
    return {
      title: '我刚测了恋爱依恋类型，你也来试试吧！',
      path: '/pages/index/index'
    }
  },

  payUnlock() {
    wx.showToast({ title: '支付功能开发中...', icon: 'none' })
  }
})