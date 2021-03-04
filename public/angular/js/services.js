'use strict';

/* Services */
//
var remoteServices = angular.module('remoteServices', ['ngResource']);

remoteServices.factory('SlotService', ['$resource', function($resource) {
   return $resource('/schedulling/slots', null, {'query': {method: 'GET', isArray: true, responseType:'json'}});
}]);

remoteServices.factory('ApprovedTalksService', ['$resource', function($resource) {
   return $resource('/schedulling/approvedTalks', null, {'query': {method: 'GET', isArray: true, responseType:'json'}});
}]);

remoteServices.factory('SaveSlotService', ['$resource', function($resource) {
   return $resource('/schedulling/slots', null, {'save': { method:'POST'}});
}]);

remoteServices.factory('AllScheduledConfiguration', ['$resource', function($resource){
    return $resource('/schedulling/scheduledConfigurations', null, {'query': {method: 'GET', isArray: true, responseType:'json'}})
}]);

remoteServices.factory('ReloadScheduleConf', ['$resource', function($resource){
    return $resource('/schedulling/loadScheduledConfiguration', null, {'query': {method: 'GET', isArray: false, responseType:'json'}})
}]);

remoteServices.factory('DeleteScheduledConfiguration', ['$resource', function($resource){
  return $resource('/schedulling/deletescheduledConfigurations', null, {'query': {method: 'DELETE', isArray: false, responseType:'json'}})
}]);

remoteServices.factory('CreateAndPublishEmptyProgramSchedule', ['$resource', function($resource){
  return $resource('/schedulling/createAndPublishEmptyProgramSchedule', null, {'save': { method:'POST'}});
}]);
remoteServices.factory('ProgramScheduleResource', ['$resource', function($resource){
  return $resource('/schedulling/programSchedules/:id', {id: '@id'}, {
    'update': { method:'PUT'},
    'save': { method:'POST'},
    'publish': { method: 'PUT', url: '/schedulling/programSchedules/:id/publish' }
  });
}]);