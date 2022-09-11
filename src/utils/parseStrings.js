export const parseUnderScoreStrToDashStr = (underscoreStr) => {
  return underscoreStr.replace(/_/g, '-')
}

export const parseDashStrToUnderScoreStr = (dashStr) => {
  return dashStr.replace(/-/g, '_')
}
