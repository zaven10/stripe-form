export default (value: string, options = { divider: '-', missFirst: false }) => value
  .split(options.divider)
  .slice(+options.missFirst)
  .map((str: string) => str[0]!.toUpperCase() + str.slice(1))
  .join('')
