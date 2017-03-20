var db = null;
angular.module('creoyou.controllers', ['ngMaterial', 'angular-svg-round-progressbar', 'ionic-audio'])



.controller('AuthCtrl', function($scope, $ionicConfig,$cordovaSQLite,$http) {
    /* $http({
            method: 'GET',
            url: 'http://api.wipmania.com/jsonp?callback=jsonpCallback',
           
           
        }).success(function(responseData){
           
             console.log(responseData.country) 
                             
  }, function(errorData){
    
  })*/
    
 

   
    
})
/*.controller('ParentCtrl', function($scope) {
   $scope.myValues = "Wasim Akram Bora";
})*/

.controller('AuthCtrl', function($scope, $ionicConfig,$cordovaSQLite,$http) {

})
.controller('checkingtrl', function($scope, $ionicConfig,$cordovaSQLite,$http,$window,$interval) 
{
   

    var stop= $interval(function(){
    if(autologin==1)
        {
            console.log("data12"); 
            autologin=0;
  
         var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1,location:'default' });

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS login (id integer primary key, userid integer, status integer)");
    var query = "SELECT userid FROM login WHERE status = ?";
        $cordovaSQLite.execute(db, query, [1]).then(function(res) {
            if(res.rows.length > 0) {
        console.log("SELECTED -> " + res.rows.item(0).userid );
              loginurl=res.rows.item(0).userid;  
                 console.log("results found"+loginurl);
              $window.location.href="#/common/individual";
              
            } else {
                console.log("No results found");
                 $window.location.href="#/common/login";
            }
        }, function (err) {
            console.error(err);
        });
        }
               
  else
      {
         //console.log("data"); 
        // $interval.cancel(stop);
      }
    
   // $window.location.href="#/common/login";
     },1000);
 
    
})
.controller('startpagectrl', function($scope, $ionicConfig,$cordovaSQLite,$http) {
 var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1,location:'default' });

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS login (id integer primary key, userid integer, status integer)");
    var query = "SELECT userid FROM login WHERE status = ?";
        $cordovaSQLite.execute(db, query, [1]).then(function(res) {
            if(res.rows.length > 0) {
        console.log("SELECTED -> " + res.rows.item(0).userid );
              loginurl=res.rows.item(0).userid;  
              $window.location.href="#/common/individual";
                
            } else {
                 $window.location.href="#/common/login";
            }
        }, function (err) {
            console.error(err);
        });
})

.controller('loginctrl', function($scope,$stateParams,$state,$q,UserService,$ionicActionSheet, $ionicLoading,$window,$state, $http,$cordovaToast,$ionicPopup,$cordovaSQLite) {
    /* var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1,location:'default' });

    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS login (id integer primary key, userid integer, status integer)");
    var query = "SELECT userid FROM login WHERE status = ?";
        $cordovaSQLite.execute(db, query, [1]).then(function(res) {
            if(res.rows.length > 0) {
        console.log("SELECTED -> " + res.rows.item(0).userid );
              loginurl=res.rows.item(0).userid;  
              $window.location.href="#/common/individual";
                
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });*/
    //*************Login section**********************
    $scope.log=true;
    $scope.log1=false;
    $scope.show=false;
    $scope.show1=false;
    var i=1;
     $scope.or=true;
    $scope.login=function(value1,value2)
    {
                 $scope.log=false;
                 $scope.log1=true;
                $scope.var1=value1;
                $scope.var2=value2;
                $scope.loading = true;
                $scope.or=false;
         var DataToSend = {
                    username : $scope.var1,
                    password: $scope.var2,
                    }
         console.log(DataToSend);
          $http({
            method: 'POST',
            url:'http://app.creoyou.net/public/index.php/api/userLogin',
           
            data: DataToSend
        }).success(function(responseData){
            console.log("wasim akram bora="+responseData);
              if(responseData==1)
                  {
                      $scope.log=true;
                      $scope.log1=false;
                      var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Wrong Username</h3>'
                      
              
                 });
                  alertPopup.then(function(res) {
                   console.log(res);
                });
                      $scope.loading = false;
                      $scope.or=true;
                  }
              else if(responseData==2)
                  {
                       $scope.log=true;
                      $scope.log1=false;
                    var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Invalid Credential</h3>'
                     
              
                 });
                  alertPopup.then(function(res) {
                   console.log(res);
                });
                      $scope.loading = false;
                      $scope.or=true;
                  }
              else
                  {
                       loginurl=(JSON.stringify(responseData));
                   /* console.log("all check",loginurl) 
                      $cordovaToast.show("Succesfully Login", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                }, function (error) {
                    console.log("The toast was not shown due to " + error);
                  });
                  
                 
                    //*********for checking purpose*********
            var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1,location:'default' });
             
             var query = "INSERT INTO login (userid, status) VALUES (?,?)";
             $cordovaSQLite.execute(db, query, [loginurl, 1]).then(function(res) {
            console.log("insertId: " + res.insertId);
      }, function (err) {
      console.error(err);
     });*/
                      
                    //********end of checking purpose********
                    //$window.alert("alert"+JSON.stringify(responseData));
                    //$window.alert("lurll"+JSON.stringify(loginurl));
                     var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
                      
                console.log("total user type"+usertype)
                      if(usertype==1)
                          {
                              $window.location.href="#/common/individual"
                          }
                      else
                          {
                              $window.location.href="#/common/about_me";
                          }
                      
                  }
               
  }, function(errorData){
    
  })
      
    }//end of login section
  
        
    
    //************end of login section****************
    
    //***************facebook login******************
      var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      // For the purpose of this example I will store user data on local storage
      UserService.setUser({
        authResponse: authResponse,
				userID: profileInfo.id,
				name: profileInfo.name,
				email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      });
      $ionicLoading.hide();
      //$state.go('app.home');
    }, function(fail){
      // Fail get profile info
      console.log('profile info fail', fail);
    });
  };

  // This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    $ionicLoading.hide();
  };

  // This method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
				//console.log(response);
        info.resolve(response);
      },
      function (response) {
				console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {
     // $window.alert("ABS");
       $scope.loading = true;
        $scope.or=false;
    facebookConnectPlugin.getLoginStatus(function(success){
       // $window.alert(success.status);
      if(success.status === 'connected'){
      // $window.alert("ABS1");
   

    		// Check if we have our user saved
    		var user = UserService.getUser('facebook');
   
       //  $window.alert(JSON.stringify(user));
    		if(user.userID){
               // $window.alert("ABS2");
					getFacebookProfileInfo(success.authResponse)
					.then(function(profileInfo) {
                        
                   
                        

                        
                        $scope.userIdWasim = profileInfo.id;
                        $scope.userNameWasim = profileInfo.name;
                        $scope.userEmailWasim = profileInfo.email;
                        $scope.userPictureWasim = "http://graph.facebook.com/" + profileInfo.id + "/picture?type=large";
                        /*$ionicLoading.show({
                        template: 'You are Logout please restart the app'
                    });*/
                        
                       // $window.alert("Name="+profileInfo.name+",     Email="+profileInfo.email);
                        facbookname=profileInfo.name;
                        facemail=profileInfo.email
    //****************************************************************************
                         var DataToSend = {
                
                              // name:facbookname,
                               email:facemail,
                                                              
                              }
              
                  $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/Facebooklogin',
           
                    data: DataToSend
        }).success(function(responseData){
                   loginurl=(JSON.stringify(responseData));;
                     
                     // $window.alert(loginurl);
           var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
                  if(usertype==1)
                      {
                          
                            $window.location.href="#/common/individual"
                      }
                      else
                          {
                                 $window.location.href="#/common/socialsiteregistration"
                          }
              /*  console.log("total user type="+loginurl)*/
                
                           
                     
                   
        }, function (error) {
            
        }); 
   //********************************************************************************
                        
                        
                        
                        
                        
                        
                      //  $window.location.href="#/common/socialsiteregistration"
						// For the purpose of this example I will store user data on local storage
						UserService.setUser({
							authResponse: success.authResponse,
							userID: profileInfo.id,
							name: profileInfo.name,
							email: profileInfo.email,
							picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
						});


//						$state.go('app.home');
					}, function(fail){
						// Fail get profile info
                        $window.alert("FAIL");
						console.log('profile info fail', fail);
					});
				}else{
                    //$window.alert("ABS.,jgyfghjk2");
					//$state.go('app.home');
				}
      } else {
           facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
       
            $window.alert("Facebook login");
          
            facebookConnectPlugin.getLoginStatus(function(success1){
                
                $window.alert("success1: "+success1.status);
                success.status = success1.status
                if(success1.status === 'connected'){
                   // $window.alert("FINE THE CODE");
                      $scope.facebookSignIn();
                        //$state.go('app.single');

                    }
                  else
                  {
                      $ionicLoading.show({
                        template: 'You are Logout please restart the app'
                    });

                  }
                
                
                
            });
          
//           
      }
    });
  };
    //**************end of facebook login***********
    
    //**************Google login********************
    /*  $scope.googleSignIn = function() {
         $window.alert("alert1");
         
    $ionicLoading.show({
      template: 'Logging in...'
        
    });
  $window.alert("alert2");
    window.plugins.googleplus.login(
      {},
      function (user_data) {
        // For the purpose of this example I will store user data on local storage
        UserService.setUser({
          userID: user_data.userId,
          name: user_data.displayName,
          email: user_data.email,
          picture: user_data.imageUrl,
          accessToken: user_data.accessToken,
          idToken: user_data.idToken
        });
          $window.alert(JSON.stringify(user_data));
             $scope.userIdWasim = user_data.userId;
                        $scope.userNameWasim = user_data.displayName;
                        $scope.userEmailWasim =  user_data.email;
                        $scope.userPictureWasim = user_data.imageUrl;
          
        $ionicLoading.hide();
       // $state.go('app.home');
      },
        
      function (msg) {
            $window.alert("hide");
        $ionicLoading.hide();
          
      }
    );
  };*/
    
    //****************end of google login************
    
    
})
//*******user service for fb login******************
.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.starter_facebook_user = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.starter_facebook_user || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
})
//**************End of user service********************


//This portion for Login help
.controller('helpctrl', function($scope,$window,$http,$ionicPopup) {
 
    //document.getElementById("chkusername").value = true;
    $scope.myClick=function(val)
     {
        
        if(val==true)
            {
                //console.log("hi")
               document.getElementById("password").checked = false;
            }
        
     }
    $scope.myClick1=function(val)
     {
        
        if(val==true)
            {
               document.getElementById("username").checked = false;
            }
        
     }
  $scope.next=function()
    {
     
                if (document.getElementById("username").checked == true) {
                    
                    fchoice=document.getElementById("username").value;
                    //$window.alert(fchoice);
                    $window.location.href="#/common/help_email"
                     
                } 
           else {
                   if (document.getElementById("password").checked == true)
                       {
                         
                          fchoice=document.getElementById("password").value; 
                           //$window.alert(fchoice); 
                           $window.location.href="#/common/help_email"
                       }
                  else
                      {
                           var alertPopup = $ionicPopup.alert({
              title: 'Login Help!',
              template: '<h3 class="accounttype">Please Choose Your Help option.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
                      }
                    
                }
  
    }
})
//This portion for Login help email controler
.controller('help_emailctrl', function($scope,$window,$http,$ionicConfig,$rootScope,$cordovaToast,$ionicPopup) {
   
   $scope.name="test";
    
  $scope.selectedCountry = {}
  $rootScope.countries = [ {
    name: "United States",
    dial_code: "+1",
    code: "US"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF"
}, {
    name: "Albania",
    dial_code: "+355",
    code: "AL"
}, {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ"
}, {
    name: "AmericanSamoa",
    dial_code: "+1 684",
    code: "AS"
}, {
    name: "Andorra",
    dial_code: "+376",
    code: "AD"
}, {
    name: "Angola",
    dial_code: "+244",
    code: "AO"
}, {
    name: "Anguilla",
    dial_code: "+1 264",
    code: "AI"
}, {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG"
}, {
    name: "Argentina",
    dial_code: "+54",
    code: "AR"
}, {
    name: "Armenia",
    dial_code: "+374",
    code: "AM"
}, {
    name: "Aruba",
    dial_code: "+297",
    code: "AW"
}, {
    name: "Australia",
    dial_code: "+61",
    code: "AU"
}, {
    name: "Austria",
    dial_code: "+43",
    code: "AT"
}, {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ"
}, {
    name: "Bahamas",
    dial_code: "+1 242",
    code: "BS"
}, {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH"
}, {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD"
}, {
    name: "Barbados",
    dial_code: "+1 246",
    code: "BB"
}, {
    name: "Belarus",
    dial_code: "+375",
    code: "BY"
}, {
    name: "Belgium",
    dial_code: "+32",
    code: "BE"
}, {
    name: "Belize",
    dial_code: "+501",
    code: "BZ"
}, {
    name: "Benin",
    dial_code: "+229",
    code: "BJ"
}, {
    name: "Bermuda",
    dial_code: "+1 441",
    code: "BM"
}, {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT"
}, {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA"
}, {
    name: "Botswana",
    dial_code: "+267",
    code: "BW"
}, {
    name: "Brazil",
    dial_code: "+55",
    code: "BR"
}, {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO"
}, {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG"
}, {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF"
}, {
    name: "Burundi",
    dial_code: "+257",
    code: "BI"
}, {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH"
}, {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM"
}, {
    name: "Canada",
    dial_code: "+1",
    code: "CA"
}, {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV"
}, {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY"
}, {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF"
}, {
    name: "Chad",
    dial_code: "+235",
    code: "TD"
}, {
    name: "Chile",
    dial_code: "+56",
    code: "CL"
}, {
    name: "China",
    dial_code: "+86",
    code: "CN"
}, {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX"
}, {
    name: "Colombia",
    dial_code: "+57",
    code: "CO"
}, {
    name: "Comoros",
    dial_code: "+269",
    code: "KM"
}, {
    name: "Congo",
    dial_code: "+242",
    code: "CG"
}, {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK"
}, {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR"
}, {
    name: "Croatia",
    dial_code: "+385",
    code: "HR"
}, {
    name: "Cuba",
    dial_code: "+53",
    code: "CU"
}, {
    name: "Cyprus",
    dial_code: "+537",
    code: "CY"
}, {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ"
}, {
    name: "Denmark",
    dial_code: "+45",
    code: "DK"
}, {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ"
}, {
    name: "Dominica",
    dial_code: "+1 767",
    code: "DM"
}, {
    name: "Dominican Republic",
    dial_code: "+1 849",
    code: "DO"
}, {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC"
}, {
    name: "Egypt",
    dial_code: "+20",
    code: "EG"
}, {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV"
}, {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ"
}, {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER"
}, {
    name: "Estonia",
    dial_code: "+372",
    code: "EE"
}, {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET"
}, {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO"
}, {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ"
}, {
    name: "Finland",
    dial_code: "+358",
    code: "FI"
}, {
    name: "France",
    dial_code: "+33",
    code: "FR"
}, {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF"
}, {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF"
}, {
    name: "Gabon",
    dial_code: "+241",
    code: "GA"
}, {
    name: "Gambia",
    dial_code: "+220",
    code: "GM"
}, {
    name: "Georgia",
    dial_code: "+995",
    code: "GE"
}, {
    name: "Germany",
    dial_code: "+49",
    code: "DE"
}, {
    name: "Ghana",
    dial_code: "+233",
    code: "GH"
}, {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI"
}, {
    name: "Greece",
    dial_code: "+30",
    code: "GR"
}, {
    name: "Greenland",
    dial_code: "+299",
    code: "GL"
}, {
    name: "Grenada",
    dial_code: "+1 473",
    code: "GD"
}, {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP"
}, {
    name: "Guam",
    dial_code: "+1 671",
    code: "GU"
}, {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT"
}, {
    name: "Guinea",
    dial_code: "+224",
    code: "GN"
}, {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW"
}, {
    name: "Guyana",
    dial_code: "+595",
    code: "GY"
}, {
    name: "Haiti",
    dial_code: "+509",
    code: "HT"
}, {
    name: "Honduras",
    dial_code: "+504",
    code: "HN"
}, {
    name: "Hungary",
    dial_code: "+36",
    code: "HU"
}, {
    name: "Iceland",
    dial_code: "+354",
    code: "IS"
}, {
    name: "India",
    dial_code: "+91",
    code: "IN"
}, {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID"
}, {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ"
}, {
    name: "Ireland",
    dial_code: "+353",
    code: "IE"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Italy",
    dial_code: "+39",
    code: "IT"
}, {
    name: "Jamaica",
    dial_code: "+1 876",
    code: "JM"
}, {
    name: "Japan",
    dial_code: "+81",
    code: "JP"
}, {
    name: "Jordan",
    dial_code: "+962",
    code: "JO"
}, {
    name: "Kazakhstan",
    dial_code: "+7 7",
    code: "KZ"
}, {
    name: "Kenya",
    dial_code: "+254",
    code: "KE"
}, {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI"
}, {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW"
}, {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG"
}, {
    name: "Latvia",
    dial_code: "+371",
    code: "LV"
}, {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB"
}, {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS"
}, {
    name: "Liberia",
    dial_code: "+231",
    code: "LR"
}, {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI"
}, {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT"
}, {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU"
}, {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG"
}, {
    name: "Malawi",
    dial_code: "+265",
    code: "MW"
}, {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY"
}, {
    name: "Maldives",
    dial_code: "+960",
    code: "MV"
}, {
    name: "Mali",
    dial_code: "+223",
    code: "ML"
}, {
    name: "Malta",
    dial_code: "+356",
    code: "MT"
}, {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH"
}, {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ"
}, {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR"
}, {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU"
}, {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT"
}, {
    name: "Mexico",
    dial_code: "+52",
    code: "MX"
}, {
    name: "Monaco",
    dial_code: "+377",
    code: "MC"
}, {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN"
}, {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME"
}, {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS"
}, {
    name: "Morocco",
    dial_code: "+212",
    code: "MA"
}, {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM"
}, {
    name: "Namibia",
    dial_code: "+264",
    code: "NA"
}, {
    name: "Nauru",
    dial_code: "+674",
    code: "NR"
}, {
    name: "Nepal",
    dial_code: "+977",
    code: "NP"
}, {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL"
}, {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN"
}, {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC"
}, {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ"
}, {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI"
}, {
    name: "Niger",
    dial_code: "+227",
    code: "NE"
}, {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG"
}, {
    name: "Niue",
    dial_code: "+683",
    code: "NU"
}, {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF"
}, {
    name: "Northern Mariana Islands",
    dial_code: "+1 670",
    code: "MP"
}, {
    name: "Norway",
    dial_code: "+47",
    code: "NO"
}, {
    name: "Oman",
    dial_code: "+968",
    code: "OM"
}, {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK"
}, {
    name: "Palau",
    dial_code: "+680",
    code: "PW"
}, {
    name: "Panama",
    dial_code: "+507",
    code: "PA"
}, {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG"
}, {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY"
}, {
    name: "Peru",
    dial_code: "+51",
    code: "PE"
}, {
    name: "Philippines",
    dial_code: "+63",
    code: "PH"
}, {
    name: "Poland",
    dial_code: "+48",
    code: "PL"
}, {
    name: "Portugal",
    dial_code: "+351",
    code: "PT"
}, {
    name: "Puerto Rico",
    dial_code: "+1 939",
    code: "PR"
}, {
    name: "Qatar",
    dial_code: "+974",
    code: "QA"
}, {
    name: "Romania",
    dial_code: "+40",
    code: "RO"
}, {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW"
}, {
    name: "Samoa",
    dial_code: "+685",
    code: "WS"
}, {
    name: "San Marino",
    dial_code: "+378",
    code: "SM"
}, {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA"
}, {
    name: "Senegal",
    dial_code: "+221",
    code: "SN"
}, {
    name: "Serbia",
    dial_code: "+381",
    code: "RS"
}, {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC"
}, {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL"
}, {
    name: "Singapore",
    dial_code: "+65",
    code: "SG"
}, {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK"
}, {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI"
}, {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB"
}, {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA"
}, {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS"
}, {
    name: "Spain",
    dial_code: "+34",
    code: "ES"
}, {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK"
}, {
    name: "Sudan",
    dial_code: "+249",
    code: "SD"
}, {
    name: "Suriname",
    dial_code: "+597",
    code: "SR"
}, {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ"
}, {
    name: "Sweden",
    dial_code: "+46",
    code: "SE"
}, {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH"
}, {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ"
}, {
    name: "Thailand",
    dial_code: "+66",
    code: "TH"
}, {
    name: "Togo",
    dial_code: "+228",
    code: "TG"
}, {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK"
}, {
    name: "Tonga",
    dial_code: "+676",
    code: "TO"
}, {
    name: "Trinidad and Tobago",
    dial_code: "+1 868",
    code: "TT"
}, {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN"
}, {
    name: "Turkey",
    dial_code: "+90",
    code: "TR"
}, {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM"
}, {
    name: "Turks and Caicos Islands",
    dial_code: "+1 649",
    code: "TC"
}, {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV"
}, {
    name: "Uganda",
    dial_code: "+256",
    code: "UG"
}, {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA"
}, {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE"
}, {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB"
}, {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY"
}, {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ"
}, {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU"
}, {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF"
}, {
    name: "Yemen",
    dial_code: "+967",
    code: "YE"
}, {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM"
}, {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW"
}, {
    name: "land Islands",
    dial_code: "",
    code: "AX"
}, {
    name: "Antarctica",
    dial_code: null,
    code: "AQ"
}, {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO"
}, {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN"
}, {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC"
}, {
    name: "Congo, The Democratic Republic of the",
    dial_code: "+243",
    code: "CD"
}, {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI"
}, {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK"
}, {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG"
}, {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA"
}, {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK"
}, {
    name: "Iran, Islamic Republic of",
    dial_code: "+98",
    code: "IR"
}, {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM"
}, {
    name: "Jersey",
    dial_code: "+44",
    code: "JE"
}, {
    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",
    code: "KP"
}, {
    name: "Korea, Republic of",
    dial_code: "+82",
    code: "KR"
}, {
    name: "Lao People's Democratic Republic",
    dial_code: "+856",
    code: "LA"
}, {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY"
}, {
    name: "Macao",
    dial_code: "+853",
    code: "MO"
}, {
    name: "Macedonia, The Former Yugoslav Republic of",
    dial_code: "+389",
    code: "MK"
}, {
    name: "Micronesia, Federated States of",
    dial_code: "+691",
    code: "FM"
}, {
    name: "Moldova, Republic of",
    dial_code: "+373",
    code: "MD"
}, {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ"
}, {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS"
}, {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN"
}, {
    name: "Réunion",
    dial_code: "+262",
    code: "RE"
}, {
    name: "Russia",
    dial_code: "+7",
    code: "RU"
}, {
    name: "Saint Barthélemy",
    dial_code: "+590",
    code: "BL"
}, {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH"
}, {
    name: "Saint Kitts and Nevis",
    dial_code: "+1 869",
    code: "KN"
}, {
    name: "Saint Lucia",
    dial_code: "+1 758",
    code: "LC"
}, {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF"
}, {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM"
}, {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1 784",
    code: "VC"
}, {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST"
}, {
    name: "Somalia",
    dial_code: "+252",
    code: "SO"
}, {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ"
}, {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY"
}, {
    name: "Taiwan, Province of China",
    dial_code: "+886",
    code: "TW"
}, {
    name: "Tanzania, United Republic of",
    dial_code: "+255",
    code: "TZ"
}, {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL"
}, {
    name: "Venezuela, Bolivarian Republic of",
    dial_code: "+58",
    code: "VE"
}, {
    name: "Viet Nam",
    dial_code: "+84",
    code: "VN"
}, {
    name: "Virgin Islands, British",
    dial_code: "+1 284",
    code: "VG"
}, {
    name: "Virgin Islands, U.S.",
    dial_code: "+1 340",
    code: "VI"
}]
   
  $scope.phonehelp=function(val,val1)
    {
     
      var code1=JSON.stringify(val1);
      
      var code=code1.substring(code1.indexOf('+')+1,code1.indexOf('}')-13);
      //console.log("abc"+code);
       mobileno=val;
       otpmobcode=code;
       $scope.mobno=val
       
      // $window.alert(fchoice);
      var DataToSend = {
                            type: fchoice,
                            mobile_code:code,
                            value:val
                        }
         console.log(DataToSend);
         $http({
            method: 'POST',
             url: 'http://app.creoyou.net/public/index.php/api/userHelp',
           
            data: DataToSend
        }).success(function(responseData){
       
              console.log(JSON.stringify(responseData));
              if(responseData==1)
                  {
                      $cordovaToast.show("OTP Sent", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
                     $window.location.href="#/common/help_otp" 
                  }
              else
                  {
                      var alertPopup = $ionicPopup.alert({
                    title: 'OTP Help!',
                     template: '<h3 class="accounttype">Something Happen Wrong OTP not Sent </h3>'
               
              
                   });
                   alertPopup.then(function(res) {
                    console.log(res);
                    });
                  }//end of else
             
            
             
              
                  
  }, function(errorData){
    
  })
    //$window.location.href="#/common/help_otp"  
    }
  $scope.emailhelp=function(val)
    {
       
        var DataToSend = {
                            type: fchoice,
                            mobile_code:"",
                            value:val
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userHelp',
           
            data: DataToSend
        }).success(function(responseData){
           
              //$window.alert(JSON.stringify("email"+responseData));
             $window.location.href="#/common/help_otp"
                             
  }, function(errorData){
    
  })
    }

  
})

.controller('Forotpctrl', function($scope,$window,$http,$cordovaToast,$ionicPopup) {
      $scope.mobileno=mobileno;
    $scope.verify=function(value)
       {
         var DataToSend = {
                            otp:value,
                            mobile:mobileno,
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/HelpusingUsername',
           
            data: DataToSend
        }).success(function(responseData){
       
             // $window.alert(JSON.stringify(responseData));
             console.log(JSON.stringify(responseData));
             // console.log("username:"+responseData.details)
              username=JSON.stringify(responseData);
             //$window.alert(username);
             
               if(responseData==2)
                   {
                       var alertPopup = $ionicPopup.alert({
                    title: 'OTP Verification!',
                     template: '<h3 class="accounttype">OTP Not Verified</h3>'
               
              
                   });
                   alertPopup.then(function(res) {
                    console.log(res);
                    }); 
                   }//end of if
             else
                 {
                     $cordovaToast.show("OTP Successfully Verified", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
                     
                     if(fchoice=="password")
                  {
                     $window.location.href="#/common/help_re_password" 
                  }
              else
                  {
                     $window.location.href="#/common/help_re_username" 
                     
                  }
                     
                 }//end of else            
                     
                  
  }, function(errorData){
    
  }) 
        
  }
    
    $scope.resendcode=function()
    {
        var DataToSend = {
                            type: fchoice,
                            mobile_code:otpmobcode,
                            value:mobileno
                        }
         console.log(DataToSend);
         $http({
            method: 'POST',
             url: 'http://app.creoyou.net/public/index.php/api/userHelp',
           
            data: DataToSend
        }).success(function(responseData){
       
              console.log(JSON.stringify(responseData));
              if(responseData==1)
                  {
                      $cordovaToast.show("OTP Sent", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
                     $window.location.href="#/common/help_otp" 
                  }
              else
                  {
                      var alertPopup = $ionicPopup.alert({
                    title: 'OTP Help!',
                     template: '<h3 class="accounttype">Something Happen Wrong OTP not Sent </h3>'
               
              
                   });
                   alertPopup.then(function(res) {
                    console.log(res);
                    });
                  }//end of else
             
            
             
              
                  
  }, function(errorData){
    
  })
        
    }
})

.controller('Help_re_usernamectrl', function($scope,$window,$http) {
    console.log(username);
    var name=username.substring(username.indexOf('[')+14,username.indexOf(']')-2);
    console.log("nameeeee"+name);
    $scope.username=name;
    
})

.controller('Changepasswordctrl', function($scope,$http,$cordovaToast,$ionicPopup) {
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
           console.log(id);
    $scope.chpassword=function(cupass,newpass)
     {
        
         
    
             var DataToSend = {
                
                                user_id :id,
                                password:cupass,
                                newPassword:newpass,
                              }
             console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/changePassword',
                   data: DataToSend
        }).success(function(responseData){
               console.log(JSON.stringify(responseData));
        if(responseData==3)
            {
              var alertPopup = $ionicPopup.alert({
              title: 'Change Password!',
              template: '<h3 class="accounttype">Your Current Password not Matched</h3>'
               
              
         });  
            }
        else if(responseData==1)
            {
                 $cordovaToast.show("Password Successfully Changed", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
            }
        else
            {
                 $cordovaToast.show("Something went wrong", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
            }
              
                
      }, function(errorData){
    }) 
    
    }
    
})
.controller('Help_re_passwordctrl', function($scope,$window,$http,$cordovaToast,$ionicPopup) {
    $scope.chpassword=function(value1,value2)
      {
        
        var DataToSend = {
                            password:value1,
                            mobile:mobileno,
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/HelpUsingPassword',
           
            data: DataToSend
        }).success(function(responseData){
             console.log(responseData);
             if(responseData==1)
                 {
                       $cordovaToast.show("Password Successfully Changed", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                      }, function (error) {
                        console.log("The toast was not shown due to " + error);
                       });
                     
                    //$window.alert(JSON.stringify(responseData));
                  
                     $window.location.href="#/common/login"
               
                 }
             else
                 {
                     var alertPopup = $ionicPopup.alert({
                    title: 'Password Set!',
                     template: '<h3 class="accounttype">Password Not updated</h3>'
               
              
                   });
                   alertPopup.then(function(res) {
                    console.log(res);
                    }); 
                 }
       
            
               
             
            
             
              
                  
  }, function(errorData){
    
  }) 
        
    }
    
})
.directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
})
.controller('Registrationchoicectrl', function($scope,$window,share,$http,$ionicPopup) {
     // will execute when device is ready, or immediately if the device is already ready.
    
/*$http({
            method: 'GET',
            url: 'https://ipinfo.io',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
           
        }).success(function(responseData){
       
   
      $window.alert("My country is: " + JSON.stringify(responseData.country));
  }, function(errorData){
    $window.alert("My country is: " );
  })*/
     
   
    /* ionic.Platform.ready(function()
        {
   
        });
   
      var deviceInformation = ionic.Platform.device();
      var isAndroid = ionic.Platform.isAndroid();*/
      var rightchoice=false;
      
      $scope.iAmClicked = function(selectvalue) 
         {
       
           // $scope.variable1=selectvalue;
           // b=selectvalue;
           // var c;
       
      if(selectvalue==1)
          {
              // $window.alert("Individual");
              // c="Individual";
               rightchoice=true;
               choice="individual";
             
          }
       else
           {
              // $window.alert("Business"); 
               //c="Business";
              // d=true;
               rightchoice=true;
               choice="Business";
               
           }
         // $window.alert(c);
        share.setVariable( "Level1",choice); 
      
    }
$scope.next=function()
{
   // $window.alert(choice);
    if(rightchoice==true)
      {
           if(choice=="Business")
               {
                $window.location.href="#/auth/Registration_business_step1"
               }
          else
             {
                 $window.location.href="#/auth/Registration_Individual_step1";
             } 
      }
    else
        {
            
            var alertPopup = $ionicPopup.alert({
              title: 'Account Type!',
              template: '<h3 class="accounttype">Please Choose Your Account Type.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
        }//end of else
}
})

/*.controller('Registrationbusinessstep1ctrl', function($scope,$window) 
{
    
})*/
.controller('Socialsiteregistrationctrl', function($scope,$window,share,$ionicPopup,$http) 
    { //var val
   // alert("hi")
         var othername;
         
          $scope.choi=[];
     $http({
            method: 'GET',
            url: 'http://app.creoyou.net/public/index.php/api/user-category/1',
            /*headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},*/
           
        }).success(function(responseData){
       

         $scope.listOfOptions=responseData
  }, function(errorData){
    //error
  })
      
    
    $scope.valuestep1 = function(Username,country,mob,cfield) 
        { 
            //console.log("othername="+othername);
             console.log("selectvalue1="+Username)
              console.log("selectvalue2="+JSON.stringify(country.dial_code))
               console.log("selectvalue3="+mob)
            console.log("selectvalue3="+cfield)
              console.log("othername="+othername)
              
              
             var DataToSend = {
                
                               name:facbookname,
                               email:facemail,
                               mobile:mob,
                               userName:Username,
                               category:cfield,
                               subcategory:othername,
                               mobile_code:country.dial_code
                                
                              }
              
                  $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/FacebookRegistration',
           
                    data: DataToSend
        }).success(function(responseData){
                    loginurl=(JSON.stringify(responseData));;
                       $window.location.href="#/common/individual"
                   
        }, function (error) {
            
        }); 
  }
              
              
              
                    
      
     
 
       $scope.showSelectValue = function (val) { 
     catagory=val; //it define in app js 
  if(val==0)   
      {
          
      $scope.data = {}
   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<form name="myForm" novalidate><input type="text" name="name" ng-model="data.name" placeholder="Catagory name"><p ng-show="myForm.data.name.$error.required " >* Catagory Name is Required</p>  </form>',
     title: 'Specify Your category Name',
    // subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           console.log($scope.data.name) 
            othername=$scope.data.name;
            $scope.choi.pop();
            $scope.choi.push({'name':$scope.data.name})
              
            
        },
       }
     ]
   });     
}
else if(val=='-1')
    {}
