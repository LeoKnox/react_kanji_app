from rest_framework import serializers
from .models import Kanji

class KanjiListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kanjifields = [
            'id',
            'kanji',
            'strokes',
            'meaning',
            'pronounciation',
            'reading',
            'grade',
        ]