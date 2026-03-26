// CYSE 411 Exam Application
// WARNING: This code contains security vulnerabilities.
// Students must repair the implementation.

const loadBtn = document.getElementById("loadBtn");
const saveBtn = document.getElementById("saveSession");
const loadSessionBtn = document.getElementById("loadSession");

loadBtn.addEventListener("click", loadProfile);
saveBtn.addEventListener("click", saveSession);
loadSessionBtn.addEventListener("click", loadSession);

let currentProfile = null;


/* -------------------------
   Load Profile
-------------------------- */

function loadProfile() {

    const text = document.getElementById("profileInput").value;
    let profileTest = "a";

/* text JSON structure
{"username":"alice","role":"user","notifications":["Welcome Alice"]}
*/
    try {
    
    const profile = JSON.parse(text);

    const username = profile.username;
    const role = profile.role;
    const notifications = profile.notifications;
    
    /* Check username is a string */
    if (typeof(username)!="string"){
        profileTest = false;
    }
   

    /* Check role is a string */

    if (typeof(role)!="string"){
        profileTest = false;
    }

    

    /* Check notifications */
    for(let i =0; i <length(notifications);i++){
        if (typeof(notifications[i]!="string")){
            profileTest = false;
        }
    }

    /* if all checks pass, render profile */

    if (profileTest == "a"){
        profileTest = true;
        currentProfile = {"username":username, "role":role,"notifications":notifications};
        renderProfile(currentProfile);
    }
    
        
    } catch (error) {
        profileTest = false;
        
    }

    
}


/* -------------------------
   Render Profile
-------------------------- */

function renderProfile(profile) {

    /* Change from innerHTML to textContent to secure */
    document.getElementById("username").textContent = profile.username;

    const list = document.getElementById("notifications");
    list.textContent = "";

    for (let n of profile.notifications) {

        const li = document.createElement("li");

        /* change from innerHTML to textcontent to secure */
        li.textContent = n;

        list.appendChild(li);
    }
}


/* -------------------------
   Browser Storage
-------------------------- */

function saveSession() {
    const textA = document.getElementById("profileInput").value;
    let profileTestA = "a";
    let usernameA = null;
    let roleA = null;
    let notificationsA = null;

/* text JSON structure
{"username":"alice","role":"user","notifications":["Welcome Alice"]}
*/
    try {
    
    const profileA = JSON.parse(textA);
      
    usernameA = profileA.username;
    roleA = profileA.role;
    notificationsA = profileA.notifications;
    
    /* Check username is a string */
    if (typeof(usernameA)!="string"){
        usernameA = "";
    }
   

    /* Check role is a string */

    if (typeof(roleA)!="string"){
        roleA = "";
    }

    

    /* Check notifications */
    for(let y =0; y <length(notificationsA);y++){
        if (typeof(notificationsA[y]!="string")){
            notificationsA[y] == "";
        }
    }

    /* if all checks pass, render profile */

    if (profileTestA == "a"){
        profileTestA = true;
        currentProfile = {"username":usernameA,"role":roleA,"notifications":notificationsA};
        
        localStorage.setItem("profile", JSON.stringify(currentProfile));
        alert("Session saved");
    }

    } catch (error) {
        profileTestA = false;
        if(usernameA == null){
            usernameA == "";
        }
        if (roleA == null){
            roleA == "";

        }
        notificationsA == [];
        
        
    }
}



function loadSession() {

    const stored = localStorage.getItem("profile");

    if (stored) {

        const profileB = JSON.parse(stored);
        let profileTestB = "a";
        let usernameB = null;
        let roleB = null;
        let notificationsB = null;   

        try {
    
            
            
            usernameB = profileB.username;
            roleB = profileB.role;
            notificationsB = profileB.notifications;
            
            /* Check username is a string */
            if (typeof(usernameB)!="string"){
                usernameB = "";
            }
        

            /* Check role is a string */

            if (typeof(roleB)!="string"){
                roleB = "";
            }

            

            /* Check notifications */
            for(let z =0; z<length(notificationsB);z++){
                if (typeof(notificationsB[z]!="string")){
                    notificationsB[z] == "";
                }
            }

            /* if all checks pass, render profile */

            if (profileTestB == "a"){
                profileTestB = true;
                currentProfile = {"username":usernameB,"role":roleB,"notifications":notificationsB};
                
                renderProfile(currentProfile);
            }

            } catch (error) {
                profileTestB = false;
                if(usernameB == null){
                    usernameB == "";
                }
                if (roleB == null){
                    roleB == "";

                }
                notificationsB == [];
                
                
            }

       
    }
}
