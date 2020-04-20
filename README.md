- [About this website](#about-this-website)
- [Where to find stuff](#where-to-find-stuff)
  * [Where to find more advanced stuff](#where-to-find-more-advanced-stuff)
- [For beginners](#for-beginners)
- [How to create a new page](#how-to-create-a-new-page)
- [How to create a new post](#how-to-create-a-new-post)
- [Changing colours, finding old drafts, and site alerts](#changing-colours-finding-old-drafts-and-site-alerts)
- [Adding images](#adding-images)
- [More advanced changes](#more-advanced-changes)
    + [Automated translation link](#automated-translation-link)
    + [Contact form](#contact-form)
    + [Icons](#icons)
  * [How to change the youtube video and google maps directions](#how-to-change-the-youtube-video-and-google-maps-directions)
  * [Inserting images](#inserting-images)
  * [How to alter the site navigation (the links at the top)](#how-to-alter-the-site-navigation--the-links-at-the-top-)
  * [How to update the animations](#how-to-update-the-animations)
  * [UPDATING](#updating)
  * [Making even more advanced changes](#making-even-more-advanced-changes)
- [This site vs. Wordpress](#this-site-vs-wordpress)

# About this website
This GitHub hosts the Montreal Quaker meeting website using a code that converts simplified text into webpages. It should be possible to fairly easily add pages and blog posts, and even edit existing pages.

Some basics about how this website works:
* A [tutorial](https://help.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository) on how to change files on GitHub.
* Posts are in the simplified [Markdown](https://guides.github.com/features/mastering-markdown/) format. 
* If you'd like to see for yourself if Markdown is as intuitive as I think it is, feel free to make changes to [this Codepen](https://codepen.io/mtlquakers/pen/xxwGKPQ) (change anything on there, because you can't save your changes. No matter what you do, the next person will find it the way you did, so have fun).
* You don't need to memorize any of that, just look it up anytime you need it. Besides, there are really only four things you are likely to need:
  * Headers like so: ```### Your header-3 text here``` which will look like [this](#about-this-website)
  * Images like so: ```![](/assets/images/yourimage.png)```. See the codepen above.
  * Links like so: ```[your text describing Google](https://google.ca)```, which will look like this: [your text describing Google](https://google.ca)
  * _Format_ **text** ~~like~~ _this_ ```_Format_ **text** ~~like~~ _this_```
* Most of the pages and posts on this website are just plain text, just like Wordpress.
* If you'd like to play around on this site on Github, there is also a [sandbox page](https://mtl.summerhays.net/sandbox.html) where website administrators can test the changes they've made to see how they'd look on the final site. Or you can just modify any way you want a live copy of the website code [here] (https://github.com/mtlquakers/website-test), and see how it looks on the live version [there](https://mtlquakers.github.io/website-test/).
* If you're feeling very ambitious, you can also create a GitHub account, [fork this repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo), and change anything you want. Or the administrator can create draft "[branches](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)" of the website and test out how they look. Good luck doing that on WordPress.
* Finally, note this [site health page](https://mtl.summerhays.net/_pages/health.html), which will help detect problems with the automated translation system. More details appear on that page. You may also test to make sure [this blank page](https://mtl.summerhays.net/blank.html) is looking normal.

# Where to find stuff
The only files in the home directory that one will need to change are ```index.md``` (the English homepage), ```index-fr.md``` (the French homepage), and maybe ```404.md``` (the page showed if there is no matching page, for instance [this](https://mtl.summerhays.net/doesntexist.html)).

All the major pages, except for the index, are in the ```_pages``` directory. Posts (blog updates, found in the "news" part of the website) can be found in ```_posts```. See advanced tasks at the end of this README that explains, for instance, how to alter the site navigation (the links at the top of the page). It should be advanced but not too advanced.

This site is designed so that it's fairly easy to change text as needed. Minor modifications can be easily made to ```index.md``` or ```index-fr.md``` or to any of the ```.md``` (Markdown) files in ```_pages``` or ```_posts``` without any specialized knowledge, because this site uses a simplified markdown language to translate normal text into website readable HTML.

## Where to find more advanced stuff
A bunch of instructions for more advanced changes to the website appear near the end of this README. 

Just to give an idea of the basic structure, navigation (all the links at the top of the page) is in ```_includes/datanavigation.html``` but it shouldn't be necessary to touch that. The rest of the most advanced building blocks of this website are in ```_layouts``` and ```_includes```, whereas all the simple, changeable stuff are in .md files in ```_pages```, ```_posts```, or (slightly more advanced) in ```_data/navigation.yml```. Note that some things, especially in the ```_layout``` and ```_includes``` folders, are complicated in order to allow as much as possible to be done in easy markdown files.

Now let's get into how to do stuff.

# For beginners
Changing a website is intimidating -- there are many moving parts, many details. Anyone interested in making changes should set aside at least 15 minutes a day in the Codepen above, just writing text, making links, and seeing how it appears on the screen until they're confident that they have a basic understanding of how Markdown will appear. Markdown isn't too far removed from email, so perhaps this take won't take long. 

Next, no HTML is needed to make basic changes to the site, but it's good to know one thing: HTML works by putting "tags" around text to tell your browser how to render the text. Tags in HTML begin and end with these greater-than, lesser-than symbols ```<>```. For instance, text with ```<b>bold</b>``` around it will appear, well, <b>bold</b>. So a ```<b>``` means that the bold is beginning and a ```</b>``` with a slash before it means that that the bold is ending. You don't need to code in HTML to make changes, you just need to not feel intimidated by the bits of code that are on various pages. There is no need to change HTML; it's enough to avoid changing it by knowing how the tags work. Some pages also contain a language called Liquid; again, no knowledge of Liquid is required. It's enough to know that liquid begins and ends tags with either ```{{ }}``` or ```{% %}```.

Next, a beginner can make changes to the sandbox markdown file in ```_pages/sandbox.md```, and then load the sandbox page in their browser to see what has happened. When making changes in Github, remember that it saves everything you do. You can always go back and restore the previous version. Moreover, you'll see that as you try to save changes to a Github file, it asks you if you want to label changes you're making. If you're unsure, label them as ```unsure``` or something and you will be able to search for them later. But if you practice making changes in the codepen and then in the sandbox page, and things are looking good, most likely everything will be fine once pushed to the website. Perhaps it will take a couple of tries, but if you check your work, everything will be ok. It's not like our meeting website gets a billion hits a day -- if there are some bugs up there for a few minutes/hours/days/weeks, God will forgive us.

# How to create a new page
Create a new ```.md``` file in ```_pages```, write your content, and insert the "front matter" as explained here. For instance, for the COVID outbreak, I needed to create ```covid-19.md``` and ```covid-19-fr.md``` (feel free to open these files as you read along). I created a new file at  ```_pages/covid-19.md``` and then I wrote some text. Then I made a translated version here ```_pages/covid-19-fr.md```. Finally, in both files I set the "front matter". This is the most advanced part, but it should be accessible, and once you master it, you're good. I'll show you the code and then I'll tell you how it works. To the top of the file, above the text I'd written, I added:
```
---
layout: default
title: COVID-19 Updates
lang: en
trans: covid
permalink: /covid-19.html
---
```
For the French translation (```covid-19-fr.md```) I added
```
---
layout: default
title: Mises à jour COVID-19
lang: fr
trans: covid
permalink: /covid-19-fr.html
---
```
Here's what all this means:
```
--- (<--- this is required, it just means that the "front matter", a bit of code that instructs how to build the page, is beginning)
layout: default (<--- this just indicates how to layout the page. You should probably just put default)
title: COVID-19 Updates (<--- This is a title that will appear at the top and isn't required)
description: (<--- this would be a subtitle at the top of the page and is not required either)
lang: en   (<--- This tells the system which language you're writing in so the correct headers and footers appear on the page)
trans: covid   (<--- This a codeword that helps the system find a translation for this page, if one exists. If you didn't translate the page, don't bother with this.)
permalink: /covid-19.html  (<--- if you don't put a permalink, the default link will be _pages/covid-19.html)
---  (<--- This is required and just means that the front matter is ending)
```

For the automatic translation linking system (the link in the navigation between English and French content) to work properly, you just need to properly indicate in the "front matter" the ```lang:``` (```en``` or ```fr```) and make up a unique translation code (for instance, ```veryuniquecode```) and put it after ```trans: ``` like this: ```trans: veryuniquecode```. You can see above that I set one COVID page ```lang``` to ```fr``` and the other one to ```en``` and then I set both ```trans:``` to ```covid```. If you look on the website, a link will be created that will connect the two pages. If you have any doubts whether that code has already been used, then use something more unique or else look at the [site health page](https://mtl.summerhays.net/_pages/health.html), which lists all the current ```lang``` and ```trans``` codes in use for every single page and post.

# How to create a new post
To create a new post, create a file with filename ```_posts/YYYY-MM-DD-your-title.md```, that is, a file in the ```_posts``` directory. You need to include the correct "front matter" to a post, which is explained below. Once created, your new post will automatically appear in the "News" page with the post title and date extracted from the filename and the front matter. If you follow these instructions carefully, you should find this easy.

I'll show the front matter for a post and then explain it. For instance, consider ```2019-09-04-intro-to-Quakers.md``` from the ```_posts``` directory. The ```.md``` at the end indicates a markdown file that will be translated into HTML. Note how the date is formatted ```YYYY-MM-DD```. The rest of the title doesn't do anything except remind you what the post is about, although don't use any underscores (```_```) in the title. Now let's look at the "front matter" (most of these fields are optional):
```
--- 
layout: post
title: Introduction to Quakers Event
description: Monthly Events Introducing Quakers
tags: [introduction, learning]
lang: en
trans: intro2us
author: clerk
---
```
Now let's look at that again with my comments:
```
---       (<--- beginning of front matter)
layout: post         (<--- this tells the system what type of layout to give this page)
title: Introduction to Quakers Event      (<--- optional, this will be the title within the post)
description: Monthly Events Introducing Quakers  (<--- optional, this will be a subtitle within the post)
tags: [introduction, learning]  (<--- these are optional searchable post tags, people can search "learning" and find all the blog posts on our site announcing a learning event")
lang: en      (<--- It's best to specify which language the post is in ("en" or "fr"). This tells the system what language the website header and footer should be in (aka "Assemblée de Montréal" rather than "Montreal Quaker Meeting", although the default is English), and it also helps the automated system that helps the user navigate to the French or English translation of every page and post in the website.)
trans: intro2us     (<--- This is also super important for the automated system for finding translated pages. If this translation code matches another page or post that has the opposite language (en, fr), a link will automatically appear directing to the translation. If not, the link should not appear)
author: clerk  (<--- optionally, the author can be indicated and this will appear)
---  (<--- This is required and just means that the front matter is ending)
```
# Changing colours, finding old drafts, and site alerts

Otherwise, theme and site colors can be changed from ```_sass/colors.scss```  

Or see for instance the ```_drafts``` folder, where I keep updates that recur from year to year, such as the Greene Centre closing for Christmas.

You can turn alerts on and off in this website. There's no need to code HTML to do so. Open ```_config.yml``` and you will see ```alerts: ```, and instructions for how to change it. ```alerts: on``` turns on alerts for all pages. If you change this to ```alerts: off```, alerts will be turned off. ```alerts: some``` turns on alerts for the pages you specify. To turn on alerts only for the homepage and the page giving directions to the Sunday meeting, use this code: 

```
alerts: some
alert_pages:
  - page_trans: index
  - page_trans: directions
```

(The ```trans``` code for every page can be found at the [site health page](https://mtl.summerhays.net/_pages/health.html)).

To edit the alert text itself, go to ```_include/alert.md``` or for the French ```_include/alerte.md```. To change the alert color, go to ```_sass/colors.scss``` and change ```$alert-color:``` to anything you like.

# Adding images

To add an image, upload it on this site to ```assets/images``` (anywhere is fine but this keeps things organized), and then we can call images using ```![image_text](/assets/images/CYM.jpg)```

This gives:

![image_text](/assets/images/CYM.jpg)

# More advanced changes

### Automated translation link
This site uses an automatic search algorithm that checks the "front matter" (everything between the three dashes, you can see some examples above) in order to match up posts to their translation. So if you're having trouble with translations, make sure that each page and post has a unique "trans:" (translation) code.  If anything is going wrong, see the [site health page](https://mtl.summerhays.net/_pages/health.html) to see all the ```trans``` codes and ```lang``` codes for every page and post in the website.

### Contact form
This site uses formspree for the contact form. The code should be in ```_includes/contact.html```. There is some liquid code to get the right language text in the form.

### Icons
Some of the only HTML in the Markdown pages, just so you know, are FontAwesome icons, which are called like this ```<i class="fas fa-pencil-alt"></i>&nbsp;```. A user with very little technical expertise can nonetheless easily change these icons by going to the fontawesome [website](http://fontawesome.com/) and searching for icons. It is then possible to just copy the code that FontAwesome will tell you to use and insert it in any page. Again, this is possible in Wordpress but not really any easier. The user can choose between copying the code entirely from the FontAwesome website, or just replacing the part in the code that indicates which icon ```fa-pencil-alt```. Also, note that the ```&sbsp;``` is the HTML code for a non-breaking space, in case it's necessary to add more spacing on either side. Also, the user may notice that the [intro](https://mtl.summerhays.net/intro.html) page contains some icons that contain code like ```fa-fw``` (fixed-width icons so that the text aligns) and ```fa-lg``` which sets the icon-size to large. This is technical but equally technical as Wordpress.

## How to change the youtube video and google maps directions

The layout for these files is in the ```_includes``` folder, for instance: ```_includes/yt_embed.html``` and ```_includes/directions.html```. Just change the links in the file near the text ```src=``` and ```href=``` and you should be able to update these without too much trouble. For instance, the current YouTube link is ```https://www.youtube.com/embed/hxjH4sa2RFI?autoplay=1```. If we want to change it, just change the link, for instance to ```https://www.youtube.com/embed/nUxC_yr4RRs?autoplay=1```. 

It should be easy to add more media in files in the ```_includes``` folder. To call them up, or to choose which pages they appear on, look in ```_config.yml``` under ```media_pages```. For instance, the first lines say:
```
media_pages:
  - page_trans: index
    media: yt_embed.html
```
This means that on the homepage ([/index.html](https://mtl.summerhays.net/index.html)), yt_embed.html will appear full-width next to it. 

Note too that there is an image carousel in the sandbox page. That can be inserted in any page the same way as the YouTube videos. For instance, if we want it on the ```about``` page, just add these lines to ```config.yml``` under ```media_pages:```:
```
  - page_trans: about
   media: slideshow.html
```

The images and descriptions for the image carousel are in ```_data/slideshow.yml``` and it should be fairly straightforward to change the images and descriptions through that document. For instance the first lines are:

```
slideshow1:
- title: Our historic meetinghouse on de Maisonneuve
  titre-fr: Notre chez nous sur la rue Maisonneuve pendant les années 1970
  file: 1974 MaisW (1).JPG
```

```title``` and ```titre-fr``` means the image description that appears below the image in the slideshow. ```file``` refers to which image in ```assets/images``` that should appear in the slideshow.

## Inserting images

As mentioned in the markdown, images can be inserted via ```![](/link/to/image.jpg)```. That said, by default, images will appear on the left, and generally you will want to size and center them. The very, very advanced way to do this is to write your own CSS in ```/assets/css/style.css```, but I might as well mention the shortcuts I generated in making this site, namely a few classes you can add to the image. I'll show you an example.

Let's say you want to call up ```/assets/images/claires_painting.jpg```. If you want it centered and half-size, call the image using ```![Art retreat](/assets/images/claires_painting.jpg){: class="img_center50"}``` and you'll get:

![Art retreat](/assets/images/claires_painting.jpg)

(the image probably won't display properly on the readme, but will display properly on the sandbox page)

The classes you can choose from are ```{: class="img_center25"}```, ```{: class="img_center50"}```, ```{: class="img_center75"}```, and ```{: class="img_center100"}```. If you do simply ```{: class="img_center"}``` it will be a centered full-size image (not recommended as this will likely look bad on mobile). There are a few more classes in the CSS or you can search the internet for other options.

You can also see all the images available in the assets via [this page](https://mtl.summerhays.net/all_images.html).

## How to alter the site navigation (the links at the top)

In order to change how the site navigation works, it should be enough to add or subtract pages within the _data/navigation.yml file. I'll show the code and then explain it:

```
- title: News
  subtitle: The Latest Updates
  link: /posts.html
```
Here's what all that means:
```
- title: News (<--- This is the name of the link that will appear on the site)
  subtitle: The Latest Updates  (<--- This the text that appears if you hover over the link)
  link: /posts.html  (<--- This is the link, where the link directs the browser to go to)
```
The exact formatting is important to observe. Note how the first line has ```- title: ``` and the other items don't have a dash before them.

Let's look at another example. Again these are fairly simple, but following the format is important, or else it could break the site:

```
- title: Where We Meet
  subtitle: Where We Meet
  children:
    - childtitle: Sundays in Montreal
      childlink: /directions.html
    - childtitle: Midweek Meeting
      childlink: /midweek.html
- title: News
  subtitle: The Latest Updates
  link: /posts.html
```
Let's break this down. We've already looked at what the first two lines do.
```
- title: Where We Meet
  subtitle: Where We Meet  (<--- Note there is no "link" line, so clicking on "Where We Meet" does not direct the browser)
  children:  (<---- this indicates that this menu has a submenu, a downward arrow will be automatically added)
    - childtitle: Sundays in Montreal (<---- Note how the childtitle and child link follow the same formatting, but with four spaces before them)
      childlink: /directions.html (<---- the link for the submenu item)
    - childtitle: Midweek Meeting
      childlink: /midweek.html
- title: News  (<---- to end the submenu just go back to the normal way of laying out items)
  subtitle: The Latest Updates
  link: /posts.html
```

## How to update the animations

Seven animations have been defined in the CSS files: for the birds, a right landing (```land_right```), a left landing with a flip (```land_left_flip```), a roll in both from left (```roll_bird1```) and right (```roll_bird1```), and a swing-in (```swing-in1```). For the text, a focus-in entry (```focustext```) and a lighting and glow animation (```flicker_glow```) for the header text. It shouldn't be hard to control this via ```/config.yml```. For instance, right now, in that file, see these lines:

```
bird_left:
  - animation: land_left_flip
    trans: midweek
```

That means that the left bird in the wide-screen header (as opposed to the mobile header) will land from the left and then do a flip on the midweek meeting page in both French and English. 

There are similar animation controls for ```bird_left```, ```bird_right```, ```mobile_bird``` (the bird in the mobile version of the site), ```header_animation```, and ```mobile_header_animation```. Animations can be specified for any of those elements, using any of the seven animations (you can also add more using [animista](https://animista.net/)), to be used on any page (for now, you have to define it page by page).

# Making even more advanced changes

Also, if making even more advanced changes than anything contained in this README (e.g. to ```_layout``` or ```includes``` files), folks should fork this project, testing changes along the way, before updating a final version which may contain errors. 

# Updating the website version of Jekyll

Right now, Wordpress is constantly emailing me with updates to plugins, and even Wordpress itself. Every update could potentially break our site as it becomes incompatible with certain plugins. True, right now we pay someone to fix our messes for us. Meanwhile, hackers are throwing tons of password combinations at our Wordpress login page all the time, and who knows what could happen unless we update constantly. We also need constant backups. By comparison, let's see here, [Jekyll 4.0](https://jekyllrb.com/docs/history/) came out in August 2019, and as of April, 2020 has had zero updates; there seems to be maybe one minor security fix per year, half of them don't apply. Oh and Github backs up automatically for us.

Anyway, at some point, GitHub may send us an email saying that we need to update our website. The email will contain instructions and all that. Most updates will happen automatically without any intervention, because this site essentially uses zero plugins. But anyway, worst case scenario, if we need to do an update, it will involve editing the file ```Gemfile.lock``` and simply changing the numbers to whatever GitHub's email tells you to change them to. For instance, it might say to change ```jekyll (4.0.0)``` to ```jekyll (4.1.0)```. Do this and the update is complete. Try the website and see if anything is broken, but probably everything will be fine. If it's broken, perhaps just downgrade Jekyll (a.k.a. back to 4.0.0) see if someone technical can fix it by reading Jekyll's release notes. Worst case scenario, we'll probably be fine just ignoring the update or could pay someone to figure it out.

# This site vs. Wordpress
Making changes will take a bit of time to learn, but it's not tons more complicated than Wordpress, which does offer a graphical interface, but good luck finding what you want and then learning to operate it within the dozens of options and plugins. Also, in terms of multilingual functionality, Wordpress is pretty good but it is still work to get translations to link. I would need to teach the next person something; it is not instantly intuitive. Also, the final product isn't as good -- I haven't been able to figure out how to get the headers and all the menus to translate automatically. Basically, it would take specialized knowledge to change the architecture of the Wordpress site anyway, so why not just make a better structure within which to easily make the minor everyday changes we need. This structure also makes it easier to have a written README that anyone can access, anyone can learn anytime about how to make changes, and anyone can suggest improvements by proposing a pull request.

One thing to note is that nothing on Github is private. Anyone can view all the code for our site and all its previous versions. Not that there is anything private on our current site, and even if there were, private stuff would potentially be just as accessible. If there are any concerns about this, one way forward is to occasionally save the files we want public, delete the repository, and start fresh.
