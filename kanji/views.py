from django.shortcuts import render
from rest_framework import generics
from .serializers import KanjiListSerializer, KanjiDetailSerializer, KanjiGradeSerializer
from .models import Kanji
from django_filters.rest_framework import DjangoFilterBackend

class KanjiListAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer

class KanjiGradeAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all().values_list('grade', flat=True).distinct()
    x = Kanji.objects.all().values_list('grade', flat=True).distinct().count()
    #x = Kanji.objects.all().values_list('grade', flat=True).distinct().count()
    print("*******" + str(x))
    serializer_class = KanjiGradeSerializer
    def get_quester(self):
        return (KanjiGradeSerializer(queryset, many=true).data)

'''
class KanjiGradeAPIView(generics.ListAPIView):
    serializer_class = KanjiListSerializer
    def get_queryset(self):
        queryset = Kanji.objects.all()
        grade = self.request.query_params.get('grade',)
        # http://127.0.0.1:8000/grade/?grade=2
        return queryset.filter(grade=grade)
 '''   

class KanjiRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "idkanji_dict"
    queryset = Kanji.objects.all()
    serializer_class = KanjiDetailSerializer

class KanjiCreateAPIView(generics.CreateAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiDetailSerializer

class KanjiRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "idkanji_dict"
    queryset = Kanji.objects.all()
    serializer_class = KanjiDetailSerializer

class KanjiDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "idkanji_dict"
    queryset = Kanji.objects.all()