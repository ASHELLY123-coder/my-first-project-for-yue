App({
  onLaunch() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
      this.globalData.isLoggedIn = true
    }
  },

  globalData: {
    userInfo: null,
    isLoggedIn: false,
    freeQuota: 30
  },

  login(userInfo) {
    this.globalData.userInfo = userInfo
    this.globalData.isLoggedIn = true
    wx.setStorageSync('userInfo', userInfo)
  },

  saveTestRecord(record) {
    const history = wx.getStorageSync('testHistory') || []
    history.unshift(record)
    wx.setStorageSync('testHistory', history)
  },

  getTestHistory() {
    return wx.getStorageSync('testHistory') || []
  }
})