const { questions } = require('../../utils/questions')
const { scoring } = require('../../utils/scoring')

Page({
  data: {
    totalQuestions: 24,
    currentIndex: 0,
    currentQuestion: null,
    questions: [],
    answers: {},
    progressPercent: 0
  },

  onLoad() {
    this.setData({
      questions: questions,
      currentQuestion: questions[0],
      progressPercent: Math.round((1 / 24) * 100)
    })
  },

  selectOption(e) {
    const score = parseInt(e.currentTarget.dataset.score)
    const idx = this.data.currentIndex
    const answers = Object.assign({}, this.data.answers)
    answers[idx] = score
    this.setData({ answers: answers })
  },

  prevQuestion() {
    if (this.data.currentIndex > 0) {
      const idx = this.data.currentIndex - 1
      this.setData({
        currentIndex: idx,
        currentQuestion: this.data.questions[idx],
        progressPercent: Math.round(((idx + 1) / 24) * 100)
      })
    }
  },

  nextQuestion() {
    if (this.data.answers[this.data.currentIndex] === undefined) {
      wx.showToast({ title: '请先选择一个选项', icon: 'none' })
      return
    }
    if (this.data.currentIndex < 23) {
      const idx = this.data.currentIndex + 1
      this.setData({
        currentIndex: idx,
        currentQuestion: this.data.questions[idx],
        progressPercent: Math.round(((idx + 1) / 24) * 100)
      })
    } else {
      this.submitTest()
    }
  },

  submitTest() {
    const answersObj = {}
    for (let i = 0; i < 24; i++) {
      answersObj[i + 1] = this.data.answers[i] || 0
    }

    const result = scoring.calculate(answersObj)

    wx.setStorageSync('lastTestResult', result)
    wx.setStorageSync('lastTestAnswers', answersObj)

    const history = wx.getStorageSync('testHistory') || []
    history.unshift({
      typeKey: result.typeKey,
      typeName: result.typeName,
      scores: result.scores,
      date: new Date().toLocaleDateString(),
      timestamp: Date.now()
    })
    wx.setStorageSync('testHistory', history)

    wx.redirectTo({ url: '/pages/result/result?type=' + result.typeKey })
  }
})
