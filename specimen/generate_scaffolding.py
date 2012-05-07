#!/usr/bin/env python
# -*- coding: utf-8 -*-

from random import shuffle
import unicodedata
import codecs
import re

def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = re.sub('[^\w\s-]', '', value).strip().lower()
    return re.sub('[-\s]+', '-', value)

student_names = [u'Romain Marula',
 u'Ninon Tanga',
 u'Jaja',
 u'Vincent Duché',
 u'Camille Chatelaine et Alexandra Rio',
 u'David Vallance',
 u'Marie Frignet des Préaux',
 u'Anaïs Alauzen',
]

script = u"""<!DOCTYPE html>
<meta charset="utf-8">
<title>Write me a shadow. OSP @ ESAD Valence — %s</title>
<link rel="stylesheet" href="css/reset.css">
<script src="js/jquery-1.7.2.min.js"></script>
<script src="js/multiple-color-font.js"></script>

<h1 data-fonts="[["workshop-fonts/nom_du_fichier.otf","couleur"],["workshop-fonts/nom_du_fichier.otf","couleur"]]">Le nom de ton font</h1>
<h2>%s</h2>
<!--
tu peux ajouter encore plus de deux fonts, dans le list:
,["workshop-fonts/nom_du_fichier.otf","couleur"]
-->

<p>Ici tu peux mettre un explanation sur ta recette pour créeer le nouvel font</p>
"""

for student in student_names:
    f = codecs.open(slugify(student) + '.html', 'w', 'UTF-8')
    f.write(script % (student, student))
    f.close()
