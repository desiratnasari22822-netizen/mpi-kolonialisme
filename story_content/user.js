function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iUjRvEQtAr":
        Script1();
        break;
  }
}

function Script1()
{
  if (!window.bgm) {
    window.bgm = new Audio("1.mp3"); // sesuaikan path
    window.bgm.loop = true;
    window.bgm.volume = 0.3;
}

window.bgm.play().catch(err => console.log(err));
}

