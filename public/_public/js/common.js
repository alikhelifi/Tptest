// JavaScript Document

///////////Trim Function For Removing Leading and Trailing Space From Text  ///////////////////

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

///////////End Trim Function For Removing Leading and Trailing Space From Text  ///////////////////

///////////Function For Capitalizing Text  ///////////////////

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

///////////End Function For Capitalizing Text  ///////////////////

///////////Function For Removing Break(<br>) From Text  ///////////////////

function replace_break(str,replace_str)
{
	return str.replace("<br>",replace_str).replace("<BR>",replace_str).replace("<br >",replace_str).replace("<br />",replace_str);
}

///////////End Function For Removing Break(<br>) From Text  ///////////////////

$(document).ready(function(e) {

	var header2_form_pages ="[track_your_application.html][Schedule_an_Appointment.html]";
	var title="Canada Visa Information - Tunisia - ";
	
	var page_name;
                if(document.URL.indexOf("\\",document.URL.lastIndexOf("/"))!=-1)
				{
					//for IE
					if(document.URL.indexOf("#",document.URL.lastIndexOf("\\")+1)==-1)
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("\\")+1);					
					}
					else
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("\\")+1,document.URL.lastIndexOf("#"));
					}
				}
				else
				{
					//not for IE
					if(document.URL.indexOf("#",document.URL.lastIndexOf("/")+1)==-1)
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("/")+1);
					}
					else
					{
						page_name = document.URL.substring(document.URL.lastIndexOf("/")+1,document.URL.lastIndexOf("#"));
					}
				}
				
				var is_home_page = page_name=='' || page_name.match(/^index.html$/i)!=null;
				var is_header2_form_pages = header2_form_pages.match(new RegExp("\\[" + page_name + "\\]","i")) != null;

///////////////////////////////////////////For Top Navigation////////////////////////////////////////////

                var nav_text='<div class="wrapper">\
      <ul>\
        <li><a href="index.html" class="pad_home home_active" title="Accueil"><img src="images/home.png" alt=""></a></li>\
	    <li><a href="introduction.html">Introduction<br>&nbsp;</a></li>\
        <li id="li_visa_types"><a href="#"  box1_str="TYPES DE VISA"> TYPES DE<br>VISA</a>\
          <div class="submenu visa_types_submenu" id="visa_types">\
            <div class="floatl">\
              <ul>\
                <li><a href="http://www.cic.gc.ca/francais/visiter/index.asp" target="_blank">VISA DE RÉSIDENT TEMPORAIRE<br>(VISITEUR) </a></li>\
                <li><a href="http://www.cic.gc.ca/francais/etudier/index.asp" target="_blank"> PERMIS D\'ÉTUDES </a></li>\
                <li><a href="http://www.cic.gc.ca/francais/travailler/index.asp" target="_blank"> PERMIS DE TRAVAIL </a></li>\
                <li><a href="http://www.cic.gc.ca/francais/information/titre-de-voyage/index.asp" target="_blank"> TITRE DE VOYAGE POUR LES RÉSIDENTS PERMANENTS</a></li>\
              </ul>\
            </div>\
          </div>\
        </li>\
        <li><a href="Service_and_Service_Charge.html">SERVICES ET GRILLE<br>TARIFAIRE</a></li>\
        <li><a href="track_your_application.html" target="_blank">SUIVEZ L\'ÉVOLUTION DE<br>VOTRE DEMANDE</a></li>\
        <li><a href="general_information.html">INFORMATIONS<br>GÉNÉRALES </a>\
          <div class="submenu" id="gen_info">\
            <div class="floatl">\
              <ul>\
                <li><a href="contact_us.html">CONTACTEZ- NOUS</a></li>\
                <li><a href="customer_service.html"> SERVICE CLIENTÈLE </a></li>\
                <li><a href="security_regulations.html"> RÈGLEMENT DE SÉCURITÉ </a></li>\
				<li><a href="canada-tourism.html">FAIRE DU TOURISME AU CANADA </a></li>\
               <li><a href="public_holidays.html"> JOURS FÉRIÉS / FERMETURE </a></li>\
               <li><a href="useful_links.html"> LIENS IMPORTANTS ET UTILES </a></li>\
              </ul>\
            </div>\
          </div>\
        </li>\
        <li><a href="contact_us.html">CONTACTEZ-<br>NOUS</a></li>\
         <li><a href="faqs.html" title="FOIRE AUX QUESTIONS">FOIRE AUX<br>QUESTIONS</a></li>\
      </ul>\
      <div class="clear"></div>\
    </div>';
                
                $("nav").html(nav_text);
	
///////////////////////////////////////////End For Top Navigation////////////////////////////////////////////	

///////////////////////////////////////////For HelpLine////////////////////////////////////////////
		
			var helpline_text='<div class="helpline_tabs">\
	  <ul class="helpline_tab_buttons">\
		<li><a href="#helpline_sao_paulo" class="helpline_tab_current"></a></li>\
	</ul>\
	  <div class="helpline_tab_contents">\
		  <div helpline_tab_content_name="helpline_sao_paulo">\
			  <h3 class="c_blue marb15">ASSISTANCE TÉLÉPHONIQUE : </h3>\
			  <ul class="helpline_a clearfix">\
				  <li> <img src="images/icons/phone_big.png" alt="" class="floatl marr10">\
					<div class="floatl">\
					  <p class="number">+216 71 961 146 <br> +216 71 961 210 </p>\
					</div>\
				  </li>\
				  <li> <img src="images/icons/mail_big.gif" alt="" class="floatl marr10">\
					<div class="floatl">\
					  <p class="country_name caps">ADRESSE ÉLECTRONIQUE :</p>\
					  <p class="country_name"><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#105;&#110;&#102;&#111;&#46;&#99;&#97;&#110;&#116;&#117;&#110;&#105;&#111;&#109;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;" class="c_orange">&#105;&#110;&#102;&#111;&#46;&#99;&#97;&#110;&#116;&#117;&#110;&#105;&#111;&#109;&#64;&#118;&#102;&#115;&#104;&#101;&#108;&#112;&#108;&#105;&#110;&#101;&#46;&#99;&#111;&#109;</a></p>\
					</div>\
				  </li>\
			  </ul>\
		  </div>';
                
                $(".helpline").html(helpline_text);
				
	$(".helpline_tabs ul.helpline_tab_buttons li a").click(function(e) {
		var el = $(this);
		if(el.attr("href").indexOf("#")!=-1)
		{
			$(".helpline_tabs ul.helpline_tab_buttons li a").removeClass("helpline_tab_current");
			$(".helpline_tabs .helpline_tab_contents [helpline_tab_content_name]").removeClass("helpline_tab_current");
			el.addClass("helpline_tab_current");
			var current_tab_name = el.attr("href").substring(el.attr("href").indexOf("#") + 1);
			$(".helpline_tabs .helpline_tab_contents [helpline_tab_content_name=\"" + current_tab_name + "\"]").addClass("helpline_tab_current");
			return false;
		}
    });
	
	$(".helpline_tabs ul.helpline_tab_buttons li a.helpline_tab_current").click();
	 
	if(navigator.appName.indexOf("Internet Explorer")!=-1)
	{
		$('.helpline_a li:last').css('border-right-width','0px');
		$('#mycarousel_1 li:last').css('border-right-width','0px');
	}
	
