import { createFileRoute } from '@tanstack/react-router'
import { Afinacion } from '../../_afinacion'

export const Route = createFileRoute('/_pianos/_afinacion/(variations)/afinaci%F3n-de-pianos')({
  component: Afinacion,
})