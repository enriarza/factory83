import { createFileRoute } from '@tanstack/react-router'
import { Afinacion } from '../../_afinacion'

export const Route = createFileRoute('/_pianos/_afinacion/(variations)/afinación-de-pianos-en-miranda-de-ebro')({
  component: Afinacion,
})