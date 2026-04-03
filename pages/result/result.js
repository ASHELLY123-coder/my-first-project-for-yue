const { results, supportChannels } = require('../../utils/results')

Page({
  data: {
    typeKey: '',
    result: null,
    anxietyScore: 0,
    avoidanceScore: 0,
    typeColor: '#F5A3A3',
    supportChannels: [],
    pieData: []
  },

  onLoad(options) {
    const typeKey = options.type || 'secure'
    const saved = wx.getStorageSync('lastTestResult')

    if (!saved) {
      wx.redirectTo({ url: '/pages/index/index' })
      return
    }

    const result = results[typeKey] || results.secure
    const anxietyScore = saved.anxiousScore || saved.scores?.anxious || 0
    const avoidanceScore = saved.avoidantScore || saved.scores?.avoidant || 0

    // 饼图数据：焦虑和回避占比
    const total = anxietyScore + avoidanceScore || 1
    const pieData = [
      { name: '焦虑倾向', value: anxietyScore, color: '#E67E22' },
      { name: '回避倾向', value: avoidanceScore, color: '#3498DB' }
    ]

    this.setData({
      typeKey,
      result,
      anxietyScore,
      avoidanceScore,
      typeColor: result.color,
      supportChannels,
      pieData
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
  }
})
