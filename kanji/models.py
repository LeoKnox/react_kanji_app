from django.db import models

class Kanji(models.Model):
    kanji = models.CharField(max_length=100, blank=False)
    strokes = models.IntegerField(default = 0)
    meaning = models.CharField(max_length=100, blank=True)
    pronounciation = models.CharField(max_length=100, blank=True)
    reading = models.CharField(max_length=100, blank=True)
    grade = models.IntegerField(default = 0)

    def __str__(self):
        return "{} - {}".format(self.kanji, self.meaning)