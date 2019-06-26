const sleep = (milliseconds: Number) => {
  return new Promise((resolve: Function) => setTimeout(resolve, milliseconds))
}

export default sleep
