from rest_framework import serializers
from .models import Kanji

class KanjiListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kanji
        fields = [
            'id',
            'kanji',
            'strokes',
            'meaning',
            'pronounciation',
            'reading',
            'grade',
        ]