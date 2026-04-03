const scoring = {
  calculate(answers) {
    let anxiousScore = 0
    let avoidantScore = 0

    // 焦虑维度：题1-12，直接累加分数（score越高焦虑越强）
    for (let i = 1; i <= 12; i++) {
      anxiousScore += (answers[i] || 0)
    }

    // 回避维度：题13-24，直接累加分数（score越高回避越强）
    // 题目定义：A=4分(回避最强)，D=1分(回避最弱)
    for (let i = 13; i <= 24; i++) {
      avoidantScore += (answers[i] || 0)
    }

    // 标准化坐标
    const anxietyNorm = Math.round((anxiousScore - 12) / 36 * 100)
    const avoidanceNorm = Math.round((avoidantScore - 12) / 36 * 100)
    
    // 判断高低（阈值30分，满分48分的中点偏左）
    const highAnxiety = anxiousScore > 30
    const highAvoidance = avoidantScore > 30

    let typeKey, typeName, emoji, color, description, advice

    if (highAnxiety && !highAvoidance) {
      typeKey = 'anxious'
      typeName = '渴望型'
      emoji = '🐨'
      color = '#E67E22'
      description = '你很渴望亲密，常担心被抛弃。你的情绪雷达很灵敏，这让你很体贴，但也容易受伤。'
      advice = '你的热情是珍贵的天赋。试着把情绪能量转化为自我关怀，而不是全部向外索取确认。'
    } else if (!highAnxiety && highAvoidance) {
      typeKey = 'avoidant'
      typeName = '独立型'
      emoji = '🪐'
      color = '#3498DB'
      description = '你非常重视独立和空间。你很坚强，但有时会让人觉得难以靠近。'
      advice = '独立不是冷漠。试着偶尔允许别人靠近一点点，你会发现连接并不可怕。'
    } else if (highAnxiety && highAvoidance) {
      typeKey = 'fearful'
      typeName = '恐惧型'
      emoji = '🦌'
      color = '#E74C3C'
      description = '你既渴望爱又害怕受伤。这常让你陷入想靠近又想逃的拉扯中。'
      advice = '这种矛盾很正常。先学会安抚自己，安全感建立后再走进关系。'
    } else {
      typeKey = 'secure'
      typeName = '安全型'
      emoji = '☀️'
      color = '#2ECC71'
      description = '你能在亲密和独立间找到平衡。你有安全感，也能给予他人支持。'
      advice = '继续保持这份从容！你的稳定是周围人的福气。'
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
