import type { Config } from 'tailwindcss'

import { $getColor } from './utils'

import { Colors } from './enums'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: Object.fromEntries(
        Object.values(Colors).map((color: Colors) => [
          `app-${color}`,
          $getColor(color),
        ]),
      ),
    },
  },
  safelist: Object.values(Colors)
    .map((color: Colors) => [
      `text-app-${color}`,
      `bg-app-${color}`,
      `border-app-${color}`,
      `hover:text-app-${color}`,
      `hover:border-app-${color}`,
      `hover:bg-app-${color}`,
      `sm:hover:text-app-${color}`,
      `sm:hover:bg-app-${color}`,
      `!text-app-${color}`,
      `!bg-app-${color}`,
      `!border-app-${color}`,
      `hover:!text-app-${color}`,
      `hover:!border-app-${color}`,
      `hover:!bg-app-${color}`,
      `group-hover:!text-app-${color}`,
      `group-hover:!border-app-${color}`,
      `group-hover:!bg-app-${color}`,
      `group-hover:text-app-${color}`,
      `group-hover:border-app-${color}`,
      `group-hover:bg-app-${color}`,
    ])
    .flat(1),
}
