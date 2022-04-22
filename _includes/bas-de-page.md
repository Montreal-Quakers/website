<hr style="height:10px;visibility:hidden;margin:0">

## {{ site.title-fr }} 

Le dimanche à 11h au [Centre Greene](/coordonnées) <br>
{{ site.phone_link }}

[{{ site.adresse }}](/coordonnées)

{% for each in site.data.navigation.footer-fr %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}
&nbsp;&nbsp; {% include toggle-dark-mode.html %}
<br><br>
