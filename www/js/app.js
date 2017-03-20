// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var oldid;
var catagory;
var i=0;
var c=0;
var filter;
var k=0;
var j=1;
var choice;
var regurl;
var coun_code;
var user_mobile;
var loginurl;
var notif;
var fchoice;
 var mobileno;
var username;
var otpmobcode;
var notificationload=0;
var messageload;
var userstatus="";
var statusimage="";
var taglist="";
var taglist1="";
var imageid;
var albumname;
var description;
var jobid;
var searchvalue="";
var otheruserid;
var userfollowingid="";
var notiincidentid;
var incidenttype;
var name;
var cat_name;
var company_name;
var country;
var state;
var keyword;
var jobtitle;
var chatid;
var pername;
var enl=1;
var check=0;
var homeback;
var userfname;
var userlname;
var userjobid;
var oldfriendid=9;
var autologin=1;
var ename1;
var Location1; 
var esdate1; 
var estime1; 
var endate1; 
var eetime1;
var aldesc1; 
var type1;
var imagedataname;
var invite=1;
var inviteid;
var facbookname;
var facemail;
var eventid;
var eventname;
var eventdatetime;
var eventdatetime1;
var eventlocation;
var eventdescription;
var eventedit=1;
 var idvalue=1;
angular.module('creoyou', ['ionic', 'creoyou.controllers', 'creoyou.views', 'ngCordova', 'ionic-audio','angular-intro','infinite-scroll','ngMaterial','ngAnimate','ion-gallery'])

/*.config(function( $mdGestureProvider ) {
          //$mdGestureProvider.skipClickHijack();
      });*/
