// JavaScript source code
let bstr = document.querySelector('.str');
let dstr = document.querySelector('.dex');
let bfaith = document.querySelector('.faith');
let dint = document.querySelector('.int');

var infn = document.querySelector('.normal');
var infr = document.querySelector('.raw');
var inff = document.querySelector('.fire');
var infm = document.querySelector('.magic');
var infl = document.querySelector('.lightning');
var infd = document.querySelector('.dark');
var infe = document.querySelector('.enchanted');
var effo = document.querySelector('.effective');
var two = document.querySelector('.two');
var axe = document.querySelector('.Axe');              
var bow = document.querySelector('.Bow');             
var claw = document.querySelector('.Claw');            
var crossbow = document.querySelector('.Crossbow');        
var curvedgreatsword = document.querySelector('.CurvedGreatsword');
var curvedsword = document.querySelector('.CurvedSword');    
var dagger = document.querySelector('.Dagger');          
var fist = document.querySelector('.Fist');          
var greataxe = document.querySelector('.GreatAxe');       
var greathammer = document.querySelector('.GreatHammer');   
var greatbow = document.querySelector('.GreatBow');       
var greatsword = document.querySelector('.Greatsword');      
var halberd = document.querySelector('.Halberd');          
var hammer = document.querySelector('.Hammer');          
var katana = document.querySelector('.Katana');          
var lance = document.querySelector('.Lance');           
var reaper = document.querySelector('.Reaper');         
var spear = document.querySelector('.Spear');          
var straightsword = document.querySelector('.StraightSword');  
var thrustingsword = document.querySelector('.ThrustingSword');
var twinblade = document.querySelector('.Twinblade');       
var ultragreatsword = document.querySelector('.UltraGreatsword');
var whip = document.querySelector('.Whip');
var inf = document.querySelector('.inf');
var groups = document.querySelector('.groups');

let SBNS = 0;
let DBNS = 0;
let LBNS = 0;
let MBNS = 0;
let FBNS = 0;
let DaBNS = 0;
let sortP = document.querySelector('.sortTableP');
let sortM = document.querySelector('.sortTableM');
let sortF = document.querySelector('.sortTableF');
let sortL = document.querySelector('.sortTableL');
let sortD = document.querySelector('.sortTableD');
let sortT = document.querySelector('.sortTableT');

