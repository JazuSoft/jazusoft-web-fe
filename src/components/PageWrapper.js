import React from 'react'
import { PageLayout } from './PageLayout'

export function PageWrapper({
  children,
}) {
  return <PageLayout >{children}</PageLayout>
}
