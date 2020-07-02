
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
  {key:"Book My Show",data:"Movie tickets booking"},
  {key:"Boat",data:"Branded Gadgets"},
  {key:"Bajaj Finance",data:"Loans Provider"},
  {key:"Blue Dart",data:"Goods Deleviery "},
  {key:"Big Basket",data:"Online Market"},
  {key:"C programming",data:"Programming language developed by Dennis Ritchi"},
  {key:"Corona Virus",data:"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."},
  {key:"Coronil",data:"Medicine for corona virus launched by Ramdev Baba"},
  {key:"Cartoon",data:"Cartoon is favorite for kids"},
  {key:"Dominos",data:"Dominos is famous for Pizza"},
  {key:"Donald Trumph",data:"Donald Trumph is Amarican President"},
  {key:"DMart",data:"Avenue Supermarts Ltd., doing business as DMart, is a Indian chain of hypermarkets in India founded by Radhakishan Damani in the year 2002, with its first branch in Powai’s Hiranandani Gardens."},
  {key:"Ennadu Paper",data:"It is daily news paper"},
  {key:"English to  Telugu",data:"Google translater for English to Telugu"},
  {key:"EPFO Login",data:"Employee Provident fund Organization Login page"},
  {key:"Flipcart",data:"Online shopping portal"},
  {key:"Facebook",data:"Social networking website"},
  {key:"Filights",data:"Airline transportation"},
  {key:"Fedex Tracking",data:"Delivery system"},
  {key:"Google",data:"Google is search engine"},
  {key:"Gmail",data:"Gmail is used to send/recive mails"},
  {key:"Gulp",data:"Gulp is task runner."},
  {key:"Gold Price",data:"Give day to day gold price"},
  {key:"HDFC Net Banking",data:"HDFC Bank Portal"},
  {key:"HTML",data:"Hype text markup language"},
  {key:"Hoisting",data:"Hosting is a technique in javascript"},
  {key:"Hotstar",data:"Apllication for star entertinment"},
  {key:"ICICI Net Banking",data:"Portal for ICICI Bank"},
  {key:"Instagram",data:"Social Networking application"},
  {key:"IRCTC",data:"Application for Indian Railways"},
  {key:"IKEA",data:"Shope for home furnishing"},
  {key:"JAVA",data:"Object oriented Programming language "},
  {key:"Javascript",data:"Scripting language"},
  {key:"Jasmine",data:"Test framework"},
  {key:"Junit",data:"Junit for unit test cases"},
  {key:"Jio",data:"Moblie Network"},
  {key:"Just Dail",data:"Platform for all locations information"},
  {key:"Joker",data:"Joker is a movie"},
  {key:"Kotak Mahendra",data:"Kotak Mahendra Bank online portal"},
  {key:"Kareena Kapoor",data:"kareena kapoor is actress"},
  {key:"Kajal",data:"Kajal is film actress"},
  {key:"Karan Johar",data:"Indian film actor"},
  {key:"Kngana Ranaut",data:"Indian film actress"},
  {key:"Linked in",data:"Social Network for employee as well a students"},
  {key:"LIC",data:"Life Insurance Corporation"},
  {key:"Latest News",data:"Daily Latest News..."},
  {key:"Myntra",data:"Online Shopping.."},
  {key:"Make My Trip",data:"Travel Bookings"},
  {key:"Money Heist",data:"Webseries in Netflix"},
  {key:"MX Player",data:"Mx player is video player"},
  {key:"Modi",data:"Narnder Modi Priminister of India"},
  {key:"Node Js",data:"Nodejs is used to run the javascript files in cmd"},
  {key:"Netflix",data:"Online Movies and webseries streaming application"},
  {key:"News",data:"Latest news related to all categories"},
  {key:"Naukari",data:"Portal searching and applying jobs"},
  {key:"Nifty",data:"Nifty realted stock market"},
  {key:"NEET",data:"Exam for students"},
  {key:"One Plus",data:"One of the popular mobile"},
  {key:"Olex",data:"Website for buying and selling"},
  {key:"Outlook",data:"Outlook is mail service from Microsoft"},
  {key:"Office 365",data:"A Microsoft Product"},
  {key:"Ok Google",data:"Google Assistent"},
  {key:"Online SBI",data:"Portal for SBI Bank"},
  {key:"Prime Video",data:"Amazon product for online movies and series streaming"},
  {key:"Play Store",data:"A Place for all android applications"},
  {key:"Pintrest",data:"Programming languages are high level way of giving intstructions to Computer"},
  {key:"Paytm",data:"Online payments"},
  {key:"Pathanjali",data:"Ayurvadeic Products"},
  {key:"Provident Fund",data:"Employee Provident Fund for savings"},
  {key:"Quiker",data:"Buying and selling in online"},
  {key:"Quest Global",data:"A Multi National Company."},
  {key:"Qualcomm",data:"A multi national company"},
  {key:"Quarantine",data:"Quarantine is not allowed a system to network"},
  {key:"Queen Elizabeth",data:"Queen...."},
  {key:"Queen Movie",data:"A Hindi Movie"},
  {key:"Red Bus",data:"Appliction for booking seats in  bus"},
  {key:"Reliance",data:"One of the Leading business in diffrent sectors"},
  {key:"Restaurents Near Me",data:"Finding Restaurents near by you...."},
  {key:"Reddifmail",data:"Mail Service"},
  {key:"Sensex",data:"Related to Stock Market"},
  {key:"Sakshi",data:"News Chanel"},
  {key:"Speed Test",data:"Internet Speed Test"},
  {key:"Swiggy",data:"Online Food Delivery Application"},
  {key:"SRM University",data:"University for Higher Education"},
  {key:"Sun NEXT",data:"Online Streaming"},
  {key:"SCSS",data:"Syles applied in creation of websites"},
  {key:"SASS",data:"Syles applied in creation of websites"},
  {key:"Twitter",data:"Social Networking site"},
  {key:"TV9",data:"News Chanel"},
  {key:"True Caller",data:"Applications to find contacts"},
  {key:"Times Of India",data:"News Paper"},
  {key:"Translate",data:"Google Translator is help full for translation"},
  {key:"Urban Clap",data:"Resource Provider"},
  {key:"Udemy",data:"Online Courses"},
  {key:"Ubuntu",data:"Operating System"},
  {key:"Undertaker",data:"The person who is handovering something."},
  {key:"Video",data:"find search related videos in google"},
  {key:"Voot",data:"onlnine streaming"},
  {key:"Vivo",data:"Moblie Brand"},
  {key:"Virtual Reality",data:"VR devices used for virtual relality games"},
  {key:"Vodafone",data:"One of the Network provider"},
  {key:"Whatsapp",data:"Social Networking application"},
  {key:"Webpack",data:"Webpack is module bundler"},
  {key:"W3Schools",data:"website for learing technologies in online"},
  {key:"Weather",data:"Weather forecast is loading..."},
  {key:"World Map",data:"Going to display world map"},
  {key:"Word to pdf",data:"Online converters are available to conver word to pdf"},
  {key:"Xiaomi",data:"One of the mobile brands"},
  {key:"Xampp Server",data:"Xammp server is used to run php projects"},
  {key:"Xbox",data:"Xbox is video gaming brand"},
  {key:"Xender",data:"file sharing application"},
  {key:"Xerox shopes near me",data:"Finding xerox shopes near you..."},
  {key:"You Tube",data:"Most Popular Application for All sort of videos"},
  {key:"Yahoo",data:"Yahoo is search engine"},
  {key:"Yes Bank",data:"Online banking application"},
  {key:"Yash Chopra",data:"Yash Raj Chopra was an Indian director and film producer who worked in Hindi films."},
  {key:"Zomato",data:"Online food delivery application"},
  {key:"Zee 5",data:"Online streaming"},
  {key:"Ztn",data:"used to enable access to internal network"},
  
  
  ]
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), data);