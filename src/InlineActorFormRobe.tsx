import { JSX } from 'react'
import { Actor } from 'use-actor'
import { FormRobeProps } from './types'
import InlineFormRobe from './InlineFormRobe'

export default function InlineActorFormRobe <Input, Output> (props: {
  actor: Actor<Input, Output>
  form?: FormRobeProps
  input: Input
  onValueChange: (value: string) => void
  value: string
}): JSX.Element {
  if (!props.actor.active) {
    return <></>
  }
  async function handleSubmit(): Promise<void> {
    await props.actor.act(props.input)
  }
  return (
    <InlineFormRobe
      errorMessage={props.actor.errorMessage}
      form={props.form}
      loading={props.actor.acting}
      onCancel={props.actor.deactivate}
      onSubmit={handleSubmit}
      onValueChange={props.onValueChange}
      label={props.actor.label}
      value={props.value}
    />
  )
}
