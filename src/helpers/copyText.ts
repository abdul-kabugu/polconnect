 export const CopyToClipboardButton = ( textToCopy : any) => {
    
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log("copied")
        })
        .catch((error) => {
          console.error('Copy failed: ', error);
        })
    }}