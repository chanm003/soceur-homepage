<%@ Page language="C#" MasterPageFile="/_catalogs/masterpage/seattle_airborne.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
	<style type="text/css">
		#sideNavBox{
	display:none;
}



	</style>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ListItemProperty Property="BaseName" maxlength="40" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	<SharePoint:ProjectProperty Property="Title" runat="server"/>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageDescription" runat="server">
	<SharePoint:ProjectProperty Property="Description" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
<!-- BEGIN Redesign JS and CSS specific to homepage -->
<link rel="stylesheet" href="/airborne/redesign2017/homepage/styles-homepage.css" type="text/css" />
<script type="text/javascript">
    function homepageResizeChecks () {
        // Make footer width account for scroll bar
	    $('.region.footer').css({ width: $('#s4-workspace').width() - 57}); 
	    // Make sure something below the slideshow is always visible   
	    var TargetSlideHeight = $(window).height() - 290;
	    if (TargetSlideHeight < 480) TargetSlideHeight = 480;
	    $('.homepage-graphic-area').css({ 'min-height': TargetSlideHeight, 'height':TargetSlideHeight });
	    $('.jsMovieFrame').css({ 'min-height': TargetSlideHeight, 'height': TargetSlideHeight });
	    
	    // Is it a tinie tiny itsy bitsy monitor?
	    if ( ( $(window).height() < 710 ) && ( $(window).width() < 1030 ) ) {
//	 	   $('.resolution-check').slideDown(700);
 	   } else {
	 	   $('.resolution-check').slideUp(700);
 	   }

	    var windowWidth = $('.homeage-wrapper').width();
		$('.slideshowstyle').html('<style type="text/css">#slideshow img { width: ' + windowWidth  + 'px; } .homepage-graphic-area { background: #000 !important; }</style>');
    }
	$( document ).ready(function() {
	    homepageResizeChecks();
	});
	
	$( window ).resize(function() {
	    setTimeout(function() {
	  		homepageResizeChecks();    
	    }, 150);
	});	
</script>
<!-- END  Redesign JS and CSS specific to homepage -->


<div class="homeage-wrapper" style="margin-bottom:0;">

	<div class="region resolution-check" style="display:none; min-height: 100px; width: 600px; padding: 1% 4%;position: fixed;
