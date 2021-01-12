var LIF = document.getElementById('LIF');
var LIFs = document.getElementById('Lifs');
var acc = document.getElementById('emailzy');
var userID;
var ACC_navbar = document.getElementById('accFzy');

auth.onAuthStateChanged(user => {
    if (user) {
        userID = user.uid;
        console.log(userID);
        ACC_navbar.style.display = "block";
        //emailinfo
        db.collection('users').doc(user.uid).collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);

            const html = `
            <p class="sizes optionL">Email account: ${user.email}</p>
            `;
            acc.innerHTML = html;
        });
       
       
        LIFs.style.display = "block";
        console.log('userlogged in', user);
        LIF.style.display = "none";
        document.getElementById('logoutbtn').style.visibility = "visible";
        document.getElementById('loginbtn').style.visibility = "hidden";
       

    } else {

        console.log('user logged out');
        LIF.style.display = "block";
        LIFs.style.display = "none";
        setupGuides([])
        ACC_navbar.style.display = "none";
    }

});

const guidelist = document.querySelector('.guides');
//setup guides
const setupGuides = (data) => {

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li style="list-style:none;">
                <div class = "ttl">${guide.title}</div >
                <div class="cnt"> ${guide.time} </div> 
               </li >
            `;
        html += li
    });
    guidelist.innerHTML = html;
}



function AddR() {
    var hr = document.getElementById('add-RCH').value;
    var mn = document.getElementById('add-RCM').value ;
    var sc = document.getElementById('add-RCS').value;
    var time;

       if (hr == "Hour" || hr == "") {
            console.log("no hours inserted.");
            hr = "";
        } else {
            hr = hr + " Hour/s ";
        }
        if (mn == "Mins" || mn == "") {
            console.log("no minute inserted.");
            mn = "";
        } else {
            mn = mn + " Min/s ";
        }
        if (sc == "Secs" || sc == "") {
            console.log("no second inserted.");
            sc = "";
        } else {
            sc = sc + " Sec/s ";
        }

   Time = "Every " + hr + mn + sc;

    db.collection('users').doc(userID).collection('guides').add({
        title: document.getElementById('add-RT').value,
        time: Time
    });

    document.getElementById('add-RT').value = "";
    document.getElementById('add-RCH').value = "Hour";
    document.getElementById('add-RCM').value = "Mins";
    document.getElementById('add-RCS').value = "Secs";
    document.getElementById('addReminder').style.display = "none";
}

function signup() {
    const email = document.getElementById('SU-EMAILinpt').value;
    const password = document.getElementById('SU-PASSinpt').value;

    console.log(email, password);
    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            email: document.getElementById('SU-EMAILinpt').value
        })
        
    }).then(() => {
        console.log(cred.user);
        credzy = cred.user.uid;
    });
    document.getElementById('signup-con').style.visibility = "hidden";
    document.getElementById('blur').style.visibility = "hidden";
    document.getElementById('logoutbtn').style.visibility = "visible";
    document.getElementById('loginbtn').style.visibility = "hidden";
    document.getElementById('closebtn').style.visibility = "visible";
}

//LOGOUT
function logoutNW() {
    auth.signOut();
    document.getElementById('logoutbtn').style.visibility = "hidden";
    document.getElementById('loginbtn').style.visibility = "visible";
    document.getElementById('closebtn').style.visibility = "hidden";
    document.getElementById('SU-EMAILinpt').value = ' '
    document.getElementById('SU-PASSinpt').value = ' '
    credzy = "";
    window.location.reload(); 
}

//login
function loginNW() {
    const email = document.getElementById('EMAILinpt').value;
    const password = document.getElementById('PASSinpt').value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        credzy = cred.user.uid;
    })
    document.getElementById('EMAILinpt').value = ' ';
    document.getElementById('PASSinpt').value = ' ';
    document.getElementById('login').style.visibility = "hidden";
    document.getElementById('blur').style.visibility = "hidden";
    document.getElementById('logoutbtn').style.visibility = "visible";
    document.getElementById('loginbtn').style.visibility = "hidden";
    document.getElementById('closebtn').style.visibility = "hidden";
    

}

