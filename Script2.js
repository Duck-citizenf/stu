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

let SBNS = 0;
let DBNS = 0;
let LBNS = 0;
let MBNS = 0;
let FBNS = 0;
let DaBNS = 0;

var BNSarray = [0,50,51,52,53,53,54,55,56,56,57,59,61,63,66,68,70,73,75,77,80,82,84,86,89,91,93,95,98,100,102,105,109,113,117,121,124,128,132,136,140,141,143,144,146,147,149,150,152,153,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,171,173,174,176,177,179,180,182,183,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var MBNSarray = [0,50,50,51,51,51,52,52,53,53,53,58,63,68,74,79,84,90,95,100,106,106,106,107,107,108,108,108,109,109,110,113,116,119,122,125,128,131,134,137,140,141,143,144,146,147,149,150,152,153,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,171,173,174,176,177,179,180,182,183,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var FBNSarray = [0,50,54,56,59,61,63,65,68,70,72,76,81,85,90,94,99,103,108,112,117,120,123,126,129,132,135,138,141,144,147,147,148,149,150,151,151,152,153,154,155,155,156,157,158,158,159,160,161,161,162,162,163,164,165,166,166,167,168,169,170,170,171,172,173,173,174,175,176,176,177,177,178,179,180,181,181,182,183,184,185,185,186,187,188,188,189,190,191,191,192,192,193,194,195,196,197,198,199,200];
var DBNSarray = [0,50,54,56,59,61,63,65,68,70,72,76,81,85,90,94,99,103,108,112,117,121,126,130,135,139,144,148,153,157,162,162,163,164,165,166,166,167,168,169,170,170,171,172,173,173,174,175,176,176,177,177,178,179,180,181,181,182,183,184,185,185,185,186,186,186,187,187,188,188,188,188,188,189,189,190,190,191,191,192,192,192,192,193,193,194,194,194,195,195,196,196,196,197,197,198,198,199,199,200];


bstr.addEventListener('change', generateTable);
dstr.addEventListener('change', generateTable);
bfaith.addEventListener('change', generateTable);
dint.addEventListener('change', generateTable);
infn.addEventListener('click', generateTable);
infr.addEventListener('click', generateTable);
inff.addEventListener('click', generateTable);
infm.addEventListener('click', generateTable);
infl.addEventListener('click', generateTable);
infd.addEventListener('click', generateTable);
infe.addEventListener('click', generateTable);
effo.addEventListener('click', generateTable);
two.addEventListener('click', generateTable);
axe.addEventListener('click', generateTable);
bow.addEventListener('click', generateTable);
claw.addEventListener('click', generateTable);
crossbow.addEventListener('click', generateTable);
curvedgreatsword.addEventListener('click', generateTable);
curvedsword.addEventListener('click', generateTable);
dagger.addEventListener('click', generateTable);
fist.addEventListener('click', generateTable);
greataxe.addEventListener('click', generateTable);
greathammer.addEventListener('click', generateTable);
greatbow.addEventListener('click', generateTable);
greatsword.addEventListener('click', generateTable);
halberd.addEventListener('click', generateTable);
hammer.addEventListener('click', generateTable);
katana.addEventListener('click', generateTable);
lance.addEventListener('click', generateTable);
reaper.addEventListener('click', generateTable);
spear.addEventListener('click', generateTable);
straightsword.addEventListener('click', generateTable);
thrustingsword.addEventListener('click', generateTable);
twinblade.addEventListener('click', generateTable);
ultragreatsword.addEventListener('click', generateTable);
whip.addEventListener('click', generateTable);

let sortP = document.querySelector('.sortTableP');
let sortM = document.querySelector('.sortTableM');
let sortF = document.querySelector('.sortTableF');
let sortL = document.querySelector('.sortTableL');
let sortD = document.querySelector('.sortTableD');
let sortT = document.querySelector('.sortTableT');

function generateTable(sortKey) {
	let table = document.querySelector('tbody');
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
		weapon.Physical = Math.round(weapon["BasePhys"] + (0.01 * SBNS * weapon["ScalingStr"]) + (0.01 * DBNS * weapon["ScalingDex"]));
		weapon.Light = Math.round(weapon["BaseLgt"] + (0.01 * LBNS * weapon["ScalingLgt"]));
		weapon.Fire = Math.round(weapon["BaseFre"] + (0.01 * FBNS * weapon["ScalingFre"]));
		weapon.Dark = Math.round(weapon["BaseDrk"] + (0.01 * DaBNS * weapon["ScalingDrk"]));
		weapon.Magic = Math.round(weapon["BaseMag"] + (0.01 * MBNS * weapon["ScalingMag"]));
		weapon.Total = weapon.Physical+weapon.Light+weapon.Fire+weapon.Dark+weapon.Magic;
		weaponcopy.push(weapon);
	}
	weaponcopy.sort(function(a, b){
		if(memory == 1){return b[sortKey] - a[sortKey]};
		if(memory == -1){return a[sortKey] - b[sortKey]};
	});	
	for (let weapon of weaponcopy){
		let red = "name";
		let redd = "name";
		let reds = "name";
		let redf = "name";
		let redi = "name";
		if ((weapon["ReqStr"]>bstr.value && !(two.checked)) || ((weapon["ReqStr"])/2>bstr.value && two.checked)){reds = "name_warning";}
		if (weapon["ReqDex"]>dstr.value){redd = "name_warning";}
		if (weapon["ReqFai"]>bfaith.value){redf = "name_warning";}
		if (weapon["ReqInt"]>dint.value){redi = "name_warning";}
		if (weapon["ReqStr"]>bstr.value || weapon["ReqDex"]>dstr.value || weapon["ReqFai"]>bfaith.value || weapon["ReqStr"]>bstr.value){red = "name_warning"}
		let whole_text = "<tr>"+"<td class ="+red+">"+weapon["Name"]+"</td>"+"<td>"+weapon["Infusion"]+"</td>"+"<td>"
			+weapon.Physical+"</td>"+"<td>"
			+weapon.Magic+"</td>"+"<td>"
			+weapon.Fire+"</td>"+"<td>"
			+weapon.Light+"</td>"+"<td>"
			+weapon.Dark+"</td>"+"<td>"
			+weapon.Total+"</td>"+"<td class ="+reds+">"+weapon["ReqStr"]+"</td>"+"<td class ="+redd+">"+weapon["ReqDex"]+"</td>"+"<td class ="+redi+">"+weapon["ReqInt"]+"</td>"+"<td class ="+redf+">"+weapon["ReqFai"]+"</td>"+"</tr>";
	table.innerHTML += whole_text;
	}
}
sortP.addEventListener('click', sortTableP);
sortM.addEventListener('click', sortTableM);
sortF.addEventListener('click', sortTableF);
sortL.addEventListener('click', sortTableL);
sortD.addEventListener('click', sortTableD);
sortT.addEventListener('click', sortTableT);
memory = 1
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
var groups = document.querySelector('.groups');
groups.addEventListener('change', selectall);
groups.addEventListener('change', generateTable);
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
var inf = document.querySelector('.inf');
inf.addEventListener('change', selectinf);
inf.addEventListener('change', generateTable);
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