const scoring = {
  calculate(answers) {
    let anxiousScore = 0
    let avoidantScore = 0

    for (let i = 1; i <= 12; i++) {
      anxiousScore += (answers[i] || 0)
    }

    for (let i = 13; i <= 24; i++) {
      const val = answers[i] || 0
      avoidantScore += (5 - val)
    }

    const anxietyNorm = Math.round((anxiousScore - 12) / 36 * 100)
    const avoidanceNorm = Math.round((avoidantScore - 12) / 36 * 100)
    const highAnxiety = anxiousScore > 30
    const highAvoidance = avoidantScore > 30

    let typeKey, typeName, emoji, color, description, advice

    if (highAnxiety && !highAvoidance) {
      typeKey = 'anxious'
      typeName = '渴望型'
      emoji = '🐨'
      color = '#E67E22'
      description = '你很渴望亲密，常担心被抛弃。你的情绪雷达很灵敏，这让你很体贴，但也容易受伤。'
      advice = '你的热情是珍贵的天赋。试着把「情绪过山车」的能量转化为自我关怀，而不是全部向外索取确认。'
    } else if (!highAnxiety && highAvoidance) {
      typeKey = 'avoidant'
      typeName = '独立型'
      emoji = '🪐'
      color = '#3498DB'
      description = '你非常重视独立和空间。你很坚强，但有时会让人觉得难以靠近，这其实是你的保护色。'
      advice = '独立不是冷漠。试着在「安全距离」内，偶尔允许别人靠近一点点，你会发现连接并不可怕。'
    } else if (highAnxiety && highAvoidance) {
      typeKey = 'fearful'
      typeName = '恐惧型'
      emoji = '🦌'
      color = '#E74C3C'
      description = '你既渴望爱又害怕受伤。这常让你陷入「想靠近又想逃」的拉扯中，非常消耗能量。'
      advice = '这种矛盾很正常。先学会安抚自己受惊的身体，安全感建立后，再尝试慢慢走进关系。'
    } else {
      typeKey = 'secure'
      typeName = '安全型'
      emoji = '☀️'
      color = '#2ECC71'
      description = '你能在亲密和独立间找到平衡。你有安全感，也能给予他人支持，是关系的稳定器。'
      advice = '继续保持这份从容！你的稳定是周围人的福气，也是你自己内心力量的体现。'
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
      highAnxiety,
      highAvoidance,
      description,
      advice,
      scores: { anxious: anxiousScore, avoidant: avoidantScore }
    }
  }
}

module.exports = { scoring }