else if(val=='OtherCategory')
    {
        //$windows.alert("hi")
    }
else
    {
        $scope.choi.pop();
    }
     
 } 
 $scope.countries = [ {
    name: "United States",
    dial_code: "+1",
    code: "US"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF"
}, {
    name: "Albania",
    dial_code: "+355",
    code: "AL"
}, {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ"
}, {
    name: "AmericanSamoa",
    dial_code: "+1 684",
    code: "AS"
}, {
    name: "Andorra",
    dial_code: "+376",
    code: "AD"
}, {
    name: "Angola",
    dial_code: "+244",
    code: "AO"
}, {
    name: "Anguilla",
    dial_code: "+1 264",
    code: "AI"
}, {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG"
}, {
    name: "Argentina",
    dial_code: "+54",
    code: "AR"
}, {
    name: "Armenia",
    dial_code: "+374",
    code: "AM"
}, {
    name: "Aruba",
    dial_code: "+297",
    code: "AW"
}, {
    name: "Australia",
    dial_code: "+61",
    code: "AU"
}, {
    name: "Austria",
    dial_code: "+43",
    code: "AT"
}, {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ"
}, {
    name: "Bahamas",
    dial_code: "+1 242",
    code: "BS"
}, {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH"
}, {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD"
}, {
    name: "Barbados",
    dial_code: "+1 246",
    code: "BB"
}, {
    name: "Belarus",
    dial_code: "+375",
    code: "BY"
}, {
    name: "Belgium",
    dial_code: "+32",
    code: "BE"
}, {
    name: "Belize",
    dial_code: "+501",
    code: "BZ"
}, {
    name: "Benin",
    dial_code: "+229",
    code: "BJ"
}, {
    name: "Bermuda",
    dial_code: "+1 441",
    code: "BM"
}, {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT"
}, {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA"
}, {
    name: "Botswana",
    dial_code: "+267",
    code: "BW"
}, {
    name: "Brazil",
    dial_code: "+55",
    code: "BR"
}, {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO"
}, {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG"
}, {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF"
}, {
    name: "Burundi",
    dial_code: "+257",
    code: "BI"
}, {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH"
}, {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM"
}, {
    name: "Canada",
    dial_code: "+1",
    code: "CA"
}, {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV"
}, {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY"
}, {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF"
}, {
    name: "Chad",
    dial_code: "+235",
    code: "TD"
}, {
    name: "Chile",
    dial_code: "+56",
    code: "CL"
}, {
    name: "China",
    dial_code: "+86",
    code: "CN"
}, {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX"
}, {
    name: "Colombia",
    dial_code: "+57",
    code: "CO"
}, {
    name: "Comoros",
    dial_code: "+269",
    code: "KM"
}, {
    name: "Congo",
    dial_code: "+242",
    code: "CG"
}, {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK"
}, {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR"
}, {
    name: "Croatia",
    dial_code: "+385",
    code: "HR"
}, {
    name: "Cuba",
    dial_code: "+53",
    code: "CU"
}, {
    name: "Cyprus",
    dial_code: "+537",
    code: "CY"
}, {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ"
}, {
    name: "Denmark",
    dial_code: "+45",
    code: "DK"
}, {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ"
}, {
    name: "Dominica",
    dial_code: "+1 767",
    code: "DM"
}, {
    name: "Dominican Republic",
    dial_code: "+1 849",
    code: "DO"
}, {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC"
}, {
    name: "Egypt",
    dial_code: "+20",
    code: "EG"
}, {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV"
}, {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ"
}, {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER"
}, {
    name: "Estonia",
    dial_code: "+372",
    code: "EE"
}, {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET"
}, {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO"
}, {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ"
}, {
    name: "Finland",
    dial_code: "+358",
    code: "FI"
}, {
    name: "France",
    dial_code: "+33",
    code: "FR"
}, {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF"
}, {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF"
}, {
    name: "Gabon",
    dial_code: "+241",
    code: "GA"
}, {
    name: "Gambia",
    dial_code: "+220",
    code: "GM"
}, {
    name: "Georgia",
    dial_code: "+995",
    code: "GE"
}, {
    name: "Germany",
    dial_code: "+49",
    code: "DE"
}, {
    name: "Ghana",
    dial_code: "+233",
    code: "GH"
}, {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI"
}, {
    name: "Greece",
    dial_code: "+30",
    code: "GR"
}, {
    name: "Greenland",
    dial_code: "+299",
    code: "GL"
}, {
    name: "Grenada",
    dial_code: "+1 473",
    code: "GD"
}, {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP"
}, {
    name: "Guam",
    dial_code: "+1 671",
    code: "GU"
}, {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT"
}, {
    name: "Guinea",
    dial_code: "+224",
    code: "GN"
}, {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW"
}, {
    name: "Guyana",
    dial_code: "+595",
    code: "GY"
}, {
    name: "Haiti",
    dial_code: "+509",
    code: "HT"
}, {
    name: "Honduras",
    dial_code: "+504",
    code: "HN"
}, {
    name: "Hungary",
    dial_code: "+36",
    code: "HU"
}, {
    name: "Iceland",
    dial_code: "+354",
    code: "IS"
}, {
    name: "India",
    dial_code: "+91",
    code: "IN"
}, {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID"
}, {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ"
}, {
    name: "Ireland",
    dial_code: "+353",
    code: "IE"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Italy",
    dial_code: "+39",
    code: "IT"
}, {
    name: "Jamaica",
    dial_code: "+1 876",
    code: "JM"
}, {
    name: "Japan",
    dial_code: "+81",
    code: "JP"
}, {
    name: "Jordan",
    dial_code: "+962",
    code: "JO"
}, {
    name: "Kazakhstan",
    dial_code: "+7 7",
    code: "KZ"
}, {
    name: "Kenya",
    dial_code: "+254",
    code: "KE"
}, {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI"
}, {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW"
}, {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG"
}, {
    name: "Latvia",
    dial_code: "+371",
    code: "LV"
}, {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB"
}, {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS"
}, {
    name: "Liberia",
    dial_code: "+231",
    code: "LR"
}, {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI"
}, {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT"
}, {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU"
}, {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG"
}, {
    name: "Malawi",
    dial_code: "+265",
    code: "MW"
}, {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY"
}, {
    name: "Maldives",
    dial_code: "+960",
    code: "MV"
}, {
    name: "Mali",
    dial_code: "+223",
    code: "ML"
}, {
    name: "Malta",
    dial_code: "+356",
    code: "MT"
}, {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH"
}, {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ"
}, {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR"
}, {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU"
}, {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT"
}, {
    name: "Mexico",
    dial_code: "+52",
    code: "MX"
}, {
    name: "Monaco",
    dial_code: "+377",
    code: "MC"
}, {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN"
}, {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME"
}, {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS"
}, {
    name: "Morocco",
    dial_code: "+212",
    code: "MA"
}, {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM"
}, {
    name: "Namibia",
    dial_code: "+264",
    code: "NA"
}, {
    name: "Nauru",
    dial_code: "+674",
    code: "NR"
}, {
    name: "Nepal",
    dial_code: "+977",
    code: "NP"
}, {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL"
}, {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN"
}, {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC"
}, {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ"
}, {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI"
}, {
    name: "Niger",
    dial_code: "+227",
    code: "NE"
}, {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG"
}, {
    name: "Niue",
    dial_code: "+683",
    code: "NU"
}, {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF"
}, {
    name: "Northern Mariana Islands",
    dial_code: "+1 670",
    code: "MP"
}, {
    name: "Norway",
    dial_code: "+47",
    code: "NO"
}, {
    name: "Oman",
    dial_code: "+968",
    code: "OM"
}, {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK"
}, {
    name: "Palau",
    dial_code: "+680",
    code: "PW"
}, {
    name: "Panama",
    dial_code: "+507",
    code: "PA"
}, {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG"
}, {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY"
}, {
    name: "Peru",
    dial_code: "+51",
    code: "PE"
}, {
    name: "Philippines",
    dial_code: "+63",
    code: "PH"
}, {
    name: "Poland",
    dial_code: "+48",
    code: "PL"
}, {
    name: "Portugal",
    dial_code: "+351",
    code: "PT"
}, {
    name: "Puerto Rico",
    dial_code: "+1 939",
    code: "PR"
}, {
    name: "Qatar",
    dial_code: "+974",
    code: "QA"
}, {
    name: "Romania",
    dial_code: "+40",
    code: "RO"
}, {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW"
}, {
    name: "Samoa",
    dial_code: "+685",
    code: "WS"
}, {
    name: "San Marino",
    dial_code: "+378",
    code: "SM"
}, {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA"
}, {
    name: "Senegal",
    dial_code: "+221",
    code: "SN"
}, {
    name: "Serbia",
    dial_code: "+381",
    code: "RS"
}, {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC"
}, {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL"
}, {
    name: "Singapore",
    dial_code: "+65",
    code: "SG"
}, {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK"
}, {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI"
}, {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB"
}, {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA"
}, {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS"
}, {
    name: "Spain",
    dial_code: "+34",
    code: "ES"
}, {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK"
}, {
    name: "Sudan",
    dial_code: "+249",
    code: "SD"
}, {
    name: "Suriname",
    dial_code: "+597",
    code: "SR"
}, {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ"
}, {
    name: "Sweden",
    dial_code: "+46",
    code: "SE"
}, {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH"
}, {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ"
}, {
    name: "Thailand",
    dial_code: "+66",
    code: "TH"
}, {
    name: "Togo",
    dial_code: "+228",
    code: "TG"
}, {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK"
}, {
    name: "Tonga",
    dial_code: "+676",
    code: "TO"
}, {
    name: "Trinidad and Tobago",
    dial_code: "+1 868",
    code: "TT"
}, {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN"
}, {
    name: "Turkey",
    dial_code: "+90",
    code: "TR"
}, {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM"
}, {
    name: "Turks and Caicos Islands",
    dial_code: "+1 649",
    code: "TC"
}, {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV"
}, {
    name: "Uganda",
    dial_code: "+256",
    code: "UG"
}, {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA"
}, {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE"
}, {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB"
}, {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY"
}, {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ"
}, {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU"
}, {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF"
}, {
    name: "Yemen",
    dial_code: "+967",
    code: "YE"
}, {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM"
}, {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW"
}, {
    name: "land Islands",
    dial_code: "",
    code: "AX"
}, {
    name: "Antarctica",
    dial_code: null,
    code: "AQ"
}, {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO"
}, {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN"
}, {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC"
}, {
    name: "Congo, The Democratic Republic of the",
    dial_code: "+243",
    code: "CD"
}, {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI"
}, {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK"
}, {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG"
}, {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA"
}, {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK"
}, {
    name: "Iran, Islamic Republic of",
    dial_code: "+98",
    code: "IR"
}, {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM"
}, {
    name: "Jersey",
    dial_code: "+44",
    code: "JE"
}, {
    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",
    code: "KP"
}, {
    name: "Korea, Republic of",
    dial_code: "+82",
    code: "KR"
}, {
    name: "Lao People's Democratic Republic",
    dial_code: "+856",
    code: "LA"
}, {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY"
}, {
    name: "Macao",
    dial_code: "+853",
    code: "MO"
}, {
    name: "Macedonia, The Former Yugoslav Republic of",
    dial_code: "+389",
    code: "MK"
}, {
    name: "Micronesia, Federated States of",
    dial_code: "+691",
    code: "FM"
}, {
    name: "Moldova, Republic of",
    dial_code: "+373",
    code: "MD"
}, {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ"
}, {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS"
}, {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN"
}, {
    name: "Réunion",
    dial_code: "+262",
    code: "RE"
}, {
    name: "Russia",
    dial_code: "+7",
    code: "RU"
}, {
    name: "Saint Barthélemy",
    dial_code: "+590",
    code: "BL"
}, {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH"
}, {
    name: "Saint Kitts and Nevis",
    dial_code: "+1 869",
    code: "KN"
}, {
    name: "Saint Lucia",
    dial_code: "+1 758",
    code: "LC"
}, {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF"
}, {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM"
}, {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1 784",
    code: "VC"
}, {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST"
}, {
    name: "Somalia",
    dial_code: "+252",
    code: "SO"
}, {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ"
}, {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY"
}, {
    name: "Taiwan, Province of China",
    dial_code: "+886",
    code: "TW"
}, {
    name: "Tanzania, United Republic of",
    dial_code: "+255",
    code: "TZ"
}, {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL"
}, {
    name: "Venezuela, Bolivarian Republic of",
    dial_code: "+58",
    code: "VE"
}, {
    name: "Viet Nam",
    dial_code: "+84",
    code: "VN"
}, {
    name: "Virgin Islands, British",
    dial_code: "+1 284",
    code: "VG"
}, {
    name: "Virgin Islands, U.S.",
    dial_code: "+1 340",
    code: "VI"
}] 
})
.controller('RegistrationIndividualstep1ctrl', function($scope,$window,share,$ionicPopup,$http) 
    { //var val
         
         $scope.next1=false;
        $scope.next=true;
         var email_check;
         $scope.choi=[];
         //$scope.OtherCategory="Other Category";
         var name="";
         var c_name="";
         var choose=JSON.stringify(share.getSharedVariables())
         var type=choose.substring(choose.indexOf('1')+4,choose.indexOf('}')-1);
    if(choice=="Business")
          {
              var userchoice=2;
          }
      else
          { 
            var userchoice=1;
            
          }
     $http({
            method: 'GET',
            url: 'http://app.creoyou.net/public/index.php/api/user-category/1',
            /*headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},*/
           
        }).success(function(responseData){
       

         $scope.listOfOptions=responseData
  }, function(errorData){
    //error
  })
      
    $scope.doSomething= function(){
        var id=document.getElementById('input').value;
         var DataToSend = {
                            user_type: userchoice,
                            field_name:'email',
                            field_value:id
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userInfocheck',
           
            data: DataToSend
        }).success(function(responseData){
       
          //console.log(JSON.stringify(responseData));
             if(responseData==1)
                 {
                     $scope.email_check="Email Already Exist";
                     email_check=responseData;
                     //console.log("hi")
                     if(id=="")
                         {
                           //console.log("hello")
                           $scope.email_check="";  
                         }
                     $scope.next1=true;
                     $scope.next=false;
                     
                 }
             else
                 {
                     $scope.email_check="";
                     email_check=responseData;
                      $scope.next1=false;
                      $scope.next=true;
                 }
             
              
                  
  }, function(errorData){
    
  })
        
}//end of key press
    
    $scope.valuestep1 = function(selectvalue1,selectvalue2,selectvalue3) 
        { 
          //console.log("www"+email_check)
        
          if(email_check==1) 
              {
                   var alertPopup = $ionicPopup.alert({
              title: 'Email check!',
              template: '<h3 class="accounttype">Input Email already Exist.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
                  
              }
        else
            {
               
         if(selectvalue2==0)
               {
                    share.setVariable( "Level2",selectvalue1);
                     
                    share.setVariable( "Level?",selectvalue3);
                    $window.location.href="#/auth/Registration_Individual_step2";
                }
            else
                {
                     share.setVariable( "Level2",selectvalue1);
                     share.setVariable( "Level#",selectvalue2);
                     share.setVariable( "Level?",selectvalue3);
                     share.setVariable( "Level%",name);
                    $window.location.href="#/auth/Registration_Individual_step2"; 
                        } 
                
            }//end of email checking
            
                    
         }//End of Function
     
 
       $scope.showSelectValue = function (val) { 
     catagory=val; //it define in app js 
  if(val==0)   
      {
          
      $scope.data = {}
   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<form name="myForm" novalidate><input type="text" name="name" ng-model="data.name" placeholder="Catagory name"><p ng-show="myForm.data.name.$error.required " >* Catagory Name is Required</p>  </form>',
     title: 'Specify Your category Name',
    // subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           console.log($scope.data.name) 
           //$scope.catagory=$scope.data.name;
             //$scope.OtherCategory=$scope.data.name;
            share.setVariable( "Level#",name);
            share.setVariable( "Level%",$scope.data.name); 
            $scope.choi.pop();
            $scope.choi.push({'name':$scope.data.name})
              
            
        },
       }
     ]
   });     
}
else if(val=='-1')
    {}
else if(val=='OtherCategory')
    {
        //$windows.alert("hi")
    }
else
    {
        $scope.choi.pop();
    }
     
 } 
  
})
.controller('RegistrationBusinessstep1ctrl', function($scope,$window,share,$ionicPopup,$http) 
    {
     $scope.choi=[];
     var name="";
    $scope.data = {}
    //$scope.da=[];
    var c_name="";
    var choose=JSON.stringify(share.getSharedVariables())
    var type=choose.substring(choose.indexOf('1')+4,choose.indexOf('}')-1);
    if(choice=="Business")
          {
              var userchoice=2;
          }
      else
          { 
            var userchoice=1;
            
          }
      $http({
            method: 'GET',
            url: 'http://app.creoyou.net/public/index.php/api/user-category/2',
            /*headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},*/
           
        }).success(function(responseData){
       
         $scope.listOfOptions=responseData
      
  }, function(errorData){
    //error
  })
     $scope.doSomething= function(){
        var id=document.getElementById('input').value;
         var DataToSend = {
                            user_type: userchoice,
                            field_name:'email',
                            field_value:id
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userInfocheck',
           
            data: DataToSend
        }).success(function(responseData){
       
              //$window.alert(JSON.stringify(responseData));
  }, function(errorData){
    
  })
        
}//end of key press  
       $scope.valuestep1 = function(selectvalue1,selectvalue2,selectvalue3) 
        { 
  
            
            if(selectvalue2==0)
              {
                     share.setVariable( "Level2",selectvalue1);
                     
                     share.setVariable( "Level?",selectvalue3);
                     $window.location.href="#/auth/Registration_Individual_step2";
                }
             else
                {
                     share.setVariable( "Level2",selectvalue1);
                     share.setVariable( "Level#",selectvalue2);
                     share.setVariable( "Level?",selectvalue3);
                     share.setVariable( "Level%",name);
                     $window.location.href="#/auth/Registration_Individual_step2"; 
                }
         }//End of Function
     
$scope.showSelectValue = function (val) {
       catagory=val;           
  if(val==0)   
      {
          

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<form name="myForm" novalidate><input type="text" name="name" ng-model="data.name" placeholder="Catagory name"><p ng-show="myForm.data.name.$error.required " >* Catagory Name is Required</p>  </form>',
     title: 'Specify Your catagory Name',
    // subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            //share.setVariable( "Level3",$scope.data.name); 
             $scope.catagory=$scope.data.name;
           // $scope.cfield = $scope.data.name;
             //$scope.da.push({name:$scope.data})
              console.log($scope.data) ;
             share.setVariable( "Level#",name);
        share.setVariable( "Level%",$scope.data.name);
             $scope.choi.pop();
           $scope.choi.push({'name':$scope.data.name}) 
           
            
       },
       }
     ]
   });
          
      }
    else
    {
        $scope.choi.pop();
    }
}
})


.service('share', function () 
         {
            
            var sharedVariables ={};
            return{
        getSharedVariables: function () {
            return sharedVariables;
        },
        setVariable: function(paramName, value){
           sharedVariables[paramName] = value;
        }
       
    };
})
//end by me
// APP
.controller('CommonCtrl', function($scope, $ionicConfig, $ionicPopover) {
$ionicPopover.fromTemplateUrl('../views/common/popover.html', {
scope: $scope
}).then(function(popover) {
$scope.popover = popover;
});
$scope.openPopover = function($event) {  
   
$scope.popover.show($event);
};
$scope.closePopover = function() {
$scope.popover.hide();
};
// Perform Action on destroy
$scope.$on('$destroy', function() {
$scope.popover.remove();
});
// Perform action on hide popover
$scope.$on('popover.hidden', function() {
// Perform action
});
// Perform action on remove popover
$scope.$on('popover.removed', function() {
// Perform action
});


    
    
})

.controller('notificationctrl', function($scope,$window,$http,demoFac,demoFacr,demoFacm,MyTimer) {   
     if(notificationload==0)
         {
             $scope.loading=true;;
         }
              
    var star=1;
    var noticheck=0;
    //$scope.notifications=notificationload;
   // console.log("check:"+JSON.stringify(notificationload));
    
    //$window.alert("finaluser"+loginurl);
    console.log(loginurl);
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
   
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
             console.log(DataToSend);
    
    
    
 $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/reviseNotifications',
                   data: DataToSend
        }).success(function(responseData){
              
        }, function(errorData){
    }) 
    
//***********count friend request*******************
         $scope.moredata = false;
 
    $scope.loadMoreData=function()
    {
        
         console.log("first"+noticheck);
        
        if(noticheck==0)
            {
                console.log("true");
                var DataToSend = {
                
                                user_id :id,
                                startinglimit:star,
                                end_limit:star+5
                                
                 }
                   star=star+6; 
                $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/notificationDetails',
                   data: DataToSend
        }).success(function(responseData){
              console.log("3")  ;    
                console.log("final data"+JSON.stringify(responseData));
            $scope.notifications=responseData.userNotification;
             
        
             console.log("data send"+JSON.stringify(DataToSend));
               //enl=enl+2;
           // console.log("data send2="+JSON.stringify(DataToSend));
           noticheck=0;
          
         
            if(responseData.userNotification.length==0)
                {
                    $scope.moredata = true;
                }
             
      }, function(errorData){
    }) 
            }
     else
            {
                console.log("false");
            }
        noticheck=1;
 /*
     console.log("data send0="+JSON.stringify(DataToSend));
         
             
             console.log("value="+check);
                  
             console.log("data send1"+JSON.stringify(DataToSend));
      console.log("2")  ; 
   
        
       console.log("4") */
   $scope.$broadcast('scroll.infiniteScrollComplete'); 
       
    }     
  
    $scope.finalnotification = [];
     
    //$scope.finalnotification.length = 0;
 //   $scope.data = $scope.choices.slice(0, 7);
 

    $scope.notificationdata=function(image,text,updation_date,incident_id,incident_type)
      {      
         var difference= MyTimer(updation_date);
         console.log("4")  ;     /*$scope.choices.push({'time':difference,"id":value2,"fname":value3,"message":value4,"src":value5});  */
    console.log("akram"); $scope.finalnotification.push({'updation_date':difference,"text":text,"image":image,"incident_id":incident_id,"incident_type":incident_type});  
        //console.log("hhhhhhhh"+JSON.stringify($scope.finalnotification));
      }

   $scope.notificationdetails=function(id,type)
    {
       
      console.log(id) ;
      console.log(type);
       notiincidentid=id;
       incidenttype=type;
       $window.location.href="#/common/notificationdetails";
       
    }
           
      
    
    
})

.controller('notificationdetailsctrl', function($scope,$http,MyTimer,$window)
{
    
       //$window.alert(notiincidentid) ;
       //$window.alert( incidenttype);
       
        var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
              $scope.loading=true;
              $scope.body=false;
      
    
              var DataToSend = {
                              
                                user_id:id,
                                incident_id :notiincidentid,
                                incident_type:incidenttype,
                                
                              }
               console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/seenotificationDetails',
                   data: DataToSend
        }).success(function(responseData){
              
               $scope.noti=responseData.data
            console.log("details="+JSON.stringify($scope.noti));
          $scope.messages=responseData.comments
         console.log("details2="+JSON.stringify( $scope.messages));
          $scope.loop2=responseData.count
       // console.log("details3="+JSON.stringify($scope.loop2));
                
                
      }, function(errorData){
    }) 
    $scope.trustSrc = function(src) {
        //console.log("http://creoyou.net/uploads/portfolioVideos/"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net/uploads/portfolioVideos/"+src);
     }
      $scope.getIframeSrc = function(src) {
           //console.log("wasim22222222222"+src);
     return  src;
    }
      $scope.tagdata=[];
     $scope.totaldata=[];
       $scope.tagto=function(val,countid,audio_name,audio_title,audio_title1,id,incidentId,incident_type,fname,lname,creation_date,user_status,image,video_name,likes,countit,media_name,audio_title,buisness_name,audio_source,likeActive,albums,incident_name)
   {
     /*console.log("val1="+val);
      console.log("count="+countid);
     console.log("audio_name="+audio_name);
      console.log("audio_title="+audio_title);
       console.log("audio_title="+audio_title1);
      console.log("id="+id);
      console.log("incidentId="+incidentId);
      console.log("incident_type="+incident_type);
      console.log("fname="+fname);
      console.log("lname="+lname);
     console.log("creation_date="+creation_date);
        console.log("user_status="+user_status);
      console.log("image="+image);
      console.log("video_name="+video_name);
      console.log("likes="+likes);
      console.log("countit="+countit);
      console.log("media_name="+media_name);
      console.log("audio_title="+audio_title);
      console.log("buisness_name="+buisness_name);
        console.log("audio_source="+audio_source);
      console.log("likeActive="+likeActive);
      console.log("albums="+albums);*/
      userfname=fname;
      userlname=lname;
      
   
      if(val!=undefined)
          {
              var DataToSend1 = {
                
                                user_id :val,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showtagged',
                   data: DataToSend1
        }).success(function(responseData){
              
         // $scope.tagto=responseData.Users;
          var tag=responseData.Users;
          $scope.tagdata.pop();
         $scope.tagdata.push({'tagopersone':tag});   
   
         for (var i = 0; i < $scope.tagdata.length; i++){
         
             $scope.tagname=$scope.tagdata[i].tagopersone;
              
            var datetime=new Date(creation_date);
         
             $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'incident_name':incident_name});
           
         }
         
         
      }, function(errorData){
    })
          }
      else
          {
              var DataToSend1 = {
                
                                incident_id :albums,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AlbumImages',
                   data: DataToSend1
        }).success(function(responseData){
              
         $scope.AlbumImages=responseData.images;
         $scope.countImages=responseData.countImages;
       // console.log("final check="+JSON.stringify( $scope.AlbumImages));
        var datetime=new Date(creation_date); $scope.totaldata.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'AlbumImages': $scope.AlbumImages, 'countImages':$scope.countImages,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
             console.log("tag data="+JSON.stringify($scope.totaldata));
       
        
         
     
      }, function(errorData){
    })
          }
    
   }
 
 $scope.rangeCreator = function (minVal, maxVal) {
     if(maxVal!=null)
         {
             var s=maxVal.length;
         }
     
    
     if(s>2)
         {
                var resttag=s-2;
                $scope.moretag="and " +resttag+ " others";
         }
     else
         {
             $scope.moretag="";
         }
  
     // console.log("minimumvalue="+0)
     //console.log("maximum length="+s)
    // console.log("more="+$scope.moretag)
    var arr = [];
   for (var i = minVal; i <= 1; i++) {
      arr.push(i);
   }
   return arr;
}
    
})

.controller('followersctrl', function($scope, $ionicConfig, $ionicPopover,$ionicPopup) {
$ionicPopover.fromTemplateUrl('../views/common/popover.html', {
scope: $scope
}).then(function(popover) {
$scope.popover = popover;
});
$scope.openPopover = function($event) {  
   
$scope.popover.show($event);
};
$scope.closePopover = function() {
$scope.popover.hide();
};
// Perform Action on destroy
$scope.$on('$destroy', function() {
$scope.popover.remove();
});
// Perform action on hide popover
$scope.$on('popover.hidden', function() {
// Perform action
});
// Perform action on remove popover
$scope.$on('popover.removed', function() {
// Perform action
});
})

//for job section
.controller('Jobctrl', function($scope,$window,$http)
 {
    
    console.log(loginurl);
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
             console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/userJobs',
                   data: DataToSend
        }).success(function(responseData){
               console.log("Expired job"+JSON.stringify(responseData.ExpiredJobs));
        console.log("valid job"+JSON.stringify(responseData.ValidJobs));
          if(responseData.ValidJobs==null)
              {
                  $scope.check="null";
                 // $scope.validjob="No Jobs Found!!!!";
              }
         else
             {  
                   $scope.jobs=responseData.ValidJobs;
              }
        
      if(responseData.ExpiredJobs==null)
          {
               $scope.check1="null";
          }
        else
            {
               $scope.ejobs=responseData.ExpiredJobs;  
            }
        
        
              
      }, function(errorData){
    }) 
    
     $scope.filter=function()
        {
            //$window.alert("success....")
            $window.location.href="#/common/job_posted_list";
        }
    
     $scope.jobid=function(value)
        {
           jobid=value;
          $window.location.href="#/common/job_admin1";
        }
})

.controller('Jobadminctrl', function($scope,$window,$http,$cordovaToast) 
  {
    console.log(jobid);
  var DataToSend = {
                
                                job_id :jobid,
                                user_id:8
                                
                     }
  
            console.log("job details"+JSON.stringify(DataToSend));
           
   
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobFullDetails',
                    data: DataToSend
        }).success(function(responseData){
               
              console.log("job details"+JSON.stringify(responseData));
            console.log("job details"+JSON.stringify(responseData.Details));
         console.log("job details"+JSON.stringify(responseData.Status));
            $scope.jobdetails=responseData.Details;
          $scope.status=responseData.Status;
                
       }, function(errorData){
         })
     
     var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1); 
    $scope.log1=true;
    $scope.log2=false;
     $scope.apply=function(val)
      {
         if(val=="Applied")
             {
                 
             }
         else
             {
                 var DataToSend = {
                
                                user_id :uid,
                                job_id:jobid
                                
                              } 
     console.log("dataall="+JSON.stringify(DataToSend))
      $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/InsertJobApplied',
            data: DataToSend
           
        }).success(function(responseData){
       
              console.log(responseData)
             $scope.log1=false;
             $scope.log2=true;
          $cordovaToast.show("Succesfully Applied job", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
         
         
        }, function(errorData){
    
  }) 
             }
    
 
 
      }
     
     
  })

.controller('Jobadminctrl1', function($scope,$window,$http,$cordovaToast) 
  {
    //$window.alert("wasim")
    console.log(jobid);
    
    
    $scope.option=function(friendid)
   {
    
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";
     console.log("llllllllllllllllllllllllll")
   //  $scope.popcard=true;
        var div = document.getElementById(value);
     console.log("main value="+div);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     /* document.getElementById("myDropdown").classList.toggle("show1");
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 
    }*/
   }
    
    
    
  var DataToSend = {
                
                                job_id :jobid,
                                user_id:8
                                
                     }
  
            console.log("job details"+JSON.stringify(DataToSend));
           
   
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobFullDetails',
                    data: DataToSend
        }).success(function(responseData){
               
              console.log("job details"+JSON.stringify(responseData));
            console.log("job details"+JSON.stringify(responseData.Details));
         console.log("job details"+JSON.stringify(responseData.Status));
            $scope.jobdetails=responseData.Details;
          $scope.status=responseData.Status;
                
       }, function(errorData){
         })
     
     var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1); 
    $scope.log1=true;
    $scope.log2=false;
     $scope.apply=function(val)
      {
         if(val=="Applied")
             {
                 
             }
         else
             {
                 var DataToSend = {
                
                                user_id :uid,
                                job_id:jobid
                                
                              } 
     console.log("dataall="+JSON.stringify(DataToSend))
      $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/InsertJobApplied',
            data: DataToSend
           
        }).success(function(responseData){
       
              console.log(responseData)
             $scope.log1=false;
             $scope.log2=true;
          $cordovaToast.show("Succesfully Applied job", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
         
         
        }, function(errorData){
    
  }) 
             }
    
 
 
      }
     
     $scope.applicant=function(val)
      {
        userjobid=val;
         console.log("applicant="+userjobid);
        $window.location.href="#/common/job_applicants";
      }
     $scope.edit=function(val)
      {
         
          userjobid=val;
         console.log("edit="+userjobid);
           $window.location.href="#/common/job_post_form1";
      }
     $scope.delete=function(val)
      {
       
         userjobid=val;
         console.log("delete="+userjobid);
   
         
      }
     
     
  })

