/**
 * Soulmate 匹配测试：5 道单选，与我的答案比对，每题匹配 +20%，填写明细写入 Supabase
 */
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const MY_ANSWERS = ['狮子座', 'ENTJ', '草莓', '狗狗', '羽毛球']

/** 匹配度 → 交友邀请宣言 */
const MATCH_MESSAGES = {
  0: '虽然我们不太一样，但差异让世界更精彩～交个朋友吧！',
  20: '有一点相似就很开心啦，认识一下？',
  40: '我们有不少共同点呢，要不要聊聊？',
  60: '匹配度不错哦，感觉我们很投缘！',
  80: '哇，我们很合拍！期待和你成为朋友～',
  100: '天选之友！我们简直是灵魂伴侣，一定要认识一下！',
}

const QUESTIONS = [
  {
    id: 'zodiac',
    label: '你的星座是什么？',
    options: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
  },
  {
    id: 'mbti',
    label: '你的 MBTI 是什么？',
    options: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'],
  },
  {
    id: 'fruit',
    label: '你最喜欢的水果是什么？',
    options: ['草莓', '苹果', '榴莲', '香蕉', '橙子', '芒果', '梨', '其他'],
  },
  {
    id: 'pet',
    label: '你更喜欢哪种宠物？',
    options: ['狗狗', '猫猫', '鼠鼠', '其他宠物', '不喜欢宠物'],
  },
  {
    id: 'sport',
    label: '你最爱的球类运动是什么？',
    options: ['足球', '篮球', '羽毛球', '排球', '高尔夫球', '台球'],
  },
]

export function SoulmateQuiz() {
  const [expanded, setExpanded] = useState(false)
  const [answers, setAnswers] = useState({})
  const [matchPercent, setMatchPercent] = useState(null)

  function handleChange(qIndex, value) {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }))
    setMatchPercent(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let match = 0
    for (let i = 0; i < 5; i++) {
      if (String(answers[i]).toUpperCase() === String(MY_ANSWERS[i]).toUpperCase()) match += 20
    }
    setMatchPercent(match)

    if (supabase) {
      await supabase.from('soulmate_quiz_results').insert({
        zodiac: answers[0] || null,
        mbti: answers[1] || null,
        fruit: answers[2] || null,
        pet: answers[3] || null,
        sport: answers[4] || null,
        match_percent: match,
      })
    }
  }

  const allAnswered = Object.keys(answers).length === 5

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-[var(--color-text)]">Soulmate 匹配测试</h3>
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="rounded-md px-3 py-1.5 text-sm font-medium text-white bg-red-500/85 hover:bg-red-500 transition-colors"
        >
          开始测试
        </button>
      </div>

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setExpanded(false)}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white/80 px-5 py-5 pb-8 shadow-xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute right-3 top-3 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              aria-label="关闭"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Soulmate 匹配测试</h3>
            <form onSubmit={handleSubmit} className="space-y-4 pb-4">
              {QUESTIONS.map((q, i) => (
                <div key={q.id}>
                  <p className="text-sm font-medium text-[var(--color-text)] mb-2">{i + 1}. {q.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => (
                      <label key={opt} className="inline-flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name={q.id}
                          value={opt}
                          checked={answers[i] === opt}
                          onChange={() => handleChange(i, opt)}
                          className="rounded-full border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-border-focus)]"
                        />
                        <span className="text-sm text-[var(--color-text)]">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                disabled={!allAnswered}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white bg-red-500/85 hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                查看匹配度
              </button>
              {matchPercent !== null && (
                <div className="rounded-lg bg-[var(--color-primary-muted)] p-4 space-y-2">
                  <p className="text-sm font-bold text-red-500 break-words">
                    我们的匹配度是 {matchPercent}%！
                  </p>
                  <p className="text-sm font-medium text-red-500 break-words leading-relaxed">
                    {MATCH_MESSAGES[matchPercent]}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
