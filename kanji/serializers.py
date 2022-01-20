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
    update = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()

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
            'delete',
        ]
    
    def get_update(self, obj):
        return reverse('kanji_update', args=(obj.pk,))

    def get_delete(self, obj):
        return reverse('kanji_delete', args=(obj.pk,))