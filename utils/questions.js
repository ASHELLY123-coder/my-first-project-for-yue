const questions = [
  {
    id: 1,
    text: '当伴侣没有及时回复你的消息（超过3小时），你的第一反应通常是？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '完全没在意，该干嘛干嘛', score: 1 },
      { label: 'B', text: '稍微有点好奇，但很快就去忙别的了', score: 2 },
      { label: 'C', text: '会忍不住想TA是不是厌烦我了，并反复看手机', score: 3 },
      { label: 'D', text: '感到恐慌，甚至开始脑补TA是不是出事了或出轨了的剧情', score: 4 }
    ]
  },
  {
    id: 2,
    text: '在一段关系中，如果对方的语气稍微冷淡了一点，你会？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '觉得TA可能只是累了，不会多想', score: 1 },
      { label: 'B', text: '稍微有点失落，但能自我调节', score: 2 },
      { label: 'C', text: '立刻反思自己是不是做错了什么，感到焦虑', score: 3 },
      { label: 'D', text: '觉得这段关系马上要结束了，陷入绝望', score: 4 }
    ]
  },
  {
    id: 3,
    text: '你是否经常需要伴侣反复证明TA是爱你的？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '几乎不需要，我很有安全感', score: 1 },
      { label: 'B', text: '偶尔需要，特别是在吵架后', score: 2 },
      { label: 'C', text: '经常需要，哪怕TA说了爱我，我还是想听更多', score: 3 },
      { label: 'D', text: '无论TA说多少次，我都觉得那是敷衍', score: 4 }
    ]
  },
  {
    id: 4,
    text: '当你刚开始喜欢一个人时，你内心深处的声音更像是？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '太好了，期待和TA自然发展', score: 1 },
      { label: 'B', text: '有点开心，但也有点怕受伤害', score: 2 },
      { label: 'C', text: '如果我不抓紧，TA随时会离开我', score: 3 },
      { label: 'D', text: '我必须完美，否则TA就会抛弃我', score: 4 }
    ]
  },
  {
    id: 5,
    text: '当伴侣需要独处或和朋友出去玩时，你会感到？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '很开心，我也需要个人空间', score: 1 },
      { label: 'B', text: '有点小失落，但支持TA', score: 2 },
      { label: 'C', text: '担心TA会遇到更好的人，或者觉得被冷落了', score: 3 },
      { label: 'D', text: '愤怒且焦虑，觉得TA在故意躲避我', score: 4 }
    ]
  },
  {
    id: 6,
    text: '你的情绪在关系中是否经常因为对方的一个小举动而剧烈波动？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '我的情绪一直很稳定', score: 1 },
      { label: 'B', text: '偶尔会受影响，但很快平复', score: 2 },
      { label: 'C', text: '经常会因为TA的一句话开心或难过一整天', score: 3 },
      { label: 'D', text: '感觉情绪完全被TA掌控，失去了自我', score: 4 }
    ]
  },
  {
    id: 7,
    text: '在感情不顺的时候，你最容易产生的想法是？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '我们需要沟通解决问题', score: 1 },
      { label: 'B', text: '是不是我不够好或不值得被爱', score: 2 },
      { label: 'C', text: '是不是对方有问题', score: 3 },
      { label: 'D', text: '也许我们不合适，好聚好散', score: 4 }
    ]
  },
  {
    id: 8,
    text: '在社交场合中，你是否会不自觉地寻找伴侣不爱你的细节？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '从不，我很信任对方', score: 1 },
      { label: 'B', text: '偶尔会注意一下', score: 2 },
      { label: 'C', text: '会不自觉地观察TA的微表情和动作', score: 3 },
      { label: 'D', text: '全程紧绷，任何细节都能证明TA不爱我', score: 4 }
    ]
  },
  {
    id: 9,
    text: '当发生争吵时，你更倾向于？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '冷静沟通，解决问题', score: 1 },
      { label: 'B', text: '暂时回避，等情绪过去', score: 2 },
      { label: 'C', text: '拼命解释、讨好，只要别分手就行', score: 3 },
      { label: 'D', text: '情绪崩溃，说出伤人的话来测试TA的底线', score: 4 }
    ]
  },
  {
    id: 10,
    text: '你对伴侣的过去或异性朋友通常持什么态度？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '尊重过去，不介意正常社交', score: 1 },
      { label: 'B', text: '有点好奇，但不会干涉', score: 2 },
      { label: 'C', text: '忍不住比较，担心自己不如前任或异性朋友', score: 3 },
      { label: 'D', text: '要求断绝一切联系，否则就无法安心', score: 4 }
    ]
  },
  {
    id: 11,
    text: '如果不做任何努力，你觉得这段关系能维持多久？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '很久，我很有信心', score: 1 },
      { label: 'B', text: '不确定，走一步看一步', score: 2 },
      { label: 'C', text: '可能很快就会结束，我总是留不住人', score: 3 },
      { label: 'D', text: '肯定会被抛弃，这只是时间问题', score: 4 }
    ]
  },
  {
    id: 12,
    text: '当你感到在关系中不安时，身体会有什么反应？',
    dimension: 'anxious',
    options: [
      { label: 'A', text: '没什么特别反应，该吃吃该睡睡', score: 1 },
      { label: 'B', text: '稍微有点胸闷或睡不好', score: 2 },
      { label: 'C', text: '心跳加速、手抖，甚至恶心', score: 3 },
      { label: 'D', text: '整晚失眠，身体处于高度紧张状态', score: 4 }
    ]
  },
  {
    id: 13,
    text: '当遇到棘手难题时，你的第一反应更倾向于：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '立刻自己查资料解决，不到万不得已不求助', score: 4 },
      { label: 'B', text: '先尝试自己解决，实在不行再找信任的人', score: 3 },
      { label: 'C', text: '犹豫一下，但还是会主动寻求帮助', score: 2 },
      { label: 'D', text: '马上找人帮忙，觉得合作效率更高', score: 1 }
    ]
  },
  {
    id: 14,
    text: '如果有人突然对你表达过度的热情或亲密，你内心最真实的声音是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '有点不自在，想悄悄拉开点距离', score: 4 },
      { label: 'B', text: '还好，但别太黏人', score: 3 },
      { label: 'C', text: '有点开心，但也会担心后续麻烦', score: 2 },
      { label: 'D', text: '很享受，希望关系能更进一步', score: 1 }
    ]
  },
  {
    id: 15,
    text: '在需要直接表达「我需要你」或「我很在乎」时，你通常会：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '话到嘴边又咽回去，改用行动暗示', score: 4 },
      { label: 'B', text: '说得很简短，避免显得太肉麻', score: 3 },
      { label: 'C', text: '努力说出口，但会有点脸红或不自然', score: 2 },
      { label: 'D', text: '很自然地说出来，觉得这是关系必需品', score: 1 }
    ]
  },
  {
    id: 16,
    text: '周末突然空出一整天完全自由的时间，你最放松的状态是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '独自做喜欢的事（看书/游戏/发呆），完全不被打扰', score: 4 },
      { label: 'B', text: '和一两个熟悉的人简单聚聚，但别太吵', score: 3 },
      { label: 'C', text: '参加小范围活动，但保留随时离开的权利', score: 2 },
      { label: 'D', text: '和朋友热闹聚会，能量满满', score: 1 }
    ]
  },
  {
    id: 17,
    text: '想到「一段理想的关系」，你脑海中浮现的画面更像是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '两个独立星球，偶尔友好信号互通，但各自运行', score: 4 },
      { label: 'B', text: '像合租室友，互相照顾但有清晰边界', score: 3 },
      { label: 'C', text: '像战友，共同目标但保留私人空间', score: 2 },
      { label: 'D', text: '像拼图，紧密咬合，几乎融为一体', score: 1 }
    ]
  },
  {
    id: 18,
    text: '当伴侣试图深入讨论彼此的感受或矛盾时，你的身体反应往往是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '肌肉紧绷，想转移话题或暂时离开现场', score: 4 },
      { label: 'B', text: '有点烦躁，觉得翻旧账没必要', score: 3 },
      { label: 'C', text: '努力听，但很难真正说出自己的感受', score: 2 },
      { label: 'D', text: '愿意沟通，觉得这是解决问题的关键', score: 1 }
    ]
  },
  {
    id: 19,
    text: '如果伴侣频繁需要你提供情绪价值（如安慰、肯定），你内心的真实感受是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '压力很大，觉得自己被消耗了', score: 4 },
      { label: 'B', text: '偶尔可以，但太频繁会让我想逃', score: 3 },
      { label: 'C', text: '有点累，但会努力满足对方', score: 2 },
      { label: 'D', text: '这是亲密关系的正常部分，我很乐意', score: 1 }
    ]
  },
  {
    id: 20,
    text: '当感情和个人目标（工作/爱好）冲突时，你的优先级通常是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '毫不犹豫选目标，感情可以稍后处理', score: 4 },
      { label: 'B', text: '倾向选目标，但会内疚', score: 3 },
      { label: 'C', text: '努力平衡，但常感到精力不够', score: 2 },
      { label: 'D', text: '优先处理感情，目标可以调整', score: 1 }
    ]
  },
  {
    id: 21,
    text: '对于突如其来的拥抱或牵手，你的第一反应更像是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '身体瞬间僵硬，本能想后退半步', score: 4 },
      { label: 'B', text: '有点不自在，但会礼貌回应', score: 3 },
      { label: 'C', text: '需要一点时间适应，之后能接受', score: 2 },
      { label: 'D', text: '很自然地享受，觉得温暖', score: 1 }
    ]
  },
  {
    id: 22,
    text: '深夜独自面对困难时，你最常对自己说的一句话是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '没事，我自己能搞定，不需要麻烦别人', score: 4 },
      { label: 'B', text: '要是有人帮就好了，但算了，靠自己更靠谱', score: 3 },
      { label: 'C', text: '有点孤单，但解决问题更重要', score: 2 },
      { label: 'D', text: '真希望现在有人能陪我一起扛', score: 1 }
    ]
  },
  {
    id: 23,
    text: '当关系推进到需要明确承诺（如同居、结婚）的阶段，你的感受更接近：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '焦虑感剧增，想找借口拖延或退缩', score: 4 },
      { label: 'B', text: '有点抗拒，觉得现在这样就挺好', score: 3 },
      { label: 'C', text: '期待但害怕失去自由，需要反复确认', score: 2 },
      { label: 'D', text: '很期待，觉得是关系的自然升级', score: 1 }
    ]
  },
  {
    id: 24,
    text: '当伴侣希望你分享内心深处的脆弱或伤痛时，你通常的做法是：',
    dimension: 'avoidant',
    options: [
      { label: 'A', text: '直接转移话题或找个理由离开，不想谈这些', score: 4 },
      { label: 'B', text: '简单说几句，但会刻意保留真实感受', score: 3 },
      { label: 'C', text: '犹豫之后会说一部分，但不会全部坦白', score: 2 },
      { label: 'D', text: '愿意坦诚相告，觉得这能让关系更亲近', score: 1 }
    ]
  }
]

module.exports = { questions }