///////////////////////////////////////////End For HelpLine////////////////////////////////////////////	

//////////////////////////////////////////////For Header//////////////////////////////////////////////////

		var header_text='<div class="wrapper">\
      <h1 class="floatl logo"> <a href="http://www.vfsglobal.com/" target="_blank"><img src="images/logo.png" alt="" /> </a> </h1>\
      <div class="floatr">\
        <div class="fsizer floatr"> <a fsizer_number="-1" id="fs_sml">A</a> <a fsizer_number="0" class="fsactive" id="fs_med">A+</a> <a fsizer_number="1" id="fs_lrg">A++</a></div>\
        <div class="clear"></div>\
        <div class="marb15 header2 floatr">\
          <h3 class="floatl c_white">Demander un VISA pour le Canada</h3>\
          <div class="floatl flag"><a href="index.html"><img src="images/icons/canada_flag.png" alt=""></a></div>\
          <h3 class="floatl c_white">En Tunisie</h3>\
          <div class="clear"></div>\
        </div>\
        <div class="clear"></div>\
        <ul class="language_list floatr">\
        	<li><a href="http://www.vfsglobal.ca/Canada/Tunisia/" target="_blank">English</a></li>\
			<li>Français</li>\
        	<li class="last_language"><a href="http://www.vfsglobal.ca/Canada/Tunisia/Arabic/" target="_blank">العربية</a></li>\
        </ul>\
		  <div class="clear"></div>\
        </div>\
        <div class="clear"></div>\
      </div>\
      <div class="clear"></div>\
      <div class="responsive_nav_parent"> </div>\
      <div class="clear"></div>\
    </div>';
                
                $("header").html(header_text);

//////////////////////////////////////////////End For Header//////////////////////////////////////////////////

/////////////////////////////////////////For Search Textfield////////////////////////////////////////
	
	var banner_first_child = $($('.banner > .wrapper').children()[0]);
	banner_first_child.removeClass('padt20');
	
	var search_form_text = '<div class="floatr" id="search">\
        <form id="search_form" method="get" action="search.html">\
          <input type="text" placeholder="RECHERCHER" id="search_text" name="search_text"/>\
        </form>\
      </div>\
      <div class="clear"></div>';
	
	banner_first_child.before(search_form_text);
	
	var serch_textfield = $('form#search_form input[type="text"]');
	var placeholder_text = serch_textfield.attr('placeholder');
	serch_textfield.removeAttr('placeholder');
	serch_textfield.attr('value',placeholder_text);
	serch_textfield.attr("onfocus","if (this.value == '" + placeholder_text + "') {this.value = '';}");
	serch_textfield.attr("onblur","if (this.value == '') {this.value = '" + placeholder_text + "';}");

//////////////////////////////////////////End For Search Textfield////////////////////////////////////////

//////////For header without search textbox and select language dropdown///////////
				
				if(is_header2_form_pages)
				{
					$("header .fsizer").css("display","none");
					$("header ul.language_list").css("display","none");
					$("header .header2").addClass("padt20");
					$("header .header2").removeClass("header2");
				}
				
//////////End For header without search textbox and select language dropdown///////////
				
//////////////////////////////////////////For Useful Links/////////////////////////////////////////////
	
	var useful_links_text='<h5 class="c_blue marb10"><a href="useful_links.html">Liens utiles</a></h5>\
	<ul class="floatl marr20">\
	 <li><a href="http://www.canadainternational.gc.ca/tunisia-tunisie/contact-contactez.aspx?lang=fra&menu_id=29&view=d" class="c_orange" target="_blank">Bureau canadien des visas</a></li>\
	</ul>\
	<ul class="floatl marr20">\
    <li><a href="http://www.canadainternational.gc.ca/ci-ci/commerce_canada/index.aspx?lang=fra&view=d" class="c_orange" target="_blank">Faire des affaires avec le Canada</a></li>\
	</ul>\
	<ul class="floatl marr20">\
     <li><a href="http://www.international.gc.ca/investors-investisseurs/index.aspx?lang=fra" class="c_orange" target="_blank">Investir au Canada</a></li>\
	</ul>\
	<ul class="floatl marr20">\
    <li><a href="http://www.cic.gc.ca/francais/index-can.asp" class="c_orange" target="_blank">SITE INTERNET DE Immigration, Réfugiés et Citoyenneté Canada ( IRCC)</a></li>\
	</ul> \
	<ul class="floatl ">\
    <li><a href="http://www.cic.gc.ca/ctc-vac/veniraucanada.asp" class="c_orange" target="_blank">VENIR AU CANADA</a></li>\
	</ul>';
                
                $(".usefulLinks").html(useful_links_text);
	
//////////////////////////////////////////End For Useful Links/////////////////////////////////////////////

///////////////////////////////////////////For Copyright///////////////////////////////////////////////

	if($('#copyright').length!=0)
	{
		$('#copyright').html(" &copy; VFS Global " + (new Date()).getFullYear() + ". All Rights Reserved<a class=\"acolor disclaimer_mobile marr10 marl10\" href=\"disclaimer_and_privacy_policy.html\">Politique de confidentialité et avertissement</a><a class=\"acolor disclaimer_mobile\" href=\"sitemap.html\">PLAN DU SITE</a> ");
	}
	else if($('#copyright_short').length!=0)
	{
		$('#copyright_short').html("&copy; VFS Global " + (new Date()).getFullYear() + ". All Rights Reserved");
	}
	
///////////////////////////////////////////End For Copyright///////////////////////////////////////////////	 

