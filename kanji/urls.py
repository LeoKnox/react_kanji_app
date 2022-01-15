from django.urls import path
from . import views

urlpatterns = [
    path('', views.KanjiListAPIView.as_view(), name='kanji_list'),
    path('<int:idkanji_dict>/', views.KanjiRetrieveAPIView.as_view(), name='kanji_detail'),
]