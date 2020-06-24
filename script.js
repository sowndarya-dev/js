
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].key.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].key.substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].key.substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i].key + "'>";
           
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                document.getElementById('myInput').focus();
                
                
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
         
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          setTimeout(task, 1000);
        
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) {
              x[currentFocus].click();
            };
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
   function task(){
    var input_val=document.getElementById("myInput").value;
    let result = data.find( ({ key }) => key === input_val );

    document.getElementById('result').innerHTML=result.data;
   }
  }
 
  
  /*An array containing all the country names in the world:*/
  //var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  data=[{key:"Programming Languages",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Angular JS",data:"AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."},
  {key:"Amazon",data:"Amazon.com, Inc., is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four technology companies, along with Google, Apple, and Microsoft."},
  {key:"Act Fibernet",data:"Atria Convergence Technologies Limited, branded as ACT, is an Indian telecommunications company headquartered in Bangalore, Karnataka. ACT offers fibre to the home services under the brand name 'ACT Fibernet' and digital television services under the 'ACT Digital' brand."},
  {key:"Airtel",data:"Bharti Airtel Limited, also known as Airtel, is an Indian global telecommunications services company based in New Delhi, India. It operates in 18 countries across South Asia and Africa, and also in the Channel Islands"},
  {key:"AnyDesk",data:"AnyDesk is a German proprietary remote desktop application distributed by AnyDesk Software GmbH. The software program provides platform independent remote access to personal computers and other devices running the host application. It offers remote control, file transfer, and VPN functionality"},
  {key:"Axis Bank",data:"Axis Bank is the third-largest Indian bank offering a wide assortment of financial products. The bank has its head office in Mumbai, Maharashtra. It has 4,800 branches, 17,801 ATMs and 4,917 cash recyclers spread across the country as of 31 March 2020 and nine international offices."},
  {key:"Book My Show",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Boat",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Bajaj Finance",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Blue Dart",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Big Basket",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"C programming",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Corona Virus",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Coronil",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Cartoon",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Dominos",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Donald Trumph",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"DMart",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Ennadu Paper",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"English to  Telugu",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"EPFO Login",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Flipcart",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Facebook",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Filights",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Fedex Tracking",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Google",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Gmail",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Gulp",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Gold Price",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"HDFC Net Banking",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"HTML",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Hoisting",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Hotstar",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"ICICI Net Banking",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Instagram",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"IRCTC",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"IKEA",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"JAVA",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Javascript",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Jasmine",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Junit",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Jio",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Just Dail",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Joker",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Kotak Mahendra",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Kareena Kapoor",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Kajal",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Karan Johar",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Kngana Ranaut",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Linked in",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Lock Down",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"LIC",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Latest News",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Myntra",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Make My Trip",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Money Heist",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"MX Player",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Modi",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Money Control",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Node Js",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Netflix",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"News",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Naukari",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Nifty",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"NEET",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"One Plus",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Olex",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Outlook",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Office 365",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Ok Google",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Online SBI",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Prime Video",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Play Store",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Pintrest",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Paytm",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Pathanjali",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Provident Fund",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Quiker",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Quest Global",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Qualcomm",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Quarantine",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Queen Elizabeth",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Queen Movie",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Red Bus",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Reliance",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Restaurents Near Me",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Reddifmail",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Sensex",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Sakshi",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Speed Test",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Swiggy",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"SRM University",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Sun NEXT",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"SCSS",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"SASS",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Twitter",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"TV9",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"True Caller",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Times Of India",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Translate",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Urban Clap",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Udemy",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Ubuntu",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Undertaker",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Video",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Voot",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Vivo",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Virtual Reality",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Vodafone",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Whatsapp",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Webpack",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"W3Schools",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Weather",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"World Map",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Word to pdf",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Xiaomi",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Xampp Server",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Xbox",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Xender",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Xerox shopes near me",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"You Tube",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Yahoo",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Yes Bank",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Yash Chopra",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Zomato",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Zee 5",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Ztn",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Zara",data:"Programming languages are high level way of giving intstructions to Computer"},
  
  ]
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), data);