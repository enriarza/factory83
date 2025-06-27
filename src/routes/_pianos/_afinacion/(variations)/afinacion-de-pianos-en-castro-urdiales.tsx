import { createFileRoute } from '@tanstack/react-router'
import { Afinacion } from '../../_afinacion'

export const Route = createFileRoute('/_pianos/_afinacion/(variations)/afinacion-de-pianos-en-castro-urdiales')({
  component: Afinacion,
})