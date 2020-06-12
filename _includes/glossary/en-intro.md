{% comment %}exclude_from_search: true{% endcomment %}
{% if page.trans == "glossary_fren" %}A French to English (and [English to French](/new_attender/glossary)){% else %}An English to French (and [French to English](/new_attender/glossary_fren)){% endif %} glossary of Quaker terms ({% if page.trans == "glossary_fren" %}{{ site.data.glossaire.size }}{% else %}{{ site.data.glossary.size }}{% endif %} entries), created by Ed Dommen and digitized by Simon Grant.

Click on a term below to view definitions and commentary. Or view a <button class="randombtn" onclick="randomEntry{% if page.trans == "glossary_fren" %}_fran{% endif %}()">random entry</button>

See [abbreviations](/glossary/abs), [translations of oft-quoted texts](/glossary/texts), [tips](/glossary/tips), and [acknowledgements](/glossary/thanks)

Return to [Information for new attenders](/new_attender)