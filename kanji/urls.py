from django.urls import path
from . import views

urlpatterns = [
    path('', views.KanjiListAPIView.as_view(), name='kanji_list'),
    path('<int:idkanji_dict>/', views.KanjiRetrieveAPIView.as_view(), name='kanji_detail'),
    path('create/', views.KanjiCreateAPIView.as_view(), name='kanji_create'),
    path('update/<int:idkanji_dict>/', views.KanjiRetrieveUpdateAPIView.as_view(), name='kanji_update'),
    path('delete/<int:idkanji_dict>/', views.KanjiDestroyAPIView.as_view(), name='kanji_delete'),
]