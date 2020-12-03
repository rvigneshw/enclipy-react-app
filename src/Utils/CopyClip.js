const fallbackCopyTextToClipboard = (text,success,error) => {
  let done;
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
    if(successful){
success();
    }else{
      error()
    }
  } catch (err) {
    error();
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
};
export const copyTextToClipboard = (text,success,error) => {
  let done;
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text,success,error);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      success();
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      error();
      console.error("Async: Could not copy text: ", err);
    }
  );
  
};
