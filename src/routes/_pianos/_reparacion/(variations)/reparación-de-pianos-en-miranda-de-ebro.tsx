import { createFileRoute } from '@tanstack/react-router'
import { Reparacion } from '../../_reparacion'

export const Route = createFileRoute('/_pianos/_reparacion/(variations)/reparación-de-pianos-en-miranda-de-ebro')({
  component: Reparacion,
})