var a=[{date:"14/09/2018",place:"the nox",event:'rafaquat birthday' },
        {date:"24/08/2018",place:"hard rock cafe",event:'ayushi birthday'},
        {date:"18/05/2018",place:"college" ,event:'bobby birthday'},
        {date:"28/04/2018",place:"miraj" ,event:'infinity war'},
        {date:"9/02/2018",place:"karunamaie",event:'book fair' },
        {date:"15/5/2019",place:"college",event:'fests' },
        {date:"19/12/2018",place:"eco park" ,event:'debo & poro party'},
        {date:"27/10/2019" ,place:"puri house",event:'diwali' },
        {date:"31/03/2019",place:"money sqare",event:'my birthday' },
        {date:"27/11/2019",place:"raichuk",event:'long drive' },
        {date:"to be continued...",place:"",event:''}
    ]
  var b=document.getElementById('label')
  var i=0;
  b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
  var id = setInterval(frame, 10000);
  function frame() {
    if (i == 11) {
      clearInterval(id);
    } else {
      i++; 
      b.innerHTML=`<ul><li>${a[i].date}</li><li>${a[i].place}</li><li>${a[i].event}</li><ul>`;
    } 
  }