///////////For Changing Font Size On Click Of A,A+,A++  ///////////////////
	
	var fsizer_change_els = $('p, .list_ordered li, .list_style li, .table_template th, .table_template td');
	var fsizer_classes = new Array();
	$("a[fsizer_class]").each(function(index, element) {
		var fsizer_button = $(this);
		var fsizer_class = fsizer_button.attr("fsizer_class");
		if($.inArray(fsizer_class, fsizer_classes) == -1)
		{
			fsizer_classes.push(fsizer_class);
		}
	});
	$("a[fsizer_number]").click(function(e, allow_fsizer) {
        var fsizer_button = $(this);
		var fsizer_number = parseInt(fsizer_button.attr("fsizer_number"));
		if(!fsizer_button.hasClass("fs_disabled") && (!fsizer_button.hasClass("fsactive") || allow_fsizer == true))
		{
			$("a[fsizer_number]").removeClass("fsactive");
			fsizer_change_els.each(function(index, element) {
                var cur_fsizer_change_el = $(this);
				cur_fsizer_change_el.css("font-size","");
				var old_font_size = parseInt(cur_fsizer_change_el.css("font-size").replace("px",""));
				var new_font_size = old_font_size + fsizer_number;
				cur_fsizer_change_el.css("font-size", new_font_size + "px");
            });
			fsizer_button.addClass("fsactive");
		}
    });
	$("a[fsizer_number].fsactive").trigger('click', true);

///////////End For Changing Font Size On Click Of A,A+,A++  ///////////////////
	
/////////////For Page Title,Breadcrumb Text and Link, class for h1 and h2, home_active ///////////////////

	var middle_titles = null;
	
	//remove below comment only for languages
	
	/*middle_titles = [
	["short_term_visa.html","Short Term Visa"],
	["general_information.html","General Information"]
	];*/

                if(!is_home_page && !is_header2_form_pages)
                {
					 
					var parent_element;
					var heading_text;
					if($('section.banner h1').html()!=null)
					{
									parent_element = $('section.banner h1').parent();
									heading_text = $('section.banner h1').html();
					}
					else if($('section.banner h2').html()!=null)
					{
									parent_element = $('section.banner h2').parent();
									heading_text = $('section.banner h2').html();
					}
					else if($('section.banner h3').html()!=null)
					{
									parent_element = $('section.banner h3').parent();
									heading_text = $('section.banner h3').html();
					}
					parent_element.removeAttr('class');
					parent_element.attr('class','center text_center padt20');
					
					var bredcrumb_link_count = $(".breadcrumb").find("a").length;
					$(".breadcrumb").find("a").each(function(index, element) {
						var el = $(this);
						if(index==0)
						{
							el.attr("href","index.html");
							el.html("Accueil");
						}
						else if(index == bredcrumb_link_count - 1)
						{
							el.attr("href",page_name);
							el.html(toTitleCase(heading_text.replace('&amp;','&').replace('&nbsp;',' ')));
						}
						else
						{
							if(middle_titles!=null)
							{
								for(var i=0;i<middle_titles.length;i++)
								{
									if(el.attr('href').match(RegExp("^" + middle_titles[i][0] + "$","i")))
									{
										title += toTitleCase(middle_titles[i][1].replace('&amp;','&').replace('&nbsp;',' ')) + " - ";
									}
								}
							}
							else
							{
								title += toTitleCase(el.html().replace('&amp;','&').replace('&nbsp;',' ')) + " - ";
							}
							el.html(toTitleCase(el.html().replace('&amp;','&').replace('&nbsp;',' ')));
						}
					});
					
					
					title += toTitleCase(heading_text.replace('&amp;','&').replace('&nbsp;',' '));
					
					if($(".breadcrumb ul li:nth-child(3)").html()!=null)
					{	
						if($("nav li a[href]").filter(function() {
return RegExp("^" + $(".breadcrumb ul li:nth-child(3)").find('a').attr("href") + "$","i").test($(this).attr("href"));
}).html()!=null)
						{
							var cur_element = $("nav li a[href]").filter(function() {
return RegExp("^" + $(".breadcrumb ul li:nth-child(3)").find('a').attr("href") + "$","i").test($(this).attr("href"));
});
							$('nav li a').removeClass('home_active');
							$('nav li a').removeClass('active');
							cur_element.addClass('home_active');
						}
						else
						{
							$('nav li a').removeClass('home_active');
							$('nav li a').removeClass('active');
							$('nav li a[href]').filter(function() {
return RegExp("^index.html$","i").test($(this).attr("href"));
}).addClass('home_active');
						}
					}
					
					
					if($(".breadcrumb a[href]").filter(function() {
return RegExp("^general_information.html$","i").test($(this).attr("href"));
}).html()!=null)
					{
						if(page_name.match(/^contact_us.html$/i)==null)
						{
							$('.ico_active').removeClass('ico_active');
						}
					}
					
					if(page_name.match(/^faqs.html$/i)!=null)
					{		
						$('nav li a').removeClass('home_active');
						$('nav li a').removeClass('active');
						$('nav li a[href]').filter(function() {
return RegExp("^faqs.html$","i").test($(this).attr("href"));
}).addClass('home_active');
					}
					
					$('title').html(title);
                }
				
/////////////End For Page Title,Breadcrumb Text and Link, class for h1 and h2, home_active ///////////////////
				
/////////////////////////////////////////For Submenu Capitalize Text  ////////////////////////////////////////

				$('.submenu').each(function(index, element) {
									var submenu_el = $(this);
									submenu_el.find('a').each(function(index, element) {
										var submenu_a_el = $(this);
										submenu_a_el.html(toTitleCase(submenu_a_el.html().replace('&amp;','&').replace('&nbsp;',' ')));
                                	});
								});
								
////////////////////////////////////End For Submenu Capitalize Text  ///////////////////////////////////
	
/////////////////////////////For Frequently Asked Questions and link tooltip  /////////////////////////
	
	$('nav a:not(.pad_home), .bottomLinks a, footer a').each(function(index, e){
	
		if($(this).attr('title')==undefined)
		{
			$(this).attr('title',replace_break($(this).html(), " ").replace("&nbsp;"," ").replace(/\s+/g,' ').trim());
		}
	
	});
	
////////////////////////////End For Frequently Asked Questions and link tooltip  ///////////////////////////
	
