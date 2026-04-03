const scoring = {
  // 计分方式
  // 焦虑总分 = 题1–12之和（A=1, B=2, C=3, D=4），范围 12–48
  // 回避总分 = 题13–24之和（A=4, B=3, C=2, D=1），范围 12–48
  // 高焦虑：焦虑总分 > 30（理论中点）；低焦虑：<= 30
  // 高回避：回避总分 > 30；低回避：<= 30

  calculate(answers) {
    let anxiousScore = 0
    let avoidantScore = 0

    // 焦虑维度：题1-12，选项A=1,B=2,C=3,D=4
    for (let i = 1; i <= 12; i++) {
      anxiousScore += (answers[i] || 0)
    }

    // 回避维度：题13-24，选项A=4,B=3,C=2,D=1
    for (let i = 13; i <= 24; i++) {
      const val = answers[i] || 0
      avoidantScore += (5 - val) // A=4->1, B=3->2, C=2->3, D=1->4
    }

    // 标准化坐标（用于二维图，0-100）
    const anxietyNorm = Math.round((anxiousScore - 12) / 36 * 100)
    const avoidanceNorm = Math.round((avoidantScore - 12) / 36 * 100)

    // 象限判断
    const highAnxiety = anxiousScore > 30
    const highAvoidance = avoidantScore > 30

    let typeKey, typeName, emoji, color, description, advice

    if (highAnxiety && !highAvoidance) {
      // 高焦虑 + 低回避 = 渴望型
      typeKey = "anxious"
      typeName = "渴望型"
      emoji = "🐨"
      color = "#E67E22"
      description = "你很渴望亲密，常担心被抛弃。你的情绪雷达很灵敏，这让你很体贴，但也容易受伤。"
      advice = "你的热情是珍贵的天赋。试着把"情绪过山车"的能量转化为自我关怀，而不是全部向外索取确认。"
    } else if (!highAnxiety && highAvoidance) {
      // 低焦虑 + 高回避 = 独立型
      typeKey = "avoidant"
      typeName = "独立型"
      emoji = "🪐"
      color = "#3498DB"
      description = "你非常重视独立和空间。你很坚强，但有时会让人觉得难以靠近，这其实是你的保护色。"
      advice = "独立不是冷漠。试着在"安全距离"内，偶尔允许别人靠近一点点，你会发现连接并不可怕。"
    } else if (highAnxiety && highAvoidance) {
      // 高焦虑 + 高回避 = 恐惧型
      typeKey = "fearful"
      typeName = "恐惧型"
      emoji = "🦌"
      color = "#E74C3C"
      description = "你既渴望爱又害怕受伤。这常让你陷入"想靠近又想逃"的拉扯中，非常消耗能量。"
      advice = "这种矛盾很正常。先学会安抚自己受惊的身体，安全感建立后，再尝试慢慢走进关系。"
    } else {
      // 低焦虑 + 低回避 = 安全型
      typeKey = "secure"
      typeName = "安全型"
      emoji = "☀️"
      color = "#2ECC71"
      description = "你能在亲密和独立间找到平衡。你有安全感，也能给予他人支持，是关系的稳定器。"
      advice = "继续保持这份从容！你的稳定是周围人的福气，也是你自己内心力量的体现。"
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