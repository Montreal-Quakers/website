<hr style="height:10px;visibility:hidden;margin:0"/>

## {{ site.title }}

Sundays, 11 AM, [Greene Centre](/directions) <br>
{{ site.phone_link }}

[{{ site.address }}](/directions)

{% for each in site.data.navigation.footer-en %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}
<br><br>
