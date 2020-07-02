
## {{ site.title }}

Sundays, 11 AM, Greene Centre<br>

[{{ site.address }}](/directions.html)

{% for each in site.data.navigation.footer-en %}[{{ each.title }}]({{ each.link }}){% unless forloop.last == true %} &nbsp;&nbsp;{% endunless %}{% endfor %}

<br>
[![Creative Commons License](/assets/images/cc_logo.png){: img_center}](http://creativecommons.org/licenses/by-nc-sa/4.0/)
