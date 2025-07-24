import $toCapitalize from './toCapitalize.util'

export default (color: string): string => `var(--app${$toCapitalize(color)})`