.controller('Jobapplicantsctrl', function($scope,$window,$http,MyTimer) 
  {
    
      
    var DataToSend = {
                
                                job_id :jobid,
                                //user_id:8
                                
                     }
  
            console.log("job details"+JSON.stringify(DataToSend));
           
   
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/userJobApplied',
                    data: DataToSend
        }).success(function(responseData){
               
              console.log("job details"+JSON.stringify(responseData));
           /* console.log("job details"+JSON.stringify(responseData.Details));
         console.log("job details"+JSON.stringify(responseData.Status));
          
          $scope.status=responseData.Status;*/
           $scope.jobdetails=responseData;
                
       }, function(errorData){
         })
     
       $scope.remessage=function(val,fname,lname,bname)
     {
        console.log("mmm"+fname)
        console.log("mmm"+bname)
        if(fname=='' || fname==null)
            {
                 pername = bname;
                console.log("mmmdfd")
            }
        else
            {
                 pername = fname+" "+lname;
                  console.log("mmppppppmdfd")
            }
            
        
         chatid=val;
        $window.location.href="#/common/chat";
       }
    
  })
.controller('Joblistctrl', function($scope,$window,$http,MyTimer) 
  {
    
    $scope.jobid=function(val)
     {
        console.log(val);
        jobid=val;
        $window.location.href="#/common/job_admin";
        
     }
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/TotalJobs',
                  
        }).success(function(responseData){
               
            
            console.log("final job"+JSON.stringify(responseData.information));
            $scope.alljobs=responseData.information;
                
       }, function(errorData){
         })
      
          $scope.choices = [];
 //   $scope.data = $scope.choices.slice(0, 7);

    $scope.init=function(creation_date,UserId,jobId,fname,lname,job_title,image,name,part)
      {      
         var difference= MyTimer(creation_date);
        /*$scope.choices.push({'time':difference,"id":value2,"fname":value3,"message":value4,"src":value5});  */
    $scope.choices.push({'creation_date':difference,'UserId':UserId,"jobId":jobId,"fname":fname,"lname":lname,"job_title":job_title,"image":image,"name":name,"part":part});   
      }
  })
.controller('Jobpostctrl', function($scope,$window,$cordovaDatePicker,$http,$cordovaToast) 
  {
    $scope.date_rdv = new Date()
     /*$window.alert("welcom to job panel") ;
     $scope.date_rdv = new Date()*/
  var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
       console.log("User id="+id);
    var DataToSend = {
                
                                user_id :id,
                                
                              }
    $scope.apply=function(title,reskill,description,reexp,country,state,city,jtype,salary,keyword,dedline)
    
       {
         var DataToSend = {
                
                                user_id :id,
                                job_title :title,
                                description :description,
                                required_experience :reexp,
                                required_skills :reskill,
                                country :country,
                                state :state,
                                city :city,
                                job_type :jtype,
                                keywords :keyword,
                                salary :salary,
                                deadline_for_application :dedline
                                
                              }
          console.log("total data="+JSON.stringify(DataToSend));
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobDetails',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final response"+JSON.stringify(responseData));
             if(responseData==1)
                 {
                      $cordovaToast.show("Succesfully Post job", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
                 }
             else
                 {
                      $cordovaToast.show("Something went wrong", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
                     
                 }
            
                
       }, function(errorData){
         }) 
        
       }//end of apply
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobType',
                   data: DataToSend
        }).success(function(responseData){
               
            
            console.log("final job"+JSON.stringify(responseData.Title));
            $scope.listOfOptions2=responseData.Title;
                
       }, function(errorData){
         }) 
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         }) 
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
    
})
.controller('Jobpost1ctrl', function($scope,$window,$cordovaDatePicker,$http,$cordovaToast) 
  {
   // $window.alert("hi")
    $scope.date_rdv = new Date()
     /*$window.alert("welcom to job panel") ;
     $scope.date_rdv = new Date()*/
  var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
       console.log("User id="+id);
//    var DataToSend = {
//                
//                                user_id :id,
//                                
//                              }
    $scope.apply=function(job_title,required_skills,description,required_experience,country,state,city,type,salary,jkey,deadline_for_application)
    
       {
        
         console.log("jobtitle="+job_title);
        console.log("required_skills="+required_skills);
        console.log("description="+description);
        console.log("required_experience="+required_experience);
        console.log("country="+country);
        console.log("state="+state);
         console.log("city="+city);
        console.log("type="+type);
        console.log("salary="+salary);
        console.log("jkey="+jkey);
        console.log("deadline_for_application="+deadline_for_application);
       
        
        
        
         var DataToSend = {
               
                                job_id :jobid,
                                job_title :job_title,
                                description :description,
                                required_expr :required_experience,
                                required_skills :required_skills,
                                country :country,
                                state :state,
                                city :city,
                                job_type :type,
                                keywords :jkey,
                                salary :salary,
                                deadline_for_application :deadline_for_application
                                
                              }
          console.log("total data="+JSON.stringify(DataToSend));
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editJobApplied',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final response"+JSON.stringify(responseData));
             if(responseData==1)
                 {
                      $cordovaToast.show("Succesfully Update job", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
                 }
             else
                 {
                      $cordovaToast.show("Something went wrong", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        });
                     
                 }
            
                
       }, function(errorData){
         }) 
        
       }//end of apply
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobType',
                   data: DataToSend
        }).success(function(responseData){
               
            
            console.log("final job"+JSON.stringify(responseData.Title));
            $scope.listOfOptions2=responseData.Title;
                
       }, function(errorData){
         }) 
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         }) 
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
     var DataToSend = {
                
                                job_id :jobid,
                                user_id:8
                                
                     }
  
            console.log("job details"+JSON.stringify(DataToSend));
           
   
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/jobFullDetails',
                    data: DataToSend
        }).success(function(responseData){
               
              console.log("job details"+JSON.stringify(responseData));
            console.log("job details"+JSON.stringify(responseData.Details));
         console.log("job details"+JSON.stringify(responseData.Status));
            $scope.jobdetails=responseData.Details;
        //  $scope.status=responseData.Status;
                
       }, function(errorData){
         })
     
    
})
.controller('Requestctrl', function($scope,$window,$http,demoFac,demoFacm,demoFacr) 
    {
    //$scope.sugghide = true;
     console.log("heeeeeeee+e+e+e++e+e+e+e+e+e+e+");
     console.log("Status check"+loginurl)
       var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
       
    var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
    
//***********Fir friend request*******************
           
    demoFacr.fetchUserDetails().success(function(response){
        //$scope.conreq=false;
         
          console.log("wasim333:"+JSON.stringify(response))
          console.log("friend request="+JSON.stringify(response))
           $scope.requests=response;
           $scope.pendingrequest=response.length;
           //console.log("friend request"+response );
           console.log("pending request= "+JSON.stringify($scope.pendingrequest));
        
        if(response=="no")
         {
           $scope.show="No New Request Found";
           $scope.pendingrequest="";
           //$scope.pendingrequest="";
           $scope.datafound=false;
           $scope.datanotfound=true;
           console.log("...>>>>>>>>>>>>>>>>>>>>>>>");
         }
         else
         {
            //$scope.requests=response;
            $scope.datanotfound=false;
            $scope.datafound=true;
            console.log("...<<<<<<<<<<<<<<<<<<");
         }
        
        
          
        
    }); 
             
    
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
             console.log("Data send="+JSON.stringify(DataToSend));
    
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/suggestion',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.details));
            $scope.surequests=responseData.details;
                
       }, function(errorData){
         }) 
//**************End of friend request**********************
      
      $scope.accept=function(friendid)
       {
          
          var value="sugghide/"+friendid
          console.log(value)
            document.getElementById(value).style.display = "none";
          
          
          console.log("hi friend");
          console.log("id="+friendid)
           var DataToSend = {
                
                                user_id :friendid,
                                
                              }
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/acceptRequest',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
             
       }, function(errorData){
         }) 
          
       }//end of accept
      
      $scope.cancel=function(friendid)
       {
          var value="sugghide/"+friendid
            document.getElementById(value).style.display = "none";
           console.log("hi friend");
          console.log("id="+friendid)
           var DataToSend = {
                
                                user_id :friendid,
                                
                              }
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteRequest',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
             
       }, function(errorData){
         }) 
          
       }//end of cancel
      
      $scope.connect=function(friendid)
       {
           var value="sugghide/"+friendid
            document.getElementById(value).style.display = "none";
          console.log("friend id="+friendid)
           var DataToSend = {
                
                                 user_id :id,
                                from_id:friendid
                              }
           console.log("data="+JSON.stringify(DataToSend));
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/sendRequset',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
             
       }, function(errorData){
         }) 
          
      
       }
      
      $scope.followperson=function(friendid)
       {
          
           var value="sugghide/"+friendid
           console.log(value)
            document.getElementById(value).style.display = "none";
         // $scope.value= "true";
        // console.log("User type="+usertype);
         console.log("User id="+value); 
          var DataToSend = {
                
                                user_id:id,
                                to_userid:friendid,
                                user_type:usertype
                                
                              }
          console.log("follow="+JSON.stringify(DataToSend))
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/followUser',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
             
       }, function(errorData){
         }) 
       }//end of follow
    
    
})
.controller('refresh_control',function($scope,$interval,demoFacr,demoFac,demoFacm){
 // console.log("akram");
$interval(function(){
    // console.log("wasim");
     demoFacr.fetchUserDetails().success(function(response){
         
          //console.log("wasim333:"+JSON.stringify(response))
          //$scope.requests=response;
        
          $scope.pendingrequest=response.length;
         /// console.log("lengthrequest"+response.length);
          if(response=="no")
         {
           
           $scope.pendingrequest="";
          
         }
         
        
    })
     demoFac.fetchUserDetails().success(function(response){
          notificationload=response.userNotification;
         
         // console.log("wasim112:"+JSON.stringify(response.countUnseenNotifications))
         var preq=JSON.stringify(response.countUnseenNotifications)
         var  frcou=preq.substring(preq.indexOf('[')+1,preq.indexOf(']'));
         // console.log("final value"+frcou);
         if(frcou==0)
             {
                 $scope.notificationscount="";
             }
        else
            {
             
               $scope.notificationscount=frcou;  
            }
        
        
    })
      demoFacm.fetchUserDetails().success(function(response){
         var count=JSON.stringify(response);
         //console.log(JSON.stringify(response)); //console.log("wasim222:"+JSON.stringify(response.unseenMessagesofuser))
         var mcount=JSON.stringify(response.unseenMessagesofuser)
         var  mescount=mcount.substring(mcount.indexOf('[')+1,mcount.indexOf(']'));
      //  console.log("final value"+mescount);
         if(mescount==0)
             {
                 $scope.count="";
             }
        else
            {
             
               $scope.count=mescount;  
            }
    })
    
},1000);
})
.factory("demoFac", ['$http',function($http){  
    console.log("helo user")
    
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
    //var id=8;
     console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+3
                                
                              }
             
             console.log("value"+enl);
             console.log("data send"+JSON.stringify(DataToSend));
    
    obj.fetchUserDetails = function(){ 
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/notificationDetails',
                   data: DataToSend
        }).success(function(responseData){
               
           
           //$scope.notificationscount=responseData.countUnseenNotifications;
            // console.log("data send"+JSON.stringify(DataToSend));
               enl=enl+2;
          //  console.log("data send123="+JSON.stringify(enl));
          // console.log("final data"+JSON.stringify(responseData));
                
      }, function(errorData){
    }) 
    }

 return obj;
}])

.factory("demoFacm", ['$http',function($http){  
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
   // var id=8;
     console.log("id"+id);
    
            /* var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+2
                              }
             console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
    enl=enl+2;*/
    
    obj.fetchUserDetails = function(){ 
          var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+1
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
            // console.log("data="+JSON.stringify(DataToSend));
    enl=enl+2;
       // console.log("kkkkkk")
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/messageDetails',
                   data: DataToSend
        }).success(function(responseData){
              // console.log("final message="+JSON.stringify(responseData))
           
           //$scope.notificationscount=responseData.countUnseenNotifications;
           //console.log(JSON.stringify("final"+$scope.notificationscount));
                
      }, function(errorData){
    }) 
    }

 return obj;
}])
.factory("demoFacm1", ['$http',function($http){ 
  
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log("id"+id);
    
            /* var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+2
                              }
             console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
    enl=enl+2;*/
    
    obj.fetchUserDetails = function(){ 
  console.log("value msgcheck="+msgcheck)
        if(msgcheck==0)
            {
               // msgcheck=1;
                
                  console.log("value msgcheck true="+msgcheck)
               var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+4
                              }
             console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
    
        console.log(enl)
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/messageDetails',
                   data: DataToSend
        }).success(function(responseData){
               //console.log("final message="+JSON.stringify(responseData))
               console.log("--------------------------------------------");
             console.log("data="+JSON.stringify(DataToSend));
            msgcheck=0;
            enl=enl+4;
           //$scope.notificationscount=responseData.countUnseenNotifications;
           //console.log(JSON.stringify("final"+$scope.notificationscount));
                
      }, function(errorData){
    })  
            }
        else
            {
                console.log("false")
            }
          msgcheck=1;
        console.log("wasimmmmmmmmmmmmmmmmmmmmmmmmm")
         console.log("value msgcheck true="+msgcheck)
          
    }

 return obj;
}])
.factory("demoFacr", ['$http',function($http){  
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
   // var id=8;
     console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
             //console.log(DataToSend);
    
    obj.fetchUserDetails = function(){ 
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/friendRequest',
                   data: DataToSend
        }).success(function(responseData){
               
         
                
      }, function(errorData){
    }) 
    }

 return obj;
}])
 //message panel  

.controller('Chat2ctrl', function($scope,$window,share1,$timeout, $ionicScrollDelegate,$http,$sce,$interval,$ionicPopover,$ionicPopup) 
 {
    
    
     $ionicPopover.fromTemplateUrl('templates/popover1.html', {
    scope: $scope,
  }).then(function(popover1) {
    $scope.popover1 = popover1;
  });
    
    
    var imagename;
     $scope.username=pername;
     //$window.alert(  $scope.username)
    
     $scope.hideTime = true;
     var alternate;
   
  
    $scope.sendMessage = function() 
     {
        
       console.log("totalid:"+id);
        console.log("chatid:"+chatid);
         var DataToSend = {
                
                                from_userid :id,
                                to_userid:chatid,
                                content:$scope.data.message
                              }
             console.log(JSON.stringify(DataToSend));
          console.log($scope.data.length)
      
         if($scope.data.message==null)
            {
               
            } 
        else
            {
              $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/sendMessages',
                   data: DataToSend
        }).success(function(responseData){
              
             //  $scope.messages=responseData.msgs;
          console.log(JSON.stringify(responseData))
          
                
                
      }, function(errorData){
    }) 
     
        alternate = !alternate;
        var d = new Date();
        d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

     $scope.messages.push({
        userId:id,
        content: $scope.data.message,
        creation_date: d,
        image:imagename,
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);  
            }
     
    
    

  };


  $scope.inputUp = function() 
  {
      if (isIOS) $scope.data.keyboardHeight = 216;
      $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);

  };

  $scope.inputDown = function() 
      {
        if (isIOS) $scope.data.keyboardHeight = 0;
        $ionicScrollDelegate.resize();
      };

  $scope.closeKeyboard = function() 
   {
    // cordova.plugins.Keyboard.close();
   };


  $scope.data = {};
  $scope.myId = chatid;
  $scope.messages = [];
    
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
   //  console.log(id);
    
    
             var DataToSend = {
                
                                from_userid :id,
                                to_userid:chatid
                              }
             console.log(JSON.stringify(DataToSend));
    //****************************************************************************************
    $scope.deleteconversion=function()
     {
        //**********************conform************************************************
         $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

        //*********************end conform***************************************
           $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteMessages++',
                   data: DataToSend
        }).success(function(responseData){
              
               //$scope.messages=responseData.msgs;
              // $scope.datecreation=responseData.msgs;
            console.log(JSON.stringify(responseData))
          //$scope.messages.length=0;
                
                
      }, function(errorData){
    }) 
    
        
     }

//********************************************************************************************
    
    $interval(function(){
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showFullchat',
                   data: DataToSend
        }).success(function(responseData){
              
               //$scope.messages=responseData.msgs;
               $scope.datecreation=responseData.msgs;
            //console.log(JSON.stringify(responseData))
          $scope.messages.length=0;
                
                
      }, function(errorData){
    }) 
    
     },10000);
    
    
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showFullchat',
                   data: DataToSend
        }).success(function(responseData){
              
               //$scope.messages=responseData.msgs;
               $scope.datecreation=responseData.msgs;
           console.log(JSON.stringify(responseData))
          
                
                
      }, function(errorData){
    }) 
   $scope.messages = [];
 //   $scope.data = $scope.choices.slice(0, 7);

    $scope.init=function(creation_date,content,image,userId)
      {     
        console.log("ggggggggggggggggg")
         var difference= new Date(creation_date);
        console.log("diff="+difference) /*$scope.choices.push({'time':difference,"id":value2,"fname":value3,"message":value4,"src":value5});  */
     $scope.messages.push({'creation_date':difference,"content":content,"image":image,"userId":userId});  
        imagename=image;
         console.log($scope.messages);
      }  
   

})

//For message section
.controller('Chatctrl', function($scope,$window,share1,MyTimer,$http,$sce,demoFac,demoFacr,demoFacm,demoFacm1) 
  {
   var msgcheck=0;
    $scope.messages=messageload;
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     //console.log(id);
    var DataToSend = {
                
                                user_id :id,
                                
                              }
             console.log(DataToSend);
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unsetMessages',
                   data: DataToSend
        }).success(function(responseData){
               
                
      }, function(errorData){
    })  
  
     $scope.moredata = false;

      var msgvalue=1;
    $scope.loadMoreData=function()
    {
        if(msgcheck==0)
            {
                 var DataToSend = {
                
                                user_id :id,
                                startinglimit:msgvalue,
                                end_limit:msgvalue+4
                              }
             console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
    
        console.log(enl)
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/messageDetails',
                   data: DataToSend
        }).success(function(responseData){
               //console.log("final message="+JSON.stringify(responseData))
               console.log("--------------------------------------------");
             console.log("data="+JSON.stringify(DataToSend));
             msgcheck=0;
             msgvalue=msgvalue+4;
             $scope.messages=responseData.userMessages;
           //$scope.notificationscount=responseData.countUnseenNotifications;
           //console.log(JSON.stringify("final"+$scope.notificationscount));
                
      }, function(errorData){
    })  
       console.log("wasim")    
     
  //  })
            }
        else
            {
              console.log("false")  
            }
     
       msgcheck=1;
         $scope.$broadcast('scroll.infiniteScrollComplete');
    }

   // $scope.items=[];
    
//**************************************************
    $scope.chatid=function(value,fname,lname)
      {
    
         pername = fname+" "+lname;
          //$window.alert(JSON.stringify(value))
          chatid=value;
          
       // share1.setVariable( "chat",b);
        
        $window.location.href="#/common/chat";
      }
   
     
        $scope.choices = [];
 //   $scope.data = $scope.choices.slice(0, 7);

    $scope.init=function(creation_date,id,fname,lname,content,image,from_userid,buisness_name)
      {      
         var difference= MyTimer(creation_date);
        /*$scope.choices.push({'time':difference,"id":value2,"fname":value3,"message":value4,"src":value5});  */
        console.log("businessname="+fname)
        if(fname==null)
        {
            fname=buisness_name
            lname="";
            console.log(fname)
        }
    $scope.choices.push({'creation_date':difference,"id":id,"fname":fname,"lname":lname,"content":content,"image":image,"from_userid":from_userid});   
      }
   
})
.filter('trusted', ['$sce', function($sce) {
    var div = document.createElement('div');
    return function(text) {
        div.innerHTML = text;
        return $sce.trustAsHtml(div.textContent);
    };
}])
.factory('MyTimer', function(share1){
     //var APIcarModels = {};
    return function(delay){
        var diff;
         var past=new Date(delay);
         var now= new Date();
         var s=(now-past);
         var ms = s % 1000;
         s = (s - ms) / 1000;
         var secs = s % 60;
         s = (s - secs) / 60;
         var mins = s % 60;
         var hrs = (s - mins) / 60;
        if(hrs==0 && mins==0)
               diff='just a moment ago';
        else if(hrs==0)
               diff= mins+' mins ago';
        else if(hrs<24)
               diff= hrs+' hours ago';
         
        else if (hrs>720)
    
            {
                var month=Math.floor(hrs/720);
                diff=month+" month ago";
    
            }
        else if (hrs>168)
    
            {
                var month=Math.floor(hrs/168);
                diff=month+" weakago";
    
            }
        else
                diff= Math.floor(hrs/24)+' days ago';
             
           return diff;
        
    };
    

 })
.service('share1', function () {
    var sharedVariables = {
    };
    return {
        getSharedVariables: function () {
            return sharedVariables;
        },
        setVariable: function(paramName, value){
           sharedVariables[paramName] = value;
        }
       
    };
})

 
.controller('Composectrl', function($scope,$window,$http,$cordovaToast) {
    $scope.myvalue=false;
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
  var sendid;
   //  console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
  $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
     })
  $scope.doSomething= function(){
       $scope.myvalue=true;
        var id=document.getElementById('input').value;
      console.log(id)
      if(id=='')
          {
               $scope.myvalue=false;
              console.log("wasim")
          }
      
  }
  $scope.msg=function(val1,val2,val3)
  {
         $scope.myvalue=false;
      console.log("value1="+val1);
       console.log("value2="+val2);
       console.log("value3="+val3)
       $scope.value=val1+""+val2;
        sendid=val3;
  }
  $scope.sendMessage = function(content) 
     {
        
       console.log("totalid:"+id);
        console.log("chatid:"+sendid);
         var DataToSend = {
                
                                from_userid :id,
                                to_userid:sendid,
                                content:content
                              }
             console.log(JSON.stringify(DataToSend));
          
      
         if(content==null)
            {
               
            } 
        else
            {
              $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/sendMessages',
                   data: DataToSend
        }).success(function(responseData){
              
             //  $scope.messages=responseData.msgs;
          console.log(JSON.stringify(responseData))
          $scope.content="";
          $scope.filter="";
                   $cordovaToast.show("Succesfully Send message", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    }) 
     
     
     
    
            }

  }
})
.controller('Jobfilterctrl', function($scope,$window,$http) {
      //$scope.name = 'John';
     // $window.alert("welcom to wasimr") ;
   /* $scope.rest=function()
      {
        $window.alert("welcom to job filter") ;
         //$scope.jtitle='John';
         $scope.name = 'wasim';
              
      }*/
    $scope.filter=function()
     {
          $window.location.href="#/common/job_posted_list";
         
      }
 /*   $scope.cancel=function(value)
   {
       
      filter=value;
      //$window.alert(filter);
       $window.location.href="#/common/search_on_keystock"; 
   }*/
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                    
        }).success(function(responseData){
               
           // console.log("final data"+JSON.stringify(responseData));
            //console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         })
    
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
          //  console.log("final data"+JSON.stringify(responseData));
           // console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
        $scope.cancel=function(value)
            {
       
                //filter=value;
                //$window.alert(filter);
                $window.location.href="#/common/search_on_keystock"; 
            }
 
  $scope.apply=function(jobtitle1,keyword1,creativefield,company,cfield,cfield1,job)
    { 
      /*console.log("cityvalue="+jobtitle)
      console.log("countryvalue="+keyword)
      console.log("statevalue="+creativefield)
      console.log("companyvalue="+company)
      console.log("namevalue="+cfield)
      console.log("creativefieldvalue="+cfield1)*/
      console.log("people="+job)
                                jobtitle=jobtitle1,
                                keyword=keyword1,
                                name ="",
                                cat_name=creativefield,
                                company_name=company,
                                country=cfield,
                                state=cfield1
                                
                                
                               
                                
                                
      console.log("job="+jobtitle)
      console.log("keyword="+keyword)
      
      
      
      
       filter=job;
    
      $window.location.href="#/common/search_on_keystock"; 
    }
  
})

.controller('Businessfilterctrl', function($scope,$window,$http)
            
{
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                    
        }).success(function(responseData){
               
           // console.log("final data"+JSON.stringify(responseData));
           // console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         })
    
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
           // console.log("final data"+JSON.stringify(responseData));
           // console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
        $scope.cancel=function(value)
            {
       
               // filter=value;
                //$window.alert(filter);
                $window.location.href="#/common/search_on_keystock"; 
            }
 
  $scope.apply=function(countryvalue,statevalue,namevalue,creativefieldvalue,business)
    { 
     // console.log("cityvalue="+cityvalue)
      console.log("countryvalue="+countryvalue)
      console.log("statevalue="+statevalue)
     // console.log("companyvalue="+companyvalue)
      console.log("namevalue="+namevalue)
      console.log("creativefieldvalue="+creativefieldvalue)
      console.log("people="+business)
                                name =namevalue,
                                cat_name=creativefieldvalue,
                                company_name="",
                                country=countryvalue,
                                state=statevalue
                                jobtitle="",
                                keyword="",
      
      
      
      
       filter=business;
    
      $window.location.href="#/common/search_on_keystock"; 
    }
  
    
    
    
  $scope.cancel=function(value)
   {
       
      filter=value;
      //$window.alert(filter);
       $window.location.href="#/common/search_on_keystock"; 
   }
  
  
    
})