////////////////////////////////For General Information Box 4  ////////////////////////////////

                if($("#gen_Box4").length!=0)
                {
				var gen_count=$('#gen_info').find('a').length;
                var cur_gen_box4=0;
                var box4_str = "";
                if(gen_count>0)
                {
					box4_str += "<ul class=\"floatl marr20\">";
					$('#gen_info').find('a').each(function(){
									var el = $(this);
									if((cur_gen_box4==gen_count))
									{
										box4_str += "</ul>";
									}
									else
									{
										box4_str += "<li><a href=\"" + el.attr("href") + "\" title=\"" + el.attr('title') + "\"" + ( el.attr('target') != undefined ? " target=\"" + el.attr('target') + "\"" : "" ) + " >" + (el.attr('box4_str')==null?el.html():el.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";
									}
									cur_gen_box4++;
					});
					$("#gen_Box4").html(box4_str);
					cur_gen_box4=0;
                }
                }
				
////////////////////////////////End For General Information Box 4  ////////////////////////////////
                
////////////////////////////////For Visa Types Box 1  ///////////////////////////////////////
                
	   if($("#visa_types_box1").length!=0)
		{
			var box1_str = "";
			
			if($("#li_visa_types").length!=0)
			{
				var main_head = $('#li_visa_types a:first-child');
				box1_str += "<h3 class=\"c_blue caps\"><a href=\"" + main_head.attr('href') + "\" class=\"visa\" title=\"" + main_head.attr('title') + "\"" + ( main_head.attr('target') != undefined ? " target=\"" + main_head.attr('target') + "\"" : "" ) + " >" + (main_head.attr('box1_str')==null?main_head.html():main_head.attr('box1_str')) + "</a></h3>";
				
				var has_submenu = true;
				if($('#li_visa_types').find('.submenu').length==0)
				{
					has_submenu = false;
				}
				
				if(has_submenu)
				{
					box1_str += "<div id=\"scrollbar_section\" class=\"scrollbar1\">";
					box1_str += "<div class=\"scrollbar\">";
					box1_str += "<div class=\"track\">";
					box1_str += "<div class=\"thumb\">";
					box1_str += "<div class=\"end\"></div>";
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "<div class=\"viewport\">";
					box1_str += "<div class=\"overview\">";
					
					var cur_submenu_head = 0;
					
					if($('#li_visa_types').find('.submenu_head a').length>0)
					{
						$('#li_visa_types').find('.submenu_head a').each(function(){
							var submenu_head = $(this);
							
							cur_submenu_head++;
							
							if(cur_submenu_head>1)
							{
								box1_str += "<br>";
							}
							
							box1_str += "<p class=\"visa_terms lineh19 marb5\" >";
							box1_str += "<a href=\"" + submenu_head.attr('href') + "\" class=\"c_orange\" title=\"" + submenu_head.attr('title') + "\"" + ( submenu_head.attr('target') != undefined ? " target=\"" + submenu_head.attr('target') + "\"" : "" ) + " >" + (submenu_head.attr('box1_str')==null?submenu_head.html():submenu_head.attr('box1_str')) + "</a>";
							box1_str += "</p>";
							
							var ul_inner_submenu;
							if(submenu_head.attr('inner_submenu')==null)
							{
								ul_inner_submenu = $("#li_visa_types ul:nth-child(" + cur_submenu_head + ")");
							}
							else
							{
								ul_inner_submenu = $("#" + submenu_head.attr('inner_submenu'));
							}
							
							if(ul_inner_submenu!=null)
							{
								box1_str += "<ul class=\"visa_terms_ul\">";
								
								$(ul_inner_submenu).find('li a').each(function(){
									var inner_submenu = $(this);

									box1_str += "<li><a href=\"" + inner_submenu.attr('href') + "\" title=\"" + inner_submenu.attr('title') + "\"" + ( inner_submenu.attr('target') != undefined ? " target=\"" + inner_submenu.attr('target') + "\"" : "" ) + " >" + (inner_submenu.attr('box1_str')==null?inner_submenu.html():inner_submenu.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";

								});
								
								box1_str += "</ul>";
							
							}
										
						});
					}
					else
					{
						box1_str += "<ul>";
						
						$("#li_visa_types ul").find('li a').each(function(){
							var inner_submenu = $(this);

							box1_str += "<li><a href=\"" + inner_submenu.attr('href') + "\" title=\"" + inner_submenu.attr('title') + "\"" + ( inner_submenu.attr('target') != undefined ? " target=\"" + inner_submenu.attr('target') + "\"" : "" ) + " >" + (inner_submenu.attr('box1_str')==null?inner_submenu.html():inner_submenu.attr('box1_str')) + "</a><span><img src=\"images/icons/arrow_blue.gif\" alt=\"\"></span></li>";

						});
						
						box1_str += "</ul>";
					}
					
					box1_str += "<br>"
					box1_str += "</div>";
					box1_str += "</div>";
					box1_str += "</div>";
				}
				
			}
			
			$("#visa_types_box1").html(box1_str);
		}
          
                
////////////////////////////////////End For Visa Types Box 1  ///////////////////////////////////	
	

///////////////////////////////////For Responsive Visa Types Tabs  ////////////////////////////////////

	/*Tabs*/
	$('.nav_visatypes_select').html('');
	$("<select />").appendTo(".nav_visatypes_select");

	$(".nav_visatypes a").each(function() {
	 var el = $(this);
	 $("<option />", {
	     "value"   : el.attr("name"),
	     "text"    : el.text()
	 }).appendTo(".nav_visatypes_select select");
	});
	
	$(document).on('change','.nav_visatypes_select select',function(e, from_object){
		if(from_object == undefined || from_object==null)
		{
			var get_name = $(this).attr('value');
			$(".nav_visatypes_select select option[value]").removeAttr("selected");
			$(".nav_visatypes_select select option[value=\"" + get_name + "\"]").attr("selected","selected");
			$(".nav_visatypes a[name=\"" + get_name + "\"]").trigger("click",this);
		}
		return false;
	});
	
///////////////////////////////////End For Responsive Visa Types Tabs  ////////////////////////////////////

////////////////////////////////////For Visa Types Tab  //////////////////////////////////////

	$('.tourist_content').hide();
	$('.nav_visatypes li a').click(function(e, from_object){
		$('.nav_visatypes li a').removeClass('nav_active');
		var get_name = $(this).attr('name');
		
		$('.tourist_content').hide();
		$('#'+ get_name).show();	
		$(this).addClass('nav_active');
		
		if(from_object == undefined || from_object==null)
		{
			$(".nav_visatypes_select select option[value]").removeAttr("selected");
			$(".nav_visatypes_select select option[value=\"" + get_name + "\"]").attr("selected","selected");
			$(".nav_visatypes_select select").trigger('change',this);
		}
		
		var iframe = $('#'+ get_name).find("iframe[src^='https://www.google.com/maps/']");
		if(iframe.length!=0)
		{
			iframe.each(function(index, element) {
                if($(this).attr("loaded")!="true")
				{
					this.src = this.src;
					$(this).attr("loaded","true");
				}
            });
		}
		
		return false;
		
	});
	
	if($(".nav_visatypes").length!=0)
	{
		var docUrl = document.URL;
		var tab_name = "";
		
		if(docUrl.indexOf("#")!=-1)
			tab_name = docUrl.substring(docUrl.lastIndexOf("#") + 1);
		
		if(tab_name!="")
			$(".nav_visatypes a[name=\"" + tab_name + "\"]").trigger("click");
		else
			$('.nav_visatypes li:first-child a').trigger('click');
	}
	
////////////////////////////////////End For Visa Types Tab  //////////////////////////////////////
	
////////////////////////////////////For Responsive Menu and Blue Patch  ///////////////////////////////////

	/*Responsive*/
$('.r_step_content').html($('#stepOne').html());
	$('.responsive_nav_parent').html('');
	if($("nav").length != 0)
	{
		$("<select />").appendTo(".responsive_nav_parent").addClass('responsive_nav');
	
		// Create default option "Go to..."
		$("<option />", {
		   "selected": "selected",
		   "value"   : "#",
		   "text"    : "Menu"
		}).appendTo(".responsive_nav_parent select");
	
		// Populate dropdown with menu items
		$("nav a").each(function() {
		 var el = $(this);
		 var menu_text = el.text();
		 var menu_target = el.attr("target");
		 var parent_submenu = el.closest("div.submenu");
		 var prepend_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		/*Begin if condition*/
		if(
		(
		(
		parent_submenu.find("a.visa-category-Sub-head").html()!=null
		||	parent_submenu.find('div.semibold').html()!=null
		||	parent_submenu.find('div.submenu_head').html()!=null
		)
		&&
		(
		! (
			el.hasClass("visa-category-Sub-head")
			||	el.parent("div.semibold").html()!=null
			||	el.parent("div.submenu_head").html()!=null
		  )
		)
		)
		||	
		(
		parent_submenu.find("table th").html()!=null
		&&	el.parent("th").html()==null
		)
		)
		/*Endf if condition*/
		{
			prepend_text = prepend_text + prepend_text + "--&nbsp;";
		}
		
		 if(parent_submenu.html()!=null)
		 {
			 menu_text = prepend_text + menu_text;
		 }
		 $(".responsive_nav_parent select").append("<option value=\"" + el.attr("href") + "\"" + 
		 ((menu_target == undefined || menu_target == null)?(""):(" target=\"" + menu_target + "\"")) + 
		 " >" + menu_text + "</option>");
		});
		$(".responsive_nav_parent select option:eq(1)").html('Accueil');
		if($('.responsive_nav_parent select option[value]').filter(function() {
	   return RegExp("^" + page_name + "$","i").test($(this).attr("value"));
	}).html()!=null)
		{
			$('.responsive_nav_parent select option[value]').filter(function() {
	   return RegExp("^" + page_name + "$","i").test($(this).attr("value"));
	}).attr('selected','selected');
			$('.responsive_nav_parent span:first').html($(".responsive_nav_parent select option[selected=\"selected\"]").html());	
		}
		else
		{
			$('.responsive_nav_parent select option:first-child').attr('selected','selected');
			$('.responsive_nav_parent span:first').html($('.responsive_nav_parent select option:first-child').html());	
		}
		
		$('.responsive_nav').change(function(){
			if($(this).val()!='#')
			{
				if($(this).find("option:selected").attr("target") == "_blank")
					window.open($(this).val());
				else
					window.location.href = 	$(this).val();
			}
		});
	}

////////////////////////////////////End For Responsive Menu and Blue Patch  ///////////////////////////////////

//////////////////For Visa Types Tab Change On Click of link in same page////////////////////

	if($(".nav_visatypes").length!=0)
	{
		$("a.change_tab").click(function(e) {
            var el = $(this);
			var el_href = el.attr("href");
			if(el_href != undefined)
			{
				if(el_href.indexOf("#") != -1)
				{
					var tab_name = el_href.substring(el_href.lastIndexOf("#") + 1);
					$(".nav_visatypes a[name=\"" + tab_name + "\"]").trigger("click");
				}
			}
        });
	}

//////////////////End For Visa Types Tab Change On Click of link in same page////////////////////

///////////////////////For small scrollbar like in Visa Types Box 1,etc  //////////////////////////

	$('.scrollbar1, .scrollbar2').tinyscrollbar({sizethumb: 64});
	
///////////////////////End For small scrollbar like in Visa Types Box 1,etc  //////////////////////////

///////////////////////////////////For Visa Types Box(Box 1) Tab  /////////////////////////////////////////

	$('.tabs > p > a').click(function(){
		$('.tabs > p > a').removeClass('tab_active');	
		$('.scrollbar2').hide();
		$(this).addClass('tab_active');
		var get_tab = $(this).attr('name');
		$('#' + get_tab).show();			
	});
	$('.tabs p:first a').trigger('click');
	
///////////////////////////////////End Visa Types Box(Box 1) Tab  /////////////////////////////////////////

///////////////////////For custom design of dropdown,textbox,etc  //////////////////////////

    $("input, textarea, select, button").uniform();
	
///////////////////////End For custom design of dropdown,textbox,etc  //////////////////////////

///////////////////////For submenu show/hide  //////////////////////////

	$('nav ul > li').hover(
	function(){		
		$(this).find('.submenu').show();
	},
	function(){
		$(this).find('.submenu').hide();
	}
	);
	
///////////////////////End For submenu show/hide  //////////////////////////

///////////////////////For Scrollable Helpline  //////////////////////////

	$("#mycarousel").jcarousel({
        scroll: 1,
        initCallback: mycarousel_initCallback
    });
	
///////////////////////End For Scrollable Helpline  //////////////////////////

///////////////////////For Bottom Banner///////////////////////////////////

	$("#banner_mycarousel ul li").each(function(index, element) {
        var cur_li = $(this);
		cur_li.css("width", cur_li.width() + "px");
    });
	
	$("#banner_mycarousel").jcarousel({
       	scroll: 1,
        auto: 5,
        wrap: 'last',
        initCallback: banner_mycarousel_initCallback,
		itemVisibleInCallback: {
            onBeforeAnimation: function(c, o, i, s) {
            	$('.banner-jcarousel-control a').removeClass('thumb_active');
				$(".banner-jcarousel-control a[control_id=" + i + "]").addClass('thumb_active');
            }
          }
    });

///////////////////////End For Bottom Banner///////////////////////////////////

///////////////////////For Box Banner///////////////////////////////////

	$("#box_mycarousel").jcarousel({
        scroll: 1,
        initCallback: box_mycarousel_initCallback
    });

///////////////////////End For Box Banner///////////////////////////////////

///////////////////////For Top Button in Bottom-Right Corner  //////////////////////////
	
	 $(window).scroll(function(){
      if($(window).scrollTop()==0)
      {
        $('.up_top').stop().fadeOut();
      }else
      {
        $('.up_top').fadeIn();
      }
    });
   
	$('.up_top a').click(function(){
		$('html, body').animate({scrollTop:0}, 500);
	});
	
///////////////////////End For Top Button in Bottom-Right Corner  //////////////////////////

/////////////////////////For Download Forms in  ////////////////////////////////////

	/*$('.form_list').change(function(){
		var link_target = $(this).find("option:selected").attr("target");
		var link_href = $(this).val();
		var link_href_lowercase = link_href.toLowerCase();
		var is_outside_link = (link_href_lowercase.indexOf("pdf/") == 0 || link_href_lowercase.indexOf("http://") == 0 || link_href_lowercase.indexOf("https://") == 0) && link_target == undefined;
		var add_extra_url = $(this).hasClass('type2') ? page_name : "";
		if(link_href!='#')
		{
			if(link_target == "_blank" || is_outside_link)
			{
				window.open($(this).val() + add_extra_url);
			}
			else if(link_target == "_self" || !is_outside_link)
			{
				window.location.href = 	$(this).val() + add_extra_url;
			}
		}
	});*/
	
	$('.form_list').change(function(){
		if($(this).val()!='#')
		{
			 window.open($(this).val());
		}
	});
	
/////////////////////////End For Download Forms in  ////////////////////////////////////
	
////////////////////////////////////For Random Banner///////////////////////////////////

	/*Random Banner*/
	
	var randomNumber = Math.floor((Math.random()*3)+1);
	if(randomNumber==1)
	{
		$('.banner').css('background','url(images/banners/home-page-1.jpg) top center no-repeat');
	}else if(randomNumber==2)
	{
		$('.banner').css('background','url(images/banners/home-page-2.jpg) top center no-repeat');
	}else if(randomNumber==3)
	{
		$('.banner').css('background','url(images/banners/home-page-3.jpg) top center no-repeat');
	}
				
////////////////////////////////////End For Random Banner///////////////////////////////////

////////////////////////////////////For Home Icon Hover//////////////////////////////////
	
	/*Home Icon hover*/
	$('.pad_home').not('.home_active').hover(function(){
		$(this).find('img').attr('src','images/home_white.png');
	},function(){
		$(this).find('img').attr('src','images/home.png');
	});
	$('.pad_home.home_active').find('img').attr('src','images/home_white.png');
	
////////////////////////////////////End For Home Icon Hover//////////////////////////////////

/////////////////////////For Select City/ Select Nearest Centres DropDown/////////////////////////

	$('.city_list').change(function(e) {
        var get_value = $(this).val();
		
		if(get_value!="#")
		{
			get_value = "#" + get_value;
			get_value= get_value.replace(" ", "");
			get_value = get_value.toLowerCase();
			window.location.href='contact_us.html'+get_value;
		}
		
	});
	
/////////////////////////End For Select City/ Select Nearest Centres DropDown/////////////////////////

//////////////////////////////////////////////For Responsive Circles///////////////////////////////////////////

$(".home_step_responsive .ico a").removeClass('ico_active');
$(".steps ul.step_icons").find('li.ico').each(function(index, element) {
    var el = $(this);
	
	if(el.find('a').hasClass('ico_active'))
	{
		$(".home_step_responsive .ico.step0" + (index + 1) + " a").addClass('ico_active');
	}

    });
	
///////////////////////////////////////////End For Responsive Circles/////////////////////////////////////////

	/////////////////////////////////////sitemap////////////////////////////////////////////////////////
	
	if($("ul.sitemap").length!=0)
	{
	// extra_links variable format given below
	// Page Url, Text, Title(give null if title is same as text), Target(give null if dont want to set target)
	var extra_links = [  
						 ["biometrics.html", "BIOMÉTRIE" , null, null] 
					  ];
	var current_sitemap_li = null;
	var current_sitemap_li_a = null;
	var current_sitemap_submenu = null;
	var current_sitemap_inner_submenu = null;
	var link_text = null;
	$("nav a").each(function(index, element) {
		var nav_a = $(this);
		var duplicate_nav_a_no = $("nav a").filter(function() {
   return RegExp("^" + replace_break(nav_a.html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' ').replace("(","\\(").replace(")","\\)") + "$","i").test(replace_break($(this).html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' '));
}).length;
		if((duplicate_nav_a_no==1) || (nav_a.closest("div.submenu").length!=0))
		{
			link_text = "<li id=\"current_sitemap_li\"><a" + (nav_a.attr("href")!=null?" href=\"" + nav_a.attr("href") + "\"":"") + (nav_a.attr("title")!=null?" title=\"" + nav_a.attr("title") + "\"":"") + (nav_a.attr("target")!=null?" target=\"" + nav_a.attr("target") + "\"":"") + ">" + nav_a.html() + "</a></li>";
			var nav_submenu_el = nav_a.closest(".submenu");
			var is_submenu_head = ((nav_submenu_el.length!=0) 
				&& 
				(nav_a.hasClass("visa-category-Sub-head") 
				||	nav_a.parent("div.semibold, div.submenu_head, th").length!=0)
				);
			var after_submenu_head = false;
			if(nav_submenu_el.length!=0 && !is_submenu_head)
			{
				after_submenu_head = nav_submenu_el.find("a.visa-category-Sub-head, div.semibold, div.submenu_head, th").length!=0;
			}
			if(nav_a.closest("div.submenu").length==0)
			{
				$("ul.sitemap").append(link_text);
			}
			else if(!after_submenu_head)
			{
				current_sitemap_submenu.append(link_text);
			}
			else
			{
				if(current_sitemap_inner_submenu==null)
				{
					current_sitemap_submenu.append("<li class=\"no_back\"><ul></ul></li>");
					current_sitemap_inner_submenu = current_sitemap_submenu.find("li ul");
				}
				current_sitemap_inner_submenu.append(link_text);
			}
			current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
			current_sitemap_li.removeAttr("id");
			current_sitemap_li_a = current_sitemap_li.find("a");
			if(nav_a.closest("li").find("div.submenu").length != 0 && !is_submenu_head)
			{
				current_sitemap_li.append("<ul></ul>");
				current_sitemap_submenu = current_sitemap_li.find("ul");
			}
			else if(is_submenu_head)
			{
				current_sitemap_li_a.addClass("submenu_head");
				current_sitemap_li.append("<ul></ul>");
				current_sitemap_inner_submenu = current_sitemap_li.find("ul");
			} 
			if(current_sitemap_li_a.attr("href").match(/^index.html$/i)!=null)
			{
				var home_page_link_text = $(".breadcrumb ul li a[href]").filter(function() {
   return RegExp("^index.html$","i").test($(this).attr("href"));
}).html();
				current_sitemap_li_a.html(home_page_link_text);
			}
			current_sitemap_li_a.html(replace_break(current_sitemap_li_a.html().trim()," ").replace(/\s+/g,' '));
		}
    });
	$("ul.step_icons li").each(function(index, element) {
        var step_icons_li = $(this);
		var step_icons_li_a = step_icons_li.find("a");
		if(step_icons_li_a.length != 0)
		{
			if($("ul.sitemap li a").filter(function() {
	   return RegExp("^" + step_icons_li_a.attr("href") + "$","i").test($(this).attr("href"));
	}).length == 0)
			{
				link_text = "<li id=\"current_sitemap_li\"><a" + (step_icons_li_a.attr("href")!=null?" href=\"" + step_icons_li_a.attr("href") + "\"":"") + (step_icons_li_a.attr("title")!=null?" title=\"" + step_icons_li_a.attr("title") + "\"":"") + (step_icons_li_a.attr("target")!=null?" target=\"" + step_icons_li_a.attr("target") + "\"":"") + "></a></li>";
				$("ul.sitemap").append(link_text);
				current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
				current_sitemap_li.removeAttr("id");
				current_sitemap_li_a = current_sitemap_li.find("a");
				current_sitemap_li_a.html(step_icons_li_a.attr("language_text")==null?step_icons_li_a.attr("title"):step_icons_li_a.attr("language_text"));
			}
		}
    });
	for(var i=0; i<extra_links.length; i++)
	{
		link_text = "<li><a href=\"" + extra_links[i][0] + "\" title=\"" + (extra_links[i][2]==null?extra_links[i][1]:extra_links[i][2]) + "\"" + (extra_links[i][3]!=null?" target=\"" + extra_links[i][3] + "\"":"") + " >" + extra_links[i][1] + "</a></li>";
		$("ul.sitemap").append(link_text);
	}
	$("#copyright a").each(function(index, element) {
        var copyright_a = $(this);
		if(copyright_a.attr("href").match(new RegExp("^" + page_name + "$","i"))==null)
		{
			link_text = "<li id=\"current_sitemap_li\"><a" + (copyright_a.attr("href")!=null?" href=\"" + copyright_a.attr("href") + "\"":"") + (copyright_a.attr("title")!=null?" title=\"" + copyright_a.attr("title") + "\"":"") + (copyright_a.attr("target")!=null?" target=\"" + copyright_a.attr("target") + "\"":"") + ">" + copyright_a.html() + "</a></li>";
			$("ul.sitemap").append(link_text);
			current_sitemap_li = $("ul.sitemap").find("#current_sitemap_li");
			current_sitemap_li.removeAttr("id");
			current_sitemap_li_a = current_sitemap_li.find("a");
			current_sitemap_li_a.html(replace_break(current_sitemap_li_a.html().trim()," ").replace(/\s+/g,' '));
		}
    });
	if(navigator.appName.indexOf("Internet Explorer")!=-1)
	{
		$("ul.sitemap li:last-child").css("border-bottom","none");
		$("ul.sitemap li ul li:last-child ul").css("margin-bottom","0px");
	}
	}
	
	/////////////////////////////////////end sitemap////////////////////////////////////////////////////////
	
	/////////////////////////////////////Quicklinks//////////////////////////////////////////////////////
	
	if($(".quickLinks").length!=0)
	{
	var quicklinks_heading = "Liens directs";
	var total_quicklinks_ul = 5;
	var all_max_links_in_ul = new Array();
	//all_max_links_in_ul[4] = 3;
	var set_row_height = true;
	var all_rows_height = new Array();
	all_rows_height[1] = false;
	//all_rows_height[1] = 20;
	
	var new_quicklinks = new Array();
	var new_quicklinks_length = 0;
	$("nav a").each(function(index, element) {
        var nav_a = $(this);
		var is_in_submenu = nav_a.closest(".submenu").length != 0;
		var is_in_general_submenu = false;
		var is_in_array = $(new_quicklinks).filter(function(index) {
            return RegExp("^" + replace_break(nav_a.html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' ').replace("(","\\(").replace(")","\\)") + "$","i").test(replace_break($(this).html().replace("&nbsp;"," ")," ").trim().replace(/\s+/g,' '));
        }).length != 0;
		if(is_in_submenu)
		{
			is_in_general_submenu = $(nav_a.closest(".submenu").closest("li").find("a")[0]).attr("href").match(/^general_information.html$/i) != null;
		}
		var add_link = (
							!is_in_submenu
							||
							is_in_general_submenu
						)
						&& nav_a.attr("href").match(/^index.html$/i) == null
						&& nav_a.attr("href").match(/^general_information.html$/i) == null
						&& nav_a.attr("href").match(/^useful_links.html$/i) == null
						&& !is_in_array;
		if(add_link)
		{
			new_quicklinks[new_quicklinks_length] = nav_a;
			new_quicklinks_length++;
		}
    });
	var all_quicklinks_ul = new Array();
	var links_in_quicklinks_ul = new Array();
	$(".quickLinks").html("<h5 class=\"c_blue marb10\">" + quicklinks_heading + "</h5>");
	var temp_links_added = 0;
	for(var i=0; i<total_quicklinks_ul; i++)
	{
		$(".quickLinks").append("<ul id=\"cur_quicklinks_ul\" class=\"floatl" + (i < total_quicklinks_ul - 1 ? " marr20" : "") + "\"></ul>");
		var cur_quicklinks_ul = $(".quickLinks").find("ul#cur_quicklinks_ul");
		all_quicklinks_ul.push(cur_quicklinks_ul);
		links_in_quicklinks_ul.push(0);
		cur_quicklinks_ul.removeAttr("id");
		all_max_links_in_ul[i] = (all_max_links_in_ul[i] == null) ? (Math.ceil((new_quicklinks_length - temp_links_added) / (total_quicklinks_ul - i))) : (all_max_links_in_ul[i]);
		temp_links_added += all_max_links_in_ul[i];
	}
	var ul_position = 0;
	var link_text = null;
	var checking_in_ul = 0;
	var no_of_rows = 0;
	for(var i=0; i<new_quicklinks_length; i++)
	{
		if(links_in_quicklinks_ul[ul_position] < all_max_links_in_ul[ul_position])
		{
			link_text = "<li><a" + (new_quicklinks[i].attr("href")!=null?" href=\"" + new_quicklinks[i].attr("href") + "\"":"") + (new_quicklinks[i].attr("title")!=null?" title=\"" + toTitleCase(new_quicklinks[i].attr("title").replace('&amp;','&').replace('&nbsp;',' ')) + "\"":"") + (new_quicklinks[i].attr("target")!=null?" target=\"" + new_quicklinks[i].attr("target") + "\"":"") + ">" + toTitleCase(new_quicklinks[i].attr("title").replace('&amp;','&').replace('&nbsp;',' ')) + "</a></li>";
			all_quicklinks_ul[ul_position].append(link_text);
			links_in_quicklinks_ul[ul_position]++;
			no_of_rows = no_of_rows < links_in_quicklinks_ul[ul_position] ? links_in_quicklinks_ul[ul_position] : no_of_rows;
			ul_position = (((ul_position + 1) == total_quicklinks_ul) ? 0 : (ul_position + 1));
			checking_in_ul = 0;
		}
		else
		{
			if(checking_in_ul<total_quicklinks_ul - 1)
			{
				ul_position = (((ul_position + 1) == total_quicklinks_ul) ? 0 : (ul_position + 1));
				i--;
				checking_in_ul++;
			}
			else
			{
				break;
			}
		}
	}
	
	if(set_row_height)
	{
		$(window).load(function(e) {
			set_quicklinks_row_height(no_of_rows, all_rows_height);
		});
		$(window).resize(function(e) {
            set_quicklinks_row_height(no_of_rows, all_rows_height);
			var current_fsizer = $("a[fsizer_number].fsactive")
			current_fsizer.removeClass("fsactive");
			current_fsizer.click();
			set_menubar_vertical_padding();
			set_submenu_position();
        });
	}
	
	$(window).load(function(e) {
		set_menubar_vertical_padding();
		set_submenu_position();
	});
	
	}
	
	/////////////////////////////////////end Quicklinks///////////////////////////////////////////////////
	
	/////////////////////For use class semibold where font-weight:bold is found////////////////
	
	$("body *").each(function(index, element) {
        var el = $(this);
		var el_tag = el.prop("tagName").toUpperCase();
		if(!el.hasClass("dont_convert"))
		{
			if(el_tag == "STRONG" || el_tag == "B")
			{
				el.replaceWith("<span class=\"semibold\">" + el.html() + "</span>");
			}
			else if(el.css("font-weight") == "bold" || el.css("font-weight") == "bolder" || parseFloat(el.css("font-weight")) >= 600)
			{
				el.contents().filter(function(index) {
					return this.nodeType === 3;
				}).each(function(index, element) {
					$(this).wrap("<span class=\"semibold\"></span>");
				});
			}
		}
    });
	
	/////////////////////End For use class semibold where font-weight:bold is found////////////////
	
	/////////////////////For converting to lowercase of mailto: link////////////////
	
	$('a[href^="mailto:"]:not(.dont_convert)').each(function(index, element) {
        var el = $(this);
		var email_reg_exp = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
		if(el.html() == el.text() && email_reg_exp.test(el.html()) )
		{
			el.html(el.html().toLowerCase());
			el.attr("href", "mailto:" + el.html());
		}
    });
	
	/////////////////////End For converting to lowercase of mailto: link////////////////
});

