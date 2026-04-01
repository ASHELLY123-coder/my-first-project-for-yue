function calculateResult(answers) {
  let anxiousScore = 0
  let avoidantScore = 0
  let secureScore = 0

  for (let i = 0; i < 10; i++) {
    anxiousScore += (answers[i] || 0)
  }
  for (let i = 10; i < 20; i++) {
    avoidantScore += (answers[i] || 0)
  }
  for (let i = 20; i < 30; i++) {
    secureScore += (answers[i] || 0)
  }

  let typeKey = "mixed"
  let type = "混合型（焦虑-回避矛盾型）"

  if (anxiousScore >= 35 && avoidantScore <= 30) {
    typeKey = "anxious"
    type = "焦虑型依恋"
  } else if (avoidantScore >= 35 && anxiousScore <= 30) {
    typeKey = "avoidant"
    type = "回避型依恋"
  } else if (secureScore >= 35 && anxiousScore <= 30 && avoidantScore <= 30) {
    typeKey = "secure"
    type = "安全型依恋"
  }

  return {
    type: type,
    typeKey: typeKey,
    scores: {
      anxious: anxiousScore,
      avoidant: avoidantScore,
      secure: secureScore
    }
  }
}

module.exports = { calculateResult }