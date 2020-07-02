---
title: <i class="fas fa-book-reader color-1-text"></i> Book club & Bible study <i class="fas fa-bible color-1-dark-text"></i>
lang: en
trans: book_bible
---
At our next meeting, we will be studying:

# {{ site.data.bookbible.verse.en }}

Right now, we are meeting on Thursdays at 3:30 pm. Next meeting:
## {{ site.data.bookbible.verse.en-date }}

Over the next few months we plan to read these books:
{% for each in site.data.bookbible.next %}
* {{ each.reading }}{% endfor %}

## Practical details
* We often simply read aloud as a group and then discuss
  * Usually no need to read in advance
* Our group seldom meets longer than 40 minutes
* This group discusses primarily in English

[Contact us](/contact) for more details