/////////////////////////////////////For Quicklinks Row Height////////////////////////////////////////

function set_quicklinks_row_height(no_of_rows, all_rows_height)
{
	var quicklinks_row_max_height;
	var set_row_height;
	for( var i = 0 ; i < no_of_rows ; i++ )
	{
		set_row_height = parseInt($(".wrapper").css("width")) > 300 && ( all_rows_height[i] == true || all_rows_height[i] == undefined || ( !isNaN(all_rows_height[i]) && all_rows_height[i] != false ) );
		if(set_row_height)
		{
			quicklinks_row_max_height = 0;
			if(!isNaN(all_rows_height[i]))
			{
				quicklinks_row_max_height = all_rows_height[i];
			}
			else
			{
				$(".quickLinks ul").each(function(index, element) {
					var cur_ul = $(this);
					var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
					if(cur_li.length != 0)
					{
						cur_li.css('height','auto');
						quicklinks_row_max_height = quicklinks_row_max_height < cur_li.outerHeight() ? cur_li.outerHeight() : quicklinks_row_max_height;
					}
				});
			}
			
			$(".quickLinks ul").each(function(index, element) {
				var cur_ul = $(this);
				var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
				if(cur_li.length != 0)
				{
					cur_li.css("height", quicklinks_row_max_height + "px");
				}
			});
		}
		else
		{
			$(".quickLinks ul").each(function(index, element) {
				var cur_ul = $(this);
				var cur_li = cur_ul.find("li:nth-child(" + (i + 1) + ")");
				if(cur_li.length != 0)
				{
					cur_li.css("height", "auto");
				}
			});
		}
	}
}

