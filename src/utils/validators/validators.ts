export const required = (value: any) => {
   if (value) return undefined
   return 'Field is required'
}

export const maxLength = (maxLength: number = 50) => (value: any) => {
   if (value.length > maxLength) return `Max length is ${maxLength} symbols`
   return undefined
}