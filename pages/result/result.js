const { results } = require('../../utils/results')

Page({
  data: {
    typeKey: '',
    resultData: null,
    anxietyBarWidth: 0,
    avoidanceBarWidth: 0,
    showDetail: false
  },

  onLoad(options) {
    const typeKey = options.type || 'secure'
    const saved = wx.getStorageSync('lastTestResult')
    const r = results[typeKey] || results.secure

    const anxietyBarWidth = Math.min(Math.max((saved.anxiousScore - 12) / 36 * 100, 0), 100)
    const avoidanceBarWidth = Math.min(Math.max((saved.avoidantScore - 12) / 36 * 100, 0), 100)

    this.setData({
      typeKey,
      resultData: r,
      anxietyBarWidth: anxietyBarWidth,
      avoidanceBarWidth: avoidanceBarWidth,
      anxiousScore: saved.anxiousScore,
      avoidantScore: saved.avoidantScore,
      anxietyLevel: saved.anxietyLevel,
      avoidanceLevel: saved.avoidanceLevel
    })
  },

  toggleDetail() {
    this.setData({ showDetail: !this.data.showDetail })
  },

  onShareAppMessage() {
    return {
      title: '我的依恋类型是' + this.data.resultData.typeName + '，你也来测测吧！',
      path: '/pages/index/index'
    }
  },

  goHome() {
    wx.redirectTo({ url: '/pages/index/index' })
  }
})