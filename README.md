Form2JsonJquery
===============

Form to JSON Object using Jquery


Getting started
---------------
Usage:-

<pre>
var obj = $('#form-example').parseFormToJson();
</pre>

If you have nested then add attribute with value = name of the object you want.

<pre>
form-nested-item="item"
</pre>

Example:-

```html
        <table>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr form-nested-item="son">
            <td><input type="textfield" name="relationship" value="son"></td>
            <td><input type="textfield" name="name" value="William Smith"></td>
            <td><input type="textfield" name="age" value="5"></td>
          </tr>
          <tr form-nested-item="son">
            <td><input type="textfield" name="relationship" value="son"></td>
            <td><input type="textfield" name="name" value="Sam Smith"></td>
            <td><input type="textfield" name="age" value="8"></td>
          </tr>    
          <tr form-nested-item="daughter">
            <td><input type="textfield" name="relationship" value="daughter"></td>
            <td><input type="textfield" name="name" value="Elena Smith"></td>
            <td><input type="textfield" name="age" value="10"></td>
          </tr>                               
        </table>  
```


 