.controller('Peoplefilktertrl', function($scope,$window,$http)
            
{
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                    
        }).success(function(responseData){
               
          //  console.log("final data"+JSON.stringify(responseData));
          //  console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         })
    
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
           // console.log("final data"+JSON.stringify(responseData));
           // console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
        $scope.cancel=function(value)
            {
       
               // filter=value;
               // $window.alert(filter);
                $window.location.href="#/common/search_on_keystock"; 
            }
 
  $scope.apply=function(cityvalue,countryvalue,statevalue,companyvalue,namevalue,creativefieldvalue,people)
    { 
    //  console.log("cityvalue="+cityvalue)
    //  console.log("countryvalue="+countryvalue)
     // console.log("statevalue="+statevalue)
     // console.log("companyvalue="+companyvalue)
      console.log("namevalue="+namevalue)
     // console.log("creativefieldvalue="+creativefieldvalue)
     // console.log("people="+people)
                                 name =namevalue,
                                 cat_name=creativefieldvalue,
                                company_name=companyvalue,
                                 country=countryvalue,
                                state=statevalue,
                                jobtitle="",
                                keyword="",
                                
       console.log("namevalue="+name)
      
      
       filter=people;
    
      $window.location.href="#/common/search_on_keystock"; 
    }
  
    
})
.controller('countryCtrl', function($scope, $ionicConfig,$rootScope,share,$window,$http,$cordovaToast,$ionicPopup) {
   
  
  

  $scope.selectedCountry = {}
  $rootScope.countries = [ {
    name: "United States",
    dial_code: "+1",
    code: "US"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF"
}, {
    name: "Albania",
    dial_code: "+355",
    code: "AL"
}, {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ"
}, {
    name: "AmericanSamoa",
    dial_code: "+1 684",
    code: "AS"
}, {
    name: "Andorra",
    dial_code: "+376",
    code: "AD"
}, {
    name: "Angola",
    dial_code: "+244",
    code: "AO"
}, {
    name: "Anguilla",
    dial_code: "+1 264",
    code: "AI"
}, {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG"
}, {
    name: "Argentina",
    dial_code: "+54",
    code: "AR"
}, {
    name: "Armenia",
    dial_code: "+374",
    code: "AM"
}, {
    name: "Aruba",
    dial_code: "+297",
    code: "AW"
}, {
    name: "Australia",
    dial_code: "+61",
    code: "AU"
}, {
    name: "Austria",
    dial_code: "+43",
    code: "AT"
}, {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ"
}, {
    name: "Bahamas",
    dial_code: "+1 242",
    code: "BS"
}, {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH"
}, {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD"
}, {
    name: "Barbados",
    dial_code: "+1 246",
    code: "BB"
}, {
    name: "Belarus",
    dial_code: "+375",
    code: "BY"
}, {
    name: "Belgium",
    dial_code: "+32",
    code: "BE"
}, {
    name: "Belize",
    dial_code: "+501",
    code: "BZ"
}, {
    name: "Benin",
    dial_code: "+229",
    code: "BJ"
}, {
    name: "Bermuda",
    dial_code: "+1 441",
    code: "BM"
}, {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT"
}, {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA"
}, {
    name: "Botswana",
    dial_code: "+267",
    code: "BW"
}, {
    name: "Brazil",
    dial_code: "+55",
    code: "BR"
}, {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO"
}, {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG"
}, {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF"
}, {
    name: "Burundi",
    dial_code: "+257",
    code: "BI"
}, {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH"
}, {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM"
}, {
    name: "Canada",
    dial_code: "+1",
    code: "CA"
}, {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV"
}, {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY"
}, {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF"
}, {
    name: "Chad",
    dial_code: "+235",
    code: "TD"
}, {
    name: "Chile",
    dial_code: "+56",
    code: "CL"
}, {
    name: "China",
    dial_code: "+86",
    code: "CN"
}, {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX"
}, {
    name: "Colombia",
    dial_code: "+57",
    code: "CO"
}, {
    name: "Comoros",
    dial_code: "+269",
    code: "KM"
}, {
    name: "Congo",
    dial_code: "+242",
    code: "CG"
}, {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK"
}, {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR"
}, {
    name: "Croatia",
    dial_code: "+385",
    code: "HR"
}, {
    name: "Cuba",
    dial_code: "+53",
    code: "CU"
}, {
    name: "Cyprus",
    dial_code: "+537",
    code: "CY"
}, {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ"
}, {
    name: "Denmark",
    dial_code: "+45",
    code: "DK"
}, {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ"
}, {
    name: "Dominica",
    dial_code: "+1 767",
    code: "DM"
}, {
    name: "Dominican Republic",
    dial_code: "+1 849",
    code: "DO"
}, {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC"
}, {
    name: "Egypt",
    dial_code: "+20",
    code: "EG"
}, {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV"
}, {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ"
}, {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER"
}, {
    name: "Estonia",
    dial_code: "+372",
    code: "EE"
}, {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET"
}, {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO"
}, {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ"
}, {
    name: "Finland",
    dial_code: "+358",
    code: "FI"
}, {
    name: "France",
    dial_code: "+33",
    code: "FR"
}, {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF"
}, {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF"
}, {
    name: "Gabon",
    dial_code: "+241",
    code: "GA"
}, {
    name: "Gambia",
    dial_code: "+220",
    code: "GM"
}, {
    name: "Georgia",
    dial_code: "+995",
    code: "GE"
}, {
    name: "Germany",
    dial_code: "+49",
    code: "DE"
}, {
    name: "Ghana",
    dial_code: "+233",
    code: "GH"
}, {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI"
}, {
    name: "Greece",
    dial_code: "+30",
    code: "GR"
}, {
    name: "Greenland",
    dial_code: "+299",
    code: "GL"
}, {
    name: "Grenada",
    dial_code: "+1 473",
    code: "GD"
}, {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP"
}, {
    name: "Guam",
    dial_code: "+1 671",
    code: "GU"
}, {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT"
}, {
    name: "Guinea",
    dial_code: "+224",
    code: "GN"
}, {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW"
}, {
    name: "Guyana",
    dial_code: "+595",
    code: "GY"
}, {
    name: "Haiti",
    dial_code: "+509",
    code: "HT"
}, {
    name: "Honduras",
    dial_code: "+504",
    code: "HN"
}, {
    name: "Hungary",
    dial_code: "+36",
    code: "HU"
}, {
    name: "Iceland",
    dial_code: "+354",
    code: "IS"
}, {
    name: "India",
    dial_code: "+91",
    code: "IN"
}, {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID"
}, {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ"
}, {
    name: "Ireland",
    dial_code: "+353",
    code: "IE"
}, {
    name: "Israel",
    dial_code: "+972",
    code: "IL"
}, {
    name: "Italy",
    dial_code: "+39",
    code: "IT"
}, {
    name: "Jamaica",
    dial_code: "+1 876",
    code: "JM"
}, {
    name: "Japan",
    dial_code: "+81",
    code: "JP"
}, {
    name: "Jordan",
    dial_code: "+962",
    code: "JO"
}, {
    name: "Kazakhstan",
    dial_code: "+7 7",
    code: "KZ"
}, {
    name: "Kenya",
    dial_code: "+254",
    code: "KE"
}, {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI"
}, {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW"
}, {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG"
}, {
    name: "Latvia",
    dial_code: "+371",
    code: "LV"
}, {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB"
}, {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS"
}, {
    name: "Liberia",
    dial_code: "+231",
    code: "LR"
}, {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI"
}, {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT"
}, {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU"
}, {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG"
}, {
    name: "Malawi",
    dial_code: "+265",
    code: "MW"
}, {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY"
}, {
    name: "Maldives",
    dial_code: "+960",
    code: "MV"
}, {
    name: "Mali",
    dial_code: "+223",
    code: "ML"
}, {
    name: "Malta",
    dial_code: "+356",
    code: "MT"
}, {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH"
}, {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ"
}, {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR"
}, {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU"
}, {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT"
}, {
    name: "Mexico",
    dial_code: "+52",
    code: "MX"
}, {
    name: "Monaco",
    dial_code: "+377",
    code: "MC"
}, {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN"
}, {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME"
}, {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS"
}, {
    name: "Morocco",
    dial_code: "+212",
    code: "MA"
}, {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM"
}, {
    name: "Namibia",
    dial_code: "+264",
    code: "NA"
}, {
    name: "Nauru",
    dial_code: "+674",
    code: "NR"
}, {
    name: "Nepal",
    dial_code: "+977",
    code: "NP"
}, {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL"
}, {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN"
}, {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC"
}, {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ"
}, {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI"
}, {
    name: "Niger",
    dial_code: "+227",
    code: "NE"
}, {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG"
}, {
    name: "Niue",
    dial_code: "+683",
    code: "NU"
}, {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF"
}, {
    name: "Northern Mariana Islands",
    dial_code: "+1 670",
    code: "MP"
}, {
    name: "Norway",
    dial_code: "+47",
    code: "NO"
}, {
    name: "Oman",
    dial_code: "+968",
    code: "OM"
}, {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK"
}, {
    name: "Palau",
    dial_code: "+680",
    code: "PW"
}, {
    name: "Panama",
    dial_code: "+507",
    code: "PA"
}, {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG"
}, {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY"
}, {
    name: "Peru",
    dial_code: "+51",
    code: "PE"
}, {
    name: "Philippines",
    dial_code: "+63",
    code: "PH"
}, {
    name: "Poland",
    dial_code: "+48",
    code: "PL"
}, {
    name: "Portugal",
    dial_code: "+351",
    code: "PT"
}, {
    name: "Puerto Rico",
    dial_code: "+1 939",
    code: "PR"
}, {
    name: "Qatar",
    dial_code: "+974",
    code: "QA"
}, {
    name: "Romania",
    dial_code: "+40",
    code: "RO"
}, {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW"
}, {
    name: "Samoa",
    dial_code: "+685",
    code: "WS"
}, {
    name: "San Marino",
    dial_code: "+378",
    code: "SM"
}, {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA"
}, {
    name: "Senegal",
    dial_code: "+221",
    code: "SN"
}, {
    name: "Serbia",
    dial_code: "+381",
    code: "RS"
}, {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC"
}, {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL"
}, {
    name: "Singapore",
    dial_code: "+65",
    code: "SG"
}, {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK"
}, {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI"
}, {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB"
}, {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA"
}, {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS"
}, {
    name: "Spain",
    dial_code: "+34",
    code: "ES"
}, {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK"
}, {
    name: "Sudan",
    dial_code: "+249",
    code: "SD"
}, {
    name: "Suriname",
    dial_code: "+597",
    code: "SR"
}, {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ"
}, {
    name: "Sweden",
    dial_code: "+46",
    code: "SE"
}, {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH"
}, {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ"
}, {
    name: "Thailand",
    dial_code: "+66",
    code: "TH"
}, {
    name: "Togo",
    dial_code: "+228",
    code: "TG"
}, {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK"
}, {
    name: "Tonga",
    dial_code: "+676",
    code: "TO"
}, {
    name: "Trinidad and Tobago",
    dial_code: "+1 868",
    code: "TT"
}, {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN"
}, {
    name: "Turkey",
    dial_code: "+90",
    code: "TR"
}, {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM"
}, {
    name: "Turks and Caicos Islands",
    dial_code: "+1 649",
    code: "TC"
}, {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV"
}, {
    name: "Uganda",
    dial_code: "+256",
    code: "UG"
}, {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA"
}, {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE"
}, {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB"
}, {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY"
}, {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ"
}, {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU"
}, {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF"
}, {
    name: "Yemen",
    dial_code: "+967",
    code: "YE"
}, {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM"
}, {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW"
}, {
    name: "land Islands",
    dial_code: "",
    code: "AX"
}, {
    name: "Antarctica",
    dial_code: null,
    code: "AQ"
}, {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO"
}, {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN"
}, {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC"
}, {
    name: "Congo, The Democratic Republic of the",
    dial_code: "+243",
    code: "CD"
}, {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI"
}, {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK"
}, {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG"
}, {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA"
}, {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK"
}, {
    name: "Iran, Islamic Republic of",
    dial_code: "+98",
    code: "IR"
}, {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM"
}, {
    name: "Jersey",
    dial_code: "+44",
    code: "JE"
}, {
    name: "Korea, Democratic People's Republic of",
    dial_code: "+850",
    code: "KP"
}, {
    name: "Korea, Republic of",
    dial_code: "+82",
    code: "KR"
}, {
    name: "Lao People's Democratic Republic",
    dial_code: "+856",
    code: "LA"
}, {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY"
}, {
    name: "Macao",
    dial_code: "+853",
    code: "MO"
}, {
    name: "Macedonia, The Former Yugoslav Republic of",
    dial_code: "+389",
    code: "MK"
}, {
    name: "Micronesia, Federated States of",
    dial_code: "+691",
    code: "FM"
}, {
    name: "Moldova, Republic of",
    dial_code: "+373",
    code: "MD"
}, {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ"
}, {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS"
}, {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN"
}, {
    name: "Réunion",
    dial_code: "+262",
    code: "RE"
}, {
    name: "Russia",
    dial_code: "+7",
    code: "RU"
}, {
    name: "Saint Barthélemy",
    dial_code: "+590",
    code: "BL"
}, {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH"
}, {
    name: "Saint Kitts and Nevis",
    dial_code: "+1 869",
    code: "KN"
}, {
    name: "Saint Lucia",
    dial_code: "+1 758",
    code: "LC"
}, {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF"
}, {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM"
}, {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1 784",
    code: "VC"
}, {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST"
}, {
    name: "Somalia",
    dial_code: "+252",
    code: "SO"
}, {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ"
}, {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY"
}, {
    name: "Taiwan, Province of China",
    dial_code: "+886",
    code: "TW"
}, {
    name: "Tanzania, United Republic of",
    dial_code: "+255",
    code: "TZ"
}, {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL"
}, {
    name: "Venezuela, Bolivarian Republic of",
    dial_code: "+58",
    code: "VE"
}, {
    name: "Viet Nam",
    dial_code: "+84",
    code: "VN"
}, {
    name: "Virgin Islands, British",
    dial_code: "+1 284",
    code: "VG"
}, {
    name: "Virgin Islands, U.S.",
    dial_code: "+1 340",
    code: "VI"
}]
//************Added by wasimakram ******************************
 var phone_check;
 var user_check;
  //$scope.loading = false;
  $scope.sub1 = false;
  $scope.sub=true;
  var choose=share.getSharedVariables();
   console.log(choose);
    if(catagory==0)
        {
          choose=(JSON.stringify(share.getSharedVariables()))
          var type=choose.substring(choose.indexOf('1')+4,choose.indexOf(',')-1);
          var name=choose.substring(choose.indexOf('2')+4,choose.indexOf('?')-8);
          var degi=choose.substring(choose.indexOf('#')+4,choose.indexOf('%')-8);
          var mail=choose.substring(choose.indexOf('?')+4,choose.indexOf('}')-1);
          var catname=choose.substring(choose.indexOf('%')+4,choose.indexOf('2')-8);
        }//
   else
      {
        choose=(JSON.stringify(share.getSharedVariables()))
        var type=choose.substring(choose.indexOf('1')+4,choose.indexOf(',')-1);
        var name=choose.substring(choose.indexOf('2')+4,choose.indexOf('#')-8);
        var degi=choose.substring(choose.indexOf('#')+4,choose.indexOf('?')-8);
        var mail=choose.substring(choose.indexOf('?')+4,choose.indexOf('%')-8);
        var catname=choose.substring(choose.indexOf('%')+4,choose.indexOf('}')-1);
     }
    
  /*  console.log(type);
    console.log(name);
    console.log(degi);
    console.log(mail);
    console.log(catname);*/
    $scope.valuestep2=function(selectvalue4,selectvalue5,selectvalue6,selectvalue7)
    {  
        //$window.alert(JSON.stringify(selectvalue5));
        $scope.loading = true;
        $scope.sub1 = true;
        $scope.sub=false;
        user_mobile=selectvalue6;
       var ccode=(JSON.stringify(selectvalue5));
       var code=ccode.substring(ccode.indexOf('+')+1,ccode.indexOf('}')-13);
        coun_code=code;
    
       var ut;
       
        if(type=='Business')
           {ut='2'}
       else
           {ut='1'}
        share.setVariable( "mob~",selectvalue6);
        var DataToSend = {
                    user_type: ut,
                    name : name,
                    cat_id: degi,
                    cat_name:catname,
                    email : mail,
                    username : selectvalue4,
                    mobile_code : code,
                    mobile_no : selectvalue6,
                    password: selectvalue7
                    
   };
    console.log("Haris Check DAta"+JSON.stringify(DataToSend));
  //$window.alert(JSON.stringify(DataToSend));
        if(user_check==1)
            {
                     $scope.sub1 = false;
                     $scope.sub=true;
                     $scope.loading = false;
                var alertPopup = $ionicPopup.alert({
              title: 'Username Check!',
              template: '<h3 class="accounttype">Username already Exist.</h3>'
                    
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
            }
        else
        {  
           console.log(phone_check);
          if(phone_check==1) 
              {
                  $scope.sub1 = false;
                     $scope.sub=true;
                      $scope.loading = false;
                 var alertPopup = $ionicPopup.alert({
              title: 'Mobileno Check!',
              template: '<h3 class="accounttype">Mobile Number already Exist.</h3>'
                     
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
              }
            else
                {
                   //$window.alert(phone_check);
                     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/userRegistration',
           
                    data: DataToSend
        }).success(function(responseData){
                
            regurl=responseData;
           // $window.alert(responseData);
            console.log(regurl);
            $cordovaToast.show("Succesfully Registered", 'short', 'center').then(function(success) {
                console.log("The toast was shown");
                     
        }, function (error) {
            
        }); $window.location.href="#/auth/Registration_Individual_step3";
  }, function(errorData){
                         var alertPopup = $ionicPopup.alert({
              title: 'Error!',
              template: '<h3 class="accounttype">Registration Fail.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
    
  }) 
                }
        }
 
       
    }
    if(choice=="Business")
          {
              var userchoice=2;
          }
      else
          { 
            var userchoice=1;
            
          }
    $scope.usercheck= function(){
        var id=document.getElementById('user').value;
         var DataToSend = {
                            user_type: userchoice,
                            field_name:'username',
                            field_value:id
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userInfocheck',
           
            data: DataToSend
        }).success(function(responseData){
            console.log(JSON.stringify(user_check));
             if(responseData==1)
                 {
                     $scope.username="Username already Exist";
                      user_check=responseData;
                      $scope.sub1 = true;
                      $scope.sub=false;
                      $scope.loading = false;
                 }
             else
                 {
                     $scope.username="";
                      user_check=responseData;
                     $scope.sub1 = false;
                      $scope.sub=true;
                    $scope.loading = false;
                     
                 }
               
  }, function(errorData){
    
  })
        
}//end of key press
    
    $scope.phonecheck= function(){
        var id=document.getElementById('phone').value;
         var DataToSend = {
                            user_type: userchoice,
                            field_name:'mobile_no',
                            field_value:id
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userInfocheck',
           
            data: DataToSend
        }).success(function(responseData){
             console.log(JSON.stringify(phone_check)); 
             if(responseData==1)
                 {
                     $scope.phone="Mobile no already Registered";
                      phone_check=responseData;
                     $scope.sub1 = true;
                     $scope.sub=false;
                    $scope.loading = false;
                 }
             else
                 {
                   $scope.phone="";
                    phone_check=responseData;
                     $scope.sub1 = false;
                     $scope.sub=true;
                      $scope.loading = false;
                    
                 }
                
  }, function(errorData){
    
  })
        
}//end of key press
//***********added by wasimakram******************************
})


.controller('RegistrationIndividualstep3ctrl', function($scope,$window,share,$ionicPopup,$http) {

  var choose=share.getSharedVariables();

    choose=(JSON.stringify(share.getSharedVariables()))
      console.log(choose);
     var mono=choose.substring(choose.indexOf('~')+4,choose.indexOf('}')-1);
    $scope.mobno = mono;//MOBILE no for OTP
    
    $scope.verify=function(val)
     {
        //$window.alert(choice);
         //$window.alert(val);
        /*if(choice=="Business")
            {
                
                 $window.location.href="#/common/about_me";
            }
        else
            {
                $window.location.href="#/common/individual";
            }*/
        
        var DataToSend = {
                            otp_value:val,
                            user_mobile: mono
                            
                            
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userOtpcheck',
           
            data: DataToSend
        }).success(function(responseData){
             console.log(responseData);
             
               if(responseData=='verified')
                   {
                     $window.location.href="#/common/login";  
                   }
              else
                  {
                     var alertPopup = $ionicPopup.alert({
              title: 'OTP Verification!',
              template: '<h3 class="accounttype">You are not verified.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });  
                  }
               
               
  }, function(errorData){
    
  })
        
     }//verify end
    $scope.showPopup = function() {
  $scope.data = {};
     $scope.loginForm={}
      
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({ 
            
    template:'<form name="loginForm" novalidate><input type="text" ng-model="data.country.dial_code" class="country_code"><select ng-model="data.country" ng-init="data.country=countries[0]" ng-options="country.name for country in countries" class="reg_select"></select><input type="tel" class="mobile_no" ng-model="data.tel" placeholder="Mobile Number"></form>',
            
    
    title: 'Change the mobile number',
    subTitle: 'Please enter A valid Mobile Number ',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },    
      {
        text: 'Ok',
        type: 'button-positive',
        onTap: function(e) {
             if (!$scope.data.tel) {
                 e.preventDefault();
                
                 /*var alertPopup = $ionicPopup.alert({
              title: 'Error!',
              template: '<h3 class="accounttype">Enter Mobile No.</h3>'
               
              
         });*/
                
             
                
                 
           } //end of if part
            else
                {
                    var url=regurl
                   var DataToSend = {
                
                userUrlCode :url,
                userMobileCode :$scope.data.country.dial_code,
                userMobile :$scope.data.tel
                    
                    
                    }
          console.log(DataToSend);
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/reSendSms',
           
                    data: DataToSend
        }).success(function(responseData){
       
              //$window.alert(JSON.stringify(responseData));
            console.log("otp:"+JSON.stringify(responseData)); //$window.location.href="#/auth/Registration_Individual_step3";
  }, function(errorData){
                         var alertPopup = $ionicPopup.alert({
              title: 'Error!',
              template: '<h3 class="accounttype">Please try again later.</h3>'
               
              
         });
            alertPopup.then(function(res) {
           console.log(res);
           });
    
  })
                }//end op else part pop up checking
             
        /*
            */
          
        }//end of on tap function
      }
    ]
       
  });  
      
        

 myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  /*$timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);*/
 }
    
  $scope.resendcode=function()
   {  
       
                   var url=regurl
                   var DataToSend = {
                
                userUrlCode :url,
                userMobileCode :coun_code,
                userMobile :user_mobile
                    
                    
                    }
                   console.log(DataToSend);
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/reSendSms',
           
                    data: DataToSend
        }).success(function(responseData){
       
              //$window.alert(JSON.stringify(responseData));
            console.log("otp:"+JSON.stringify(responseData)); //$window.location.href="#/auth/Registration_Individual_step3";
  }, function(errorData){
                        
    
  })
  }//end of resend code
    
    
})

.controller("pullctrl", function ($scope,$window,$http,demoFac,demoFacr,demoFacm,$window,$ionicPopover,$ionicPopup,$ionicActionSheet,$cordovaCamera,$ionicPopup,$cordovaToast,$sce,statusupdate,$state,$cordovaToast)
{
    $scope.doRefresh=function()
    {
        $state.reload();
    }
})
.controller("Individualctrl", function ($scope,$window,$http,demoFac,demoFacr,demoFacm,$window,$ionicPopover,$ionicPopup,$ionicActionSheet,$cordovaCamera,$ionicPopup,$cordovaToast,$sce,statusupdate,$state,$cordovaToast)
{
     //$scope.selectedTab = 2;
   
  //  $scope.loading=true;
//$window.alert("helooooooooooo")
    
    check=0;
   console.log(check)
    var homecheck=1;
    $scope.cmt=0;
    console.log(homeback);
    if(homeback=="portfolio")
        {
             homeback=""
            //var stval='video';
            // $("#"+stval).click();
            $scope.selectedTab = 2;
           
           
        }
    else if(homeback=="about")
        {
             $scope.selectedTab = 1;
            homeback=""
        }
    else if(homeback=="conection")
        {
           $scope.selectedTab = 3; 
            homeback=""
            
        }
    else
        {
            $scope.selectedTab = 0;
            homeback=""
        }
    enl=1
   $scope.loading=true;
   $scope.body=false;
   //
 //*******friend request count**********************
    //$window.alert("finaluser"+loginurl);
     //$scope.loading = false;
     $scope.tabbody=false;
    var privacy=1;
    $scope.status=userstatus;
     if(statusimage=="")
         {
             
         }
    else
        {
            $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
        }
     
  //  console.log("Status check"+userstatus)
     //console.log(loginurl);
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
  
   //  console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/homePage',
                   data: DataToSend
        }).success(function(responseData){
              
               $scope.mainhomess=responseData.detailsOfuser;
        //   console.log("home up="+ $scope.mainhomess)
                
                
      }, function(errorData){
    })
      $scope.moredata=false;
    $scope.loadMoreData=function()
    {
        console.log('check='+check)
        if(check==0)
            {
                 var DataToSend = {
                
                                user_id :id,
                                startinglimit:homecheck,
                                end_limit:homecheck+2
                              }
         homecheck=homecheck+2;
        console.log("Home data++++++++++++++++++++++++"+JSON.stringify(DataToSend))
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeDetails',
                   data: DataToSend
        }).success(function(responseData){
          
               $scope.individualhomes=responseData.Data;
         
              check=0;
        
      
    
                
      }, function(errorData){
    })
            }
        else
            {
                console.log("false");
            }
        check=1;
        //console.log("hipppppppppppppppppppppppppppppppppppppppppppppp")
        
        
       $scope.$broadcast('scroll.infiniteScrollComplete');   
       
    }

  
   /*  $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               //console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    })*/ 
//******************Play video from untrusted source*********
     $scope.trustSrc = function(src) {
        //console.log("http://creoyou.net/uploads/portfolioVideos/"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net/uploads/portfolioVideos/"+src);
     }
      $scope.getIframeSrc = function(src) {
           //console.log("wasim22222222222"+src);
     return  src;
    };
     $scope.trustSrc1 = function(src) {
       // console.log(src);
    return $sce.trustAsResourceUrl(src);
     }
      $scope.trustSrc2 = function(src) {
        //console.log("http://creoyou.net"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net"+src);
         // console.log(src)
     }
//****************end of play video untrusted source***
//****************End of home Screen*********************

//*******************end of notification******************
  $scope.tag=function(status)
   {
        userstatus=status;
        console.log("user status="+userstatus);
        //$window.alert("Helo wasim ");
        $window.location.href="#/common/tag" 
        
      
   }
    $scope.isChecked = function(id){
      var match = false;
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == id){
          match = true;
        }
      }
      return match;
  };
    $scope.data = [];
    $scope.sync = function(bool, item){
    if(bool){
      // add item
      $scope.data.push(item);
    } else {
      // remove item
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == item.id){
          $scope.data.splice(i,1);
        }
      }      
    }
  };
    $scope.donetag=function()
   {
      if($scope.data.length==0)
          {
              var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Please Select any of your connection</h3>'
                      
              
                 });
                  alertPopup.then(function(res) {
                   console.log(res);
                });
          }
        else
            {
                console.log("all checked value="+JSON.stringify($scope.data));
              //taglist=JSON.stringify($scope.data);
              taglist=$scope.data;
              $scope.status=userstatus;
              $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
              //console.log("wasim akram bora"+statusimage)
              $window.location.href="#/common/individual"  
            }
     
  }
  $scope.privacy=function()
   {
       console.log("hi")
      $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Public' },
        { text: 'Connection only' },
        { text: 'Connection & Followers' },
        { text: 'Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          if(index==0)
              {
                 privacy=1; 
              }
          else if(index==1)
              {
                  privacy=2; 
              }
          else if(index==2)
              {
                  privacy=3; 
              }
          else
              {
                 privacy=4;  
              }
          console.log("...."+privacy)
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
   }//end of privacy
  
  $scope.choosePhoto = function (val) {
                    
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                    console.log(options);
             //*********Show profile picture*****************
                $cordovaCamera.getPicture(options).then(function (imageData) {
                    console.log(imageData);
                    $scope.imgURI1 = "data:image/jpeg;base64," + imageData;
                    statusimage=imageData;
            
            })
  }
  
  $scope.statuspost=function(status)
    {
      
      if(status=='')
          {
              
          }
      else if(status==undefined)
         {
             
         }
      else
          {
              //$window.alert("hello")
      console.log("user id="+id);
      console.log("user_status="+status);
      console.log("user_privacy="+privacy);
     // console.log("status_image="+statusimage);
      console.log("Taglist="+taglist);
        //var taglist1=JSON.parse(taglist);
     // var data=[taglist];
      
       var statusdetail = {
                            user_id :id,
                            userStatus:status,
                            statusPrivacyValue:privacy,
                            image:statusimage,
                            mySelectedFriendsId:taglist,
                                
                          }
             console.log("status detail="+JSON.stringify(statusdetail));
      
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showStatusAction',
                   data: statusdetail
        }).success(function(responseData){
              $state.reload();
               console.log("status update="+JSON.stringify(responseData));
           $cordovaToast.show("Status successfully update", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                 $scope.imgURI1 = undefined;
                
               
               
               
           })
                
              
      }, function(errorData){
    }) 
          }
      
      
      
       
    }//end of post status
  
  
  //**************Following section************************
  $scope.about=function()
  {
      console.log("hi");
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AboutmeDetails',
                   data: DataToSend
        }).success(function(responseData){
               
          $scope.languages=responseData.language;
           $scope.interests=responseData.interest;
           $scope.statements=responseData.statement;
           $scope.skilss=responseData.skills;
           $scope.experiences=responseData.work;
           $scope.awards=responseData.awards;
           $scope.certifications=responseData.certifications;
           $scope.courses=responseData.course;
           $scope.educations=responseData.education;
           $scope.locations=responseData.personalDetails;
      }, function(errorData){
    }) 
  }//end of about
  $scope.portfolio = function()
  {
      console.log("portfolio")
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioAlbums',
                    data: DataToSend
        }).success(function(responseData){
               
             //$scope.followings=responseData.Following;
             //console.log(responseData);
            
         $scope.folders=responseData.AlbumDetails;
         console.log("album="+JSON.stringify($scope.folders));
      }, function(errorData){
    })
     
    //*************video********************************
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioVideos',
                    data: DataToSend
        }).success(function(responseData){
               
         // console.log("AUDIO DATA="+JSON.stringify(responseData));
           
         $scope.videos=responseData.videoDetails;
         
             
      }, function(errorData){
    })
    //*************end video****************************
   //*****************Start Audio*************************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioAudios',
                    data: DataToSend
        }).success(function(responseData){
               
     //  console.log("AUDIO DATA="+JSON.stringify(responseData));
         $scope.tracks=responseData.audioDetails; 
         
      }, function(errorData){
    })
      
  //****************End of Audio*************************
     
  }//end of portfolio
$scope.connection=function()
 {
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               //console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
     
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/followersDetail',
                   data: DataToSend
        }).success(function(responseData){
             $scope.tabbody=true;
          console.log("following"+JSON.stringify(responseData))
               
             //$scope.followings=responseData.Following;
             $scope.followings=responseData.Following;
            if($scope.followings==null)
                 {
                     $scope.value1="null";
                 }
             $scope.followerss=responseData.Followers;
             if($scope.followerss==null)
                 {
                     $scope.value="null";
                 }
            // console.log("following length="+JSON.stringify(  $scope.followerss)); 
      }, function(errorData){
    })
 }
$scope.other=function(val,val2)
 {
    console.log("hi")
    console.log("value="+val)
    otheruserid=val;
      console.log("value2="+otheruserid)
    if(val2==1)
     {
          $window.location.href="#/common/other-single-user"
     }
    else
        {
            $window.location.href="#/common/other-business-user"
        }
   
    
 }
$scope.friendlist=function()
  {
    //$window.alert("hello. controler")
    $scope.selectedTab =2; 
  }
  //*************end of following section*******************
 $scope.filepathChooser1=function()
      {
        
        console.log("hi wasim");
    }
   $scope.tagdata=[];
     $scope.final=[];
    $scope.album=[]
  $scope.tagto=function(val,countid,audio_name,audio_title,audio_title1,id,incidentId,incident_type,fname,lname,creation_date,user_status,image,video_name,likes,countit,media_name,audio_title,buisness_name,audio_source,likeActive,albums,incident_name)
   {
     /*console.log("val1="+val);
      console.log("count="+countid);
     console.log("audio_name="+audio_name);
      console.log("audio_title="+audio_title);
       console.log("audio_title="+audio_title1);
      console.log("id="+id);
      console.log("incidentId="+incidentId);
      console.log("incident_type="+incident_type);
      console.log("fname="+fname);
      console.log("lname="+lname);*/
      userfname=fname;
      userlname=lname;
      
   /* console.log("creation_date="+creation_date);
        console.log("user_status="+user_status);
      console.log("image="+image);
      console.log("video_name="+video_name);
      console.log("likes="+likes);
      console.log("countit="+countit);
      console.log("media_name="+media_name);
      console.log("audio_title="+audio_title);
      console.log("buisness_name="+buisness_name);
        console.log("audio_source="+audio_source);
      console.log("likeActive="+likeActive);*/
      console.log("albums="+albums);
      if(val!=undefined)
          {
              var DataToSend1 = {
                
                                user_id :val,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showtagged',
                   data: DataToSend1
        }).success(function(responseData){
              
         // $scope.tagto=responseData.Users;
          var tag=responseData.Users;
          $scope.tagdata.pop();
         $scope.tagdata.push({'tagopersone':tag});   
        //  console.log(JSON.stringify( $scope.tagdata)); 
         // $scope.wasim=$scope.tagdata;
       // console.log("final check="+JSON.stringify(responseData));
         for (var i = 0; i < $scope.tagdata.length; i++){
         
             $scope.tagname=$scope.tagdata[i].tagopersone;
              
            var datetime=new Date(creation_date);
            // console.log("datetime"+datetime);
             $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
            // console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
         }
         
         
      }, function(errorData){
    })
          }
      else
          {
              var DataToSend1 = {
                
                                incident_id :albums,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AlbumImages',
                   data: DataToSend1
        }).success(function(responseData){
              
         $scope.AlbumImages=responseData.images;
         $scope.countImages=responseData.countImages;
       // console.log("final check="+JSON.stringify( $scope.AlbumImages));
         var datetime=new Date(creation_date);
        //console.log("wwwwwwwwwwwww"+datetime);
        console.log("mmmmmmmmmmmmmmmmm"+creation_date); $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'AlbumImages': $scope.AlbumImages, 'countImages':$scope.countImages,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
             console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
        
         
         
      }, function(errorData){
    })
          }
    
   }
 $scope.profile=function(val)
 {
      otheruserid=val;
    $window.location.href="#/common/other-single-user"
 }
 
 $scope.rangeCreator = function (minVal, maxVal) {
     if(maxVal!=null)
         {
             var s=maxVal.length;
         }
     
    
     if(s>2)
         {
                var resttag=s-2;
                $scope.moretag="and " +resttag+ " others";
         }
     else
         {
             $scope.moretag="";
         }
  
     // console.log("minimumvalue="+0)
     //console.log("maximum length="+s)
    // console.log("more="+$scope.moretag)
    var arr = [];
   for (var i = minVal; i <= 1; i++) {
      arr.push(i);
   }
   return arr;
}
  //$scope.popcard=false;
 //$scope.test=false;
   $scope.remove=function(val)
    {
       console.log(value);
        console.log("block="+value)
    var value="sugghide1/"+val;
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:val
                                
                              }
             console.log(JSON.stringify(DataToSend));
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfriendUser',
                   data: DataToSend
        }).success(function(responseData){
           
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
       
       
    }
   
 $scope.block=function(friendid)
   {
//     var value1="sugghide/"+oldfriendid
//     var div1 = document.getElementById(value1);
//      console.log(value1)
//        console.log(div1)
//       div1.style.display = "none";
//     oldfriendid=friendid
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";
     console.log("llllllllllllllllllllllllll")
   //  $scope.popcard=true;
        var div = document.getElementById(value);
     console.log("main value="+div);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     /* document.getElementById("myDropdown").classList.toggle("show1");
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 
    }*/
   }
 $scope.blockuser=function(blockfriend)
  {
      console.log("block="+blockfriend)
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:blockfriend
                                
                              }
             console.log(DataToSend);
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/blockUser',
                   data: DataToSend
        }).success(function(responseData){
           var value="sugghide1/"+blockfriend;
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
     
  }//end of blockuser
 
 $scope.unfollowpersone=function(unfollow)
   {
      console.log("unfollow user="+unfollow)
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:unfollow
                                
                              }
             console.log(JSON.stringify(DataToSend));
     // var value="sugghide1/"+unfollow;
    // document.getElementById(value).style.display = "none";
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfollowUser',
                   data: DataToSend
        }).success(function(responseData){
           var value="sugghide1/"+unfollow;
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
     

    
   }//end of unfollow

    $scope.remessage=function(val,fname,lname,bname)
     {
        console.log("mmm"+fname)
        console.log("mmm"+bname)
        if(fname=='' || fname==null)
            {
                 pername = bname;
                console.log("mmmdfd")
            }
        else
            {
                 pername = fname+" "+lname;
                  console.log("mmppppppmdfd")
            }
            
        
         chatid=val;
        $window.location.href="#/common/chat";
         
     }
     $scope.video=[];
    $scope.videosetting=function(id,name,title,description)
     {
        
       $scope.video.pop(); $scope.video.push({'video_name':name,'video_title':title,'video_description':description,})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                video_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteVideo',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Video Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                     document.getElementById(value).style.display = "none";
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                  
                   
         
               
              }//end of index 1
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in video"> <h3 class="accounttype">Video Name : {{like.video_name}}</h3><h3 class="accounttype">Video Title : {{like.video_title}}</h3><h3 class="accounttype">Video Description : {{like.video_description}}</h3></div> </form>',
     title: 'Yours Video Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
     $scope.audio=[];
    $scope.audioseting=function(titale,desciption,id)
     {
        console.log(desciption);
         $scope.audio.pop(); $scope.audio.push({'audio_name':titale,'audio_description':desciption,'id':id})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 // document.getElementById(value).style.display = "none";
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                audio_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Audio Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                    
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                  $scope.data=[];
                 $scope.titale=titale;
                  $scope.description=desciption;
                  console.log("wasimakram"+ $scope.titale);
                var myPopup = $ionicPopup.show({
       
          template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div class="list"><label class="item item-input item-floating-label">  <span class="input-label">Audio Title</span> <input type="text" name="audioname" placeholder="Untitled Audio" ng-model="titale"> </label>  <label class="item item-input item-floating-label"> <span class="input-label">Audio Description</span><input type="text" name="audiodescription" placeholder="Description"ng-model="description"></label><label class="item item-input item-floating-label">  <span class="input-label">Audio Privacy</span>  <select name="cfield" ng-model="data.cfield2" class="reg_select" required> <option value="" disabled="disabled" selected="selected">{{cfield.cat_name}}</option>   <option  ng-repeat="group in listOfOptions2" value="{{group.id}}"ng-disabled="group.disabled" >{{group.name}} </select> </label>    </div></div></ion-scroll>',    
        title: 'Update Audio Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Cancel' },
      {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            var val=$scope.data.cfield2;
             console.log("wasim"+val)
            var DataToSend = {
                
                                user_id :uid,
                                audio_id:id,
                                audio_title:titale,
                                audio_desc:desciption,
                                privacy:val
            
            }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                     /* $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 console.log("final check="+JSON.stringify(responseData));
                          
                    
              
                }, function(errorData){
                })*/
            
       },
       }
     ]
        
   })
              }
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in audio"> <h3 class="accounttype">Video Name :{{like.audio_name}}</h3><h3 class="accounttype">Video Description :{{like.audio_description}}</h3></div> </form>',
     title: 'Yours Audio Details',
    // subTitle: 'Please use normal things',
     //cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
    $scope.listOfOptions2=[
                            {id:1,
                             name:'Public', 
                            },
                            {  id:2,
                                name:'Connection only',
                             },
        
                          
                            {
                                id:3,
                                 name: 'Connection & Followers'
                            },
                            {
                                id:4,
                                name:'Only'
                            }
                          
                          
                          
                          ]
    
    
 
})

