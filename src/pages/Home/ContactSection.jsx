/**
 * 06 交個朋友：Soulmate 測試 + 液態玻璃表單卡，表單寫入 Supabase
 */
import { useState } from 'react'
import { Input } from '@/design-system'
import { supabase } from '@/lib/supabase'
import { SoulmateQuiz } from './SoulmateQuiz'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (supabase) {
      setSubmitting(true)
      const { error: err } = await supabase.from('contact_submissions').insert({
        name,
        email,
        message: message || null,
      })
      setSubmitting(false)
      if (err) {
        setError(err.message)
        return
      }
    }
    setSubmitted(true)
  }

  return (
    <section className="py-6 md:py-8 max-w-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4">交个朋友吧</h2>
      <div
        className="rounded-xl border border-white/40 bg-white/30 px-4 py-4 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:border-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.55)_0_0_56px_rgba(255,255,255,0.25)_inset_0_1px_0_rgba(255,255,255,0.9)]"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
          backgroundImage: 'url(/kitty-pattern.png)',
          backgroundSize: '140px',
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="relative z-10 space-y-6">
          <SoulmateQuiz />
          <form
            className="contact-form space-y-3"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                姓名
              </label>
              <Input id="name" name="name" placeholder="您的名字" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">
                邮箱
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">
              留言
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="想说的话…"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] text-[var(--text-base)] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-border-focus)]"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            disabled={submitting}
            className="w-full max-w-[140px] mx-auto block rounded-md px-3 py-1.5 text-sm font-medium text-white bg-red-500/85 hover:bg-red-500 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitted ? '已发送' : submitting ? '发送中…' : '结友成功'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