//.run(function($ionicPlatform, $window,$window) {
//  $ionicPlatform.ready(function() {
//    
//
//  });
//})
 

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,$mdGestureProvider,$httpProvider,$sceDelegateProvider,ionGalleryConfigProvider) {
	 $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
   


     $mdGestureProvider.skipClickHijack();
  
  $stateProvider

  //INTRO
  .state('auth', {
    url: "/auth",
    templateUrl: "views/auth/auth.html",
    abstract: true,
    controller: 'AuthCtrl'
  })
  /*.state('exampleState', {
    url: '/example',
    abstract: true,
    templateUrl: 'templates/example/root-view.html',
    controller: 'ParentCtrl'
  })*/
/*.state('auth.logincheck', {
    url: '/logincheck',
    templateUrl: "views/auth/logincheck.html",
    controller:"Logincheckctrl"
  })*/
  .state('auth.starter', {
    url: '/starter',
    templateUrl: "views/auth/starter.html"
  })
  
  .state('auth.Registration_choice', {
    url: '/Registration_choice',
    templateUrl: "views/auth/Registration_choice.html",
    controller:"Registrationchoicectrl"
  })
  
  
  
  .state('auth.Registration_Individual_step1', {
    cache: false,
    url: '/Registration_Individual_step1',
    templateUrl: "views/auth/Registration_Individual_step1.html",
    controller:"RegistrationIndividualstep1ctrl"
  })
  
  .state('auth.Registration_business_step1', {
    cache: false,
    url: '/Registration_business_step1',
    templateUrl: "views/auth/Registration_business_step1.html",
    controller:"RegistrationBusinessstep1ctrl"
  })
  .state('auth.Registration_Individual_step2', {
    cache: false,
    url: '/Registration_Individual_step2',
    templateUrl: "views/auth/Registration_Individual_step2.html",
    controller: 'countryCtrl'  
      
  })
  
  .state('auth.Registration_Individual_step3', {
    cache: false,
    url: '/Registration_Individual_step3',
    templateUrl: "views/auth/Registration_Individual_step3.html",
    controller:'RegistrationIndividualstep3ctrl'
  })
  
  .state('common.socialsiteregistration', {
    cache: false,
    url: '/socialsiteregistration',
    templateUrl: "views/common/socialsiteregistration.html",
    controller:'Socialsiteregistrationctrl'
  })
.state('common', {
    url: "/common",
    templateUrl: "views/common/common.html",
    abstract: true,
    controller: 'CommonCtrl'
  })
  
  .state('common.login', {
    cache: false,
    url: '/login',
    templateUrl: "views/common/login.html",
    controller:'loginctrl'
  })
  
  .state('common.help', {
    url: '/help',
    templateUrl: "views/common/help.html",
    controller:'helpctrl'
  })
  
   .state('common.help_email', {
    url: '/help_email',
    templateUrl: "views/common/help_email.html",
    controller:'help_emailctrl'
  })
  
   .state('common.help_otp', {
    url: '/help_otp',
    templateUrl: "views/common/help_otp.html",
    controller:'Forotpctrl'
  })
  
   .state('common.help_re_username', {
    url: '/help_re_username',
    templateUrl: "views/common/help_re_username.html",
    controller:'Help_re_usernamectrl'
  })
  .state('common.header', {
    url: '/header',
    templateUrl: "views/common/header.html"
    //controller:'Help_re_usernamectrl'
  })
  
  .state('common.help_re_password', {
    url: '/help_re_password',
    templateUrl: "views/common/help_re_password.html",
    controller:'Help_re_passwordctrl'
  })
  .state('common.changepassword', {
    url: '/changepassword',
    templateUrl: "views/common/changepassword.html",
    controller:'Changepasswordctrl'
  })
  .state('common.help_done', {
    url: '/help_done',
    templateUrl: "views/common/help_done.html"
    //controller:'help_donectrl'
  })
 /* .state('common.forotp', {
    url: '/forotp',
    templateUrl: "views/common/forotp.html",
    controller:'Forotpctrl'
  })*/
  .state('common.about_me', {
    url: '/about_me',
    templateUrl: "views/common/about_me.html",
	controller: 'Individualctrl'
  })
  
  .state('common.individual', {
    url: '/individual',
    templateUrl: "views/common/individual.html",
	controller: 'Individualctrl'
  })
  .state('common.seting', {
    url: '/seting',
    templateUrl: "views/common/seting.html",
	controller: 'Setingctrl'
  })
  .state('common.tag', {
    url: '/tag',
    templateUrl: "views/common/tag.html",
	controller: 'Individualctrl'
  })
  .state('common.creo_loop', {
    url: '/creo_loop',
    templateUrl: "views/common/creo_loop.html",
	controller: 'Creoloopctrl'
  })
   .state('common.about_me _accordian', {
    url: '/about_me _accordian',
    templateUrl: "views/common/about_me _accordian.html",
	controller: 'aboutmeaccordianctrl'
  })
  .state('common.image_upload', {
    cache: false,
    url: '/image_upload',
    templateUrl: "views/common/image_upload.html",
	controller: 'Imageuploadctrl'
  })
    .state('common.album_image_upload', {
    cache: false,
    url: '/album_image_upload',
    templateUrl: "views/common/album_image_upload.html",
	controller: 'Imageuploadctrl1'
  })
 
   .state('common.video_upload', {
    cache: false,
    url: '/video_upload',
    templateUrl: "views/common/video_upload.html",
	controller: 'Videouploadctrl'
  })
  
    .state('common.audio_upload', {
    cache: false,
    url: '/audio_upload',
    templateUrl: "views/common/audio_upload.html",
	controller: 'Audiouploadctrl'
  })
  .state('common.album', {
    url: '/album',
    templateUrl: "views/common/album.html"
	//controller: 'Albumctrl'
  })
  
  .state('common.about_me_photo_album_view', {
    url: '/about_me_photo_album_view',
    templateUrl: "views/common/about_me_photo_album_view.html",
	controller: 'about_me_photo_album_viewctrl'
  })
   .state('common.image', {
    url: '/image',
    templateUrl: "views/common/image.html",
	controller: 'Imagectrl'
  })
  /*.state('common.job_posted_list', {
    url: '/album',
    templateUrl: "views/common/job_posted_list.html",
	controller: 'Albumctrl'
  })*/
  .state('common.job_posted_list', {
    url: '/job_posted_list',
    templateUrl: "views/common/job_posted_list.html",
	controller: 'Jobctrl'
  })
  .state('common.job_admin', {
    url: '/job_admin',
    templateUrl: "views/common/job_admin.html",
	controller: 'Jobadminctrl'
  })
 
   .state('common.other-business-user', {
    url: '/other-business-user',
    templateUrl: "views/common/other-business-user.html",
	controller: 'Othersingleuserctrl'
  })
  .state('common.job_admin1', {
    url: '/job_admin1',
    templateUrl: "views/common/job_admin1.html",
	controller: 'Jobadminctrl1'
  })
   .state('common.job_post_form', {
    url: '/job_post_form',
    templateUrl: "views/common/job_post_form.html",
	controller: 'Jobpostctrl'
  })
  .state('common.job_post_form1', {
    url: '/job_post_form1',
    templateUrl: "views/common/job_post_form1.html",
	controller: 'Jobpost1ctrl'
  })
  
   .state('common.compose-message', {
    url: '/compose-message',
    templateUrl: "views/common/compose-message.html",
	controller: 'Composectrl'
  })
    
 .state('common.joblist', {
    url: '/joblist',
    templateUrl: "views/common/joblist.html",
	controller: 'Joblistctrl'
  })
  
  .state('common.following_followers', {
    url: '/following_followers',
    templateUrl: "views/common/following_followers.html",
	controller: 'Followingfollowersctrl'
  })
  .state('common.createevent', {
    url: '/createevent',
    templateUrl: "views/common/createevent.html",
	controller: 'Createeventctrl'
  })
  
   .state('common.invite', {
    url: '/invite',
    templateUrl: "views/common/invite.html",
	controller: 'Createeventctrl'
  })
  .state('common.request', {
    url: '/request',
    templateUrl: "views/common/request.html",
	controller: 'Requestctrl'
  }) 
  
  .state('common.notification', {
    url: '/notification',
    templateUrl: "views/common/notification.html",
	controller: 'notificationctrl'
  })
  .state('common.notificationdetails', {
    url: '/notificationdetails',
    templateUrl: "views/common/notificationdetails.html",
	controller: 'notificationdetailsctrl'
  })
  
  .state('common.search_on_keystock', {
    url: '/search_on_keystock',
    templateUrl: "views/common/search_on_keystock.html",
	controller: 'Searchonkeystockctrl'
  })
   .state('common.chat_message', {
    url: '/chat_message',
    templateUrl: "views/common/chat_message.html",
	controller: 'Chatctrl'
  })
  .state('common.chat', {
    url: '/chat',
    templateUrl: "views/common/chat.html",
	controller: 'Chat2ctrl'
  })
  .state('common.job_filter', {
    url: '/job_filter',
    templateUrl: "views/common/job_filter.html",
	controller: 'Jobfilterctrl'
  })
  .state('common.business_filter', {
    url: '/business_filter',
    templateUrl: "views/common/business_filter.html",
	controller: 'Businessfilterctrl'
  })
  .state('common.creative_filter', {
    url: '/creative_filter',
    templateUrl: "views/common/creative_filter.html"
	//controller: 'Creativectrl'
  })
  .state('common.other-single-user', {
    url: '/other-single-user',
    templateUrl: "views/common/other-single-user.html",
	controller: 'Othersingleuserctrl'
  })
   .state('common.job_applicants', {
    url: '/job_applicants',
    templateUrl: "views/common/job_applicants.html",
	controller: 'Jobapplicantsctrl'
  })
  
  .state('common.startpage', {
    url: '/startpage',
    templateUrl: "views/common/startpage.html",
	controller: 'startpagectrl'
  })
  .state('common.checking', {
    url: '/checking',
    templateUrl: "views/common/checking.html",
	controller: 'checkingtrl'
  })
  
  .state('common.event', {
    url: '/event',
    templateUrl: "views/common/event.html",
	controller: 'Eventctrl'
  })
  .state('common.calender', {
    url: '/calender',
    templateUrl: "views/common/calender.html",
	controller: 'Calenderctrl'
  })
  
  .state('common.people_filter', {
    url: '/people_filter',
    templateUrl: "views/common/people_filter.html",
     controller: 'Peoplefilktertrl'
  });

  // if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/auth/starter');
  
 //$urlRouterProvider.otherwise('/common/image');
//$urlRouterProvider.otherwise('/common/checking');
  
  $ionicConfigProvider.tabs.position('top');  
  
});