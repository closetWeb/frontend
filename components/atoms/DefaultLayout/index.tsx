import { ReactNode } from 'react'
import AppHeader from '../../molecules/AppHeader'

export interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ( props : DefaultLayoutProps ) => {
  return (
    <div>
      <AppHeader/>
      {/* Desktop App Header */}
      {props.children}
      {/* Desktop App Footer */}
    </div>
  )
}

export default DefaultLayout