const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-content');
const skills = document.querySelector('#skills');
const skillsContent = document.querySelector('#skills-content');
const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#projects-content');
const resume = document.querySelector('#resume');
const resumeContent = document.querySelector('#resume-content');
const contact = document.querySelector('#contact');
const contactContent = document.querySelector('#contact-content');
const cmd = document.querySelector('#cmd');
const nav = document.querySelector('nav ul');
const output = document.querySelector('#output');
const help = document.querySelector('#help');
const main = document.querySelector('#main');
const body = document.querySelector('body');
const time = document.querySelector('#time');
function CreateBox(a,content){
    return new WinBox({
        title: a,
        width:'600px',
        height:'600px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount: content,
        onfocus: function(){
            this.setBackground('#00aa00');
        },
        onblur: function(){
            this.setBackground('#777');
        }
    });

}
about.addEventListener('click',() => {
    const aboutBox =  CreateBox('About Me',aboutContent);
})
skills.addEventListener('click',() => {
    const skillsBox =  CreateBox('My Skills',skillsContent);
})
projects.addEventListener('click',() => {
    const projectsBox =  CreateBox('My Projects',projectsContent);
})
resume.addEventListener('click',() => {
    const resumeBox =  CreateBox('Resume',resumeContent);
})
contact.addEventListener('click',() => {
    const contactBox =  CreateBox('Contact Me!',contactContent);
})
window.addEventListener("keydown", () => {document.getElementById("cmd").focus()});
window.addEventListener("keydown",(ev) =>{
    if(ev.key === "Escape"){
        document.getElementsByClassName("wb-close")[0].click();
    }
});
cmd.addEventListener("keypress",(event) => {
    if(event.key === "Enter"){
        switch(cmd.value){
            case 'ls':
                output.innerHTML = nav.innerHTML;
                break;
            case 'help':
                output.innerHTML = help.innerHTML;
                break;
            case 'about':
                CreateBox('About Me',aboutContent);
                break;
            case 'skills':
                CreateBox('My Skills',skillsContent);
                break;
            case 'projects':
                CreateBox('My Projects',projectsContent);
                break;
            case 'resume':
                CreateBox('Resume',resumeContent);
                break;  
            case 'contact':
                CreateBox('Contact Me!',contactContent);
                break;             
            case 'clear':
                output.innerHTML = '';
                break;
            case 'displayNavBar':
                nav.style.display = "flex";
                break;
            case 'hideNavBar':
                nav.style.display = "none";
                break;
            default:
                output.innerText = `command not found: '${cmd.value}'`;
        }
        cmd.value = '';
    }
})
setInterval(() =>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    let dateobj = new Date();
    let hours = dateobj.getHours();
    let minutes = dateobj.getMinutes();
    let seconds = dateobj.getSeconds();
    let day = weekday[dateobj.getDay()];
    let month = monthNames[dateobj.getMonth()];
    let date = dateobj.getDate();
    let meridiem;
    if(hours > 12){
        hours = hours-12;
        meridiem ="PM";
    }
    else{
        meridiem ="AM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    time.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('date').innerText = `${day},${month} ${date}`;
})
