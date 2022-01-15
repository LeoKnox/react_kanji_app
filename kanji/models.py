from django.db import models

class Kanji(models.Model):
    kanji = models.CharField(max_length=45, blank=True, null=True)
    strokes = models.IntegerField(blank=True, null=True)
    meaning = models.CharField(max_length=45, blank=True, null=True)
    pronounciation = models.CharField(max_length=45, blank=True, null=True)
    reading = models.CharField(max_length=45, blank=True, null=True)
    grade = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'kanji_dict'

    def __str__(self):
        return "{} - {}".format(self.kanji, self.meaning)