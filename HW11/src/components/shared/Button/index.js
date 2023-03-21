import El from '@/library/El'
const variants = {
  contained: 'bg-blue-600 text-slate-100 font-bold',
  outlined: ' border border-2 text-blue-700 font-bold border-blue-700',
  link: 'bg-transparent',
}

export const Button = ({
  element = 'button',
  child,
  classes,
  variant = 'contained',
  ...rest
}) => {
  return El({
    element,
    className: `${variants[variant]} ${classes} inline-block rounded-md text-sm py-2 px-6`,
    child,
    ...rest,
  })
}
