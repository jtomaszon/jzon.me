var callback = function(){
  $('.item-skills').each(function(){
    newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
  });
  $('.icons-red').each(function(){
    height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
  });
};
$(document).ready(callback);

var resize;
window.onresize = function() {
  clearTimeout(resize);
  resize = setTimeout(function(){
    callback();
  }, 100);
};

function cv ($scope) {

  $scope.studies = [
    {
      "year": "2009-2010",
      "company": "Binlogic",
      "description": "MySQL DBA"
    },{
      "year": "2009",
      "company": "RedHat",
      "description": "RedHat System Administrator"
    },{
      "year": "2005 - 2008",
      "company": "Universitas",
      "description": "Developer and System Analist"
    },
  ];

  $scope.works = [
    {
      "year": "2014",
      "company": "Percona",
      "title": "Remote MySQL DBA",
      "description": "MySQL DBA \nDevOp tasks"
    },
    {
      "year": "2012",
      "company": "TOTVS",
      "title": "Infrastructure Architect",
      "description": "MySQL DBA \nDebian SysAdmin \nDevOp tasks \nContinuous Deployment \nContinouos Integration"
    },
    {
      "year": "2012",
      "company": "Boo-Box",
      "title": "System & Database Administrator",
      "description": "MySQL DBA \nDebian SysAdmin"
    },
    {
      "year": "2011",
      "company": "OLX",
      "title": "System & Database Administrator",
      "description": "MySQL DBA \nRedHat SysAdmin"
    },
    {
      "year": "2007",
      "company": "Analyte SRL",
      "title": "Application Support Sr",
      "description": "Developer Delphi 7 \nDeveloper Perl \nSQL Server 2000"
    },{
      "year": "2003",
      "company": "Buenos Aires University",
      "title": "Technical Support Sr",
      "description": "Windows & Linux Support"
    },
  ];

  $scope.contacts = [
    {
      "name": "phone",
      "value": "+55 11 98865 6490"
    },{
      "name": "envelope",
      "value": "jtomaszon@gmail.com"
    },{
      "name": "twitter",
      "value": "@jtomaszon"
    },{
      "name": "skype",
      "value": "jtomaszon"
    }
  ];

  $scope.skills = [
    {
      "name": "linux",
      "value": "0.90"
    },{
      "name": "mySQL",
      "value": "0.85"
    },{
      "name": "webserver",
      "value": "0.75"
    },{
      "name": "monitoring",
      "value": "0.70"
    },{
      "name": "high availability",
      "value": "0.60"
    },{
      "name": "performance",
      "value": "0.60"
    },{
      "name": "tuning",
      "value": "0.55"
    }
  ];

  $scope.languages = [
    {
      "name": "spanish",
      "value": "1.00"
    },
    {
      "name": "english",
      "value": "0.74"
    },
    {
      "name": "portuguese",
      "value": "0.52"
    },
  ];

  $scope.hobbies = [
    "linux", "mySQL", "arduino", "raspberryPI"
  ];

}