const app = getApp()

Page({
  data: {
    userInfo: null,
    isLoggedIn: false,
    history: []
  },

  onShow() {
    this.loadData()
  },

  loadData() {
    const userInfo = app.globalData.userInfo
    const history = app.getTestHistory ? app.getTestHistory() : wx.getStorageSync('testHistory') || []
    this.setData({
      userInfo,
      isLoggedIn: app.globalData.isLoggedIn,
      history
    })
  },

  login() {
    const that = this
    wx.getUserProfile({
      desc: '用于展示个人资料',
      success(res) {
        app.login(res.userInfo)
        that.setData({ userInfo: res.userInfo, isLoggedIn: true })
      },
      fail() {
        wx.showToast({ title: '登录取消', icon: 'none' })
      }
    })
  },

  viewDetail(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({ url: '/pages/result/result?type=' + type })
  },

  goHelp() {
    wx.showModal({
      title: '帮助与反馈',
      content: '如有问题请通过小程序内"反馈"功能联系我们。感谢你的使用！',
      showCancel: false
    })
  }
})