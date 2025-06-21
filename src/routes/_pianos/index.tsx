import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pianos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pianos"!</div>
}
