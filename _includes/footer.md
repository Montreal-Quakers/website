<hr style="height:10px;visibility:hidden;margin:0"/>

## {{ site.title }}

Sundays, 11 a.m., [Greene Centre](/greene-centre) <br>
{{ site.phone_link }}

[{{ site.address }}](/greene-centre)

{% for each in site.data.navigation.footer-en %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}&nbsp;&nbsp; {% include toggle-dark-mode.html %}
<br><br>