var BNSarray = [0,50,51,52,53,53,54,55,56,56,57,59,61,63,66,68,70,73,75,77,80,82,84,86,89,91,93,95,98,100,102,105,109,113,117,121,124,128,132,136,140,141,143,144,146,147,149,150,152,153,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,171,173,174,176,177,179,180,182,183,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var MBNSarray = [0,50,50,51,51,51,52,52,53,53,53,58,63,68,74,79,84,90,95,100,106,106,106,107,107,108,108,108,109,109,110,113,116,119,122,125,128,131,134,137,140,141,143,144,146,147,149,150,152,153,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,171,173,174,176,177,179,180,182,183,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var FBNSarray = [0,50,54,56,59,61,63,65,68,70,72,76,81,85,90,94,99,103,108,112,117,120,123,126,129,132,135,138,141,144,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,170,171,172,173,173,174,175,176,176,177,177,178,179,180,181,181,182,183,184,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var DBNSarray = [0,50,54,56,59,61,63,65,68,70,72,76,81,85,90,94,99,103,108,112,117,121,126,130,135,139,144,148,153,157,162,162,163,164,165,166,166,167,168,169,170,170,171,172,173,173,174,175,176,176,177,177,178,179,180,181,181,182,183,184,185,185,185,186,186,186,187,187,188,188,188,188,188,189,189,190,190,191,191,192,192,192,192,193,193,194,194,194,195,195,196,196,196,197,197,198,198,199,199,200];

groups.addEventListener('change', selectall);
inf.addEventListener('change', selectinf);

var weapons = document.querySelectorAll('.all input');
arrayweapons = Array.from(weapons);
arrayweapons.map(w => w.addEventListener('change', generateTable));

function generateTable(sortKey) {
	let table = document.querySelector('.generate');
	table.innerHTML = "";
	let weaponcopy = [];
	for (let weapon of window.weapon) {
		let stat_difference = weapon["ReqStr"]<=bstr.value && weapon["ReqDex"]<=dstr.value && weapon["ReqFai"]<=bfaith.value && weapon["ReqInt"]<=dint.value;
		let stat_difference_plus = (weapon["ReqStr"])/2<=bstr.value && weapon["ReqDex"]<=dstr.value && weapon["ReqFai"]<=bfaith.value && weapon["ReqInt"]<=dint.value;
		if (!(infd.checked) && weapon["Infusion"] == "Dark"){continue;}
		else if (!(inff.checked) && weapon["Infusion"] == "Fire"){continue;}
		else if (!(infn.checked) && weapon["Infusion"] == "Normal"){continue;}
		else if (!(infr.checked) && weapon["Infusion"] == "Raw"){continue;}
		else if (!(infm.checked) && weapon["Infusion"] == "Magic"){continue;}
		else if (!(infl.checked) && weapon["Infusion"] == "Lightning"){continue;}
		else if (!(infe.checked) && weapon["Infusion"] == "Enchanted"){continue;}
		else if (effo.checked && two.checked && !(stat_difference_plus)){continue;}
		else if (effo.checked && !(two.checked) && !(stat_difference)){continue;}
		else if	(!(axe.checked) && weapon["Type"] == "Axe"){continue;}
		else if	(!(bow.checked) && weapon["Type"] == "Bow"){continue;}
		else if	(!(claw.checked) &&	weapon["Type"] == "Claw"){continue;}
		else if	(!(crossbow.checked) &&	weapon["Type"] == "Crossbow"){continue;}
		else if	(!(curvedgreatsword.checked) &&	weapon["Type"] == "Curved Greatsword"){continue;}
		else if	(!(curvedsword.checked) &&	weapon["Type"] == "Curved Sword"){continue;}
		else if	(!(dagger.checked) && weapon["Type"] == "Dagger"){continue;}
		else if	(!(fist.checked) &&	weapon["Type"] == "Fist"){continue;}
		else if	(!(greataxe.checked) &&	weapon["Type"] == "Great Axe"){continue;}
		else if	(!(greathammer.checked) && weapon["Type"] == "Great Hammer"){continue;}
		else if	(!(greatbow.checked) && weapon["Type"] == "Greatbow"){continue;}
		else if	(!(greatsword.checked) && weapon["Type"] == "Greatsword"){continue;}
		else if	(!(halberd.checked) && weapon["Type"] == "Halberd"){continue;}
		else if	(!(hammer.checked) && weapon["Type"] == "Hammer"){continue;}
		else if	(!(katana.checked) && weapon["Type"] == "Katana"){continue;}
		else if	(!(lance.checked) && weapon["Type"] == "Lance"){continue;}
		else if	(!(reaper.checked) && weapon["Type"] == "Reaper"){continue;}
		else if	(!(spear.checked) && weapon["Type"] == "Spear") {continue;}
		else if	(!(straightsword.checked) && weapon["Type"] == "Straight Sword"){continue;}
		else if	(!(thrustingsword.checked) && weapon["Type"] == "Thrusting Sword"){continue;}
		else if	(!(twinblade.checked) && weapon["Type"] == "Twinblade"){continue;}
		else if	(!(ultragreatsword.checked) && weapon["Type"] == "Ultra Greatsword"){continue;}
		else if	(!(whip.checked) &&	weapon["Type"] == "Whip"){continue;}
		let darkValue = Math.min(bfaith.value, dint.value);
		let fireValue = Math.floor((parseInt(bfaith.value) + parseInt(dint.value))/2);
		SBNS = BNSarray[bstr.value];
		DBNS = BNSarray[dstr.value];
		LBNS = BNSarray[bfaith.value];
		MBNS = MBNSarray[dint.value];
		DaBNS = DBNSarray[darkValue];
		FBNS = FBNSarray[fireValue];
		let RoB = 0;
		let Flynn = 0;
		let LightRing = 0;
		let SorceryRing = 0;
		let DarkRing = 0;
		let FireRing = 0;
		if (document.querySelector(".ROB").checked){RoB = weapon.RoB}
		if (document.querySelector(".Flynn").checked){Flynn = weapon.Flynn}
		if (document.querySelector(".LightRing").checked){LightRing = weapon.LightningRing}
		if (document.querySelector(".SorceryRing").checked){SorceryRing = weapon.SorceryRing}
		if (document.querySelector(".DarkRing").checked){DarkRing = weapon.DarkRing}
		if (document.querySelector(".FireRing").checked){FireRing = weapon.FireRing}
		weapon.Physical = Math.round(weapon["BasePhys"] + (0.01 * SBNS * weapon["ScalingStr"]) + (0.01 * DBNS * weapon["ScalingDex"])+RoB+Flynn);
		weapon.Light = Math.round(weapon["BaseLgt"] + (0.01 * LBNS * weapon["ScalingLgt"])+LightRing);
		weapon.Fire = Math.round(weapon["BaseFre"] + (0.01 * FBNS * weapon["ScalingFre"])+FireRing);
		weapon.Dark = Math.round(weapon["BaseDrk"] + (0.01 * DaBNS * weapon["ScalingDrk"])+DarkRing);
		weapon.Magic = Math.round(weapon["BaseMag"] + (0.01 * MBNS * weapon["ScalingMag"])+SorceryRing);
		weapon.Total = weapon.Physical+weapon.Light+weapon.Fire+weapon.Dark+weapon.Magic;
		weaponcopy.push(weapon);
	}
	weaponcopy.sort(function(a, b){
		if(memory == 1){return b[sortKey] - a[sortKey]};
		if(memory == -1){return a[sortKey] - b[sortKey]};
	});	
	for (let weapon of weaponcopy){
		let redd = "name";
		let reds = "name";
		let redf = "name";
		let redi = "name";
		if ((weapon["ReqStr"]>bstr.value && !(two.checked)) || ((weapon["ReqStr"])/2>bstr.value && two.checked)){reds = "name_warning";}
		if (weapon["ReqDex"]>dstr.value){redd = "name_warning";}
		if (weapon["ReqFai"]>bfaith.value){redf = "name_warning";}
		if (weapon["ReqInt"]>dint.value){redi = "name_warning";}
		if (weapon["ReqStr"]>bstr.value || weapon["ReqDex"]>dstr.value || weapon["ReqFai"]>bfaith.value || weapon["ReqStr"]>bstr.value){red = "name_warning"}
		let tr = table.appendChild(document.createElement('tr'));
		let tr_name = tr.appendChild(document.createElement('td'));
		let tr_name_a = tr_name.appendChild(document.createElement('a'));
		tr_name.className = reds;
		tr_name_a.textContent = weapon["Name"];
		tr_name_a.href = weapon["Url"];
		tr_name_a.target = "_blank";
		tr.appendChild(document.createElement('td')).textContent = weapon["Infusion"];
		tr.appendChild(document.createElement('td')).textContent = weapon.Physical;
		tr.appendChild(document.createElement('td')).textContent = weapon.Magic;
		tr.appendChild(document.createElement('td')).textContent = weapon.Fire;
		tr.appendChild(document.createElement('td')).textContent = weapon.Light;
		tr.appendChild(document.createElement('td')).textContent = weapon.Dark;
		tr.appendChild(document.createElement('td')).textContent = weapon.Total;
		let tr_str = tr.appendChild(document.createElement('td'));
		let tr_dex = tr.appendChild(document.createElement('td'));
		let tr_int = tr.appendChild(document.createElement('td'));
		let tr_fai = tr.appendChild(document.createElement('td'));
		tr_str.textContent = weapon["ReqStr"];
		tr_dex.textContent = weapon["ReqDex"];
		tr_int.textContent = weapon["ReqInt"];
		tr_fai.textContent = weapon["ReqFai"];
		tr_str.className = reds;
		tr_dex.className = redd;
		tr_int.className = redi;
		tr_fai.className = redf;
	}
}
sortP.addEventListener('click', sortTableP);
sortM.addEventListener('click', sortTableM);
sortF.addEventListener('click', sortTableF);
sortL.addEventListener('click', sortTableL);
sortD.addEventListener('click', sortTableD);
sortT.addEventListener('click', sortTableT);
let memory = 1;
function sortTableP(){
	generateTable("Physical");
	memory *=-1;
}
function sortTableM(){
	generateTable("Magic");
	memory *=-1;
}
function sortTableF(){
	generateTable("Fire");
	memory *=-1;
}
function sortTableL(){
	generateTable("Light");
	memory *=-1;
}	
function sortTableD(){	
	generateTable("Dark");
	memory *=-1;
}	
function sortTableT(){
	generateTable("Total");
	memory *=-1;
}
let ha = 1;
function selectall(){
	if(ha == 1){
		document.getElementById("2").checked = true;
		document.getElementById("3").checked = true;
		document.getElementById("4").checked = true;
		document.getElementById("5").checked = true;
		document.getElementById("6").checked = true;
		document.getElementById("7").checked = true;
		document.getElementById("8").checked = true;
		document.getElementById("9").checked = true;
		document.getElementById("10").checked = true;
		document.getElementById("11").checked = true;
		document.getElementById("12").checked = true;
		document.getElementById("13").checked = true;
		document.getElementById("14").checked = true;
		document.getElementById("15").checked = true;
		document.getElementById("16").checked = true;
		document.getElementById("17").checked = true;
		document.getElementById("18").checked = true;
		document.getElementById("19").checked = true;
		document.getElementById("20").checked = true;
		document.getElementById("21").checked = true;
		document.getElementById("22").checked = true;
		document.getElementById("23").checked = true;
		document.getElementById("24").checked = true;
	}
	if(ha == -1){
		document.getElementById("2").checked = false;
		document.getElementById("3").checked = false;
		document.getElementById("4").checked = false;
		document.getElementById("5").checked = false;
		document.getElementById("6").checked = false;
		document.getElementById("7").checked = false;
		document.getElementById("8").checked = false;
		document.getElementById("9").checked = false;
		document.getElementById("10").checked = false;
		document.getElementById("11").checked = false;
		document.getElementById("12").checked = false;
		document.getElementById("13").checked = false;
		document.getElementById("14").checked = false;
		document.getElementById("15").checked = false;
		document.getElementById("16").checked = false;
		document.getElementById("17").checked = false;
		document.getElementById("18").checked = false;
		document.getElementById("19").checked = false;
		document.getElementById("20").checked = false;
		document.getElementById("21").checked = false;
		document.getElementById("22").checked = false;
		document.getElementById("23").checked = false;
		document.getElementById("24").checked = false;
	}
	ha *=-1;
}
let hb = 1;
function selectinf(){
	if (hb == 1){
		document.getElementById("normal").checked = true;
		document.getElementById("raw").checked = true;
		document.getElementById("fire").checked = true;
		document.getElementById("magic").checked = true;
		document.getElementById("lightning").checked = true;
		document.getElementById("dark").checked = true;
		document.getElementById("enchanted").checked = true;
	}
	if (hb == -1){
		document.getElementById("normal").checked = false;
		document.getElementById("raw").checked = false;
		document.getElementById("fire").checked = false;
		document.getElementById("magic").checked = false;
		document.getElementById("lightning").checked = false;
		document.getElementById("dark").checked = false;
		document.getElementById("enchanted").checked = false;
	}
	hb *=-1;
}
document.querySelector(".strength").addEventListener('change', sum1)
document.querySelector(".dexterity").addEventListener('change', sum2)
document.querySelector(".prayer").addEventListener('change', sum3)
document.querySelector(".knowledge").addEventListener('change', sum4)
document.querySelector(".vessel").addEventListener('change', sum5)
document.querySelector(".hook").addEventListener('change', sum6)
document.querySelector(".ladle").addEventListener('change', sum7)
document.querySelector(".cales").addEventListener('change', sum8)
document.querySelector(".sunken").addEventListener('change', sum9)
document.querySelector(".fai1").addEventListener('change', sum10)
document.querySelector(".hat").addEventListener('change', sum11)
document.querySelector(".insolent").addEventListener('change', sum12)
document.querySelector(".int1").addEventListener('change', sum13)
document.querySelector(".int2").addEventListener('change', sum14)
document.querySelector(".int1fai1").addEventListener('change', sum15)
document.querySelector(".king").addEventListener('change', sum16)
document.querySelector(".cuffs").addEventListener('change', sum17)
document.querySelector(".gloves").addEventListener('change', sum18)
document.querySelector(".attire").addEventListener('change', sum19)
document.querySelector(".trousers").addEventListener('change', sum19)
function sum1() {
	if(document.querySelector(".strength").checked) {
		bstr.value -=-5;
	}
	else {
		bstr.value -=5;
	}
	generateTable();
}
function sum2() {
	if(document.querySelector(".dexterity").checked) {
		dstr.value -=-5;
	}
	else {
		dstr.value -=5;
	}
	generateTable();
}
function sum3() {
	if(document.querySelector(".prayer").checked) {
		bfaith.value -=-5;
	}
	else {
		bfaith.value -=5;
	}
	generateTable();
}
function sum4() {
	if(document.querySelector(".knowledge").checked) {
		dint.value -=-5;
	}
	else {
		dint.value -=5;
	}
	generateTable();
}
function sum5() {
	if(document.querySelector(".vessel").checked) {
		bstr.value -=-4;
		dstr.value -=-4;
		bfaith.value -=-1;
		dint.value -=-1;
		document.querySelector(".ladle").disabled = true;
		document.querySelector(".hook").disabled = true;
	}
	else {
		bstr.value -=4;
		dstr.value -=4;
		bfaith.value -=1;
		dint.value -=1;
		document.querySelector(".ladle").disabled = false;
		document.querySelector(".hook").disabled = false;
	}
	generateTable();
}
function sum6() {
	if(document.querySelector(".hook").checked) {
		dstr.value -=-5;
		document.querySelector(".ladle").disabled = true;
		document.querySelector(".vessel").disabled = true;
	}
	else {
		dstr.value -=5;
		document.querySelector(".ladle").disabled = false;
		document.querySelector(".vessel").disabled = false;
	}
	generateTable();
}
function sum7() {
	if(document.querySelector(".ladle").checked) {
		dstr.value -=1;
		document.querySelector(".hook").disabled = true;
		document.querySelector(".vessel").disabled = true;
	}
	else {
		dstr.value -=-1;
		document.querySelector(".hook").disabled = false;
		document.querySelector(".vessel").disabled = false;
	}
	generateTable();
}
function sum8() {
	if(document.querySelector(".cales").checked) {
		dstr.value -=-2;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		dstr.value -=2;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum9() {
	if(document.querySelector(".sunken").checked) {
		bstr.value -=-1;
		dstr.value -=-1;
		bfaith.value -=-1;
		dint.value -=-1;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		bstr.value -=1;
		dstr.value -=1;
		bfaith.value -=1;
		dint.value -=1;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum10() {
	if(document.querySelector(".fai1").checked) {
		bfaith.value -=-1;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		bfaith.value -=1;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum11() {
	if(document.querySelector(".hat").checked) {
		bfaith.value -=-2;
		dint.value -=1;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		bfaith.value -=2;
		dint.value -=-1;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum12() {
	if(document.querySelector(".insolent").checked) {
		bfaith.value -=-2;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		bfaith.value -=2;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum13() {
	if(document.querySelector(".int1").checked) {
		dint.value -=-1;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		dint.value -=1;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum14() {
	if(document.querySelector(".int2").checked) {
		dint.value -=-2;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		dint.value -=2;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum15() {
	if(document.querySelector(".int1fai1").checked) {
		dint.value -=-1;
		bfaith.value -=-1;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".king").disabled = true;
	}
	else {
		dint.value -=1;
		bfaith.value -=1;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".king").disabled = false;
	}
	generateTable();
}
function sum16() {
	if(document.querySelector(".king").checked) {
		dint.value -=-3;
		bfaith.value -=-3;
		document.querySelector(".cales").disabled = true;
		document.querySelector(".sunken").disabled = true;
		document.querySelector(".fai1").disabled = true;
		document.querySelector(".hat").disabled = true;
		document.querySelector(".insolent").disabled = true;
		document.querySelector(".int1").disabled = true;
		document.querySelector(".int2").disabled = true;
		document.querySelector(".int1fai1").disabled = true;
	}
	else {
		dint.value -=3;
		bfaith.value -=3;
		document.querySelector(".cales").disabled = false;
		document.querySelector(".sunken").disabled = false;
		document.querySelector(".fai1").disabled = false;
		document.querySelector(".hat").disabled = false;
		document.querySelector(".insolent").disabled = false;
		document.querySelector(".int1").disabled = false;
		document.querySelector(".int2").disabled = false;
		document.querySelector(".int1fai1").disabled = false;
	}
	generateTable();
}
function sum17() {
	if(document.querySelector(".cuffs").checked) {
		bfaith.value -=-1;
		document.querySelector(".gloves").disabled = true;
	}
	else {
		bfaith.value -=1;
		document.querySelector(".gloves").disabled = false;
	}
	generateTable();
}
function sum18() {
	if(document.querySelector(".gloves").checked) {
		dint.value -=1;
		document.querySelector(".cuffs").disabled = true;
	}
	else {
		dint.value -=-1;
		document.querySelector(".cuffs").disabled = false;
	}
	generateTable();
}
function sum19() {
	if(document.querySelector(".trousers").checked || document.querySelector(".attire").checked) {
		dint.value -=1;
	}
	else {
		dint.value -=-1;
	}
	generateTable();
}
