function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PjQZYX4SUb":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz8ZyyzBH7KJ_ZgT6UFfoXq2SXD8JZAt6gG-8eVwqBpi8Hy53GT5-5yJ0Rr6ZyS7L1QtQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