.controller("Createeventctrl", function ($scope,$window,$http,$ionicPopup,$ionicActionSheet,$cordovaDatePicker, $ionicPlatform,$cordovaCamera,$cordovaToast)
{
 // $scope.esdate = new Date();
 // $scope.endate = new Date();
if(eventedit==1)
 {
     
$scope.ename=eventname;
$scope.Location=eventlocation;
$scope.esdate=eventdatetime;
$scope.estime=eventdatetime;
$scope.endate=eventdatetime1;
$scope.eetime=eventdatetime1;
$scope.aldesc=eventdescription;
eventedit=0;
       console.log("ename="+eventname);
        console.log("Location="+eventlocation);
        console.log("esdate="+eventdatetime);
        
        console.log("endate="+eventdatetime1);
    
        console.log("aldesc="+eventdescription);
     
 }
else
    {
        
        
//$scope.type=type1;
    
    
 $scope.ename=ename1;
$scope.Location=Location1;
$scope.esdate=esdate1;
$scope.estime=estime1;
$scope.endate=endate1;
$scope.eetime=eetime1;
$scope.aldesc=aldesc1;
$scope.type=type1;
$scope.imgURI = "data:image/jpeg;base64," + imagedataname;
        console.log("ename="+$scope.ename);
        console.log("Location="+$scope.Location);
        console.log("esdate="+$scope.esdate);
        console.log("estime="+$scope.estime);
        console.log("endate="+$scope.endate);
        console.log("eetime="+$scope.eetime);
        console.log("aldesc="+$scope.aldesc);
        console.log("type="+$scope.type);
    }//end of else
    

$scope.invite1=invite;
  console.log("invite"+$scope.invite1) 
    $scope.imageupload=function()
      {
         
         var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
             //*********Show profile picture*****************
                $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                     imagedataname=imageData
                console.log(imagedataname);
                       
      
                })
     
    }
    
    $scope.showSelectValue=function(ename,Location,esdate,estime,endate,eetime,aldesc,type)
     {
       if(type==2)
           {
               console.log("enter")
        ename1=ename;
          console.log("test"+ename1);     
        Location1=Location;
        esdate1=esdate;
        estime1=estime;
        endate1=endate;
        eetime1=eetime;
        aldesc1=aldesc;
        type1=type;
              $window.location.href="#/common/invite" ;
           }
       
            
     }
    
    
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
    
                 var DataToSend = {
                
                                user_id :id,
                             
                               
                              }
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
    $scope.createevent=function(ename,Location,esdate,estime,endate,eetime,aldesc,type)
     {
        
      
        
        console.log("ename="+ename);
        console.log("Location="+Location);
        console.log("esdate="+esdate);
        console.log("estime="+estime);
        console.log("endate="+endate);
        console.log("eetime="+eetime);
        console.log("aldesc="+aldesc);
        console.log("type="+type);
        console.log("$scope.data"+taglist1);
        
         console.log("eventid"+eventid);
        /*ename=ename,
        Location1=Location;
        esdate1=esdate;
        estime1=estime;
        endate1=endate;
        eetime1=eetime;
        aldesc1=aldesc;
        type1=type;*/
       
                 var DataToSend = {
                                
                                id:eventid,
                                user_id :id,
                                name:ename,
                                location :Location,
                                description:aldesc,
                                start_date :esdate,
                                start_time:estime,
                                end_date :endate,
                                end_time:eetime,
                                friends_can_invite :taglist1,
                                event_status:type,
                                image:imagedataname,
                                fname:userfname,
                                lname:userlname
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                     
                 $http({
                           method: 'POST',
                           url: 'http://app.creoyou.net/public/index.php/api/createEvents',
                           data: DataToSend
                       }).success(function(responseData){
                       eventid=undefined;
                       console.log("response"+JSON.stringify(DataToSend))
                     
                  console.log("response"+responseData)
                           $cordovaToast.show("Event Successfully Post", 'short', 'center').then(function(success) {
                           console.log("The toast was shown");
                
                           })
                    
              
                }, function(errorData){
                })
        
        
     }
   
    $scope.isChecked = function(id){
      var match = false;
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == id){
          match = true;
        }
      }
      return match;
  };
    $scope.data = [];
    $scope.sync = function(bool, item){
    if(bool){
      // add item
      $scope.data.push(item);
    } else {
      // remove item
      for(var i=0 ; i < $scope.data.length; i++) {
        if($scope.data[i].id == item.id){
          $scope.data.splice(i,1);
        }
      }      
    }
  };
    $scope.donetag=function()
   {
        console.log("hhhhhhh"+$scope.data)
      if($scope.data.length==0)
          {
              var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Please Select any of your connection</h3>'
                      
              
                 });
                   alertPopup.then(function(res) {
                   console.log(res);
                });
          }
        else
            {
                console.log("all checked value="+JSON.stringify($scope.data));
              //taglist=JSON.stringify($scope.data);
               taglist1=$scope.data;
             /* $scope.status=userstatus;
              $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
              //console.log("wasim akram bora"+statusimage)*/
              $window.location.href="#/common/createevent"  
            }
     
  }
      $scope.donetag1=function()
   {
        console.log("hhhhhhh"+$scope.data)
      if($scope.data.length==0)
          {
              var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Please Select any of your connection</h3>'
                      
              
                 });
                   alertPopup.then(function(res) {
                   console.log(res);
                });
          }
        else
            {
                console.log("all checked value="+JSON.stringify($scope.data));
              //taglist=JSON.stringify($scope.data);
             // taglist=$scope.data;
             /* $scope.status=userstatus;
              $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
              //console.log("wasim akram bora"+statusimage)
              $window.location.href="#/common/individual"  */
                 console.log("iiiiiiiiiiii"+$scope.data)
                 
                 
                  var DataToSend = {
                
                                user_id :id,
                                event_id:inviteid,
                                to_userid:$scope.data,
                                //audio_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                     
                 $http({
                           method: 'POST',
                           url:'http://app.creoyou.net/public/index.php/api/eventInvitations',
                           data: DataToSend
                       }).success(function(responseData){
                     
                     
                     console.log("responseData="+responseData)
                      $window.location.href="#/common/event" ;
                
//                           $cordovaToast.show("Audio Succesfully Deleted", 'short', 'center').then(function(success) {
//                           console.log("The toast was shown");
//                
//                           })
                    
              
                }, function(errorData){
                })
                 
                 
                 
                 
            }
     
  }
   
})
.controller("Eventdectrl", function ($scope,$window,$http,$ionicPopup,$ionicActionSheet)
{
      var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
    
    $scope.seedetails=function(incidentId)
     {
        
          
         myPopup = $ionicPopup.show({
        
         /* template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div style="width:100%; height: auto"><ul class="list user_list TagList"> <li class="item" ng-repeat="like in likes" ><div class="row"> <div class="col col-20"> <div class="user_img"><img ng-src="http://creoyou.net/uploads/profileImages/{{like.image}}" class="user_img"></div> </div><div class="col col-80 user_details"> <div class="user_name" ng-click="profile(like.fname)">{{like.fname}} {{like.lname}}</div></div> </div></li></ul></div></ion-scroll>', */  
         template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div style="width:100%; height: auto"> <div ng-repeat="conection in likes"><div data-ng-init="tagto(conection.id,conection.media_type,conection.name,conection.fname,conection.lname,conection.media_type,conection.start_date_time,conection.end_date_time,conection.location,conection.likeActive,conection.description,conection.image)"></div><!--     <div> <h1>wssimakram bora</h1></div>--> </div><ul class="list" ng-repeat="indihome in final">  <li class="item post_heading"><div class="postericon"> <img ng-src="http://creoyou.net/uploads/profileImages/{{indihome.image}}" class="update_logo" >   </div> <div class="poster_name"><label class="status">{{indihome.name}}</label> by {{indihome.fname}} {{indihome.lname}} </div>  </li><li class="post_body EventDetails"><a>{{indihome.datetime | date:"dd MMM  h:mma"}} -  {{indihome.datetime1 | date:"dd MMM  h:mma"}}</a><a> {{indihome.location}} </a><img ng-src="http://creoyou.net/uploads/eventsImages/{{indihome.media_type}}" class="pist_image" > </li> <h4 class="EventDetails" >{{indihome.description}}</h4></ul></div></ion-scroll>',  
       title: 'Event Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Back' },
     
     ]
        
   })
        
      
     
        
         var DataToSend = {
                                user_id:id,
                                incident_id:incidentId
                                
                              } 
     console.log("dataall="+JSON.stringify(DataToSend))
      $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/EventFullDetails',
            data: DataToSend
           
        }).success(function(responseData){
       

         
           $scope.likes=responseData.Details;
          
            //console.log("like all"+JSON.stringify( responseData.Details[0].name))
     
       $scope.ename=responseData.Details[0].name;
      
     console.log("like all22222"+JSON.stringify( $scope.ename))
         
  }, function(errorData){
    
  })
        
        
        
        
        
    }//end of see details
    
    
       $scope.final=[];
      
$scope.tagto=function(id,media_type,name,fname,lname,media_type,start_date_time,end_date_time,location,likeActive,description,image)
   {
   
  //  console.log("creation_date="+creation_date);
      /*  console.log("id="+id);
      console.log("media_type="+media_type);
      console.log("name="+name);
      console.log("fname="+fname);
      console.log("lname="+lname);
      console.log("media_type="+media_type);
      console.log("start_date_time="+start_date_time);
      console.log("end_date_time="+end_date_time);
        console.log("location="+location);
      console.log("likeActive="+likeActive);
        console.log("description="+description);
       console.log("image="+image);*/
    
              
            var datetime=new Date(start_date_time);
            // console.log("datetime"+datetime);
         eventname=name;
          console.log("image="+ $scope.ename);
            var datetime1=new Date(end_date_time);
            // console.log("datetime1"+datetime1);
            $scope.final.pop(); $scope.final.push({'id':id,'media_type':media_type,'name':name,'fname':fname,'lname':lname,'media_type':media_type,'datetime':datetime,'datetime1':datetime1,'location':location,'likeActive':likeActive,'description':description,'image':image});
        
        
           //  console.log("tag data="+JSON.stringify($scope.final));
            
             
         }
    
    
    
    
    
    
})
.factory("statusupdate", ['$http',function($http){  
    console.log("helo user")
    
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
    
             var DataToSend = {
                
                
                                user_id :id,
                                startinglimit:1,
                                end_limit:2
                             
                                
                              }
             enl=2;
             console.log("value"+enl);
             console.log("data send"+JSON.stringify(DataToSend));
    
    obj.fetchUserDetails = function(){ 
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeDetails',
                   data: DataToSend
        }).success(function(responseData){
               
         
          // console.log("final data"+JSON.stringify(responseData));
                
      }, function(errorData){
    }) 
    }

 return obj;
}])

.controller("Othersingleuserctrl", function ($scope,$window,$http,demoFac,demoFacr,demoFacm,$window,$ionicPopover,$ionicPopup,$ionicActionSheet,$cordovaCamera,$ionicPopup,$cordovaToast,$sce,statusupdate,$state,$cordovaToast)
{
     //$scope.selectedTab = 2;
   // $scope.lik=100;
    $scope.cmt=0;
    console.log(homeback);
    if(homeback=="portfolio")
        {
             homeback=""
            //var stval='video';
            // $("#"+stval).click();
            $scope.selectedTab = 2;
           
           
        }
    else if(homeback=="about")
        {
             $scope.selectedTab = 1;
            homeback=""
        }
    else if(homeback=="conection")
        {
           $scope.selectedTab = 3; 
            homeback=""
            
        }
    else
        {
            $scope.selectedTab = 0;
            homeback=""
        }
    enl=1
   $scope.loading=true;
   $scope.body=false;
   //
 //*******friend request count**********************
    //$window.alert("finaluser"+loginurl);
     //$scope.loading = false;
     $scope.tabbody=false;
    var privacy=1;
    $scope.status=userstatus;
     if(statusimage=="")
         {
             
         }
    else
        {
            $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
        }
     
    console.log("Status check"+userstatus)
     //console.log(loginurl);
     var id=otheruserid;
      
     console.log("wassssssssssssss="+id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryhomePage',
                   data: DataToSend
        }).success(function(responseData){
              
               $scope.mainhomess=responseData.detailsOfuser;
        //   console.log("home up="+ $scope.mainhomess)
                
                
      }, function(errorData){
    })
      $scope.moredata=false;
    checkedrr=0;
    enlllll=1;
    $scope.loadMoreData=function()
    {
        if(checkedrr==0)
            {
                 var DataToSend = {
                
                                user_id :id,
                                startinglimit:enlllll,
                                end_limit:enlllll+2
                              }
         enlllll=enlllll+3;
         console.log("Home data++++++++++++++++++++++++"+JSON.stringify(DataToSend))
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryHomeDetails',
                   data: DataToSend
        }).success(function(responseData){
              //console.log(JSON.stringify(responseData));
               $scope.individualhomes=responseData.Data;
              //$scope.per=responseData.Profilecomplete;
              checkedrr=0;
             console.log("home data:"+JSON.stringify($scope.individualhomes));
              
      
               //console.log("check:"+responseData[0].fname)
                 // var last = responseData.Data.length;
            // console.log("Home data-------------------"+JSON.stringify(DataToSend))
//        if( responseData.Data.length==0)
//        {
//            //$window.alert("hialert")
//            $scope.moredata=true;
//        }
    //$scope.moredata=true;
      
    
                
      }, function(errorData){
    })
            }
        else
            {
                console.log("false");
            }
        checkedrr=1;
        //console.log("hipppppppppppppppppppppppppppppppppppppppppppppp")
        
        
       $scope.$broadcast('scroll.infiniteScrollComplete');   
       
    }
     

//****************Start of Home Screen********************
  
//     $http({
//                    method: 'POST',
//                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryHomeDetails',
//                   data: DataToSend
//        }).success(function(responseData){
//               //console.log("final check="+JSON.stringify(responseData));
//          $scope.conections=responseData;
//         // $scope.individualhomes=responseData;
//              
//      }, function(errorData){
//    }) 
//******************Play video from untrusted source*********
     $scope.trustSrc = function(src) {
        //console.log("http://creoyou.net/uploads/portfolioVideos/"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net/uploads/portfolioVideos/"+src);
     }
      $scope.getIframeSrc = function(src) {
           //console.log("wasim22222222222"+src);
     return  src;
    };
     $scope.trustSrc1 = function(src) {
       // console.log(src);
    return $sce.trustAsResourceUrl(src);
     }
      $scope.trustSrc2 = function(src) {
        //console.log("http://creoyou.net"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net"+src);
         // console.log(src)
     }
//****************end of play video untrusted source***
//****************End of home Screen*********************

  
  //**************Following section************************
  $scope.about=function()
  {
      console.log("hi");
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryAboutmeDetails',
                   data: DataToSend
        }).success(function(responseData){
               
          $scope.languages=responseData.language;
           $scope.interests=responseData.interest;
           $scope.statements=responseData.statement;
           $scope.skilss=responseData.skills;
           $scope.experiences=responseData.work;
           $scope.awards=responseData.awards;
           $scope.certifications=responseData.certifications;
           $scope.courses=responseData.course;
           $scope.educations=responseData.education;
           $scope.locations=responseData.personalDetails;
      }, function(errorData){
    }) 
  }//end of about
  $scope.portfolio = function()
  {
      console.log("portfolio")
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryAlbums',
                    data: DataToSend
        }).success(function(responseData){
               
             //$scope.followings=responseData.Following;
             //console.log(responseData);
            
         $scope.folders=responseData.AlbumDetails;
        // console.log("album="+JSON.stringify($scope.folders));
      }, function(errorData){
    })
     
    //*************video********************************
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/secondaryVideos',
                    data: DataToSend
        }).success(function(responseData){
               
         
           
         $scope.videos=responseData.videoDetails;
         
             
      }, function(errorData){
    })
    //*************end video****************************
   //*****************Start Audio*************************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryAudios',
                    data: DataToSend
        }).success(function(responseData){
               
       console.log("AUDIO DATA="+JSON.stringify(responseData));
         $scope.tracks=responseData.audioDetails; 
         
      }, function(errorData){
    })
      
  //****************End of Audio*************************
     
  }//end of portfolio
$scope.connection=function()
 {
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showFriendDetails',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
     
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/SecondaryfollowersDetail',
                   data: DataToSend
        }).success(function(responseData){
             $scope.tabbody=true;
          console.log("following"+JSON.stringify(responseData))
               
             //$scope.followings=responseData.Following;
             $scope.followings=responseData.Following;
            if($scope.followings==null)
                 {
                     $scope.value1="null";
                 }
             $scope.followerss=responseData.Followers;
             if($scope.followerss==null)
                 {
                     $scope.value="null";
                 }
             console.log("following length="+JSON.stringify(  $scope.followerss)); 
      }, function(errorData){
    })
 }
$scope.other=function(val)
 {
   // console.log("hi")
    otheruserid=val;
    $window.location.href="#/common/other-single-user"
    
 }
$scope.friendlist=function()
  {
    //$window.alert("hello. controler")
    $scope.selectedTab =2; 
  }
  //*************end of following section*******************
 
   $scope.tagdata=[];
     $scope.final=[];
  $scope.tagto=function(val,countid,audio_name,audio_title,audio_title1,id,incidentId,incident_type,fname,lname,creation_date,user_status,image,video_name,likes,countit,media_name,audio_title,buisness_name,audio_source,likeActive,albums,incident_name)
   {
    
      userfname=fname;
      userlname=lname;
      
      console.log("albums="+albums);
      if(val!=undefined)
          {
              var DataToSend1 = {
                
                                user_id :val,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showtagged',
                   data: DataToSend1
        }).success(function(responseData){
              
         // $scope.tagto=responseData.Users;
          var tag=responseData.Users;
          $scope.tagdata.pop();
         $scope.tagdata.push({'tagopersone':tag});   
        //  console.log(JSON.stringify( $scope.tagdata)); 
         // $scope.wasim=$scope.tagdata;
       // console.log("final check="+JSON.stringify(responseData));
         for (var i = 0; i < $scope.tagdata.length; i++){
         
             $scope.tagname=$scope.tagdata[i].tagopersone;
              
            var datetime=new Date(creation_date);
            // console.log("datetime"+datetime);
             $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
            // console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
         }
         
         
      }, function(errorData){
    })
          }
      else
          {
              var DataToSend1 = {
                
                                incident_id :albums,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AlbumImages',
                   data: DataToSend1
        }).success(function(responseData){
              
         $scope.AlbumImages=responseData.images;
         $scope.countImages=responseData.countImages;
       // console.log("final check="+JSON.stringify( $scope.AlbumImages));
        var datetime=new Date(creation_date); $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'AlbumImages': $scope.AlbumImages, 'countImages':$scope.countImages,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
             console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
        
         
         
      }, function(errorData){
    })
          }
    
   }
 $scope.profile=function(val)
 {
      otheruserid=val;
    $window.location.href="#/common/other-single-user"
 }
 
 $scope.rangeCreator = function (minVal, maxVal) {
     if(maxVal!=null)
         {
             var s=maxVal.length;
         }
     
    
     if(s>2)
         {
                var resttag=s-2;
                $scope.moretag="and " +resttag+ " others";
         }
     else
         {
             $scope.moretag="";
         }
  
     // console.log("minimumvalue="+0)
     //console.log("maximum length="+s)
    // console.log("more="+$scope.moretag)
    var arr = [];
   for (var i = minVal; i <= 1; i++) {
      arr.push(i);
   }
   return arr;
}
  //$scope.popcard=false;
 //$scope.test=false;
    
   
 $scope.block=function(friendid)
   {
    
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";
     console.log("llllllllllllllllllllllllll")
   //  $scope.popcard=true;
        var div = document.getElementById(value);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     /* document.getElementById("myDropdown").classList.toggle("show1");
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 
    }*/
   }
 $scope.blockuser=function(blockfriend)
  {
      console.log("block="+blockfriend)
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:blockfriend
                                
                              }
             console.log(DataToSend);
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/blockUser',
                   data: DataToSend
        }).success(function(responseData){
           var value="sugghide1/"+blockfriend;
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
     
  }//end of blockuser
 
 $scope.unfollowpersone=function(unfollow)
   {
      console.log("unfollow user="+unfollow)
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:unfollow
                                
                              }
             console.log(JSON.stringify(DataToSend));
     // var value="sugghide1/"+unfollow;
    // document.getElementById(value).style.display = "none";
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfollowUser',
                   data: DataToSend
        }).success(function(responseData){
           var value="sugghide1/"+unfollow;
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
     

    
   }//end of unfollow

    $scope.remessage=function(val,fname,lname)
     {
         pername = fname+" "+lname;
         chatid=val;
        $window.location.href="#/common/chat";
         
     }
     $scope.video=[];
    $scope.videosetting=function(id,name,title,description)
     {
        
       $scope.video.pop(); $scope.video.push({'video_name':name,'video_title':title,'video_description':description,})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                video_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteVideo',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Video Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                     document.getElementById(value).style.display = "none";
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                   var myPopup = $ionicPopup.show({
       
          template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div class="list"><label class="item item-input item-floating-label">  <span class="input-label">Audio Title</span> <input type="text" name="audioname" placeholder="Untitled Audio"> </label>  <label class="item item-input item-floating-label"> <span class="input-label">Audio Description</span><input type="text" name="audiodescription" placeholder="Description"></label><input type="text" name="privacy" placeholder="privacy" ng-model="privacyvalue" ng-hide=true> <input type="text" name="user_id" placeholder="user_id" ng-model="user_id" ng-hide=true><!--label class="item item-input item-floating-label"> <textarea name="comment" id="" placeholder="Add a description... "></textarea> </label--> <div class="upload_audio">  <button ng-click="addaudio()"><i class="material-icons">library_music</i><span>Add Audio</span></button>  </div> <!--<input type="file" name="file" onchange="angular.element(this).scope().uploadFile(this.files)"/>--> <!-- <input type="file" file-model="myFile" />-->  <input type="file" id="audiofile" name="audiofile"/>  </div></ion-scroll>',    
        title: 'Your likes',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Cancel' },
     /*   {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            //share.setVariable( "Level3",$scope.data.name); 
             $scope.catagory=$scope.data.name;
           // $scope.cfield = $scope.data.name;
             //$scope.da.push({name:$scope.data})
              console.log($scope.data) ;
             share.setVariable( "Level#",name);
        share.setVariable( "Level%",$scope.data.name);
             $scope.choi.pop();
           $scope.choi.push({'name':$scope.data.name}) 
           
            
       },
       }*/
     ]
        
   })
         
         
               
              }//end of index 1
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in video"> <h3 class="accounttype">Video Name : {{like.video_name}}</h3><h3 class="accounttype">Video Title : {{like.video_title}}</h3><h3 class="accounttype">Video Description : {{like.video_description}}</h3></div> </form>',
     title: 'Yours Video Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
     $scope.audio=[];
    $scope.audioseting=function(titale,desciption,id)
     {
        console.log(desciption);
         $scope.audio.pop(); $scope.audio.push({'audio_name':titale,'audio_description':desciption,'id':id})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 // document.getElementById(value).style.display = "none";
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                audio_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Audio Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                    
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                  $scope.data=[];
                 $scope.titale=titale;
                  $scope.description=desciption;
                  console.log("wasimakram"+ $scope.titale);
                var myPopup = $ionicPopup.show({
       
          template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div class="list"><label class="item item-input item-floating-label">  <span class="input-label">Audio Title</span> <input type="text" name="audioname" placeholder="Untitled Audio" ng-model="titale"> </label>  <label class="item item-input item-floating-label"> <span class="input-label">Audio Description</span><input type="text" name="audiodescription" placeholder="Description"ng-model="description"></label><label class="item item-input item-floating-label">  <span class="input-label">Audio Privacy</span>  <select name="cfield" ng-model="data.cfield2" class="reg_select" required> <option value="" disabled="disabled" selected="selected">{{cfield.cat_name}}</option>   <option  ng-repeat="group in listOfOptions2" value="{{group.id}}"ng-disabled="group.disabled" >{{group.name}} </select> </label>    </div></div></ion-scroll>',    
        title: 'Update Audio Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Cancel' },
      {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            var val=$scope.data.cfield2;
             console.log("wasim"+val)
            var DataToSend = {
                
                                user_id :uid,
                                audio_id:id,
                                audio_title:titale,
                                audio_desc:desciption,
                                privacy:val
            
            }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 console.log("final check="+JSON.stringify(responseData));
                           /*$cordovaToast.show("Audio Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })*/
                    
              
                }, function(errorData){
                })
            
       },
       }
     ]
        
   })
              }
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in audio"> <h3 class="accounttype">Video Name :{{like.audio_name}}</h3><h3 class="accounttype">Video Description :{{like.audio_description}}</h3></div> </form>',
     title: 'Yours Audio Details',
    // subTitle: 'Please use normal things',
     //cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
    $scope.listOfOptions2=[
                            {id:1,
                             name:'Public', 
                            },
                            {  id:2,
                                name:'Connection only',
                             },
        
                          
                            {
                                id:3,
                                 name: 'Connection & Followers'
                            },
                            {
                                id:4,
                                name:'Only'
                            }
                          
                          
                          
                          ]
 
})

.controller("Followingfollowersctrl", function ($scope,$window,$http,$ionicPopup)
{
    
    //$window.alert("hi controler");
    homeback="conection"
   
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
    if(userfollowingid=="")
        {
           var DataToSend = {
                
                                user_id :id,
                                
                              } 
        }
    else
        {
           var DataToSend = {
                
                                user_id :otheruserid,
                                
                              }  
        }
    
             
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/followersDetail',
                   data: DataToSend
        }).success(function(responseData){
               userfollowingid==""
             //$scope.followings=responseData.Following;
             $scope.followings=responseData.Following;
           if($scope.followings==null)
                 {
                     $scope.value1="null";
                 }
            $scope.followerss=responseData.Followers;
            
             console.log("following length="+JSON.stringify(  $scope.followerss)); 
         if($scope.followerss==null)
                 {
                     $scope.value="null";
                 }
      }, function(errorData){
    })
   $scope.other=function(val)
 {
   // console.log("hi")
    otheruserid=val;
    $window.location.href="#/common/other-single-user"
    
 }  
    $scope.block=function(friendid)
   {
  
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";

   //  $scope.popcard=true;
        var div = document.getElementById(value);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     
    
   }
     $scope.unfollowpersone=function(unfollow)
   {
      console.log("unfollow user="+unfollow)
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:unfollow
                                
                              }
             console.log(JSON.stringify(DataToSend));
     // var value="sugghide1/"+unfollow;
    // document.getElementById(value).style.display = "none";
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfollowUser',
                   data: DataToSend
        }).success(function(responseData){
           var value="sugghidee/"+unfollow;
             document.getElementById(value).style.display = "none";
            console.log("block response"+responseData)
      //$scope.test=true;
          
     
                    
      }, function(errorData){
    }) 
     

    
   }//end of unfollow
    
})

