function label(content,attrname,attrvalue){
    var box=document.createElement("label");
    box.innerHTML=content
    box.setAttribute(attrname,attrvalue)
    return box;
}
function inputs(attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var res=document.createElement("input");
    res.setAttribute(attrname,attrvalue);
    res.setAttribute(attrname1,attrvalue1);
    res.setAttribute(attrname2,attrvalue2);
    res.setAttribute(attrname3,attrvalue3);
    return res;
}
function breaker(){
    var br=document.createElement("br");
    return br;
}

var contain=document.createElement("div");
contain.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
var form=document.createElement("div");
var dis=document.createElement("div");
var h=document.createElement("h1");
h.innerHTML="Form Submission"
form.setAttribute("class","col-md-4 form");
dis.setAttribute("class","col-md-8 dis");
// Creating a label:
var fname=label("First Name","for","fname");
var br1=breaker();
var finput=inputs("type","text","name","firstname","id","fname","placeholder","First Name");
var br2=breaker();

var lname=label("Last Name","for","lname");
var br3=breaker();
var linput=inputs("type","text","name","lastname","id","lname","placeholder","Last Name");
var br4=breaker();

var address=label("Address","for","address");
var br5=breaker();
var ainput=inputs("type","text","name","address","id","address","placeholder","Address");
var br6=breaker();

var pincode=label("Pincode","for","pincode");
var br7=breaker();
var pinput=inputs("type","text","name","pincode","id","pincode","placeholder","Pincode");
var br8=breaker();

var gender=label("Gender");
var br9=breaker();

var minput=inputs("type","radio","name","GENDER","id","male","value","Male");
var male=label("Male","for","male");
var br10=breaker();

var feinput=inputs("type","radio","name","GENDER","id","female","value","Female");
var female=label("Female","for","female");
var br11=breaker();

var choice=label("Choice of Food(must choose atleast 2 out of 5 options)");
var br12=breaker();

var noinput=inputs("type","checkbox","name","northindian","id","north","value","North indian");
var north=label("North indian","for","north");
var br13=breaker();

var soinput=inputs("type","checkbox","name","southindian","id","south","value","South indian");
var south=label("South indian","for","south");
var br14=breaker();

var chinput=inputs("type","checkbox","name","chinese","id","chinese","value","Chinese");
var chinese=label("Chinese","for","chinese");
var br15=breaker();

var jinput=inputs("type","checkbox","name","japanese","id","japanese","value","Japanese");
var japanese=label("Japanese","for","japanese");
var br16=breaker();

var itinput=inputs("type","checkbox","name","italian","id","italian","value","Italian");
var italian=label("Italian","for","italian");
var br17=breaker();

var state=label("State","for","state");
var br18=breaker();
var sinput=inputs("type","text","name","state","id","state","placeholder","State");
var br19=breaker();

var country=label("Country","for","country");
var br20=breaker();
var cinput=inputs("type","text","name","country","id","country","placeholder","Country");
var br21=breaker();

var button=document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",adding);

// Function for Display

function data(value,tagname){
    var td=document.createElement(tagname);
    td.innerHTML=value;
    td.setAttribute("class","bord");
    return td;
}
function row1(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
var t=row1("TABLE");
var thr=row1("TR");
var hf=data("First Name","TH");
var hl=data("Last Name","TH");
var ha=data("Address","TH");
var hp=data("Pincode","TH");
var hg=data("Gender","TH");
var hcf=data("Food","TH");
var hs=data("State","TH");
var hc=data("Country","TH");
var si=data("SI.No","TH")
thr.append(si,hf,hl,ha,hp,hg,hcf,hs,hc);
t.append(thr)
// Getting a input from a user

function details(id){
    var res=document.getElementById(id).value;
    var td=data(res,"TD")
    return td;
}
function rad(ans){
    var res=document.getElementsByName(ans);
    for (var i=0;i<res.length;i++){
        if(res[i].checked){
            var td=data(res[i].value,"TD")
            return td;
        }
    }
   
}
function check(){
    var arr=["north","south","chinese","japanese","italian"];
    var res=[]
    for(var i=0;i<arr.length;i++){
        var ans=document.getElementById(arr[i]);
        if(ans.checked==true){
            res.push(ans.value);
        }
    }
    if(res.length<2){
        alert("Please select atleast 2 choices of food")
        return document.getElementById("error").innerHTML="Please select atleast 2 choice";
    }
    else{
        ret=res.join(",")
        var td=data(ret,"TD")
        return td;
    }

}

//Adding the entered data
function adding(){
    var outfname=details("fname","TD");
    var outlname=details("lname","TD");
    var outaddress=details("address","TD");
    var outpincode=details("pincode","TD");
    var outgender=rad("GENDER","TD");
    var cb=check();
    var outstate=details("state","TD");
    var outcountry=details("country","TD");
    var si=data(sino,"TH");
    var tr=row1("TR");
    tr.append(si,outfname,outlname,outaddress,outpincode,outgender,cb,outstate,outcountry);
    t.append(tr)
    sino+=1;
}
var sino=1

var h1=document.createElement("h1");
h1.innerHTML="Submitted Data"
h1.setAttribute("class", "h1");
var hb=breaker();
dis.append(h1,hb,t);
var f=document.createElement("div")
f.append(fname,br1,finput,br2,lname,br3,linput,br4,address,br5,ainput,br6,pincode,br7,pinput,br8,gender,br9,minput,male,br10,feinput,female,br11,choice,br12,noinput,north,br13,soinput,south,br14,chinput,chinese,br15,jinput,japanese,br16,itinput,italian,br17,state,br18,sinput,br19,country,br20,cinput,br21,button);
form.append(h,f)
row.append(form,dis);
contain.append(row);
document.body.appendChild(contain);