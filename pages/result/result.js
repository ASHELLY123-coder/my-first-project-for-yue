const { results } = require('../../utils/results')

Page({
  data: {
    typeKey: '',
    result: null,
    scores: null,
    typeColor: '',
    isUnlocked: true
  },

  onLoad(options) {
    const typeKey = options.type || 'mixed'
    const saved = wx.getStorageSync('lastTestResult')
    const result = results[typeKey] || results.mixed
    const scores = saved ? saved.scores : { anxious: 0, avoidant: 0, secure: 0 }
    
    const history = wx.getStorageSync('testHistory') || []
    const isUnlocked = history.length < 30
    
    this.setData({
      typeKey,
      result,
      scores,
      typeColor: result.color,
      isUnlocked
    })
  },

  onShareAppMessage() {
    return {
      title: '我的恋爱依恋类型是' + (this.data.result ? this.data.result.typeName : '混合型') + '，你也来测测吧！',
      path: '/pages/index/index'
    }
  },

  unlockReport() {
    wx.navigateTo({ url: '/pages/unlock/unlock?type=' + this.data.typeKey })
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  }
})