.controller("Setingctrl", function ($scope,$window,$http,$ionicPopup)
{
    
    //$window.alert("hi controler");
   homeback="conection"
    console.log(loginurl);
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
     $scope.usercheck= function(){
          var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
                      
                console.log("total user type"+usertype)
        var id=document.getElementById('user').value;
         var DataToSend = {
                            user_type: usertype,
                            field_name:'username',
                            field_value:id
                          }
         console.log(DataToSend);
         $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/userInfocheck',
           
            data: DataToSend
        }).success(function(responseData){
            console.log(JSON.stringify(responseData));
             if(responseData==1)
                 {
                     $scope.username="Username already Exist";
                     
                   
                 }
             else
                 {
                     $scope.username="";
                    
                     
                 }
               
  }, function(errorData){
    
  })
        
}//end of key press
    
 
           var DataToSend = {
                
                                user_id :id,
                                
                              } 
           $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/privateData',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final personalstatement="+JSON.stringify(responseData));
          $scope.personalstatement=responseData;
         if(responseData==null)
             {
                 $scope.value='null';
             }
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    })
        
   $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showUnblocked',
                   data: DataToSend
        }).success(function(responseData){
              // console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         if(responseData==null)
             {
                 $scope.value='null';
             }
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    })
   $scope.unfollow=function(val)
    {
        var DataToSend = {
                
                                user_id :8,
                                to_userid:val
                                
                              }
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/UnblockUser',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    })
       
   }
   $scope.shownGroup7 = null;
      $scope.shownGroup1 = null;
      $scope.shownGroup2 = null;
      $scope.shownGroup3 = null;
      $scope.shownGroup4 = null;
      $scope.shownGroup5 = null;
      $scope.shownGroup6 = null;

   
    
   $scope.toggleGroup = function(group,val,val2) {
       //$window.alert(JSON.stringify(val));
      
      
    if(val=='location')
          {
              // $window.alert(JSON.stringify("wasim")); 
              if ($scope.isGroupShown2(group)) 
                   { //$window.alert(JSON.stringify("wasim"));
                       $scope.shownGroup2 = null;
                       // $window.alert(JSON.stringify(group));
     
                   }
               else 
                    { //$window.alert(JSON.stringify("akram"));
                        $scope.shownGroup2 = group;
                        //$window.alert(JSON.stringify(group));
     
                     }
          }
     
    else if(val=='creative')
        {
            
            if ($scope.isGroupShown1(group)) 
     {
           $scope.shownGroup1 = null;
        // $window.alert(JSON.stringify(group));
     
     }
      else 
      {
         $scope.shownGroup1 = group;
          //$window.alert(JSON.stringify(group));
     
      }
          
        }
    else if(val=='skill')
        {
            if ($scope.isGroupShown3(group)) 
     {
           $scope.shownGroup3 = null;
        // $window.alert(JSON.stringify(group));
     
     }
      else 
      {
         $scope.shownGroup3 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
            
        }
    else if(val=='ocupation')
        {
            
            if ($scope.isGroupShown4(group)) 
               {
                       $scope.shownGroup4 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup4 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
    else if(val=='experience')
        {
            
            if ($scope.isGroupShown5(group)) 
               {
                       $scope.shownGroup5 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup5 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
    else if(val=='education')
        {
            
            console.log(val2)
            $scope.value=val2;
            
            if ($scope.isGroupShown6(group)) 
               {
                       $scope.shownGroup6 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup6 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
          
    else if(val=='course')
        {
            
           if ($scope.isGroupShown7(group)) 
              {
                 $scope.shownGroup7 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup7 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
       else 
        {
            
           if ($scope.isGroupShown(group)) 
              {
                 $scope.shownGroup = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
     
          
  
 // console.log("dkjgkdfj");
  };
  
     $scope.isGroupShown1 = function(group) {
    return $scope.shownGroup1 === group;
  };
    $scope.isGroupShown2 = function(group) {
    return $scope.shownGroup2 === group;
  };
    $scope.isGroupShown3 = function(group) {
    return $scope.shownGroup3 === group;
  };
  $scope.isGroupShown4 = function(group) {
    return $scope.shownGroup4 === group;
  };
    $scope.isGroupShown5 = function(group) {
    return $scope.shownGroup5 === group;
  };
    $scope.isGroupShown6 = function(group) {
    return $scope.shownGroup6 === group;
  };
  $scope.isGroupShown7 = function(group) {
    return $scope.shownGroup7 === group;
  };
    $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})
    .controller('demoCtrl', ['$scope', '$interval', '$timeout', '$window', 'roundProgressService', function($scope, $interval, $timeout, $window, roundProgressService,$cordovaCamera){		
    $scope.current =        12.5;
    $scope.max =            50;
    $scope.offset =         0;
    $scope.timerCurrent =   0;
    $scope.uploadCurrent =  0;
    $scope.stroke =         4;
    $scope.radius =         45;
    $scope.isSemi =         false;
    $scope.rounded =        false;
    $scope.responsive =     false;
    $scope.clockwise =      true;
    $scope.currentColor =   '#1a3262';
    $scope.bgColor =        '#fff';
    $scope.duration =       800;
    $scope.currentAnimation = 'easeOutCubic';
    $scope.animationDelay = 0;
	$scope.per=($scope.current/$scope.max)*100;

    $scope.increment = function(amount){
        $scope.current += (amount || 1);
    };
    //*******************************************************
    $scope.CompletedEvent = function (scope) {
        console.log("Completed Event called");
    };

    $scope.ExitEvent = function (scope) {
        console.log("Exit Event called");
    };

    $scope.ChangeEvent = function (targetElement, scope) {
        console.log("Change Event called");
        console.log(targetElement);  //The target element
        console.log(this);  //The IntroJS object
    };

    $scope.BeforeChangeEvent = function (targetElement, scope) {
        console.log("Before Change Event called");
        console.log(targetElement);
    };

    $scope.AfterChangeEvent = function (targetElement, scope) {
        console.log("After Change Event called");
        console.log(targetElement);
    };

    $scope.IntroOptions = {
        steps:[
        {
            element: document.querySelector('#step1'),
            intro: "This is the first tooltip."
        },
      
        {
            element: '#step2',
            intro: 'Get it, use it.'
        }
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };

    $scope.ShouldAutoStart = true;

    
    //*******************************************************

    $scope.decrement = function(amount){
        $scope.current -= (amount || 1);
    };

    $scope.animations = [];

    angular.forEach(roundProgressService.animations, function(value, key){
        $scope.animations.push(key);
    });

    $scope.getStyle = function(){
        var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': $scope.isSemi ? 'auto' : '50%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': $scope.radius/3.5 + 'px'
        };
    };

    $scope.getColor = function(){
        return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
    };

    $scope.showPreciseCurrent = function(amount){
        $timeout(function(){
            if(amount <= 0){
                $scope.preciseCurrent = $scope.current;
            }else{
                var math = $window.Math;
                $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
            }
        });
    };
    
    var getPadded = function(val){
        return val < 10 ? ('0' + val) : val;
    };

    $interval(function(){
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        $scope.hours = hours;
        $scope.minutes = minutes;
        $scope.seconds = seconds;
        $scope.time = getPadded(hours) + ':' + getPadded(minutes) + ':' + getPadded(seconds);
    }, 1000);
    
        
     
    
}])

//********************Home Control******************************
.controller("Homectrl", function ($scope,$window,$ionicActionSheet,$http,$cordovaCamera)
    {
      $scope.img=false;
      $scope.post=function(postvalu)
        {
          // $window.alert("hi");
           var data=(JSON.stringify(postvalu));
           var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
           $http.post(link, {username : data}).then(function (res)
                {
                   $scope.response = res.data;
                 // $window.alert(JSON.stringify($scope.response))
                });
    
    }
  $scope.image=function()
    {
        var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                   
    $cordovaCamera.getPicture(options).then(function (imageData)       {
            $scope.img=true;
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
                     
          }, function (err) 
                    {
                        $window.alert("error");
                    });
                
      //$scope.img=true;
  }
  
    $scope.action=function()
    {
        //$window.alert("hi");
      // Show the action sheet
   /*var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Public' },
       { text: 'Only me' },
       { text: 'Connection only' }
     ],
     destructiveText: 'Delete',
     titleText: 'Your Status',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       if(index === 0){
	   // code for button 1 
	   }
	   if(index === 1){
	     // code for button 2
	   }
     }
   })*/
        $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share balanced"></i> Public' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Connection only' },
        { text: '<i class="icon ion-share balanced"></i> Connection & Followers' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
  }
         
})

//********************End of Home Control***********************

.controller("Headercontroler", function ($scope,$window,$ionicPopover,$cordovaSQLite){
     $ionicPopover.fromTemplateUrl('templates/popover1.html', {
    scope: $scope,
  }).then(function(popover1) {
    $scope.popover1 = popover1;
  });
    
    $scope.logout=function()
      {
       
       
        var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1,location:'default' });
             
            var query = "DELETE  FROM login WHERE status = ?";
              $cordovaSQLite.execute(db, query, [1]).then(function(res){
            console.log("...............DELETED............");
      }, function (err) {
      console.error(err);
     });
         $window.location.href="#/common/login"
          $scope.popover1.hide();
      
      }
    $scope.postjob=function()
    {
        console.log("ggggggggggggggggggggggggggggggggggg");
         $scope.popover1.hide();
        $window.location.href="#/common/job_post_form"
    }
    
    $scope.alljob=function()
    {
        
         $scope.popover1.hide();
        $window.location.href="#/common/joblist"
    }
    $scope.changepassword=function()
     {
        $scope.popover1.hide();
        $window.location.href="#/common/changepassword" 
     }
    
     $scope.myjob=function()
    {
        
         $scope.popover1.hide();
        $window.location.href="#/common/job_posted_list"
     }
    
     $scope.event=function()
      {
          $scope.popover1.hide();
         $window.location.href="#/common/event"
      }
     
         $scope.setting=function()
    {
                console.log("helo")
         $scope.popover1.hide();
     
        $window.location.href="#/common/seting"
     }
})

.controller("Creoloopctrl", function ($scope,$window,$http,$sce,loop,$ionicPopup)            
{
    
    $scope.homereturn=function()
     {
        var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
                      
                console.log("total user type"+usertype)
                      if(usertype==1)
                          {
                              $window.location.href="#/common/individual"
                          }
                      else
                          {
                              $window.location.href="#/common/about_me";
                          }
        
     }
    
    
     
            $scope.loading=true;
              $scope.body=false;
       var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
          //console.log(id);
    
             
    
     $scope.moredata = false;
//$scope.loop1=[];
//$scope.loop2=[];
    //$scope.loopfun=function(val)
     // {
       //  $scope.loop2.push({val}); 
        // console.log("wasim"+JSON.stringify($scope.loop2))
      //}
      
    
   var   enlll=1;
    var  check=0;
    $scope.loadMoreData=function()
    {
        if(check==0)
            {
                 var DataToSend = {
                
                                user_id :id,
                                startinglimit:enlll,
                                end_limit:enlll+5
                              }
         enlll=enlll+5;
         console.log("Home data++++++++++++++++++++++++"+JSON.stringify(DataToSend))
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/loopDetails',
                   data: DataToSend
        }).success(function(responseData){
              // console.log(JSON.stringify(responseData));
             console.log("Home data-------------------"+JSON.stringify(DataToSend))
               $scope.loop=responseData.Data;
              //$scope.per=responseData.Profilecomplete;
              check=0;
             console.log("home data:"+JSON.stringify($scope.loop));
              
      
               //console.log("check:"+responseData[0].fname)
                  var last = responseData.Data.length;
            
      /*  if($scope.individualhomes.length==0)
        {
            //$window.alert("hialert")
            $scope.moredata=true;
        }*/
    //$scope.moredata=true;
      
    
                
      }, function(errorData){
    })
            }
        else
            {
                console.log("false");
                  check=1;
            }
      

        
        
       $scope.$broadcast('scroll.infiniteScrollComplete');   
       
    }
 
    $scope.trustSrc = function(src) {
       
    return $sce.trustAsResourceUrl("http://creoyou.net/uploads/portfolioVideos/"+src);
     }
      $scope.getIframeSrc = function(src) {
         
     return  src;
    }
       $scope.trustSrc1 = function(src) {
    
    return $sce.trustAsResourceUrl(src);
     }
      $scope.trustSrc2 = function(src) {
   
    return $sce.trustAsResourceUrl("http://creoyou.net"+src);
         
     } 
   // $scope.final=[]; 
    $scope.tagdata=[];
     $scope.final=[];
 $scope.tagdata=[];
     $scope.final=[];
   $scope.tagto=function(val,countid,audio_name,audio_title,audio_title1,id,incidentId,incident_type,fname,lname,creation_date,user_status,image,video_name,likes,countit,media_name,audio_title,buisness_name,audio_source,likeActive,albums)
   {
     /*console.log("val1="+val);
      console.log("count="+countid);
     console.log("audio_name="+audio_name);
      console.log("audio_title="+audio_title);
       console.log("audio_title="+audio_title1);
      console.log("id="+id);
      console.log("incidentId="+incidentId);
      console.log("incident_type="+incident_type);
      console.log("fname="+fname);
      console.log("lname="+lname);*/
      userfname=fname;
      userlname=lname;
      
   /* console.log("creation_date="+creation_date);
        console.log("user_status="+user_status);
      console.log("image="+image);
      console.log("video_name="+video_name);
      console.log("likes="+likes);
      console.log("countit="+countit);
      console.log("media_name="+media_name);
      console.log("audio_title="+audio_title);
      console.log("buisness_name="+buisness_name);
        console.log("audio_source="+audio_source);
      console.log("likeActive="+likeActive);*/
      console.log("albums="+albums);
      if(val!=undefined)
          {
              var DataToSend1 = {
                
                                user_id :val,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showtagged',
                   data: DataToSend1
        }).success(function(responseData){
              
         // $scope.tagto=responseData.Users;
          var tag=responseData.Users;
          $scope.tagdata.pop();
         $scope.tagdata.push({'tagopersone':tag});   
        //  console.log(JSON.stringify( $scope.tagdata)); 
         // $scope.wasim=$scope.tagdata;
       // console.log("final check="+JSON.stringify(responseData));
         for (var i = 0; i < $scope.tagdata.length; i++){
         
             $scope.tagname=$scope.tagdata[i].tagopersone;
              
            var datetime=new Date(creation_date);
            // console.log("datetime"+datetime);
             $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive});
           // $scope.final.push($scope.wasim);
        
            // console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
         }
         
         
      }, function(errorData){
    })
          }
      else
          {
              var DataToSend1 = {
                
                                incident_id :albums,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AlbumImages',
                   data: DataToSend1
        }).success(function(responseData){
              
         $scope.AlbumImages=responseData.images;
         $scope.countImages=responseData.countImages;
       // console.log("final check="+JSON.stringify( $scope.AlbumImages));
        var datetime=new Date(creation_date); $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'AlbumImages': $scope.AlbumImages, 'countImages':$scope.countImages});
           // $scope.final.push($scope.wasim);
        
            // console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
        
         
         
      }, function(errorData){
    })
          }
    
   }
 
 
 $scope.rangeCreator = function (minVal, maxVal) {
     if(maxVal!=null)
         {
             var s=maxVal.length;
         }
     
    
     if(s>2)
         {
                var resttag=s-2;
                $scope.moretag="and " +resttag+ " others";
         }
     else
         {
             $scope.moretag="";
         }
  
     // console.log("minimumvalue="+0)
     //console.log("maximum length="+s)
    // console.log("more="+$scope.moretag)
    var arr = [];
   for (var i = minVal; i <= 1; i++) {
      arr.push(i);
   }
   return arr;
}

   $scope.profile=function(val)
 {
       console.log("value"+val)
      otheruserid=val;
    $window.location.href="#/common/other-single-user"
 }
})

.controller("Likectrl", function ($scope,$window,$ionicPopover,$http,$ionicPopup)
             
            
{
    var myPopup;
   
     $scope.messages=[];
    var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
    $scope.postcomment=function(incidentId,incident_type,comment,id,fname,lname)
     {
        
        
        
        
        console.log("alert="+comment)
        if(comment=='')
            {
                
            }
        else if(comment==undefined)
            {
                console.log("undifined");
            }
        else
            {
                var DataToSend = {
                                user_id:uid,
                                type :incident_type,
                                incidentId:incidentId,
                                comment:comment,
                                typeId:id
                                
                              }
                $scope.yourcomment='';
       $scope.messages.push({'fname':fname,"lname":lname,'comment':comment}); 
           console.log("dataall="+JSON.stringify(DataToSend))
        $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/commentInevent',
            data: DataToSend
           
        }).success(function(responseData){
            //$window.alert("Successfully post comment");
           
             $scope.cmt=1;
            //$scope.yourcomment="";
             $scope.comment=4;
             $scope.cvalues=1111;
             //console.log("response"+JSON.stringify( $scope.comment))
             console.log("response"+JSON.stringify( responseData))
        }, function(errorData){
    
     })  
            }
       
     }
    
 $scope.like=function(incidentId,incident_type,id)
   {
     
     console.log("4444444444"+incident_type);
      console.log("444444fgdh4444"+incidentId);
      console.log("444444fgdh4444"+id);
      myPopup = $ionicPopup.show({
         /* template: '<form name="myForm" novalidate> <ul class="list notificationlist" ng-repeat="like in likes"> <li class="item unread" >  <div class="row"> <div class="col col-25"><img ng-src="http://creoyou.net/uploads/profileImages/{{like.image}}" class="notification_img"></div> <div class="col ">  <div class="notification_title">{{like.fname}}{{like.lname}}</div> <div class="notification_time"> {{like.designation}}</div></div></div></li></ul> </form>',*/
          template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div style="width:100%; height: auto"><ul class="list user_list TagList"> <li class="item" ng-repeat="like in likes" ><div class="row"> <div class="col col-20"> <div class="user_img"><img ng-src="http://creoyou.net/uploads/profileImages/{{like.image}}" class="user_img"></div> </div><div class="col col-80 user_details"> <div class="user_name" ng-click="profile(like.fname)">{{like.fname}} {{like.lname}}</div></div> </div></li></ul></div></ion-scroll>',    
        title: 'Your likes',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Cancel' },
     /*   {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            //share.setVariable( "Level3",$scope.data.name); 
             $scope.catagory=$scope.data.name;
           // $scope.cfield = $scope.data.name;
             //$scope.da.push({name:$scope.data})
              console.log($scope.data) ;
             share.setVariable( "Level#",name);
        share.setVariable( "Level%",$scope.data.name);
             $scope.choi.pop();
           $scope.choi.push({'name':$scope.data.name}) 
           
            
       },
       }*/
     ]
        
   })
     var DataToSend = {
                                event_id:id,
                                type :incident_type,
                                incident_id:incidentId
                                
                              } 
     console.log("dataall="+JSON.stringify(DataToSend))
      $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/seeLikes',
            data: DataToSend
           
        }).success(function(responseData){
       

         
           $scope.likes=responseData.details;
          
            console.log("like all"+JSON.stringify( $scope.likes))
         
         
         
         
  }, function(errorData){
    
  })
   }//like end
 
$scope.likecreate=function(val,val1,val2,fname,lname)
   {
    var myButtonClasses = document.getElementById("btn1").classList;
     console.log(myButtonClasses)
    // myButtonClasses.add("likeActive");
     //var class=class;
    // var mainclass='class'+val;
       //console.log($scope);
     //var mainclass = $scope.mainclass;
     //var was="lik"+val
    // console.log("was----------------"+was)
     console.log(val2);
     if(val2==='likeActive')
         {
               if($scope.mainclass=== undefined)
        {
                 $scope.mainclass= "likeActive";
        }
             
         }
   
     
      if ($scope.mainclass=== "likeActive")
        {
        $scope.mainclass= "likeDeactive";
             //console.log("hi unlike")
                var DataToSend = {
                
                               user_id :uid,
                                incidentId:val,
                                incident_type:val1,
                                fname:userfname,
                                lname:userlname
                               
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
  
        //console.log("kkkkkk")
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/likeEvent',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final message="+JSON.stringify(responseData))
                $scope.lik=responseData;
                 $scope.values=111;
             // $window.alert( $scope.lik);
                
      }, function(errorData){
    })
        
        }
          
          
     
    else
        {
            
             $scope.mainclass = "likeActive";
            var DataToSend = {
                
                                user_id :uid,
                                incidentId:val,
                                incident_type:val1,
                                fname:userfname,
                                lname:userlname
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
  
        //console.log("kkkkkk")
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/likeEvent',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final message="+JSON.stringify(responseData))
             $scope.lik=responseData;
            $scope.values=111;
              //$window.alert( $scope.lik);
                
      }, function(errorData){
    })
        }
     
     
     console.log($scope.mainclass)
     /*   if($scope.mainclass==="likeDeactive")
            {
               
               
            }
       else
           {
               var DataToSend = {
                
                                user_id :uid,
                                incidentId:val,
                                incident_type:val1
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
  
        //console.log("kkkkkk")
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/likeEvent',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final message="+JSON.stringify(responseData))
             $scope.lik='1';
                
      }, function(errorData){
    })
           }*/
     
      /*if (myButtonClasses.contains("likeDeactive")) {
                  myButtonClasses.remove("likeDeactive");
  } else {
    myButtonClasses.add("likeDeactive");
  }
 if (myButtonClasses.contains("likeActive")) {
    myButtonClasses.remove("likeActive");
  } else {
    myButtonClasses.add("likeActive");
  }*/
    /* var DataToSend = {
                
                                user_id :uid,
                                incidentId:val
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));*/
  
        //console.log("kkkkkk")
//        return $http({
//                    method: 'POST',
//                    url: 'http://app.creoyou.net/public/index.php/api/likeEvent',
//                   data: DataToSend
//        }).success(function(responseData){
//               console.log("final message="+JSON.stringify(responseData))
//             $scope.lik=100;
//                
//      }, function(errorData){
//    }) 
     
  }//end of create
 
   
 $scope.comment=function(incidentId,incident_type,id)
   {
     console.log("4444444444"+id);
     var myPopup = $ionicPopup.show({
          template: '<div ng-repeat="mes in likes" class="PostComment"> <div class="postericon"> <img ng-src="http://creoyou.net/uploads/profileImages/{{mes.image}}" class="update_logo" > </div> <div class="poster_name">{{mes.fname}}{{mes.lname}}</div><div class="poster_name">{{mes.comment}}</div> </div>',
     title: 'Yours comment',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
     /*  {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            //share.setVariable( "Level3",$scope.data.name); 
             $scope.catagory=$scope.data.name;
           // $scope.cfield = $scope.data.name;
             //$scope.da.push({name:$scope.data})
              console.log($scope.data) ;
             share.setVariable( "Level#",name);
        share.setVariable( "Level%",$scope.data.name);
             $scope.choi.pop();
           $scope.choi.push({'name':$scope.data.name}) 
           
            
       },
       }*/
     ]
        
   })
     var DataToSend = {
                
                                type :incident_type,
                                incident_id:incidentId,
                                typeId:id
                              } 
     console.log("dataall="+JSON.stringify(DataToSend))
      $http({
            method: 'POST',
            url: 'http://app.creoyou.net/public/index.php/api/seeComments',
            data: DataToSend
           
        }).success(function(responseData){
       

         
         $scope.likes=responseData.comments;
          
            console.log("like all"+JSON.stringify( $scope.likes))
          
         
         
         
  }, function(errorData){
    
  })
   }//like end
 
   $scope.profile=function(val)
 {
       console.log("value"+val)
      otheruserid=val;
       myPopup.close();
   // $window.location.href="#/common/other-single-user"
 } 
})

.factory("loop", ['$http',function($http){  
    var obj = {};
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log("id"+id);
    
            /* var DataToSend = {
                
                                user_id :id,
                                startinglimit:enl,
                                end_limit:enl+2
                              }
             console.log("++++++++++++++++++++++++++++++++++");
             console.log("data="+JSON.stringify(DataToSend));
    enl=enl+2;*/
    
    obj.fetchUserDetails = function(){ 
          var DataToSend = {
                
                                user_id :id,
                                startinglimit:1,
                                end_limit:100
                              }
           //  console.log("++++++++++++++++++++++++++++++++++");
            // console.log("data="+JSON.stringify(DataToSend));
    enl=enl+2;
        //console.log("kkkkkk")
        return $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/loopDetails',
                   data: DataToSend
        }).success(function(responseData){
              // console.log("final message="+JSON.stringify(responseData))
           
                
      }, function(errorData){
    }) 
    }

 return obj;
}])    