background: #fff;
width: 86%; margin: 1% 2%;">
	  <h1 style="margin: 0;">Monitor size notice</h1>
	  <p>Your monitor resolution (minimum requirement 1280x1024) may be 
		improperly set and will not allow proper access to this service. Please 
		check your display settings or call Helpdesk at 433-4357 to adjust your 
		monitor resolution.</p>
	</div>

	<!-- Homepage welcome graphic area -->	
	<div class="homepage-graphic-area">
	
		<div class="center">
			<img data-0="position: relative; top: 0px;" data-50="position: relative; top: -150px;" 
			     src="/airborne/redesign2017/images/shield-25opacity_198px.png" />
		</div>
		
		  <div id="slideshow">
		    <div id="slideshow-current"></div>
		    <div id="slideshow-next"></div>
		    <div id="slideshow-loader">.</div>
		  </div>
	
	</div>
	
	<!-- further homepage content -->	
		 
	<div class="region gradient">
	
		<div class="column column-1" style="width:100%;">
		
			<!--<h1>Highlighted resources</h1>-->
			
	        <div class="group-3" style="width: 28%; margin:0;">
				<div style="padding-left:40px;padding-top:20px;">
					<h1>SOF Truths</h1>
				<ul>
				<p>
				</p><li>Humans are more important than hardware.</li>
				<li>Quality is better than quantity. </li>
				<li>SOF can&#39;t be mass produced. </li>
				<li>Competent SOF can&#39;t be created after emergencies occur.</li>
				<li>Most special operations require non-SOF assistance.</li>
				<p></p>
			</ul>				</div>
			</div>
			
	        <div class="group-3" style="width: 38%; margin:0;">
	        	<div style="padding-left:0px;padding-top:20px;">
				<h1>SOF Talking Points</h1>
				<p>Special Operations Forces (SOF) are specially selected, 
				trained and equipped forces who conduct special operations to 
				further national and military objectives. SOF are our Nation’s 
				“Global Scouts”, who often gain access to sensitive or troubled 
				areas before conflict begins. SOF are versatile warriors who 
				possess regional focus, language skills, political and cultural 
				sensitivity, and are small but flexible with joint force 
				capabilities.</p>				</div>
			</div>
		
	        <div class="group-3" style="width: 33%; margin:0;">
	        	<div style="padding-left:40px;padding-right:30px;padding-top:20px;">
				<h1>Enduring Themes</h1>
				<ul>
				<li>SOCEUR stands, prepared and ready, to defend against 
				transnational challenges and rapidly respond to unforeseen 
				contingencies within the EUCOM Area of Responsibility
	
				</li>
				<li>SOCEUR’s forward posture is critical to USSOF success in 
				Europe and enhances its ability to conduct its mission and 
				achieve its objectives
	
				</li>
				<li>SOCEUR contributes significantly to the development of 
				Allied and Partner MOD and select MOI SOF
	
				</li>
				<li>SOCEUR generates increased Allied and Partner SOF capacity 
				in support of overseas contingency operations
	
				</li>
				<li>Care, protection, and development of SOCEUR servicemen and 
				women, civilians, and family members are a command priority
				</li>
			</ul>				</div>
			</div>
		
		</div>
		
		
		<div class="column column-2" style="width: 23%; margin: 2%; border-left: 1px solid #AAA; padding-left: 2%;">
	      
		</div>
	</div>
	
	<div class="region soceur-groups">
	
	    <div class="group" data-500="position: relative; left: -200px;" data-900="position: relative; left: 0px;">
			<div class="logo-holder">
				<img src="/airborne/homepage/images/10thsfga_Banner.gif" alt="" width="115"/>
			</div>
			<h2>1st Battalion, 10th Special Forces Group (Airborne)</h2> 
			<p>1st Battalion of the 10th Special Forces Group is forward 
			deployed at Panzer Kaserne, near Stuttgart, Germany. As a component 
			for Special Operations Command Europe, the group trains for and 
			conducts combat, unconventional warfare, special reconnaissance, and 
			foreign internal defense missions. 
			</p><p>
			1-10th SFG(A) conducts numerous missions supporting conventional 
			forces. The unit&#39;s assistance ranges from air support and rescue 
			operations to reconnaissance and liaison duties. Special operations 
			personnel serve as liaisons between conventional forces and local 
			nationals. Other tasks may include unconventional warfare, foreign 
			internal defense, special reconnaissance, counterterrorism, and 
			humanitarian or civic action. 
			</p>
			<em>SOCEUR Component</em>
		</div>
		
	    <div class="group" data-500="position: relative; left: -500px;" data-900="position: relative; left: 0px;">
			<div class="logo-holder">
				<img src="/airborne/homepage/images/web_afg_021220_008.gif" alt="" width="115"/>
			</div>
			<h2>352nd<br/>Special Operations Wing</h2>
			<p>352nd Special Operations Wing performs special reconnaissance, 
			psychological operations and unconventional warfare in hot spots 
			around the world. Using high tech surveillance equipment, modified 
			aircraft and weapons straight out of a futuristic film, they 
			participate in military operations, humanitarian missions, and 
			relief efforts. 
			</p><p>
			352nd Special Operations Wing, at Royal Air Force Mildenhall, 
			England, is the Air Force component for Special Operations Command 
			Europe. The 352nd SOW is assigned to accomplish the following 
			special operations activities: unconventional warfare, 
			counterproliferation, direct action, psychological operations, 
			special reconnaissance, civil affairs, combating terrorism, foreign 
			internal defense, and information operations. 
			</p>
			<em>SOCEUR Component</em>
		</div>
		
	    <div class="group" data-500="position: relative; left: -800px;" data-900="position: relative; left: 0px;">
			<div class="logo-holder">
				<img src="/airborne/homepage/images/navsoc_logo.gif" alt=""/>
			</div>
			<h2>Naval <br/>Special Warfare Unit 2</h2>
			<p>Naval Special Warfare Unit 2 (NSWU-2) is located at Panzer 
			Kaserne, near Stuttgart, Germany. As the maritime component to 
			Special Operations Command Europe, NSWU-2 plans, prepares for and, 
			when directed, conducts special operations, unilaterally or in 
			concert with joint or multinational/NATO partners, in support of 
			U.S. objectives during war, contingency operations, and peacetime in 
			the USEUCOM Area of Responsibility (AOR)/Interest. 
			</p><p>
			NSWU-2 advises SOCEUR and COMSIXTHFLT staffs as required or 
			directed; acts as the Navy SOF component for SOCEUR, and as the 
			special operations component of COMSIXTHFLT; supports CDRUSEUCOM 
			planning; when directed, establishes and functions as the NAVSOF 
			component of a JSOTF, or the NAVSOF component of a Fleet TF; plans, 
			coordinates, deconflicts, and conducts combined, Joint, and Fleet 
			operations and exercises; and plans, coordinates, and/or provides 
			training, logistics, intelligence and maintenance support for 
			deployed NSW forces in the USEUCOM AOR.” 
			</p>
			<em>SOCEUR Component</em>	
		</div>
		
		<div class="group" data-500="position: relative; left: -1500px;" data-900="position: relative; left: 0px;">
			<div class="logo-holder">
				<img style="width:110px;" src="/airborne/homepage/images/ssd_logo.jpg" alt=""/>
			</div>
			<h2>SOCEUR Signal Detachment (Airborne)</h2>
			<p>SSD provides rapid-response, deployable command and control 
			communications so that COMSOCEUR may exercise operational control of 
			US Special Operations Forces as JTF or JSOFT.</p>
			<em>SOCEUR Component</em>
		</div>
			
	    <div class="group" data-500="position: relative; left: -1200px;" data-900="position: relative; left: 0px;">
			<div class="logo-holder">
				<img src="/airborne/homepage/images/92CABN_logo.jpg" alt=""/>
			</div>
			<h2>92nd Civil Affairs <br/>Battalion (Airborne)</h2>
			<p>92nd Civil Affairs Battalion (Airborne), based in Ft. Bragg, NC 
			is the Army unit aligned to provide persistent support to Special 
			Operations Command Europe.  
			</p>
			<p>
			The mission of CA forces is to defeat threats to civil society 
			across the range of military operations by engaging and influencing 
			the civil populace and authorities through the planning and conduct 
			of Civil Affairs Operations in order to shape the civil environment 
			and set the conditions for military operations. Civil Affairs forces 
			plan, prepare, execute, assess, and transition Civil Affairs 
			Operations at all levels of war.
			</p>
			<em>SOCEUR Supporting Element</em> 
		</div>
	</div>
	
	<div class="region footer" style="position:static;">
	<div style="margin: 0px; width: 25%; height: 100%; float: left;"> 
      <img style="height: 140px;" alt="soceur" src="/airborne/redesign2017/images/shield-25opacity_198px.png"/>
      <div style="text-align:center">
      	<a style="border: currentColor;" href="http://www.facebook.com/SOCEUR" alt="facebook"><img style="height: 45px; " alt="facebook" src="/airborne/homepage/images/facebook.png"/></a>
      <a style="border: currentColor;" href="https://www.flickr.com/photos/150933388@N08" alt="flickr"><img style="height: 45px;" alt="flickr" src="/airborne/homepage/images/flickr.jpg"/></a>
      <a style="border: currentColor;" href="http://www.twitter.com/US_%20SOCEUR" alt="twitter"><img style="height: 45px; " alt="facebook" src="/airborne/homepage/images/twitter.png"/></a>
      <a style="border: currentColor;" href="https://www.dvidshub.net/unit/SOCEUR" alt="DVIDS"><img style="height: 45px;" alt="DVIDS" src="/airborne/homepage/images/dvids.png"/></a>
      </div>
   </div>

    <div class="footer-inner">

	    	    
	    <div class="group-3 middle" style="width: 350px; margin:0 auto;">
		    <strong>Departmental Contacts</strong>
		    <span class="department">Command Group</span>                    <span class="number">
			430 5273</span>
		    <span class="department">EEG</span>                              <span class="number">
			430 0101</span>
		    <span class="department">Headquarters Commandant</span>          <span class="number">
			430 6818</span>
		    <span class="department">J1 Personnel</span>                     <span class="number">
			430 5482/8078/5268/5167</span>
		    <span class="department">J2 Intelligence</span>                  <span class="number">
			430 4738/4730</span>
		    <span class="department">J3 Operations</span>                    <span class="number">
			430 4341</span>
		    <span class="department">J4 Logistics</span>                     <span class="number">
			430 7372</span>
		    <span class="department">J5 Strategy Plans &amp; Policies</span>     <span class="number">
			430 7603/7214/5900</span>
		    <span class="department">J6 Communications </span>               <span class="number">
			430 4825/7319</span>
		    <span class="department">J8 Comptroller</span>                   <span class="number">
			430 5689/7287/7811</span>
		    <span class="department">JSOAC</span>                            <span class="number">
			238 4597/4707/4734/8363</span>
		    <span class="department">Surgeon</span>                          <span class="number">
			430 6640</span>
		    <span class="department">Reserve Affairs</span>                  <span class="number">
			430 2514/5167</span>
	    </div>
	    
	    <div class="group-3 rightMost" style="font-size: 1em; width: 400px;">
			<strong>Notice</strong>
			You are accessing a U.S. Government owned system. Anyone knowingly 
			and intentionally accessing this system without authorization or 
			exceeding their authorized access limitations shall be subject to 
			criminal prosecution as provided for by Title 10 U.S. Code Section 
			1030.<br/>
			Section 508 of the Rehabilitation Act of 1973 (29 U.S.C. § 794d), as 
			amended in 1998, and hereafter referred to as Section 508, requires 
			Federal Agencies to ensure employees and members of the public with 
			disabilities have access to information and data comparable to that 
			of persons without disabilities when developing, procuring, 
			maintaining, or using Electronic and Information Technology (E&amp;IT). 
		</div>
	</div>
