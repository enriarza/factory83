import { createFileRoute } from '@tanstack/react-router'
import { Transporte } from '../../_transporte'

export const Route = createFileRoute('/_pianos/_transporte/(variations)/transporte-de-pianos-en-vitoria')({
  component: Transporte,
})