.controller("aboutmeaccordianctrl", function ($scope,$window,$ionicPopover,$http,$cordovaToast)
             
            
{
$scope.prolevel=[
    
    {
        id:1,
        key:"level",
        name:"Beginer"
    },
    {
        id:2,
        key:"level",
        name:"Medium"
    },
    {
        id:3,
        key:"level",
        name:"Effecient"
    }
    
    ]
    
    $scope.months=[
    
    {
        id:1,
        key:"month",
        name:"Jan"
    },
    {
        id:2,
        key:"month",
        name:"Feb"
    },
        {
        id:3,
        key:"month",
        name:"Mar"
    },
    {
        id:4,
        key:"month",
        name:"Apr"
    },
        {
        id:5,
        key:"month",
        name:"May"
    },
    {
        id:6,
        key:"month",
        name:"Jun"
    },
        {
        id:7,
        key:"month",
        name:"Jul"
    },
    {
        id:8,
        key:"month",
        name:"Aug"
    },
        {
        id:9,
        key:"month",
        name:"Sep"
    },
    {
        id:10,
        key:"month",
        name:"Oct"
    },
        {
        id:11,
        key:"month",
        name:"Nov"
    },
    {
        id:12,
        key:"month",
        name:"Dec"
    }
]
    $scope.name='wasimakram';
     console.log(loginurl);
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
    //var id=8;
     console.log(id);
   
        
           var DataToSend = {
                
                                user_id :id,
                                
                              } 
        
         
      console.log("hi");
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/countries',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.countries));
            $scope.listOfOptions=responseData.countries;
                
       }, function(errorData){
         }) 
    $scope.showSelectValue = function (val) { 
    // countrycode=val;
        console.log("value="+val)
          var DataToSend = {
                
                                country_id :val,
                                
                              }
        
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/states',
                   data: DataToSend
        }).success(function(responseData){
               
            console.log("final data"+JSON.stringify(responseData));
            console.log("final filter data"+JSON.stringify(responseData.states));
            $scope.listOfOptions1=responseData.states;
                
       }, function(errorData){
         }) 
        
    }
    
     $http({
            method: 'GET',
            url: 'http://app.creoyou.net/public/index.php/api/user-category/1',
            /*headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},*/
           
        }).success(function(responseData){
       

         $scope.listOfOptions2=responseData
  }, function(errorData){
    //error
  })
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AboutmeDetails',
                   data: DataToSend
        }).success(function(responseData){
            console.log(JSON.stringify(responseData)) ;  
          $scope.languages=responseData.language;
           if($scope.languages==null)
               {
                   $scope.langu="show";
               }
           $scope.interests=responseData.interest;
           
           $scope.statements=responseData.statement;
           if( $scope.statements==null)
               {
                   $scope.statement="show1";
               }
           $scope.skilss=responseData.skills;
            if($scope.skilss==null)
               {
                   $scope.skillvalue="show4";
                   console.log("editskill")
               }
            $scope.skillss1=JSON.stringify(responseData.skills);
           $scope.experiences=responseData.work;
            $scope.languages=responseData.language;
           $scope.awards=responseData.awards;
           $scope.certifications=responseData.certifications;
           $scope.courses=responseData.course;
           
           $scope.educations=responseData.education;
           $scope.locations=responseData.personalDetails;
            $scope.interests=responseData.interest;
            if($scope.interests==null)
               {
                   $scope.value="show3";
               }
           
      }, function(errorData){
    }) 
      $scope.shownGroup11= null;   
      $scope.shownGroup10= null;
      $scope.shownGroup9= null;
      $scope.shownGroup8 = null;
      $scope.shownGroup7 = null;
      $scope.shownGroup1 = null;
      $scope.shownGroup2 = null;
      $scope.shownGroup3 = null;
      $scope.shownGroup4 = null;
      $scope.shownGroup5 = null;
      $scope.shownGroup6 = null;

   
    
   $scope.toggleGroup = function(group,val,val2) {
       //$window.alert(JSON.stringify(val));
      
      
    if(val=='location')
          {
              // $window.alert(JSON.stringify("wasim")); 
              if ($scope.isGroupShown2(group)) 
                   { //$window.alert(JSON.stringify("wasim"));
                       $scope.shownGroup2 = null;
                       // $window.alert(JSON.stringify(group));
     
                   }
               else 
                    { //$window.alert(JSON.stringify("akram"));
                        $scope.shownGroup2 = group;
                        //$window.alert(JSON.stringify(group));
     
                     }
          }
     
    else if(val=='creative')
        {
            
            if ($scope.isGroupShown1(group)) 
     {
           $scope.shownGroup1 = null;
        // $window.alert(JSON.stringify(group));
     
     }
      else 
      {
         $scope.shownGroup1 = group;
          //$window.alert(JSON.stringify(group));
     
      }
          
        }
    else if(val=='skill')
        {
            if ($scope.isGroupShown3(group)) 
     {
           $scope.shownGroup3 = null;
        // $window.alert(JSON.stringify(group));
     
     }
      else 
      {
         $scope.shownGroup3 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
            
        }
    else if(val=='ocupation')
        {
            
            if ($scope.isGroupShown4(group)) 
               {
                       $scope.shownGroup4 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup4 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
    else if(val=='experience')
        {
             $scope.exp=val2;
            console.log("wasim"+val2)
            if ($scope.isGroupShown5(group)) 
               {
                       $scope.shownGroup5 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup5 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
    else if(val=='education')
        {
            
            console.log(val2)
            $scope.value=val2;
            
            if ($scope.isGroupShown6(group)) 
               {
                       $scope.shownGroup6 = null;
                      // $window.alert(JSON.stringify(group));
     
               }
           else 
               {
                      $scope.shownGroup6 = group;
                      //$window.alert(JSON.stringify(group));
     
               } 
        }
          
    else if(val=='course')
        {
               $scope.cvalue=val2;
           if ($scope.isGroupShown7(group)) 
              {
                 $scope.shownGroup7 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup7 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
        else if(val=='statement')
        {
            
           if ($scope.isGroupShown8(group)) 
              {
                 $scope.shownGroup8 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup8 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
       
     else if(val=='interest')
        {
            
           if ($scope.isGroupShown9(group)) 
              {
                 $scope.shownGroup9 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup9 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
        else if(val=='certificat')
        {
            $scope.cervalue=val2;
            
           if ($scope.isGroupShown10(group)) 
              {
                 $scope.shownGroup10 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup10 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
    else if(val=='langua')
        {
            $scope.language=val2;
            console.log(val2)
           if ($scope.isGroupShown11(group)) 
              {
                 $scope.shownGroup11 = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup11 = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
   else 
        {
            
           if ($scope.isGroupShown(group)) 
              {
                 $scope.shownGroup = null;
                 // $window.alert(JSON.stringify(group));
     
              }
          else 
      {
         $scope.shownGroup = group;
          //$window.alert(JSON.stringify(group));
     
      } 
        }
     
          
  
 // console.log("dkjgkdfj");
  };
  
     $scope.isGroupShown1 = function(group) {
    return $scope.shownGroup1 === group;
  };
    $scope.isGroupShown2 = function(group) {
    return $scope.shownGroup2 === group;
  };
    $scope.isGroupShown3 = function(group) {
    return $scope.shownGroup3 === group;
  };
  $scope.isGroupShown4 = function(group) {
    return $scope.shownGroup4 === group;
  };
    $scope.isGroupShown5 = function(group) {
    return $scope.shownGroup5 === group;
  };
    $scope.isGroupShown6 = function(group) {
    return $scope.shownGroup6 === group;
  };
  $scope.isGroupShown7 = function(group) {
    return $scope.shownGroup7 === group;
  };
     $scope.isGroupShown8 = function(group) {
     return $scope.shownGroup8 === group;
  };
     $scope.isGroupShown9 = function(group) {
     return $scope.shownGroup9 === group;
  };
    $scope.isGroupShown10 = function(group) {
     return $scope.shownGroup10 === group;
  };
    $scope.isGroupShown11 = function(group) {
     return $scope.shownGroup11 === group;
  };
    $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
    
    var privacyvalue=1;
    $scope.newValue=function(val)
     {
        console.log("value="+val)
        privacyvalue=val;
    }
    
    $scope.savelocation=function(country,state,city,zip,privacy)
      {
        console.log("country="+country);
         console.log("state="+state);
         console.log("city="+city);
         console.log("zip="+zip);
         console.log("privacy="+privacyvalue);
        
        
        
         var DataToSend = {
                
                                user_id :id,
                                country:country,
                                state:state,
                                city:city,
                                zip_code:zip,
                                privacy:privacyvalue
                        }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditLocation',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response all"+responseData);
         $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
                
      }, function(errorData){
    })
        
      }//end of save location
     $scope.savelocation1=function(country,state,city,zip,privacy)
      {
         console.log("id="+id);
        console.log("country="+country);
         console.log("state="+state);
         console.log("city="+city);
         console.log("zip="+zip);
         console.log("privacy="+privacyvalue);
       
        
        
         var DataToSend = {
                
                                user_id :id,
                                country:country,
                                state:state,
                                city:city,
                                zip_code:zip,
                                privacy:privacyvalue
                        }
              console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditLocation',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response all"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
        
      }//end of save location
    $scope.skillsave=function(skill)
      {
        
        console.log("skill="+skill)  
        var DataToSend = {
                
                                user_id :id,
                                
                                skillS:skill,
                               privacy:privacyvalue
                        }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/Editskill',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response skill"+responseData);
                
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
      }, function(errorData){
    })
        
      }//end of skill
$scope.deleteskill=function()
 {
    
        var DataToSend = {
                
                                user_id :id,
                                
                                
                        }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteskills',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response skill"+responseData);
                 $cordovaToast.show("Succesfully Deleted data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    
 }
    $scope.creativesave=function(creativesave)
     {
        console.log("creative field="+creativesave);
         var DataToSend = {
                
                                user_id :id,
                                cat_id:creativesave,
                                
                                
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditCreativeField',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
                    
        
     }//end of creative field
    $scope.ocupationsave=function(occupation,url,companyname,degigation)
     {
      console.log("occupation="+occupation);
      console.log("companyname="+companyname);
      console.log("degigation="+degigation);
        var DataToSend = {
                
                                user_id :id,
                                occupation:occupation,
                                company_name :companyname,
                                designation :degigation,
                                website_url :url
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditPersonalDetails',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
        
        
     }//end of ocupation
    $scope.coursesave2=function(name,organization,year)
    {
        
        console.log("name="+name);
        console.log("organization="+organization);
        console.log("year="+year);
   
         var DataToSend = {
                
                                user_id :id,
                                course_name:name,
                                course_organisation :organization,
                                courseyear :year,
                                privacy:privacyvalue
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditCourses',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//end of course
   $scope.coursesave3=function(name,organization,year)
    {
        
        console.log("name="+name);
        console.log("organization="+organization);
        console.log("year="+year);
   
         var DataToSend = {
                
                                user_id :id,
                                course_name:name,
                                course_organisation :organization,
                                courseyear :year,
                                privacy:privacyvalue
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/insertCourses',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//end of course
   $scope.deletecourse=function(id)
    {
         var DataToSend = {
                
                               
                                cou_id:id
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteCourses',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Deleted data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    
    }
  $scope.deleteedu=function(id)
   {
       var DataToSend = {
                
                               
                                edu_id:id
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteEducation',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Deleted data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
      
  }//end of deleteeducation
  $scope.worksave=function(position,company_name,website,country,city,smonth,starting_year,emonth,ending_year,Details)
    {
        
        console.log("company_name="+company_name);
        console.log("website="+website);
        console.log("country="+country);
        console.log("city="+city);
        console.log("smonth="+smonth);
        console.log("starting_year="+starting_year);
        console.log("emonth="+emonth);
        console.log("Details="+Details);
        var DataToSend = {
                
                                user_id :id,
                                position:position,
                                company_name :company_name,
                                website :website,
                                country :country,
                                city :city,
                                starting_month :smonth,
                                starting_year :starting_year,
                                ending_month :emonth,
                                ending_year :ending_year,
                                details:Details,
                                privacy:privacyvalue
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditWork',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//worksave
    $scope.worksave1=function(position,company_name,website,country,city,smonth,starting_year,emonth,ending_year,Details)
    {
        
        console.log("company_name="+company_name);
        console.log("website="+website);
        console.log("country="+country);
        console.log("city="+city);
        console.log("smonth="+smonth);
        console.log("starting_year="+starting_year);
        console.log("emonth="+emonth);
        console.log("ending_year="+ending_year);
        var DataToSend = {
              


                                user_id :id,
                                position:position,
                                company_name :company_name,
                                website :website,
                                country :country,
                                city :city,
                                starting_month :smonth,
                                starting_year :starting_year,
                                ending_month :emonth,
                                ending_year :ending_year,
                                details:Details,
                                privacy:privacyvalue
        
        
        }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/insertworkExperience',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//worksave insert
    $scope.deleteexper=function(val)
     {
        var DataToSend = {
                
                               
                                work_id:val
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteworkExperience',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Deleted data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
        
    }
    $scope.coursesave=function(school_name,school_website,country,city,degree,starting_month,starting_year,ending_month,ending_year,details,idname)
    {
        
        console.log("school_name="+school_name);
        console.log("school_website="+school_website);
        console.log("country="+country);
        console.log("city="+city);
        console.log("degree="+degree);
        console.log("starting_month="+starting_month);
        console.log("starting_year="+starting_year);
        console.log("ending_month="+ending_month);
        console.log("ending_year="+ending_year);
        console.log("details="+details);
        var DataToSend = {
                
                                user_id :id,
                                school_name:school_name,
                                school_website :school_website,
                                location :country,
                                city :city,
                                degree :degree,
                                starting_month :starting_month,
                                starting_year :starting_year,
                                ending_month :ending_month,
                                ending_year :ending_year,
                                 details :details,
                                id:idname
                               
        
        
        }
         console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditEducation',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }
     $scope.coursesave1=function(school_name,school_website,school_location,city,degree,starting_month,starting_year,ending_month,ending_year,details)
    {
        
        console.log("school_name="+school_name);
        console.log("school_website="+school_website);
        console.log("school_location="+school_location);
        console.log("city="+city);
        console.log("degree="+degree);
        console.log("starting_month="+starting_month);
        console.log("starting_year="+starting_year);
        console.log("ending_month="+ending_month);
        console.log("ending_year="+ending_year);
        console.log("details="+details);
           var DataToSend = {
                
                                user_id :id,
                                school_name:school_name,
                                school_website :school_website,
                                location :school_location,
                                city :city,
                                degree :degree,
                                starting_month :starting_month,
                                starting_year :starting_year,
                                ending_month :ending_month,
                                ending_year :ending_year,
                                 details :details,
                                
                               
        
        
        }
         console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/InsertEducation',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }
     
      $scope.personalstatementdel=function()
    {
        
       // console.log("statement="+statement);
     
   
         var DataToSend = {
                
                                user_id :id
                              
                                
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deletePersonalStatement',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//end of statement
     $scope.personalstatement=function(statement)
    {
        
        console.log("statement="+statement);
     
   
         var DataToSend = {
                
                                user_id :id,
                                personalStatement:statement,
                                
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editPersonalStatement',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//end of statement 
     
       $scope.Interests=function(interest)
    {
        
        console.log("interest="+interest);
     
   
         var DataToSend = {
                
                                user_id :id,
                                interest:interest,
                                
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editinterest',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }//end of Interests
$scope.certification=function(name,organization,year,id)
    {
        
        console.log("name="+name);
        console.log("organization="+organization);
        console.log("year="+year);
   
         var DataToSend = {
                
                                id :id,
                                certification_name:name,
                                certification_organisation :organization,
                                year :year,
                                privacy:privacyvalue
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditCertificaions',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }

$scope.certification1=function(name,organization,year)
    {
        
        console.log("name="+name);
        console.log("organization="+organization);
        console.log("year="+year);
   
         var DataToSend = {
                
                                user_id :id,
                                certification_name:name,
                                certification_organisation :organization,
                                year :year,
                                privacy:privacyvalue
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/InsertCertificaions',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }
$scope.languageadd=function(name,id,organization)
    {
        
     
   
         var DataToSend = {
                
                                id :id,
                                language:name,
                                proficiency_level :organization,
                               
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editLanguage',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }


$scope.languageadd1=function(name,organization)
    {
        
     
   
         var DataToSend = {
                
                                user_id :id,
                                language:name,
                                proficiency_level :organization,
                               
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/insertLanguage',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Saved data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }
$scope.deletelanguage=function(id)
    {
       
   
         var DataToSend = {
                
                               id :id,
                                
        
        
        }
             console.log(JSON.stringify(DataToSend));
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteLanguage',
                   data: DataToSend
        }).success(function(responseData){
              
             console.log("response edit"+responseData);
                 $cordovaToast.show("Succesfully Deleted data", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                
      }, function(errorData){
    })
    }
    
})
.controller("Imageuploadctrl1", function ($scope,$window,$cordovaCamera, $cordovaCapture,$ionicActionSheet,$http,$ionicPopup,$cordovaToast)
{    
   // console.log(albumname);
    $scope.alname=albumname ;
    $scope.aldesc=description;
     homeback="portfolio";
    var privacy=1;
    $scope.images = [];
    $scope.images1 = [];
     var imglist=$scope.images;
    $scope.imageupload=function()
      {
         
         var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
             //*********Show profile picture*****************
                $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                     //var targate=imageData
                    $scope.images1.push({'src':$scope.imgURI}); 
                     $scope.images.push(imageData); 
                    //console.log(JSON.stringify($scope.image)); 
                       // console.log($scope.imgURI); 
                        
                       
      
                })
      /*  window.imagePicker.getPictures(
    function(results) {
        for (var i = 0; i < results.length; i++) {
            $scope.imgURI = results[i];
             $scope.images.push({'src':results[i]});
            console.log(JSON.stringify($scope.imgURI))
            //console.log('Image URI: ' + results[i]);
        }
    }, function (error) {
        console.log('Error: ' + error);
    }
 
)*/
    }
    
  $scope.savealbum=function(val1,val2)
    {
       
      //console.log(val1);
      //console.log(val2);
      //console.log(privacy);
      var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
            //console.log(id);
     
           var imglist=(JSON.stringify($scope.images));
      //console.log(JSON.stringify(imglist));
             var DataToSend = {
                
                                user_id :id,
                              
                                album_name:albumname,
                                description:description,
                                image:imglist,
                                Album_id:imageid
                              }
              //console.log(JSON.stringify("DataToSend"));
             console.log(JSON.stringify(DataToSend));
            
             
      if($scope.images.length>0)
          {
              
            //console.log(JSON.stringify($scope.images));  
              $scope.log1=true;
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/ImageUpoloadInExistingAlbum',
                   data: DataToSend
        }).success(function(responseData){
               console.log("Response"+JSON.stringify(responseData));
                 $scope.log1=false;
                 $cordovaToast.show("Image upload succesfully", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                     $scope.imgURI1 = undefined;
                       $scope.images1.length=0;
           })
              
                
      }, function(errorData){
    }) 
              
              
          }//end of if
      else
          {
                $cordovaToast.show("Please choose a Image", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                 $scope.imgURI1 = undefined;
           })
          }
    }
  $scope.privacy=function()  
    
  {
      $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share balanced"></i> Public' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Connection only' },
        { text: '<i class="icon ion-share balanced"></i> Connection & Followers' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          if(index==0)
              {
                 privacy=1; 
              }
          else if(index==1)
              {
                  privacy=2; 
              }
          else if(index==2)
              {
                  privacy=3; 
              }
          else
              {
                 privacy=4;  
              }
          console.log("...."+privacy)
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
  }//end of privacy



})//particular image upload ctrl
.controller("Imageuploadctrl", function ($scope,$window,$cordovaCamera, $cordovaCapture,$ionicActionSheet,$http,$ionicPopup,$cordovaToast)
{
      homeback="portfolio";
    var privacy=1;
    $scope.images = [];
    $scope.images1 = [];
     var imglist=$scope.images;
    $scope.imageupload=function()
      {
         
         var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
             //*********Show profile picture*****************
                $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                     //var targate=imageData
                    $scope.images1.push({'src':$scope.imgURI}); 
                     $scope.images.push(imageData); 
                    //console.log(JSON.stringify($scope.image)); 
                       // console.log($scope.imgURI); 
                        
                       
      
                })
      /*  window.imagePicker.getPictures(
    function(results) {
        for (var i = 0; i < results.length; i++) {
            $scope.imgURI = results[i];
             $scope.images.push({'src':results[i]});
            console.log(JSON.stringify($scope.imgURI))
            //console.log('Image URI: ' + results[i]);
        }
    }, function (error) {
        console.log('Error: ' + error);
    }
 
)*/
    }
    
  $scope.savealbum=function(val1,val2)
    {
      //console.log(val1);
      //console.log(val2);
      //console.log(privacy);
      var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
            //console.log(id);
     
           var imglist=(JSON.stringify($scope.images));
      //console.log(JSON.stringify(imglist));
             var DataToSend = {
                
                                user_id :id,
                                privacy:privacy,
                                name:val1,
                                description:val2,
                                image:imglist,
                                
                              }
              //console.log(JSON.stringify("DataToSend"));
             console.log(JSON.stringify(DataToSend));
            
             
      if($scope.images.length>0)
          {
              
            //console.log(JSON.stringify($scope.images));  
              $scope.log1=true;
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/newAlbum',
                   data: DataToSend
        }).success(function(responseData){
               console.log("Response"+JSON.stringify(responseData));
                 $scope.log1=false;
                 $cordovaToast.show("Album Succesfully Created", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                 $scope.imgURI1 = undefined;
           })
              
                
      }, function(errorData){
    }) 
              
              
          }//end of if
      else
          {
                var alertPopup = $ionicPopup.alert({
                      title: 'Error!',
                      template: '<h3 class="accounttype">Please Chose Image</h3>'
                     
              
                 });
                  alertPopup.then(function(res) {
                   console.log(res);
                });
          }
    }
  $scope.privacy=function()  
    
  {
      $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
      buttons: [
        { text: '<i class="icon ion-share balanced"></i> Public' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Connection only' },
        { text: '<i class="icon ion-share balanced"></i> Connection & Followers' },
        { text: '<i class="icon ion-arrow-move assertive"></i> Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          if(index==0)
              {
                 privacy=1; 
              }
          else if(index==1)
              {
                  privacy=2; 
              }
          else if(index==2)
              {
                  privacy=3; 
              }
          else
              {
                 privacy=4;  
              }
          console.log("...."+privacy)
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
  }//end of privacy
  
})

.controller("Audiouploadctrl", function ($scope,$window,$cordovaCamera,$cordovaFileTransfer,$http,$sce,$interval,$ionicActionSheet,$cordovaToast ) 

{  
     $scope.audioname="choose";
    $scope.sub1=false,
    $scope.sub=true;
    $scope.uploadaudio = function() {
         
    console.log('Changed');
         var audiofile = document.getElementById('audiofile').files[0];
    //console.log(audiofile);
         var choose=audiofile.name;
      
        var audio=choose.substring(choose.indexOf('.'));
         console.log(audio);
        if(audio=='.mp3')
            {
               $scope.audioname=choose;
               console.log("audioname="+$scope.audioname);
               
            }
        else
            {
                  $cordovaToast.show("Please Choose Proper Format", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
            }
}
      //document.getElementById('load').style.visibility="hidden"
    //$('#load').fadeOut('slow');
    homeback="portfolio"
   $scope.progressval = 20;
    $scope.stopinterval=null;
   console.log($scope.progressval);
    
        $("#myForm").submit(function(){
                    $scope.log1=true;
                  
          $('#audioUpload').show();
        
          var formData = new FormData($(this)[0]);
          $.ajax({
            url: "http://app.creoyou.net/public/index.php/api/audioUpload--",
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            enctype: 'multipart/form-data',
            processData: false,
            beforeSend: function() {
                //console.log("wasim");
            },
            success:function(datas){
                //console.log("akram");
            },
            complete: function() {
                $('#audioUpload').hide();
                //console.log("bora");
                    $scope.log1=false;
                   $cordovaToast.show("Audio Succesfully upload", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
               // $window.location.href="#/common/individual";
            },
            
          })
        });
    
 
  
  var privacy=1; 
     $scope.privacyvalue=1;
 
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     $scope.user_id=id;
   $scope.privacy=function()
   {
       console.log("hi")
      $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Public' },
        { text: 'Connection only' },
        { text: 'Connection & Followers' },
        { text: 'Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          if(index==0)
              {
                 privacy=1; 
                 $scope.privacyvalue=1;
              }
          else if(index==1)
              {
                  privacy=2; 
                  $scope.privacyvalue=2;
              }
          else if(index==2)
              {
                  privacy=3; 
                  $scope.privacyvalue=3;
              }
          else
              {
                 privacy=4; 
                  $scope.privacyvalue=4;
              }
          console.log("...."+privacy)
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
   }

})

.controller("Videouploadctrl", function ($scope,$window,$cordovaCamera,$sce,$cordovaFileTransfer,$ionicActionSheet,$cordovaToast,$ionicLoading ) {
    homeback="portfolio"
    $scope.videoss=[];
    var videourl;
   // $scope.src="http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4"
   //$scope.src="#/img/Wildlife.wmv";
   $scope.log1=false;
   // document.getElementById('load').style.visibility="hidden"
    $scope.trustSrc = function(src) {
        console.log("wasim");
    return $sce.trustAsResourceUrl(src);
  }
    $scope.videoupload=function()
      {
        var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                mediaType:Camera.MediaType.VIDEO
            };
$cordovaCamera.getPicture(options).then(function(videoURI) 
    {   
       //$window.alert(JSON.stringify(videoURI));
     $scope.videoURI = videoURI;
    videourl=videoURI;
    console.log("video url:"+videoURI);
    $scope.videoss.pop();
    //console.log("when 0");
    console.log($scope.videoss.length);
     $scope.videoss.push({'src':$scope.videoURI});   //console.log(JSON.stringify($scope.videoss));
       //$scope.src=videoURI;
    //console.log("when push");
      console.log($scope.videoss.length); 
      // console.log(JSON.stringify($scope.videoUR));
    
    //***********************************************************
    /* var options = {
            fileKey: "avatar",
            fileName: "filename.mp4",
            chunkedMode: false,
            mimeType: "video/mp4"
        };
    $cordovaFileTransfer.upload("http://app.creoyou.net/public/index.php/api/videoUpload", videoURI, options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(results));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });*/
    

	

    //***********************************************************
    
    
    
   
    }, function(err) 
        {
            $window.alert("err",JSON.stringify(err));
        });
         
	      
      }//end of upload
     var privacy=1; 
     $scope.privacyvalue=1;
    //$scope.privacy='Public';
     var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     $scope.user_id=id;
   $scope.privacy=function()
   {
       console.log("hi")
      $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Public' },
        { text: 'Connection only' },
        { text: 'Connection & Followers' },
        { text: 'Only me' },
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          if(index==0)
              {
                 privacy=1; 
                 //$scope.privacy='Public';
            
              }
          else if(index==1)
              {
                  privacy=2; 
               //$scope.privacy='Connection only';
              }
          else if(index==2)
              {
                  privacy=3; 
                 //$scope.privacy='Connection & Followers';
              }
          else
              {
                 privacy=4; 
                 //$scope.privacy='Only me';
              }
          console.log("...."+privacy)
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
   }
   
      $scope.LoadingView=true;
    $scope.videouploadtotal=function(val1,val2)
     {
        console.log("gggggggg"+videourl)
        if(videourl==undefined)
            {
                   $cordovaToast.show("Please Choose A video", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
            }
        else
            {
                 // document.getElementById('load').style.visibility="hidden";
       //  document.getElementById('load').style.visibility="visible";
         $scope.log1=true;
          
          /*$ionicLoading.show({
            template: 'Loading….'
            
      });*/
    // $scope.LoadingView=true;
         console.log(val1);
         console.log(val2);
         var options = {
            fileKey: "file",
            fileName: videourl.substr(videourl.lastIndexOf('/')+1),
            chunkedMode: false,
            mimeType: "video/mp4",
           params : {'title':val1,'description':val2,'privacy':privacy,'user_id':id}
        };
    $cordovaFileTransfer.upload("http://app.creoyou.net/public/index.php/api/videoUpload", videourl, options).then(function(result) {
                      //document.getElementById('load').style.visibility="hidden"
                        $scope.log1=false;
                          
                 $cordovaToast.show("Video Succesfully upload", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                   
                 
           })
                  $window.location.href="#/common/individual";
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    
            }
        
      
     }
   
    
})
.controller("Arrowctrl", function ($scope,$window,$cordovaToast) {
    var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
    console.log("usertype="+usertype)
     $scope.arrowback=function()
     {
        
        if(usertype==1) 
           {
                 $window.location.href="#/common/individual";
             
            
           }
       else
           {
                $window.location.href="#/common/about_me";
             
               
           }
     }
    
})
    //********For uploading video******************
.controller("videoctrl", function ($scope,$window,$cordovaCamera,$ionicPopup,$sce ) {
   

  /* console.log("akram");
     $scope.trustSrc = function(src) {
        console.log("wasim");
    return $sce.trustAsResourceUrl(src);
     }
      $scope.getIframeSrc = function(src) {
     return src;
    };
     */
})

//**************This is for stop video*************************


.directive('videoControl', function ($rootScope) {
    return function ($scope, $element, attrs) {
     
       
      $element[0].addEventListener("loadeddata", function () {
        console.log('loadeddata');
        $rootScope.$broadcast('videoEvent', { type: 'loadeddata' });
      });
      $element[0].addEventListener("playing", function () {
        
        $rootScope.$broadcast('videoEvent', { type: 'playing' });
        
               console.log($element[0])
      
          i++;
          console.log(i);
          if(i==1)
              {
                   $element[0].play();
                   
              }
          else if(oldid==$element[0])
              {
                  if((i/2==0))
                      {
                         $element[0].pause(); 
                           
                      }
                  else
                      {
                           //console.log("playwasim");
                      }
                  
              }
          else
              {
                   oldid.pause();
                   $element[0].play();
                  
              }
         
          oldid=$element[0];
          
            
         // share2.setVariable( "videovalue",$element[0]);
           
      });
      $element[0].addEventListener("ended", function () {
        console.log('ended');
        $rootScope.$broadcast('videoEvent', { type: 'ended' });
      });
      $element[0].addEventListener("pause", function () {
        //console.log('wasimpause');
        console.log(oldid);
        $rootScope.$broadcast('videoEvent', { type: 'pause' });
          
      });
      // and so on...
    }
})

//**************This is for stop video***************************

//********************Audio control*****************************
.controller("Audioctrl", function ($scope,$window,$ionicPopup,$cordovaMedia,$ionicLoading) {
    // $scope.dynamicTrack = {};
    
   
       
   //$window.alert("welcome to audio control") ;
$scope.filepathChooser = function() {
    
       $window.location.href="#/common/audio_upload"; 
                
               /* fileChooser.open(function(uri) {
                 $window.alert(uri);
              });*/
    
    //for audio popup
    
         /* $scope.data = {}

   var myPopup = $ionicPopup.show({

      template: ' ><input type="text" ng-model="data.audiotitle"placeholder="Audio title">   <br>  <input type="text" ng-model="data.audiodescription" placeholder="Audio Description"><br> <label>  <select name="privacy" ng-model="privacy" class="reg_select"> <option>Public</option> <option>Connections only</option><option>Connections & followers</option><option>Only me</option></select></label> <br><a  class="cr_nw_al"> <i class="material-icons">queue_music</i> Upload new audio</a>',

      title: 'Upload your new audio',

      //subTitle: 'Please use normal things',

      scope: $scope,

      buttons: [{

         text: 'Cancel'

      }, {

         text: '<b>Save</b>',

         type: 'button-positive',

         onTap: function(e) {

            

         }

      }, ]

   })*/


    //end audio popup
       }

   
$scope.play=function()
  {
  // $window.alert("hello");
   
       var src = "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3";
      var media = $cordovaMedia.newMedia(src);
        if(k==0)
            {  // $window.alert("play");
             
                 media.play();
                 $window.alert(JSON.stringify( media.play()))
                 k=1;
                 
            }
         else
             {
                 //$window.alert("pause");
                 $window.alert(JSON.stringify( media.stop()))
                 media.pause();
                k=0; 
             }
        
        
        
        
      }

 
})
//*******************End of audio control*********************

.controller("Other-business-userctrl", function ($scope,$window,$http,$sce) {
    //$scope.selectedTab = 2;
   
  //  $scope.loading=true;
    
    var homecheck=1;
    $scope.cmt=0;
    console.log(homeback);
    if(homeback=="portfolio")
        {
             homeback=""
            //var stval='video';
            // $("#"+stval).click();
            $scope.selectedTab = 2;
           
           
        }
    else if(homeback=="about")
        {
             $scope.selectedTab = 1;
            homeback=""
        }
    else if(homeback=="conection")
        {
           $scope.selectedTab = 3; 
            homeback=""
            
        }
    else
        {
            $scope.selectedTab = 0;
            homeback=""
        }
    enl=1
   $scope.loading=true;
   $scope.body=false;
   //
 //*******friend request count**********************
    //$window.alert("finaluser"+loginurl);
     //$scope.loading = false;
     $scope.tabbody=false;
    var privacy=1;
    $scope.status=userstatus;
     if(statusimage=="")
         {
             
         }
    else
        {
            $scope.imgURI1 = "data:image/jpeg;base64," + statusimage;
        }
     
  //  console.log("Status check"+userstatus)
     //console.log(loginurl);
     var id=otheruserid;
  
   //  console.log(id);
    
             var DataToSend = {
                
                                user_id :id,
                                
                              }
            // console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/viewhomePage',
                   data: DataToSend
        }).success(function(responseData){
              
               $scope.mainhomess=responseData.detailsOfuser;
        //   console.log("home up="+ $scope.mainhomess)
                
                
      }, function(errorData){
    })
      $scope.moredata=false;
    $scope.loadMoreData=function()
    {
        if(check==0)
            {
                 var DataToSend = {
                
                                user_id :id,
                                startinglimit:homecheck,
                                end_limit:homecheck+2
                              }
         homecheck=homecheck+2;
        console.log("Home data++++++++++++++++++++++++"+JSON.stringify(DataToSend))
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeDetails',
                   data: DataToSend
        }).success(function(responseData){
              // console.log(JSON.stringify(responseData));
               $scope.individualhomes=responseData.Data;
              //$scope.per=responseData.Profilecomplete;
              check=0;
         // console.log("home data:"+JSON.stringify($scope.individualhomes));
              
      
               //console.log("check:"+responseData[0].fname)
                 // var last = responseData.Data.length;
             console.log("Home data-------------------"+JSON.stringify(DataToSend))
        /*if( responseData.Data.length==0)
        {
            //$window.alert("hialert")
            $scope.moredata=true;
             
        }*/
    //$scope.moredata=true;
      
    
                
      }, function(errorData){
    })
            }
        else
            {
                console.log("false");
            }
        check=1;
        //console.log("hipppppppppppppppppppppppppppppppppppppppppppppp")
        
        
       $scope.$broadcast('scroll.infiniteScrollComplete');   
       
    }
     
   /* $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeDetails',
                   data: DataToSend
        }).success(function(responseData){
              // console.log(JSON.stringify(responseData));
               $scope.individualhomes=responseData.Data;
              //$scope.per=responseData.Profilecomplete;
      //  console.log("home data:"+JSON.stringify($scope.individualhomes));
              
               //console.log("check:"+responseData[0].fname)
                
                
      }, function(errorData){
    })*/
//****************Start of Home Screen********************
  
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               //console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
//******************Play video from untrusted source*********
     $scope.trustSrc = function(src) {
        //console.log("http://creoyou.net/uploads/portfolioVideos/"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net/uploads/portfolioVideos/"+src);
     }
      $scope.getIframeSrc = function(src) {
           //console.log("wasim22222222222"+src);
     return  src;
    };
     $scope.trustSrc1 = function(src) {
       // console.log(src);
    return $sce.trustAsResourceUrl(src);
     }
      $scope.trustSrc2 = function(src) {
        //console.log("http://creoyou.net"+src);
    return $sce.trustAsResourceUrl("http://creoyou.net"+src);
         // console.log(src)
     }
//****************end of play video untrusted source***
//****************End of home Screen*********************

//*******************end of notification******************

  
  
  
  //**************Following section************************
  $scope.about=function()
  {
      console.log("hi");
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AboutmeDetails',
                   data: DataToSend
        }).success(function(responseData){
               
          $scope.languages=responseData.language;
           $scope.interests=responseData.interest;
           $scope.statements=responseData.statement;
           $scope.skilss=responseData.skills;
           $scope.experiences=responseData.work;
           $scope.awards=responseData.awards;
           $scope.certifications=responseData.certifications;
           $scope.courses=responseData.course;
           $scope.educations=responseData.education;
           $scope.locations=responseData.personalDetails;
      }, function(errorData){
    }) 
  }//end of about
  $scope.portfolio = function()
  {
      console.log("portfolio")
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioAlbums',
                    data: DataToSend
        }).success(function(responseData){
               
             //$scope.followings=responseData.Following;
             //console.log(responseData);
            
         $scope.folders=responseData.AlbumDetails;
        // console.log("album="+JSON.stringify($scope.folders));
      }, function(errorData){
    })
     
    //*************video********************************
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioVideos',
                    data: DataToSend
        }).success(function(responseData){
               
          console.log("AUDIO DATA="+JSON.stringify(responseData));
           
         $scope.videos=responseData.videoDetails;
         
             
      }, function(errorData){
    })
    //*************end video****************************
   //*****************Start Audio*************************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioAudios',
                    data: DataToSend
        }).success(function(responseData){
               
       console.log("AUDIO DATA="+JSON.stringify(responseData));
         $scope.tracks=responseData.audioDetails; 
         
      }, function(errorData){
    })
      
  //****************End of Audio*************************
     
  }//end of portfolio
$scope.connection=function()
 {
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showHomeAction',
                   data: DataToSend
        }).success(function(responseData){
               console.log("final check="+JSON.stringify(responseData));
          $scope.conections=responseData;
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
     
      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/followersDetail',
                   data: DataToSend
        }).success(function(responseData){
             $scope.tabbody=true;
         // console.log("following"+JSON.stringify(responseData))
               
             //$scope.followings=responseData.Following;
             $scope.followings=responseData.Following;
            if($scope.followings==null)
                 {
                     $scope.value1="null";
                 }
             $scope.followerss=responseData.Followers;
             if($scope.followerss==null)
                 {
                     $scope.value="null";
                 }
             console.log("following length="+JSON.stringify(  $scope.followerss)); 
      }, function(errorData){
    })
 }
$scope.other=function(val)
 {
   // console.log("hi")
    otheruserid=val;
    $window.location.href="#/common/other-single-user"
    
 }
$scope.friendlist=function()
  {
    //$window.alert("hello. controler")
    $scope.selectedTab =2; 
  }
  //*************end of following section*******************
 $scope.filepathChooser1=function()
      {
        
        console.log("hi wasim");
    }
   $scope.tagdata=[];
     $scope.final=[];
  $scope.tagto=function(val,countid,audio_name,audio_title,audio_title1,id,incidentId,incident_type,fname,lname,creation_date,user_status,image,video_name,likes,countit,media_name,audio_title,buisness_name,audio_source,likeActive,albums,incident_name)
   {
     /*console.log("val1="+val);
      console.log("count="+countid);
     console.log("audio_name="+audio_name);
      console.log("audio_title="+audio_title);
       console.log("audio_title="+audio_title1);
      console.log("id="+id);
      console.log("incidentId="+incidentId);
      console.log("incident_type="+incident_type);
      console.log("fname="+fname);
      console.log("lname="+lname);*/
      userfname=fname;
      userlname=lname;
      
   /* console.log("creation_date="+creation_date);
        console.log("user_status="+user_status);
      console.log("image="+image);
      console.log("video_name="+video_name);
      console.log("likes="+likes);
      console.log("countit="+countit);
      console.log("media_name="+media_name);
      console.log("audio_title="+audio_title);
      console.log("buisness_name="+buisness_name);
        console.log("audio_source="+audio_source);
      console.log("likeActive="+likeActive);*/
      console.log("albums="+albums);
      if(val!=undefined)
          {
              var DataToSend1 = {
                
                                user_id :val,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/showtagged',
                   data: DataToSend1
        }).success(function(responseData){
              
         // $scope.tagto=responseData.Users;
          var tag=responseData.Users;
          $scope.tagdata.pop();
         $scope.tagdata.push({'tagopersone':tag});   
        //  console.log(JSON.stringify( $scope.tagdata)); 
         // $scope.wasim=$scope.tagdata;
       // console.log("final check="+JSON.stringify(responseData));
         for (var i = 0; i < $scope.tagdata.length; i++){
         
             $scope.tagname=$scope.tagdata[i].tagopersone;
              
            var datetime=new Date(creation_date);
            // console.log("datetime"+datetime);
             $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
            // console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
         }
         
         
      }, function(errorData){
    })
          }
      else
          {
              var DataToSend1 = {
                
                                incident_id :albums,
                                
                              }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/AlbumImages',
                   data: DataToSend1
        }).success(function(responseData){
              
         $scope.AlbumImages=responseData.images;
         $scope.countImages=responseData.countImages;
       // console.log("final check="+JSON.stringify( $scope.AlbumImages));
        var datetime=new Date(creation_date); $scope.final.push({'countid':countid,'audio_name':audio_name,'audio_title1':audio_title1,'id':id,'incidentId':incidentId,'incident_type':incident_type,'fname':fname,'lname':lname,'creation_date':datetime,'user_status':user_status,'image':image,'video_name':video_name,'likes':likes,'countit':countit,'media_name':media_name,'audio_title':audio_title,'tag':$scope.tagname,'buisness_name':buisness_name,'audio_source':audio_source,'likeActive':likeActive,'AlbumImages': $scope.AlbumImages, 'countImages':$scope.countImages,'incident_name':incident_name});
           // $scope.final.push($scope.wasim);
        
             console.log("tag data="+JSON.stringify($scope.final));
             
             $scope.loading=false;
              $scope.body=true;
             
          /* //  var obj = jQuery.parseJSON( $scope.final.yyy.fname );
             
          //  console.log("CHECKIN >>"+obj.yyy);
            var myObj = JSON.parse(JSON.stringify($scope.wasim));
              console.log(JSON.stringify($scope.wasim));
             for(var i=0;i<myObj.length;i++){
                console.log(myObj[i].fname); 
             }
            //console.log(JSON.stringify(myObj[])); console.log("+++++++++++++++++++++++++++++++++++++++"); */
             
        
         
         
      }, function(errorData){
    })
          }
    
   }
 $scope.profile=function(val)
 {
      otheruserid=val;
    $window.location.href="#/common/other-single-user"
 }
 
 $scope.rangeCreator = function (minVal, maxVal) {
     if(maxVal!=null)
         {
             var s=maxVal.length;
         }
     
    
     if(s>2)
         {
                var resttag=s-2;
                $scope.moretag="and " +resttag+ " others";
         }
     else
         {
             $scope.moretag="";
         }
  
     // console.log("minimumvalue="+0)
     //console.log("maximum length="+s)
    // console.log("more="+$scope.moretag)
    var arr = [];
   for (var i = minVal; i <= 1; i++) {
      arr.push(i);
   }
   return arr;
}
  //$scope.popcard=false;
 //$scope.test=false;
   $scope.remove=function(val)
    {
       console.log(value);
        console.log("block="+value)
    var value="sugghide1/"+val;
      
       var DataToSend = {
                
                                 user_id :id,
                                 to_userid:val
                                
                              }
             console.log(JSON.stringify(DataToSend));
    //************homepage upper section******************
       $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfriendUser',
                   data: DataToSend
        }).success(function(responseData){
           
            console.log("block response"+responseData)
      //$scope.test=true;
          
       document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    }) 
       
       
    }
   


    $scope.remessage=function(val,fname,lname,bname)
     {
        console.log("mmm"+fname)
        console.log("mmm"+bname)
        if(fname=='' || fname==null)
            {
                 pername = bname;
                console.log("mmmdfd")
            }
        else
            {
                 pername = fname+" "+lname;
                  console.log("mmppppppmdfd")
            }
            
        
         chatid=val;
        $window.location.href="#/common/chat";
         
     }
     $scope.video=[];
    $scope.videosetting=function(id,name,title,description)
     {
        
       $scope.video.pop(); $scope.video.push({'video_name':name,'video_title':title,'video_description':description,})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                video_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteVideo',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Video Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                     document.getElementById(value).style.display = "none";
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                  
         
         
               
              }//end of index 1
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in video"> <h3 class="accounttype">Video Name : {{like.video_name}}</h3><h3 class="accounttype">Video Title : {{like.video_title}}</h3><h3 class="accounttype">Video Description : {{like.video_description}}</h3></div> </form>',
     title: 'Yours Video Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
     $scope.audio=[];
    $scope.audioseting=function(titale,desciption,id)
     {
        console.log(desciption);
         $scope.audio.pop(); $scope.audio.push({'audio_name':titale,'audio_description':desciption,'id':id})
        console.log(JSON.stringify(id));
     
        $scope.details
         $ionicActionSheet.show({
      //titleText: 'ActionSheet Example',
     cssClass: 'privacy_pop',
      buttons: [
        { text: 'Delete' },
        { text: 'Edit' },
        { text: 'Information' },
      
      ],
      //destructiveText: 'Delete',
      //cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
          console.log(id);
          if(index==0)
              {
                   var value="sugghide/"+id
                    console.log(value)
                 // document.getElementById(value).style.display = "none";
                   var uid=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
                 var DataToSend = {
                
                                user_id :uid,
                                audio_id:id
                               
                              }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                      $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/deleteAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 //console.log("final check="+JSON.stringify(responseData));
                           $cordovaToast.show("Audio Succesfully Deleted", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                
                    })
                    
              
                }, function(errorData){
                })
             }
          else if(index==1)
              {
                  $scope.data=[];
                 $scope.titale=titale;
                  $scope.description=desciption;
                  console.log("wasimakram"+ $scope.titale);
                var myPopup = $ionicPopup.show({
       
          template: '<ion-scroll zooming="true" direction="y" style="width: 100%; height: auto"><div class="list"><label class="item item-input item-floating-label">  <span class="input-label">Audio Title</span> <input type="text" name="audioname" placeholder="Untitled Audio" ng-model="titale"> </label>  <label class="item item-input item-floating-label"> <span class="input-label">Audio Description</span><input type="text" name="audiodescription" placeholder="Description"ng-model="description"></label><label class="item item-input item-floating-label">  <span class="input-label">Audio Privacy</span>  <select name="cfield" ng-model="data.cfield2" class="reg_select" required> <option value="" disabled="disabled" selected="selected">{{cfield.cat_name}}</option>   <option  ng-repeat="group in listOfOptions2" value="{{group.id}}"ng-disabled="group.disabled" >{{group.name}} </select> </label>    </div></div></ion-scroll>',    
        title: 'Update Audio Details',
    // subTitle: 'Please use normal things',
     cssClass: 'my-custom-popup', 	
     scope: $scope,
    buttons: [
       { text: 'Cancel' },
      {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
          
            var val=$scope.data.cfield2;
             console.log("wasim"+val)
            var DataToSend = {
                
                                user_id :uid,
                                audio_id:id,
                                audio_title:titale,
                                audio_desc:desciption,
                                privacy:val
            
            }
                 console.log("DataToSend"+JSON.stringify(DataToSend))
                     /* $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/editAudios',
                   data: DataToSend
                 }).success(function(responseData){
                 console.log("final check="+JSON.stringify(responseData));
                          
                    
              
                }, function(errorData){
                })*/
            
       },
       }
     ]
        
   })
              }
          else if (index==2)
              {
                  
              
          
            console.log("like all"+JSON.stringify( $scope.video))
          var myPopup = $ionicPopup.show({
          template: '<form name="myForm" novalidate> <div class="list notificationlist" ng-repeat="like in audio"> <h3 class="accounttype">Video Name :{{like.audio_name}}</h3><h3 class="accounttype">Video Description :{{like.audio_description}}</h3></div> </form>',
     title: 'Yours Audio Details',
    // subTitle: 'Please use normal things',
     //cssClass: 'my-custom-popup', 	
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       
       
     ]
        
   })
         
         
  
              }
         else
             {
                 console.log("hi")
             }
          console.log("...."+privacy)
          console.log(name);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    })
        
        
     }
    $scope.listOfOptions2=[
                            {id:1,
                             name:'Public', 
                            },
                            {  id:2,
                                name:'Connection only',
                             },
        
                          
                            {
                                id:3,
                                 name: 'Connection & Followers'
                            },
                            {
                                id:4,
                                name:'Only'
                            }
                          
                          
                          
                          ]
 
})///////////////////////
//*****************For search on keystock*********************
.controller("Searchonkeystockctrl", function ($scope,$window,$cordovaActionSheet,$http,MyTimer,$state) {
    // $scope.loading=true;
     //$scope.body=false;
    $scope.searchfield=false;
    $scope.loading=true; 
          var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
   
    $scope.jobid=function(value)
        {
        console.log(value)
           jobid=value;
          $window.location.href="#/common/job_admin";
        }
    $scope.other=function(val)
 {
   // console.log("hi")
    otheruserid=val;
    $window.location.href="#/common/other-single-user"
    
 }
$scope.userpro=function(val)
 {
   // console.log("hi")
    otheruserid=val;
    console.log(val)
    $window.location.href="#/common/other-business-user"
    
 }
    $scope.followperson=function(friendid)
       {
          // var usertype=loginurl.substring(loginurl.indexOf('p')+5,loginurl.indexOf('}')-1);
          /* var value="sugghide/"+friendid
           console.log(value)
            document.getElementById(value).style.display = "none";
         // $scope.value= "true";
        // console.log("User type="+usertype);
         console.log("User id="+value); */
          var DataToSend = {
                
                                user_id:id,
                               to_userid:friendid,
                                user_type:2
                                
                              }
          console.log("follow="+JSON.stringify(DataToSend))
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/followUser',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
             // console.log("response="+responseData)
                var value="sugghide/"+friendid;
                 document.getElementById(value).style.display = "none";
       }, function(errorData){
         }) 
       }
    $scope.unfollowperson=function(friendid)
    {
        /*var elem = document.getElementById('ext-gen26');
       var txt = elem.textContent || elem.innerText;
       $window.alert(txt);*/
          var DataToSend = {
                
                                user_id:id,
                               to_userid:friendid,
                                
                                
                              }
         $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/unfollowUser',
                   data: DataToSend
        }).success(function(responseData){
           //var value="sugghide1/"+unfollow;
            console.log("block response"+responseData)
      //$scope.test=true;
             // $state.reload();
             
           
       //document.getElementById(value).style.display = "none";
                    
      }, function(errorData){
    })
    }
       $scope.connect=function(friendid)
       {
             
          console.log("friend id="+friendid)
           var DataToSend = {
                
                                 user_id :id,
                                from_id:friendid
                              }
           console.log("data="+JSON.stringify(DataToSend));
            $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/sendRequset',
                   data: DataToSend
        }).success(function(responseData){
                console.log("response="+responseData)
                var value="sugghide/"+friendid;
           
     
       document.getElementById(value).style.display = "none";
             
       }, function(errorData){
         }) 
          
      
       }
  $scope.block=function(friendid)
   {
    
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";
     console.log("llllllllllllllllllllllllll")
   //  $scope.popcard=true;
        var div = document.getElementById(value);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     /* document.getElementById("myDropdown").classList.toggle("show1");
    window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 
    }*/
   }
           var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     //console.log(id);
    var DataToSend = {
                
                                user_id :id,
                                name:searchvalue
                              }
             //console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/searchDetails',
                   data: DataToSend
        }).success(function(responseData){
        
          //    console.log("all..."+JSON.stringify(responseData));
                //$scope.loading=false;
                // $scope.body=true;
               $scope.body=true; 
                if(responseData.userInfo==null)
                {
                    console.log("1")
                   $scope.nouser="null"; 
                }
            else
                {
                    console.log("2")
                  $scope.usersearch=responseData.userInfo;  
                }
           if(responseData.JobSearch==null)
               {
                   console.log("3")
                   $scope.nojob="null"; 
               }
           else
               {
                   console.log("4")
                  $scope.userjob=responseData.JobSearch;  
               }
           if(responseData.BusinessUser==null)
               {
                   console.log("5")
                   $scope.nobusiness="null"; 
               }
             else
                 {
                     console.log("6")
                     $scope.business=responseData.BusinessUser;
                 }
             $scope.searchfield=true;
        $scope.loading=false; 
                
      }, function(errorData){
    }) 
        
    
    
    $scope.search=function(val)
     {
         
            searchvalue=val;
             var DataToSend = {
                
                                user_id :id,
                                name:val
                              }
             console.log(DataToSend)
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/searchDetails',
                   data: DataToSend
        }).success(function(responseData){
              console.log("function..."+JSON.stringify(responseData)); //console.log(JSON.stringify(responseData.userInfo));
            if(responseData.userInfo==null)
                {
                    console.log("7");
                   $scope.nouser="null"; 
                }
            else
                {
                     console.log("8");
                    $scope.usersearch=responseData.userInfo;  
                    
                    console.log("Final data"+JSON.stringify($scope.usersearch));
                }
           if(responseData.JobSearch==null)
               {
                    console.log("9");
                   $scope.nojob="null"; 
               }
           else
               {
                    console.log("10 ");
                  $scope.userjob=responseData.JobSearch;  
               }
           if(responseData.BusinessUser==null)
               {
                    console.log("11");
                   $scope.nobusiness="null"; 
                   console.log($scope.nobusiness);
               }
             else
                 {
                      console.log("13");
                   
                     $scope.business=responseData.BusinessUser;
                 }
              
               
       $state.reload();
              
               //console.log("check:"+responseData[0].fname)
           $scope.searchfield=true;     
                $scope.loading=false; 
      }, function(errorData){
    })
     }
    
   
    
      if(filter=='people')
          {
              filter="";
            $scope.selectedTab = 1;
              console.log("nameeeeeeee"+name)
             var DataToSend = {
                                user_id :id,
                                 name :name,
                                 cat_name:cat_name,
                                 company_name:company_name,
                                 country:country,
                                 state:state,
                                 keyword:keyword,
                                 jobtitle:jobtitle
                              }
             console.log("DAta send"+JSON.stringify(DataToSend)); 
     
           $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/Advancedsearch',
                   data: DataToSend
        }).success(function(responseData){
              
               
            if(responseData.userInfo==null)
                {
                   $scope.nouser="null"; 
                }
            else
                {
                    
                  $scope.usersearch=responseData.userInfo; 
                     console.log("DAta send"+JSON.stringify($scope.usersearch)); 
                       
                }
           if(responseData.JobSearch==null)
               {
                   $scope.nojob="null"; 
               }
           else
               {
                  $scope.userjob=responseData.JobSearch;  
               }
           if(responseData.BusinessUser==null)
               {
                   console.log("hellooooooooooo")
                   $scope.nobusiness="null"; 
               }
             else
                 {
                     $scope.business=responseData.BusinessUser;
                 }
             
             filter=""; 
               $scope.searchfield=true;
               $scope.loading=false; 
       }, function(errorData){
         }) 
      
              
          }//end of people
    
      else if(filter=='business')
          {
            $scope.selectedTab = 2;   
            var DataToSend = {
                                 user_id :id,
                                 name :name,
                                 cat_name:cat_name,
                                 company_name:company_name,
                                 country:country,
                                 state:state,
                                 keyword:keyword,
                                 jobtitle:jobtitle
                              }
          console.log("DAta send"+JSON.stringify(DataToSend));  
     
           $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/Advancedsearch',
                   data: DataToSend
        }).success(function(responseData){
            
            console.log("DAta"+JSON.stringify(responseData));   
            if(responseData.userInfo==null)
                {
                   $scope.nouser="null"; 
                }
            else
                {
                  $scope.usersearch=responseData.userInfo;  
                }
           if(responseData.JobSearch==null)
               {
                   $scope.nojob="null"; 
               }
           else
               {
                  $scope.userjob=responseData.JobSearch;  
               }
           if(responseData.BusinessUser==null)
               {
                   console.log("hellooooooooooo")
                   $scope.nobusiness="null"; 
               }
             else
                 {
                     $scope.business=responseData.BusinessUser;
                 }
             
             filter="";   
                   $scope.searchfield=true;
               $scope.loading=false; 
       }, function(errorData){
         })   
              
              
              
          }//end of business
    
      else if(filter=='job')
          {
               $scope.selectedTab = 3;  
              console.log("jobtitle"+jobtitle)
               console.log("keyword"+keyword)
             
                  console.log("keyword"+id)
            var DataToSend = {
                                 user_id :id,
                                 name :name,
                                 cat_name:cat_name,
                                 company_name:company_name,
                                 country:country,
                                 state:state,
                                 jobKeywoard:keyword,
                                 jobTitle:jobtitle
                              }
          console.log("DAta send"+JSON.stringify(DataToSend));  
     
           $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/Advancedsearch',
                   data: DataToSend
        }).success(function(responseData){
            
            console.log("DAta"+JSON.stringify(responseData));   
            if(responseData.userInfo==null)
                {
                   $scope.nouser="null"; 
                }
            else
                {
                  $scope.usersearch=responseData.userInfo;  
                }
           if(responseData.JobSearch==null)
               {
                   $scope.nojob="null"; 
               }
           else
               {
                  $scope.userjob=responseData.JobSearch;  
                 console.log( $scope.userjob)
               }
           if(responseData.BusinessUser==null)
               {
                   
                   $scope.nobusiness="null"; 
               }
             else
                 {
                     $scope.business=responseData.BusinessUser;
                 }
             
             filter="";
                   $scope.searchfield=true;
               $scope.loading=false; 
       }, function(errorData){
         }) 
          }
    else
        {
           $scope.selectedTab = 0; 
             var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
     console.log(id);
    var DataToSend = {
                
                                user_id :id,
                                name:searchvalue
                              }
             console.log(DataToSend);
    
    
    $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/searchDetails',
                   data: DataToSend
        }).success(function(responseData){
        
              console.log("all..."+JSON.stringify(responseData));
                //$scope.loading=false;
                // $scope.body=true;
               $scope.body=true; 
                if(responseData.userInfo==null)
                {
                   $scope.nouser="null"; 
                }
            else
                {
                  $scope.usersearch=responseData.userInfo;  
                }
           if(responseData.JobSearch==null)
               {
                   $scope.nojob="null"; 
               }
           else
               {
                  $scope.userjob=responseData.JobSearch;  
               }
           if(responseData.BusinessUser==null)
               {
                   console.log("hellooooooooooo")
                   $scope.nobusiness="null"; 
               }
             else
                 {
                     $scope.business=responseData.BusinessUser;
                 }
              $scope.searchfield=true;   
               $scope.loading=false; 
      }, function(errorData){
    }) 
        
    
        }

        
     $scope.changeTab = function(value) {
       
        //$window.location.href="#/common/chat"; 
         if(value===0)
             {
             $scope.selectedTab=0;
                 // $window.location.reload(true);
                  $state.reload();
                 
             }
         else
             {
                 console.log("1st"+value); 
             $scope.selectedTab=value;
             console.log($scope.selectedTab);
        // $window.location.reload(true);
             }
       
        
         
        }
  $scope.people=function()
  {
      //$window.alert("hi");
      var options = {
    title: 'What do you want with this Connection?',
    buttonLabels: ['Send Request', 'Follow','View Connection','Share'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
    winphoneEnableCancelButton : true,
    //addDestructiveButtonWithLabel : 'Delete it'
  };


  document.addEventListener("deviceready", function () {

    $cordovaActionSheet.show(options)
      .then(function(btnIndex) {
        var index = btnIndex;
      });
  }, false);
  }
  
  $scope.business=function()
  {
      //$window.alert("hi");
     var options = {
    title: 'What do you want with this Connections?',
    buttonLabels: ['Follow','See Connections','Share'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
    winphoneEnableCancelButton : true,
   // addDestructiveButtonWithLabel : 'Delete it'
  };


  document.addEventListener("deviceready", function () {

    $cordovaActionSheet.show(options)
      .then(function(btnIndex) {
        var index = btnIndex;
      });
  }, false); 
      
  }
//*******************for time calculation********************
  
        $scope.choices12 = [];
 //   $scope.data = $scope.choices.slice(0, 7);

    $scope.init=function(creation_date,id,job_title,fname,lname,city,state,country,jobtype,image)
      {      
         var difference= MyTimer(creation_date);
        /*$scope.choices.push({'time':difference,"id":value2,"fname":value3,"message":value4,"src":value5});  */
    $scope.choices12.push({'creation_date':difference,"id":id,"job_title":job_title,"fname":fname,"lname":lname,"city":city,"state":state,"country":country,"jobtype":jobtype,"image":image});   
      }
  
//*******************End of Time calculation*****************
   
    
})
//******************End search of keystock********************



