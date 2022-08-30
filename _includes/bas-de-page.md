<hr style="height:10px;visibility:hidden;margin:0">

## {{ site.title-fr }} 

Le dimanche à 11 h au [Centre Greene](/centre-greene) <br>
{{ site.phone_link }}

[{{ site.adresse }}](/centre-greene)

{% for each in site.data.navigation.footer-fr %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}
&nbsp;&nbsp; {% include toggle-dark-mode.html %}
<br><br>
