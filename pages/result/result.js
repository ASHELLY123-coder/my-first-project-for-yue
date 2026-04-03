const { results, supportChannels } = require('../../utils/results')

Page({
  data: {
    typeKey: '',
    result: null,
    anxietyNorm: 0,
    avoidanceNorm: 0,
    anxietyScore: 0,
    avoidanceScore: 0,
    typeColor: '#F5A3A3',
    supportChannels: supportChannels,
    chartData: null,
    quadrantInfo: null
  },

  onLoad(options) {
    const typeKey = options.type || 'secure'
    const saved = wx.getStorageSync('lastTestResult')

    if (!saved) {
      wx.redirectTo({ url: '/pages/index/index' })
      return
    }

    const result = results[typeKey] || results.secure
    const anxietyNorm = saved.anxietyNorm || 50
    const avoidanceNorm = saved.avoidanceNorm || 50

    this.setData({
      typeKey,
      result,
      anxietyNorm,
      avoidanceNorm,
      anxietyScore: saved.anxiousScore || 0,
      avoidanceScore: saved.avoidantScore || 0,
      typeColor: result.color,
      chartData: { x: avoidanceNorm, y: anxietyNorm }
    })
  },

  onShareAppMessage() {
    const r = this.data.result
    return {
      title: '我的依恋风格是【' + r.typeName + '】' + r.emoji + '，你也来测测吧！',
      path: '/pages/index/index'
    }
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  },

  callHotline(e) {
    const phone = e.currentTarget.dataset.phone
    if (phone) {
      wx.makePhoneCall({ phoneNumber: phone })
    } else {
      wx.showToast({ title: '请搜索：' + e.currentTarget.dataset.name, icon: 'none' })
    }
  }
})