
## {{ site.title-fr }} 

Le dimanche à 11h au Centre Greene

[{{ site.adresse }}](/coordonnées.html)

{% for each in site.data.navigation.footer-fr %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &ensp;{% endunless %}{% endfor %}

<br>
[![License CC](/assets/images/cc_logo.png){: img_center}](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr)
