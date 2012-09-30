/**
 * Author: Lusana A
 * AsraiMedia 2012
 * Usage: var obj = $('#form-example').parseFormToJson();
 */
/**
 * this function taken from, modified for my purposes
 * stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 */
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() 
    {      
      o[this.name] = this.value || '';      
    });
    return o;
};

$.fn.parseFormToJsonSingle = function()
{
  var o = {};
  this.find(':input').each(function(i)
  {
    if($(this).parents('[form-nested-item]').length==0)
    {
      o[this.name] = this.value || '';
    }
  });
  return o;
  
};
/**
 * Parsing function
 */
$.fn.parseFormToJson = function()
{
  var attr_nested_item = '[form-nested-item]';
  var $form = $(this);    
  var values = $form.parseFormToJsonSingle();    
  var obj = {};
  var keys = [];   
          
  $form.find(attr_nested_item).each(function(i)
  {
    var key = $(this).attr('form-nested-item');            
    if(keys.indexOf(key) == -1)
    {      
      var temp = {};
      temp[key] = [];      
      obj = $.extend(obj, temp);                      
      keys.push(key);             
    }       
    var temp = $(this).find(':input').serializeObject();
    obj[key].push(temp);    
  });
           
  values = $.extend(values, obj);    
  return values;
};