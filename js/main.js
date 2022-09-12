/*
This site is an open source project. That is, it isn't allowed
to be sold or purchased from anyone at anytime.
*/

////////////////Content Scrolling Management////////////////
//how many pages the content have
let pageCount;

//the pageYOffset and the main height
let pyo;
let winH;

//the div that will fit for every element - page
let pMgr =
document.getElementById("pagesMgr");

//the third content manager
let thirdVar = winH * 2;

//second content - page texts
//paragraph
let parg1 =
document.getElementById("parg1");
let pargTxt1 = "We created such thing to show our clients " + 
"how can their site be something new and out of the ordinary. " + 
"Having a modern, unusual, and efficient website is  enough to " + 
"be a special among the others. As crazy,  creative, productive, " + 
"and competent worker, we  allow you to do anything. Give it a " + 
"try and keep on scrolling down.";
let pargIndexer = 0;
//the heading - h2
let head1 =
document.getElementById("head1");
let headTxt1 = "What Is This?";

//the fade 
let fade =
document.getElementById("fade");
//fade in texts
let thisKind = "Those Kind of Websites";
let isSpecial = "Are Very Special";
let doIt = "And If Like It, You Can Order Yours Now";

//last Cover/Fade
let lFade =
document.getElementById("lastFade");
let lastLogo =
document.getElementById("lastLogo");

//the scroll manager
function ScrollMgr()
{
	//setting the logo to fade out
	if(pyo < winH)
		{
			contents[0].style.opacity = 1. - pyo / winH;
			contents[0].style.display = "block";
		}
	if(pyo >= winH)
		{
			contents[0].style.display = "none";
		}
		
	//setting the typewriter effect for page/content 2
		if(pyo >= winH / 2 && pargIndexer < headTxt1.length)
		{
			head1.innerHTML += headTxt1.charAt(pargIndexer);
		}
		if(pyo >= winH / 2 && pargIndexer < pargTxt1.length)
		{
			parg1.innerHTML += pargTxt1.charAt(pargIndexer);
			pargIndexer++;
		}
		
	//setting the second content to be covered 
	if(pyo > winH && pyo < winH * 2)
		{
			contents[2].style.transform = "translate(0," + (pyo - winH * 2) + "px)";
		}
	if(pyo >= winH * 2)
		{
			contents[2].style.transform = "translate(0, 0px)";
		}
	if(pyo <= winH)
		{
			contents[2].style.transform = "translate(0, -" + winH + "px)";
		}
	
	//setting the fourth content
	if(pyo >= winH * 2)
		{
			contents[3].style.transform = "translate(0, " + Math.abs(pyo - winH * 3) + "px)";
			contents[2].style.transform = "translate(0, -" + (pyo - winH * 2) + "px)";
		}
	if(pyo <= winH * 2)
		{
			contents[3].style.transform = "translate(0, " + winH + "px)";
		}
	if(pyo >= winH * 3)
		{
			contents[3].style.transform = "translate(0, 0)";
		}
		
	//setting the fifth content
	if(pyo >= winH * 3)
		{
			contents[4].style.transform = "translate(0, " + Math.abs(pyo - winH * 4) + "px)";
		}
	if(pyo <= winH * 3)
		{
			contents[4].style.transform = "translate(0, " + winH + "px)";
		}
	if(pyo >= winH * 4 && pyo <= winH * 5)
		{
			contents[4].style.transform = "translate(0, 0)";
		}
		
	//setting the sixth content
	if(pyo >= winH * 4)
		{
			contents[5].style.transform = "translate(0, -" + Math.abs(pyo - winH * 5) + "px)";
		}
	if(pyo <= winH * 4)
		{
			contents[5].style.transform = "translate(0, -" + winH + "px)";
		}
		
	//setting the last "UNCOVERING"
	if(pyo >= winH * 5)
		{
			contents[4].style.transform = "translate(0, " + Math.abs(pyo - winH * 5) + "px)";
			contents[6].style.transform = "translate(0, 0)";
		}
	else
		{
			contents[6].style.transform = "translate(0, " + winH * 2 + "px)";
		}
		
	//last fade text
	if(pyo >= winH * 6)
		{
			fade.innerHTML = thisKind;
			fade.style.opacity = (pyo / (winH / 2) - 12);
		}
	if(pyo >= winH * 6.5)
		{
			fade.style.opacity =  -pyo / winH + 7.5;
		}
	if(pyo < winH * 6)
		{
			fade.style.opacity = 0;
		}
		
	if(pyo >= winH * 7.5)
		{
			fade.innerHTML = isSpecial;
			fade.style.opacity = (pyo / (winH / 2) - 15);
		}
	if(pyo >= winH * 8)
		{
			fade.style.opacity =  -pyo / winH + 9;
		}
	
	if(pyo >= winH * 9)
		{
			fade.innerHTML = doIt;
			fade.style.opacity = (pyo / (winH / 2) - 18);
		}
	if(pyo >= winH * 9.5)
		{
			fade.style.opacity =  -pyo / winH + 10.5;
		}
		
		//last Coverer
		if(pyo >= winH * 10.5)
			{
				lFade.style.opacity = (pyo / (winH / 2) - 21);
				lFade.style.transform = "translate(0, 0)";
			}
		else
			{
				lFade.style.opacity = 0;
				lFade.style.transform = "translate(0, " + winH + "px)";
			}
		if(pyo >= winH * 11)
			{
				lastLogo.style.opacity = (pyo / (winH / 2) - 22);
				lFade.style.opacity = 1;
			}
		if(pyo >= winH * 11.5)
			{
				lastLogo.style.opacity =  -pyo / winH + 12.5;
			}
		if(pyo < winH * 11 || pyo >= winH * 12.5)
			{
				lastLogo.style.opacity = 0;
			}
}

