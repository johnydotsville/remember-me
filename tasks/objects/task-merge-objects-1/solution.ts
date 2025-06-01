// За две
const config = {
  ...defaultConfig,
  ...myConfig
}

const rewritten = {
  ...config,
  refetchOnFail: true
}

// За одну
const config = {
  ...defaultConfig,
  ...myConfig,
  refetchOnFail: true
}