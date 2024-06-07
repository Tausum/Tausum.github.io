export type SystemType = {
  isDev: boolean
  isProd: boolean
}

const SystemInit = (): SystemType => {
  return {
    isDev: process.env.NODE_ENV == 'development',
    isProd: process.env.NODE_ENV == 'production'
  }
}

export const System = SystemInit()