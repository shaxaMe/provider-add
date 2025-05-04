// router/routerConfig.tsx
import { useRoutes } from 'react-router-dom'
import routes from './router'

const RouterConfig = () => {
  const element = useRoutes(routes)
  return element
}

export default RouterConfig