.controller("Imagectrl", function ($scope,$window,$ionicSlideBoxDelegate,$http,$interval,$ionicPopup) {
    console.log("hello");
  
   
   $scope.nameshow=function(value)
   {
       
     //  $window.alert(value);
   }
  // console.log(imageid);
    $scope.albumname=albumname;
    var test;
    var i=1;
 
     
  
   
     var DataToSend = {
                          //  id:imageid,
                        id:20,
                        }
     console.log("test2"+JSON.stringify(DataToSend) )
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioImages',
         
                   data: DataToSend
        }).success(function(responseData){
              
         
        
   
       $scope.images12=responseData.Images;
         
         $ionicSlideBoxDelegate.update();
 
        console.log("images="+JSON.stringify(  $scope.images12));
        
         
          // console.log("test2"+JSON.stringify($scope.images1) )
             // test=responseData.Images;
      }, function(errorData){
    }) 
     
$scope.title=function(val)
{
    console.log("value"+val)
    $scope.data = {}
      var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.wifi">',
     title: 'Enter Image Titale',
    // subTitle: '',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
               
              
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
    //console.log('Tapped!', res);
   // console.log("wasim"+res)
    //console.log("akram"+val)
    
    var DataToSend = {
                            image_title:res,
                            id:val
                        //id:20,
                        }
     console.log("test2"+JSON.stringify(DataToSend) )
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditImageTitles',
         
                   data: DataToSend
        }).success(function(responseData){
              
        
 
        console.log("images="+JSON.stringify(responseData));
       
      }, function(errorData){
    })
    
    
   })
  
  }

$scope.description=function(val,image_description)
{
    console.log("value"+val)
    $scope.data = {}
      var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.wifi">',
     title: 'Enter Image Titale',
    // subTitle: '',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
               
              
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
    //console.log('Tapped!', res);
   // console.log("wasim"+res)
    //console.log("akram"+val)
    
    var DataToSend = {
                            image_description:res,
                            id:val
                        //id:20,
                        }
     console.log("test2"+JSON.stringify(DataToSend) )
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/EditImageTitles',
         
                   data: DataToSend
        }).success(function(responseData){
              
        
        
        console.log("images="+JSON.stringify(responseData));
       
      }, function(errorData){
    })
    
    
   })
  
  }

     
$scope.block=function(friendid)
   {
//     var value1="sugghide/"+oldfriendid
//     var div1 = document.getElementById(value1);
//      console.log(value1)
//        console.log(div1)
//       div1.style.display = "none";
//     oldfriendid=friendid
      var value="sugghide/"+friendid
       console.log(value)
     
   //  $scope.popcard=true;
        var div = document.getElementById(value);
     console.log("main value="+div);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
     
   }
})

//*********************For show demo image********************
.controller("about_me_photo_album_viewctrl", function ($scope,$window,$ionicPopup,$timeout,$http) {
   // $window.alert("hi");
    //$window.alert(imageid);
    //console.log(imageid);
    $scope.albumname=albumname;
     var DataToSend = {
                            id:imageid,
                            
                        }
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/portfolioImages',
         
                   data: DataToSend
        }).success(function(responseData){
              // console.log("images124="+JSON.stringify(responseData));
          $scope.images=responseData.Images;
         $scope.description=responseData.details.description
         console.log("images123="+JSON.stringify(responseData)); console.log("images="+JSON.stringify(responseData.Images));
         description=JSON.stringify($scope.description);
         console.log(JSON.stringify($scope.description));
         // $scope.individualhomes=responseData;
              
      }, function(errorData){
    }) 
    
    $scope.showPopup = function() {
        
        $window.location.href="#/common/image";
        //$location.path( "/common/image" );
    }
     
})
//****************End of demo image***************************


.controller("Photoctrl", function ($scope,$window,$cordovaFile,$ionicPopup) {
    $scope.create=function()
      {
          $window.location.href="#/common/image_upload";
        
      }
       $scope.alshow=function(value,value1)
        {
           console.log("Test image....="+value)
           imageid=value;
           albumname=value1
           console.log(JSON.stringify(value));
         $window.location.href="#/common/about_me_photo_album_view";
          var chose=JSON.stringify(value)
           //var aname=
       
       }

})


.controller("ExampleController", function ($scope, $cordovaCamera,$cordovaFileTransfer,$http,$cordovaToast) {
              // $scope.loading = true;
               //$scope.loading1=false;
				$scope.testing="demo";
                $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                       
                   
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
              //**********Chose photo from libary***********  
                $scope.choosePhoto = function (val) {
                    
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
                    console.log(options);
             //*********Show profile picture*****************
                $cordovaCamera.getPicture(options).then(function (imageData) {
                   // $scope.currentName = imageData.replace(/^.*[\\\/]/, '');
                         
                        //$scope.imgURI = "data:image/jpeg;base64," + imageData;
                    $scope.imgURI = "img/loder_home.gif" ;
                      
             //**********upload image to database*************
           
            var targetPath = imageData;
            var filename = targetPath.split("/").pop();
            filename = filename+'.jpeg';
            console.log(loginurl);
            var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
            console.log("userid"+id);
                    
            console.log("previous image:"+val)
            
            var DataToSend = {
                            user_id:id,
                            fileName: filename,
                            chunkedMode: false,
                            mimeType: "image/jpeg",
                            image:targetPath,
                            currentImageName:val
                        }
         
            console.log(DataToSend);
           
            //$scope.loading1=false;
            //console.log(DataToSend);
         $http({
            method: 'POST',
             url: 'http://app.creoyou.net/public/index.php/api/profileImageChange',
           
            data: DataToSend
        }).success(function(responseData){
       
              console.log(JSON.stringify(responseData));
            // $scope.imgURI = "data:image/jpeg;base64," + imageData;
              if(responseData==1)
                  {
                      $scope.imgURI = "data:image/jpeg;base64," + imageData;
                      $cordovaToast.show("Profile Image Updated", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                   }, function (error) {
                     console.log("The toast was not shown due to " + error);
                     });
                  }//end of if
             else
              {    
                    $scope.imgURI = undefined;
                   // $scope.imgURI = void 0;
                  $cordovaToast.show("Something went Wrong!", 'short', 'center').then(function(success) {
                      console.log("The toast was shown");
                      
                   }, function (error) {
                     console.log("The toast was not shown due to " + error);
                     });
              }//end of else
             
            
             
              
                  
  }, function(errorData){
    
  })  
//**************end of upload data to database**************
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                //*********End of profile picture****************
                   
  
                }
         

            })
//**********For profile picture******************
.factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

})
//*****************End of profile picture*******************

.controller('PopupCtrl',function( $scope, $ionicPopup, $timeout,$window) {

// Triggered on a button click, or some other target
  $scope.showPopup = function() {
      
  }
})
.controller('Connectionctrl',function( $scope,$window,$cordovaActionSheet) {
     //$window.alert("wasim");
    $scope.connectionoption=function()
    {
       // $window.alert("hi");
        var options = {
    title: 'What do you want with this Connection?',
    buttonLabels: ['Block'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
    winphoneEnableCancelButton : true,
   // addDestructiveButtonWithLabel : 'Delete it'
  };


  document.addEventListener("deviceready", function () {

    $cordovaActionSheet.show(options)
      .then(function(btnIndex) {
        var index = btnIndex;
      });
  }, false);
    }
    
})

.controller('Calenderctrl',function( $scope,$http,$cordovaCalendar,$window) {
    
    
       /* $(document).on('pageshow','#index',function(e,data){    */
            //$window.alert("wasim")
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
      var check=new Date(y, 1, 1);
     //var  start_date_time= 2016-08-27 18:37:00
     // var harish=new Date(start_date_time)
     console.log("date="+new Date(y, 1, 1));
      console.log("date55="+check);
     // console.log("harish="+harish);
//    console.log("d="+d);
//    console.log("m="+m);
//    console.log("y="+y)
//        $('#calendar').fullCalendar({
//            editable: true,
//            events: [
//                {
//                    title: 'All Day Event',
//                    start: check,
//                    
//                },
//                {
//                    title: 'Long Event',
//                    start: new Date(y, m, d-5),
//                    end: new Date(y, m, d-2)
//                },
//                {
//                    id: 999,
//                    title: 'Repeating Event',
//                    start: new Date(y, m, d-3, 16, 0),
//                    allDay: false
//                },
//                {
//                    id: 999,
//                    title: 'Repeating Event',
//                    start: new Date(y, m, d+4, 16, 0),
//                    allDay: false
//                },
//                {
//                    title: 'Meeting',
//                    start: new Date(y, m, d, 10, 30),
//                    allDay: false
//                },
//                {
//                    title: 'Lunch',
//                    start: new Date(y, m, d, 12, 0),
//                    end: new Date(y, m, d, 14, 0),
//                    allDay: false
//                },
//                {
//                    title: 'Birthday Party',
//                    start: new Date(y, m, d+1, 19, 0),
//                    end: new Date(y, m, d+1, 22, 30),
//                    allDay: false
//                },
//                {
//                    title: 'Click for Google',
//                    start: new Date(y, m, 28),
//                    end: new Date(y, m, 29),
//                    url: 'http://google.com/'
//                }
//            ]
//        });
    /*});*/
     $scope.allevent=[];
       var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
       var DataToSend = {
                
                                user_id :id,
                               
                              }
        $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/WholeEvents',
                   data: DataToSend
        }).success(function(responseData){
          
               $scope.event=responseData;
            console.log("event data="+JSON.stringify( $scope.event))
            
            for(i=0;i<responseData.length;i++)
                { 
                    var title=responseData[i].name
                     var start=new Date(responseData[i].start_date_time);
                    var end=new Date(responseData[i].end_date_time);
                  
             $scope.allevent.push({'title':title,'start':start,'end':end});
            }
        
             console.log("allevent data="+JSON.stringify($scope.allevent));
             $('#calendar').fullCalendar({
            editable: true,
            events: $scope.allevent /*[
                {
                    title: 'All Day Event',
                    start: check,
                    
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ]*/
        });
               
          
                
      }, function(errorData){
    })
    
    
    
})

.controller('Eventctrl',function( $scope,$http,$cordovaCalendar,$window) {
    var id=loginurl.substring(loginurl.indexOf('d')+4,loginurl.indexOf(',')-1);
   
    $scope.userid=id;
     console.log(id);
    
    
    $scope.createEvent=function()
     {
        
       // $window.alert("hi")
           $window.location.href="#/common/calender";
     }
    
    
    $scope.invite=function(val)
     {
        inviteid=val;
        console.log("invite")
        invite=0;
      $window.location.href="#/common/invite";
     }
    
    
          
    $scope.option=function(friendid)
   {
//     var value1="sugghide/"+oldfriendid
//     var div1 = document.getElementById(value1);
//      console.log(value1)
//        console.log(div1)
//       div1.style.display = "none";
//     oldfriendid=friendid
      var value="sugghide/"+friendid
       console.log(value)
      //$scope.test=true;
          
       // document.getElementById(value).style.display = "none";
     console.log("llllllllllllllllllllllllll")
   //  $scope.popcard=true;
        var div = document.getElementById(value);
     console.log("main value="+div);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
   
   }
    
    $scope.delete=function(val)
     {
        
         var value="sugghide12/"+val
          console.log(value)
            document.getElementById(value).style.display = "none";
        
            var DataToSend = {
                
                                event_id :val,
                                
                              } 
        
    
    
             
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/eventDelete',
                   data: DataToSend
        }).success(function(responseData){
          console.log("error="+responseData)
         
      }, function(errorData){
    })
        
    }
    
    $scope.Editevent=function(id,name,datetime,datetime1,location,description)
     {
        
        eventid=id;
        eventname=name;
        eventdatetime=datetime;
        eventdatetime1=datetime1;
        eventlocation=location;
        eventdescription=description;
        eventedit=1;
             $window.location.href="#/common/createevent";
     
     }

     $scope.final=[];
  $scope.tagto=function(id,media_type,name,fname,lname,media_type,start_date_time,end_date_time,location,likeActive,description,likes,incidentId,count,hosted_by)
   {
   
  //  console.log("creation_date="+creation_date);
      /*  console.log("id="+id);
      console.log("media_type="+media_type);
      console.log("name="+name);
      console.log("fname="+fname);
      console.log("lname="+lname);
      console.log("media_type="+media_type);
      console.log("start_date_time="+start_date_time);
      console.log("end_date_time="+end_date_time);
        console.log("location="+location);
      console.log("likeActive="+likeActive);
        console.log("description="+description);
     console.log("incidentId="+incidentId);*/ 
            var incident_type='Event'; 
            var datetime=new Date(start_date_time);
            // console.log("datetime"+datetime);
      
        
            var datetime1=new Date(end_date_time);
            // console.log("datetime1"+datetime1);
             $scope.final.push({'id':id,'media_type':media_type,'name':name,'fname':fname,'lname':lname,'media_type':media_type,'datetime':datetime,'datetime1':datetime1,'location':location,'likeActive':likeActive,'description':description,'likes':likes,'incidentId':incidentId,'incident_type':incident_type,'count':count,'hosted_by':hosted_by});
        
        
             console.log("tag data="+JSON.stringify($scope.final));
            
             
         }
         
   
     $scope.final1=[];
  $scope.tagto1=function(id,media_type,name,fname,lname,media_type,start_date_time,end_date_time,location,likeActive,description,likes,incidentId,count,hosted_by)
   {
   
  //  console.log("creation_date="+creation_date);
      /*  console.log("id="+id);
      console.log("media_type="+media_type);
      console.log("name="+name);
      console.log("fname="+fname);
      console.log("lname="+lname);
      console.log("media_type="+media_type);
      console.log("start_date_time="+start_date_time);
      console.log("end_date_time="+end_date_time);
        console.log("location="+location);
      console.log("likeActive="+likeActive);
        console.log("description="+description);*/
    
              
            var datetime=new Date(start_date_time);
             //console.log("datetime"+datetime);
      
        
            var datetime1=new Date(end_date_time);
           //  console.log("datetime1"+datetime1);
              var incident_type='Event'; $scope.final1.push({'id':id,'media_type':media_type,'name':name,'fname':fname,'lname':lname,'media_type':media_type,'datetime':datetime,'datetime1':datetime1,'location':location,'likeActive':likeActive,'description':description,'likes':likes,'incidentId':incidentId,'incident_type':incident_type,'count':count,'hosted_by':hosted_by});
        
        
             console.log("tag data="+JSON.stringify($scope.final1));
            
             
         }      
      
    
   
    
    
    
    
    
    
    
        
           var DataToSend = {
                
                                user_id :id,
                                
                              } 
        
    
    
             
     $http({
                    method: 'POST',
                    url: 'http://app.creoyou.net/public/index.php/api/fullEvents',
                   data: DataToSend
        }).success(function(responseData){
          $scope.followings=responseData.upcoming;
       //  console.log("tag data="+JSON.stringify( $scope.followings));
            $scope.followerss=responseData.past;
         
      }, function(errorData){
    })
     
   
   

    
})






.controller('people_filter_PopupCtrl',function( $scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
  $scope.showPopup = function() {
  $scope.data = {};

      
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({ 
            
    
    templateUrl:'/common/notification.html',
            
      
    title: 'Change the mobile number',
    subTitle: 'Please enter A valid Mobile Number ',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },    
      {
        text: 'Ok',
        type: 'button-positive',
        /*onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }*/
      }
    ]
       
  });  
      
        

 myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

 
 };
    
});
/*.filter('searchContacts', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.first_name.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  };
});*/




