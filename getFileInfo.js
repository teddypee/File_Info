$(function() 
{
	if (window.File)
  {
		$('#upload').bind('change', function() 
    {
			var fileinfo = 'size: ' + this.files[0].size + '<br>' +
			'name: ' + this.files[0].name + '<br>' +
			'extension: ' + file_extension(this.files[0].name);
			$('#fileinfo').html(fileinfo);
		});
