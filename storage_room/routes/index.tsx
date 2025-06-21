import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3 className='text-7xl font-bold text-center py-8'>Factory83</h3>
    </div>
  )
}
