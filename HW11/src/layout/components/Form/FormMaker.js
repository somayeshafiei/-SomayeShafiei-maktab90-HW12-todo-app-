import El from '@/library/El'
import { handleSubmitForm } from './handlleSubmitForm'
export const FormMaker = ({ child, ...rest }) => {
  return El({
    element: 'form',
    child,
    onsubmit: (e) => handleSubmitForm(e),
    ...rest,
  })
}
