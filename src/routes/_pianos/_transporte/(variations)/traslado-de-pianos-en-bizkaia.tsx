import { createFileRoute } from '@tanstack/react-router'
import { Transporte } from '../../_transporte'

export const Route = createFileRoute('/_pianos/_transporte/(variations)/traslado-de-pianos-en-bizkaia')({
  component: Transporte,
})