#!/bin/bash
# mkdir publications/{en,fr}/page(seq 1 15)
cd /home/david/jekyll/website/publications/fr

# echo ---\nindex: 1\n--- >> page1/index.html
for ((i=2;i<=40;i++));
do
  # your-unix-command-here
  filename="page$i/index.html"
  echo $filename
  if [ -e $filename ]; then
    echo "File $1 already exists!"
  else
  echo -e "---\nindex: $i\n---" > page$i/index.html
  fi
done
