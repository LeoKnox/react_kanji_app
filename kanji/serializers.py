from rest_framework import serializers
from .models import Kanji
from rest_framework.reverse import reverse

class KanjiListSerializer(serializers.ModelSerializer):
    absolute_url = serializers.SerializerMethodField()

    class Meta:
        model = Kanji
        fields = [
            'idkanji_dict',
            'kanji',
            'strokes',
            'meaning',
            'pronounciation',
            'reading',
            'grade',
            'absolute_url'
        ]
    
    def get_absolute_url(self, obj):
        return reverse('kanji_detail', args=(obj.pk,))

class KanjiDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kanji
        fields = [
            'idkanji_dict',
            'kanji',
            'strokes',
            'meaning',
            'pronounciation',
            'reading',
            'grade',
            'update',
        ]
    
    def get_update(self, obj):
        return reverse('kanji_update', args=(obj.pk,))