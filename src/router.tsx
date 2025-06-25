import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
//import { rootRoute } from './routes/__root'
import { DefaultCatchBoundary } from './components/DefaultCatchBoundary'
import { NotFound } from './components/NotFound'

// const routeTree = rootRoute.addChildren([
//   // ...
// ])

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    //routeTree: rootRoute,
    // context: {
    //   message: 'This is a message from the root route context',
    // },
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
