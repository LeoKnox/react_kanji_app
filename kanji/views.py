from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import KanjiListSerializer, KanjiDetailSerializer
from .models import Kanji

class KanjiListAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer

class KanjiGradeAPIView(generics.ListAPIView):
    serializer_class = KanjiListSerializer
    #queryset = Kanji.objects.all()
    #filter_backends = (filters.SearchFilter,)
    #search_fields = ("grade")
    def get_queryset(self):
        queryset = Kanji.objects.all()
        grade = self.request.query.params.get('grade', '')
        print("******" + grade)
        return queryset.filter(grade=grade)
    

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