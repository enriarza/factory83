import { createFileRoute } from '@tanstack/react-router'
import { Reparacion } from '../../_reparacion'

export const Route = createFileRoute('/_pianos/_reparacion/(variations)/reparacion-de-pianos-en-bizkaia')({
  component: Reparacion,
})