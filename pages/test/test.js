const { questions } = require('../../utils/questions')
const { calculateResult } = require('../../utils/scoring')

Page({
  data: {
    shuffledQuestions: [],
    currentIndex: 0,
    currentQuestion: {},
    answers: {},
    progress: 0,
    selectedOption: -1
  },

  onLoad() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    this.setData({ 
      shuffledQuestions: shuffled, 
      currentQuestion: shuffled[0],
      progress: 1 
    })
  },

  selectOption(e) {
    const score = parseInt(e.currentTarget.dataset.score)
    const question = this.data.shuffledQuestions[this.data.currentIndex]
    const answers = { ...this.data.answers }
    answers[question.id] = score
    this.setData({ answers: answers, selectedOption: score })
  },

  prevQuestion() {
    if (this.data.currentIndex > 0) {
      const idx = this.data.currentIndex - 1
      const question = this.data.shuffledQuestions[idx]
      this.setData({
        currentIndex: idx,
        currentQuestion: question,
        progress: idx + 1,
        selectedOption: this.data.answers[question.id] || -1
      })
    }
  },

  nextQuestion() {
    const question = this.data.shuffledQuestions[this.data.currentIndex]
    if (!this.data.answers[question.id]) {
      wx.showToast({ title: '请先选择一个选项', icon: 'none' })
      return
    }
    const total = this.data.shuffledQuestions.length
    if (this.data.currentIndex < total - 1) {
      const idx = this.data.currentIndex + 1
      const nextQ = this.data.shuffledQuestions[idx]
      this.setData({
        currentIndex: idx,
        currentQuestion: nextQ,
        progress: idx + 1,
        selectedOption: this.data.answers[nextQ.id] || -1
      })
    } else {
      this.submitTest()
    }
  },

  submitTest() {
    const answersArray = []
    for (let i = 1; i <= 30; i++) {
      answersArray.push(this.data.answers[i] || 0)
    }
    const result = calculateResult(answersArray)
    wx.setStorageSync('lastTestResult', result)
    wx.setStorageSync('lastTestAnswers', this.data.answers)
    
    const history = wx.getStorageSync('testHistory') || []
    history.unshift({
      typeKey: result.typeKey,
      scores: result.scores,
      date: new Date().toLocaleDateString(),
      timestamp: Date.now()
    })
    wx.setStorageSync('testHistory', history)
    
    wx.redirectTo({ url: '/pages/result/result?type=' + result.typeKey })
  }
})