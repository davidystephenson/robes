import { Icon, MenuItem, Spinner } from '@chakra-ui/react'
import { ChangeEvent, JSX, useRef } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { FileMenuItemRobeProps } from './types'

export default function FileMenuItemRobe (props: FileMenuItemRobeProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  function handleFileChange (e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0]
    if (file == null) {
      throw new Error('There is no file.')
    }
    props.onFile({ file })
    if (inputRef.current == null) {
      throw new Error('There is no inputRef.')
    }
    inputRef.current.value = ''
  }
  function handleClick (): void {
    inputRef.current?.click()
  }
  const icon = props.loading
    ? <Icon as={Spinner} />
    : <BsCloudUpload />
  const disabled = props.disabled || props.loading
  return (
    <>
      <MenuItem
        icon={icon}
        isDisabled={disabled}
        onClick={handleClick}
      >
        {props.children}
      </MenuItem>
      <input
        hidden
        type='file'
        ref={inputRef}
        onChange={handleFileChange}
      />
    </>
  )
}
