from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import KanjiListSerializer, KanjiDetailSerializer
from .models import Kanji

class KanjiListAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer

class KanjiGradeAPIView(generics.ListAPIView):
    queryset = Kanji.objects.all()
    serializer_class = KanjiListSerializer
    filter_backends = [filters.SearchFilter]
    search_fileds = ['grade']

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