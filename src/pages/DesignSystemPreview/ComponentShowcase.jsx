/**
 * 設計系統預覽：組件展示區塊（Button、Input、Card）
 */
import { Button, Input, Card } from '@/design-system'

export function ComponentShowcase() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-[var(--color-text)]">组件</h2>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">按钮</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">主要</Button>
          <Button variant="secondary">次要</Button>
          <Button variant="ghost">幽灵</Button>
          <Button variant="danger">危险</Button>
        </div>
        <div className="flex flex-wrap gap-3 mt-3">
          <Button variant="primary" size="sm">小</Button>
          <Button variant="primary" size="md">中</Button>
          <Button variant="primary" size="lg">大</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">输入框</h3>
        <div className="max-w-xs space-y-2">
          <Input placeholder="默认输入框" />
          <Input placeholder="错误状态" error />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--color-text-muted)] mb-3">卡片</h3>
        <div className="flex flex-wrap gap-4">
          <Card padding="sm" shadow="none">padding: sm</Card>
          <Card padding="md" shadow="sm">padding: md, shadow: sm</Card>
          <Card padding="lg" shadow="md">padding: lg, shadow: md</Card>
        </div>
      </div>
    </section>
  )
}
