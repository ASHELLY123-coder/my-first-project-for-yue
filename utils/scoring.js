function getLevel(score) {
  if (score <= 24) return '低'
  if (score <= 36) return '中'
  return '高'
}

function calculateResult(answers) {
  let anxiousScore = 0
  let avoidantScore = 0

  for (let i = 1; i <= 12; i++) {
    anxiousScore += (answers[i] || 0)
  }
  for (let i = 13; i <= 24; i++) {
    avoidantScore += (answers[i] || 0)
  }

  const anxietyNorm = Math.round((anxiousScore - 12) / 36 * 100)
  const avoidanceNorm = Math.round((avoidantScore - 12) / 36 * 100)
  const anxietyLevel = getLevel(anxiousScore)
  const avoidanceLevel = getLevel(avoidantScore)

  const highAnxiety = anxiousScore > 30
  const highAvoidance = avoidantScore > 30

  let typeKey, typeName, emoji, color

  if (highAnxiety && !highAvoidance) {
    typeKey = 'anxious'
    typeName = '焦虑型'
    emoji = '🐨'
    color = '#E67E22'
  } else if (!highAnxiety && highAvoidance) {
    typeKey = 'avoidant'
    typeName = '回避型'
    emoji = '🪐'
    color = '#3498DB'
  } else if (highAnxiety && highAvoidance) {
    typeKey = 'fearful'
    typeName = '恐惧型'
    emoji = '🦌'
    color = '#E74C3C'
  } else {
    typeKey = 'secure'
    typeName = '安全型'
    emoji = '☀️'
    color = '#2ECC71'
  }

  return {
    typeKey,
    typeName,
    emoji,
    color,
    anxiousScore,
    avoidantScore,
    anxietyNorm,
    avoidanceNorm,
    anxietyLevel,
    avoidanceLevel,
    highAnxiety,
    highAvoidance,
    scores: { anxious: anxiousScore, avoidant: avoidantScore }
  }
}

module.exports = { calculateResult }