/////////////////////////////////////End For Quicklinks Row Height////////////////////////////////////////

//////////////////////////////Function For Bottom Banner///////////////////////////////////////

function banner_mycarousel_initCallback(carousel) {
	$('.banner-jcarousel-control a:eq(0)').addClass('thumb_active');
    $('.banner-jcarousel-control a').bind('click', function() {
		$('.banner-jcarousel-control a').removeClass('thumb_active');
		$(this).addClass('thumb_active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('control_id'))
		);
        return false;
    });
	
};

//////////////////////////////End Function For Bottom Banner///////////////////////////////////////

//////////////////////////////Function For Box Banner///////////////////////////////////////

function box_mycarousel_initCallback(carousel) {
	$('.box-jcarousel-control a:eq(0)').addClass('thumb_active');
    $('.box-jcarousel-control a').bind('click', function() {
		$('.box-jcarousel-control a').removeClass('thumb_active');
		$(this).addClass('thumb_active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('control_id'))
		);
        return false;
    });
	
};

//////////////////////////////End Function For Box Banner///////////////////////////////////////

/////////////////////////////Function For Scrollable Helpline  //////////////////////////////////////

function mycarousel_initCallback(carousel) {
	$('.jcarousel-control a:eq(0)').addClass('thumb_active');
    $('.jcarousel-control a').bind('click', function() {
		$('.jcarousel-control a').removeClass('thumb_active');
		$(this).addClass('thumb_active');
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('id'))
		);
        return false;
    });
	
};

