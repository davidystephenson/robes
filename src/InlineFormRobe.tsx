import { FormEvent, JSX } from 'react'
import { ButtonGroup, InputGroup, InputRightElement } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import ImpressedRobe from './ImpressedRobe'
import RedIconButtonRobe from './RedIconButtonRobe'
import FormRobe from './FormRobe'
import InputRobe from './InputRobe'
import { InlineFormRobeProps } from './types'

export default function InlineFormRobe(props: InlineFormRobeProps): JSX.Element {
  const valued = props.value != null && props.value.length > 0
  function handleSubmit(event: FormEvent): void {
    event.preventDefault()
    void props.onSubmit?.()
  }
  const submit = props.onSubmit && valued && (
    <ImpressedRobe
      error={props.errorMessage}
      loading={props.loading}
      size='xs'
      type='submit'
      variant='ghost'
    >
      {props.label}
    </ImpressedRobe>
  )
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    props.onValueChange?.(event.target.value)
  }
  function handleCancel(): void {
    props.onValueChange?.('')
    props.onCancel?.()
  }
  const input = props.value == null
    ? (
      <InputRobe
        width='100%'
        placeholder={props.label}
        onChange={handleChange}
        autoFocus
      />
    )
    : (
      <InputRobe
        width='100%'
        placeholder={props.label}
        value={props.value}
        onChange={handleChange}
        autoFocus
      />
    )
  const { stack, ...rest } = props.form ?? {}
  return (
    <FormRobe
      stack={{ alignItems: 'center', direction: 'row', ...stack }}
      onSubmit={handleSubmit}
      {...rest}
    >
      <InputGroup width='100%'>
        {input}
        <InputRightElement w='fit-content'>
          <ButtonGroup isAttached mb='10px'>
            {submit}
            <RedIconButtonRobe
              aria-label='Cancel'
              icon={<MdClose />}
              onClick={handleCancel}
              size='xs'
              variant='ghost'
            />
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    </FormRobe>
  )
}