</div>


</div>



<script type="text/javascript">    

	// JS Slideshow for homepage

    // Some JS to do our fading. If you have jQuery, this wouldn't be needed.
    // This is from: http://www.claindsilva.com/javascript/how-to-cross-fade-anything-with-javascript-javascript-fade-effect/
    function fadeOutNoJQ(id,val){
      if(isNaN(val)){ val = 9;}
      document.getElementById(id).style.opacity='0.'+val;
      //For IE
      document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
      if(val>0){
        val--;
        setTimeout('fadeOutNoJQ("'+id+'",'+val+')',50);
      }else{return;}
    }
     
    function fadeInNoJQ(id,val){
      if(isNaN(val)){ val = 0;}
      document.getElementById(id).style.opacity='0.'+val;
      //For IE
      document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
      
      if(val<9){
        val++;
        setTimeout('fadeInNoJQ("'+id+'",'+val+')',50);
       }else{return;}
    }    

    // How many ms between each slide?
    var slideshowImagesSpeed = 3000; 

    // An array of the images we want to use (with paths).
    // Here's some demo data (Maybe you're loading via JSON?).
    var slideshowImages=new Array();
   
    slideshowImages[0] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_006.jpg";
    slideshowImages[1] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_002.jpg";
    slideshowImages[2] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_003.jpg";
    slideshowImages[3] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_004.jpg";
    slideshowImages[4] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_005.jpg";
    slideshowImages[5] = "/airborne/redesign2017/homepage/jsmovie/images_still/still_001.jpg";
    
    var slideshowImagesCount = slideshowImages.length-1;
    var slideshowImagesCurrent = 0; // Why start at the begining? It's oh so boring. Fine, 0.

    // We need an "A" and a "B" image to do our fading.
    var slideshowImagesImageA = document.createElement("img");
    var slideshowImagesImageB = document.createElement("img");

    function slideshowImagesAdvance() {
      // Prepare and insert the image.
      slideshowImagesImageA.setAttribute("src",slideshowImages[slideshowImagesCurrent]);
      document.getElementById('slideshow-current').appendChild(slideshowImagesImageA);

      // Prepare the next image.
      if (slideshowImagesCurrent<slideshowImagesCount) slideshowImagesCurrent++
        else slideshowImagesCurrent = 0;
      slideshowImagesImageB.setAttribute("src",slideshowImages[slideshowImagesCurrent]);
      document.getElementById('slideshow-next').appendChild(slideshowImagesImageB);

      // Animate.
      // Note: I wasnt able to get jquery fadeIn to work on IE8, so I did this. No open box or FireFox to research problem. -kh
      fadeInNoJQ ('slideshow-current');
      fadeOutNoJQ('slideshow-next');

      // Keep the party going.
      setTimeout("slideshowImagesAdvance()",slideshowImagesSpeed);
    }

    // Clear any holder content.
    document.getElementById('slideshow-loader').innerHTML = '';

    // Und los!
    // (Remember, if you're use barebones JS, you'll want your HTML to be loaded before the script runs.)
    slideshowImagesAdvance();
    
    var windowWidth = $(window).width();
	$('#s4-workspace').prepend('<div class="slideshowstyle"><style type="text/css">#slideshow img { width: ' + windowWidth  + 'px; } .homepage-graphic-area { background: #000 !important; }</style></div>');
	
	// Load skrollr
	setTimeout(function() {
		$('.footer').append('<script type="text/javascript" src="/airborne/redesign2017/skrollr/skrollr.js"><\/script>');
	}, 3000);   
</script>

</asp:Content>

<asp:Content runat="server" ContentPlaceHolderID="PlaceHolderUtilityContent">

<script type="text/javascript" src="/nav/js/app/seed-data-helper.js"></script>

</asp:Content>