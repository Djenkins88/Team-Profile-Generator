/*function generateInitialHTML()
  {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./profile.css">
    </head>
    <body>
        <div class="navbar">
            <h2>My Team</h2>
        </div>
    
        <div class="cardBody">
            <div class="teamMemberCard">`
  }

/*  function generateTeamMemberHtml()
  {
    return `  <div class="teamMemberCard">
    <div class ="teamMemberTitle">
        <h3>${teamMember.getName()} - ${teamMember.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>ID:${teamMember.getId()}</li>
            <li>Email: <a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()}</a></li>
        </ul>
    </div>
</div>`;
  }

  const generateManager = function(manager)
  {
    return `  <div class="teamMemberCard">
    <div class ="teamMemberTitle">
        <h3>${manager.getName()} - ${manager.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>ID:${manager.getId()}</li>
            <li>Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
        </ul>
    </div>
</div>`;
  }

  const generateIntern = function(intern){
    return `  <div class="teamMemberCard">
    <div class ="teamMemberTitle">
        <h3>${intern.getName()} - ${intern.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>ID:${intern.getId()}</li>
            <li>${school.getSchool()}</li>
        </ul>
    </div>
</div>`;
  }

  const generateEngineer = function(engineer){
    return `  <div class="teamMemberCard">
    <div class ="teamMemberTitle">
        <h3>${enigneer.getName()} - ${engineer.getRole()}</h3>
    </div>
    <div class="teamMemberBody">
        <ul>
            <li>ID:${engineer.getId()}</li>
            <li>Github: <a href="https://github.com/${engineer.getgithub()}"> ${engineer.getgithub()}</a></li>
        </ul>
    </div>
</div>`;
  }

  generateHTML = (data) => {
    htmlData = [];

    for(let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();

      if (role === 'Manager') {
        const managerCard = generateManager();
        htmlData.push(managerCard);

      }
      if (role === 'Intern') {
        const internCard = generateIntern();
        htmlData.push(internCard);

      }
      if (role === 'Engineer') {
        const engineerCard = generateEngineer();
        htmlData.push(engineerCard);
    }
    fs.writeFileSync(generatedHtmlFilePath,"");
    let htmlData = generateInitialHTML();
    const teamMemberCard = htmlData.join('')
    const generateTeam = generatedHtmlFilePath(teamMemberCard);
    htmlData += generateFinalHtml();
    return generateTeam;
  }}

  

  function generateFinalHtml()
  {
    return `   </div>
    </body>
    </html>`;
  }

  function generateHTML()
  {
    fs.writeFileSync(generatedHtmlFilePath,"");
    let htmlData = generateInitialHTML();
    for(let a in teamMember)
    {
      htmlData += generateTeamMemberHtml(teamMember[a]);
    }
    htmlData += generateFinalHtml();
    fs.writeFileSync(generatedHtmlFilePath,htmlData);
  }*/