///////////////////////////Start Function///////////////////////////
function Start()
{
	//setting the pages/contents count
	pageCount = 13.5;
	parts[0].style.height = winH + "px";
}


/////////////////////////Update Function/////////////////////////
let updateSpeed = setInterval(Update, 10);
function Update()
{
	//setting the page count
	pMgr.style.height = winH * pageCount + "px";
	
	//contents updated manager
	ContentMgr();
	
	//scrilling manager
	ScrollMgr();
	
	//setting the window height and pageYOffset 
	winH = window.innerHeight;
	pyo = window.pageYOffset;
}


/////////////////////////Content Manager/////////////////////////
// The Pages - Contents in the site
let contents =
document.getElementsByClassName("contents");

// the first fade out logo
let firstLogo =
document.getElementById("firstLogo");

//the second content's text
let secondTxt =
document.getElementById("secondConChild");
secondTxt.height = winH / 2;

//third content - page texts
let head2 =
document.getElementById("head2");
let parg2 =
document.getElementById("parg2");

// the second logo in content 4
let logo2 =
document.getElementById("logo2");

//calling the particles
let parts =
document.getElementsByClassName("particles");

//the pages - contents width and hieght manager
function ContentMgr()
{
	if(window.innerWidth > winH)
		{
			//setting the center elements
			//the first logo
			firstLogo.style.height = winH + "px";
			firstLogo.style.width = winH + "px";
			firstLogo.style.transform = "translate(" + Math.floor((window.innerWidth / 2) - (firstLogo.width / 2)) + "px, 0)";
			
			//the logo no2 in content 4
			logo2.style.height = winH + "px";
			logo2.style.width = winH + "px";
			logo2.style.transform = "translate(" + Math.floor((window.innerWidth / 2) - (logo2.width / 2)) + "px, 0)";
			
			//the last logo
			lastLogo.style.height = winH + "px";
			lastLogo.style.width = winH + "px";
			lastLogo.style.transform = "translate(" + Math.floor((window.innerWidth / 2) - (lastLogo.width / 2)) + "px, 0)";
			
			//setting the pages width to 100(%/vw)
			for(let i = 1; i <= 6; i++)
			{
				contents[i].style.backgroundSize = "100vw auto";
			}
		}
	else
		{
			//setting the center elements
			//the first logo
			firstLogo.style.width = window.innerWidth + "px";
			firstLogo.style.height = window.innerWidth + "px";
			firstLogo.style.transform = "translate(0, " + Math.floor((winH / 2) - (firstLogo.height / 2)) + "px)";
			
			//the logo no2 in content 4
			logo2.style.width = window.innerWidth + "px";
			logo2.style.height = window.innerWidth + "px";
			logo2.style.transform = "translate(0, " + Math.floor((winH / 2) - (logo2.height / 2)) + "px)";
			
			//the last logo
			lastLogo.style.width = window.innerWidth + "px";
			lastLogo.style.height = window.innerWidth + "px";
			lastLogo.style.transform = "translate(0, " + Math.floor((winH / 2) - (lastLogo.height / 2)) + "px)";
			
			//setting the pages height to 100(%/vw)
			for(let i = 1; i <= 6; i++)
			{
				contents[i].style.backgroundSize = "auto 100vh";
			};
		}
	//Note: anyway the contents should be full screen
	for(let i = 0; i <= 6; i++)
	{
		contents[i].style.height = winH + "px";
	}
	
	//Content 2 text
	secondTxt.style.transform = "translate(0, " + Math.floor((winH / 4)) + "px)";
	//the fade text
	fade.style.transform = "translate(0, " + Math.floor((winH / 4)) + "px)";
	
	//setting the third content texts
	head2.style.top = winH / 2 + "px";
	parg2.style.top = winH / 2 + "px";
	
	//setting the particles height
	parts[0].style.height = winH + "px";
	
	//last fade height
	lFade.style.height = winH + "px";
}