////////////////////////////End Function For Scrollable Helpline  ////////////////////////////////////

//////////////////////////////Function For Menu bar vertical padding////////////////////////////////

function set_menubar_vertical_padding()
{
	$("nav ul > li").each(function(index, element) {
        var nav_li = $(this);
		var nav_a = nav_li.find("a");
		if( nav_li.closest(".submenu").length == 0 )
		{
			var nav_height = $("nav").height();
			var nav_li_height = nav_li.height();
			var nav_a_height = nav_a.height();
			
			var height_diff = nav_height - nav_a_height;
			var pad_top = Math.ceil(height_diff / 2);
			var pad_bottom = height_diff - pad_top;
			nav_a.css("padding-top", pad_top + "px");
			nav_a.css("padding-bottom", pad_bottom + "px");
		}
    });
}

//////////////////////////////End Function For Menu bar vertical padding////////////////////////////////

//////////////////////////////Function For submenu left////////////////////////////////

function set_submenu_position()
{
	var first_menu_left = $("nav ul > li:nth-child(2)").offset().left;
	$(".submenu").each(function(index, element) {
        var submenu = $(this);
		var parent_li = submenu.closest("li");
		var parent_li_left = parent_li.offset().left;
		var submenu_left = Math.round(parent_li_left - first_menu_left) * -1;
		submenu.css("left", submenu_left + "px");
    });
}

//////////////////////////////End Function For submenu left////////////////////////////////
